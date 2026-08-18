<?php
declare(strict_types=1);

const ALLOWED_ORIGINS = [
    'https://estudioideamos.github.io',
    'https://propiedades.ideamos.ar',
];
const DESTINATION_EMAIL = 'hola@ideamos.com.ar';
const FROM_EMAIL = 'hola@ideamos.com.ar';
const RATE_LIMIT_SECONDS = 45;

function jsonResponse(int $status, array $payload): never
{
    http_response_code($status);
    header('Content-Type: application/json; charset=UTF-8');
    header('Cache-Control: no-store, max-age=0');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && in_array($origin, ALLOWED_ORIGINS, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Access-Control-Max-Age: 86400');

if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    if ($origin !== '' && !in_array($origin, ALLOWED_ORIGINS, true)) {
        jsonResponse(403, ['success' => false, 'message' => 'Origen no autorizado.']);
    }
    http_response_code(204);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    jsonResponse(405, ['success' => false, 'message' => 'Método no permitido.']);
}

if ($origin !== '' && !in_array($origin, ALLOWED_ORIGINS, true)) {
    jsonResponse(403, ['success' => false, 'message' => 'Origen no autorizado.']);
}

$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
$payload = $_POST;
if (str_contains(strtolower($contentType), 'application/json')) {
    $decoded = json_decode((string) file_get_contents('php://input'), true);
    if (is_array($decoded)) {
        $payload = $decoded;
    }
}

// Campo invisible antispam. Una persona real siempre lo deja vacío.
if (trim((string) ($payload['website'] ?? '')) !== '') {
    jsonResponse(200, ['success' => true]);
}

$clean = static function (mixed $value, int $maxLength): string {
    $value = trim(strip_tags((string) $value));
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';
    return mb_substr($value, 0, $maxLength, 'UTF-8');
};

$nombre = $clean($payload['nombre'] ?? '', 120);
$inmobiliaria = $clean($payload['inmobiliaria'] ?? '', 160);
$email = filter_var(trim((string) ($payload['email'] ?? '')), FILTER_VALIDATE_EMAIL);
$telefono = $clean($payload['telefono'] ?? '', 60);
$plan = $clean($payload['plan'] ?? 'Quiero que me asesoren', 120);
$mensaje = $clean($payload['mensaje'] ?? '', 3000);
$origen = $clean($payload['origen'] ?? '', 500);

if ($nombre === '' || $inmobiliaria === '' || $email === false || $telefono === '') {
    jsonResponse(422, [
        'success' => false,
        'message' => 'Completá nombre, inmobiliaria, email y teléfono.',
    ]);
}

// Límite simple por IP para impedir envíos automáticos repetidos.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'ideamos-contact-' . hash('sha256', $ip) . '.lock';
$lastRequest = is_file($rateFile) ? (int) file_get_contents($rateFile) : 0;
if ($lastRequest > 0 && (time() - $lastRequest) < RATE_LIMIT_SECONDS) {
    jsonResponse(429, [
        'success' => false,
        'message' => 'Esperá unos segundos antes de volver a enviar.',
    ]);
}
@file_put_contents($rateFile, (string) time(), LOCK_EX);

$safe = static fn (string $value): string => htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$subject = 'Nueva oportunidad · ' . $inmobiliaria . ' · ' . $nombre;
$encodedSubject = function_exists('mb_encode_mimeheader')
    ? mb_encode_mimeheader($subject, 'UTF-8', 'B', "\r\n")
    : $subject;

$safeNombre = $safe($nombre);
$safeInmobiliaria = $safe($inmobiliaria);
$safeEmail = $safe((string) $email);
$safeTelefono = $safe($telefono);
$safePlan = $safe($plan);
$safeMensaje = nl2br($safe($mensaje !== '' ? $mensaje : 'Sin mensaje adicional.'));
$safeOrigen = $safe($origen);
$phoneHref = preg_replace('/[^0-9+]/', '', $telefono) ?? '';
$replySubject = rawurlencode('Re: Consulta web · ' . $inmobiliaria);
$replyHref = 'mailto:' . $safeEmail . '?subject=' . $replySubject;

$body = '<!doctype html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
    . '<title>' . $safe($subject) . '</title></head>'
    . '<body style="margin:0;padding:0;background-color:#edf2ec;font-family:Arial,Helvetica,sans-serif;color:#102a20">'
    . '<div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all">Nueva consulta de ' . $safeNombre . ' para ' . $safeInmobiliaria . '.</div>'
    . '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#edf2ec" style="width:100%;background:#edf2ec">'
    . '<tr><td align="center" style="padding:28px 12px">'
    . '<table role="presentation" width="680" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" style="width:100%;max-width:680px;background:#ffffff;border:1px solid #d7e1d8;border-radius:24px;overflow:hidden">'
    . '<tr><td bgcolor="#d9ff63" style="height:8px;line-height:8px;font-size:0">&nbsp;</td></tr>'
    . '<tr><td bgcolor="#073b2a" style="padding:28px 34px 30px;background:#073b2a">'
    . '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"><tr>'
    . '<td valign="middle"><div style="font-size:24px;line-height:26px;font-weight:700;letter-spacing:-1px;color:#ffffff">ideamos</div>'
    . '<div style="margin-top:5px;font-size:10px;line-height:14px;font-weight:700;letter-spacing:2px;color:#d9ff63">PROPIEDADES</div></td>'
    . '<td align="right" valign="middle"><span style="display:inline-block;padding:9px 12px;border:1px solid #416454;border-radius:999px;font-size:9px;line-height:11px;font-weight:700;letter-spacing:1.4px;color:#ffffff">NUEVA CONSULTA</span></td>'
    . '</tr></table>'
    . '<div style="margin-top:34px;font-family:Georgia,Times New Roman,serif;font-size:38px;line-height:42px;font-weight:400;letter-spacing:-1px;color:#ffffff">Una nueva oportunidad<br>para conversar.</div>'
    . '<div style="margin-top:14px;max-width:470px;font-size:14px;line-height:22px;color:#c9d7cf">La consulta llegó desde la web con toda la información necesaria para responder con contexto.</div>'
    . '</td></tr>'
    . '<tr><td style="padding:30px 34px 12px">'
    . '<div style="font-size:10px;line-height:14px;font-weight:700;letter-spacing:1.6px;color:#61756a">CONTACTO</div>'
    . '<div style="margin-top:8px;font-family:Georgia,Times New Roman,serif;font-size:29px;line-height:34px;color:#102a20">' . $safeNombre . '</div>'
    . '<div style="margin-top:4px;font-size:15px;line-height:22px;color:#5d7066">' . $safeInmobiliaria . '</div>'
    . '</td></tr>'
    . '<tr><td style="padding:10px 34px 0">'
    . '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:separate;border-spacing:0">'
    . '<tr><td width="50%" valign="top" style="padding:18px 18px 18px 0;border-top:1px solid #dfe6e0">'
    . '<div style="font-size:9px;line-height:13px;font-weight:700;letter-spacing:1.4px;color:#738179">EMAIL</div>'
    . '<a href="mailto:' . $safeEmail . '" style="display:inline-block;margin-top:7px;font-size:14px;line-height:20px;font-weight:700;color:#0b4a34;text-decoration:none">' . $safeEmail . '</a></td>'
    . '<td width="50%" valign="top" style="padding:18px 0 18px 18px;border-top:1px solid #dfe6e0">'
    . '<div style="font-size:9px;line-height:13px;font-weight:700;letter-spacing:1.4px;color:#738179">TELÉFONO</div>'
    . '<a href="tel:' . $safe($phoneHref) . '" style="display:inline-block;margin-top:7px;font-size:14px;line-height:20px;font-weight:700;color:#0b4a34;text-decoration:none">' . $safeTelefono . '</a></td></tr>'
    . '<tr><td colspan="2" style="padding:18px 0;border-top:1px solid #dfe6e0">'
    . '<div style="font-size:9px;line-height:13px;font-weight:700;letter-spacing:1.4px;color:#738179">INTERÉS</div>'
    . '<div style="margin-top:7px;font-size:15px;line-height:22px;color:#102a20">' . $safePlan . '</div></td></tr>'
    . '</table></td></tr>'
    . '<tr><td style="padding:10px 34px 8px">'
    . '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#f3f6f1" style="background:#f3f6f1;border:1px solid #dfe7df;border-radius:16px">'
    . '<tr><td style="padding:22px 24px"><div style="font-size:9px;line-height:13px;font-weight:700;letter-spacing:1.4px;color:#61756a">MENSAJE</div>'
    . '<div style="margin-top:10px;font-family:Georgia,Times New Roman,serif;font-size:19px;line-height:29px;color:#17382a">' . $safeMensaje . '</div></td></tr></table>'
    . '</td></tr>'
    . '<tr><td style="padding:22px 34px 32px">'
    . '<table role="presentation" cellspacing="0" cellpadding="0" border="0"><tr>'
    . '<td bgcolor="#d9ff63" style="border-radius:999px"><a href="' . $replyHref . '" style="display:inline-block;padding:14px 22px;font-size:13px;line-height:16px;font-weight:700;color:#073b2a;text-decoration:none">Responder por email &nbsp;↗</a></td>'
    . ($phoneHref !== '' ? '<td style="padding-left:10px"><a href="tel:' . $safe($phoneHref) . '" style="display:inline-block;padding:13px 19px;border:1px solid #c9d5cc;border-radius:999px;font-size:13px;line-height:16px;font-weight:700;color:#174532;text-decoration:none">Llamar</a></td>' : '')
    . '</tr></table></td></tr>'
    . '<tr><td bgcolor="#f5f7f3" style="padding:18px 34px;background:#f5f7f3;border-top:1px solid #dfe6e0">'
    . '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"><tr>'
    . '<td style="font-size:10px;line-height:15px;color:#748279">IDEAMOS PROPIEDADES · CONSULTA RECIBIDA DESDE LA WEB</td>'
    . ($safeOrigen !== '' ? '<td align="right" style="font-size:10px;line-height:15px;color:#748279"><a href="' . $safeOrigen . '" style="color:#315d48;text-decoration:none">Ver origen ↗</a></td>' : '')
    . '</tr></table></td></tr>'
    . '</table></td></tr></table></body></html>';

$requestId = date('Ymd-His') . '-' . substr(hash('sha256', $nombre . $email . microtime(true)), 0, 10);
$body = preg_replace('/></', ">\r\n<", $body) ?? $body;
// Los clientes de escritorio (especialmente Outlook para Windows) pueden
// interpretar de forma inconsistente los caracteres de 8 bits aunque el
// mensaje declare UTF-8. Convertimos los caracteres visibles a entidades HTML
// y transportamos todo el documento en base64 para que llegue intacto.
if (function_exists('mb_encode_numericentity')) {
    $body = mb_encode_numericentity(
        $body,
        [0x80, 0x10FFFF, 0, 0x1FFFFF],
        'UTF-8'
    );
}
$mailBody = chunk_split(base64_encode($body), 76, "\r\n");

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    'Content-Language: es-AR',
    'From: Ideamos Propiedades <' . FROM_EMAIL . '>',
    'Reply-To: ' . $nombre . ' <' . (string) $email . '>',
    'Message-ID: <contacto-' . $requestId . '@ideamos.com.ar>',
    'X-Ideamos-Request-ID: ' . $requestId,
    'X-Mailer: PHP/' . PHP_VERSION,
];

$sent = mail(
    DESTINATION_EMAIL,
    $encodedSubject,
    $mailBody,
    implode("\r\n", $headers),
    '-f' . FROM_EMAIL
);

if (!$sent) {
    jsonResponse(500, [
        'success' => false,
        'message' => 'El servidor no pudo entregar el correo.',
    ]);
}

jsonResponse(200, [
    'success' => true,
    'message' => 'Consulta enviada correctamente.',
    'id' => $requestId,
]);
