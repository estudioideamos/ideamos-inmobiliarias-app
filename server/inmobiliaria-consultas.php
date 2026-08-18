<?php
declare(strict_types=1);

const FROM_EMAIL = 'hola@ideamos.com.ar';
const MAX_RECIPIENTS = 5;

function respond(int $status, array $payload): never
{
    http_response_code($status);
    header('Content-Type: application/json; charset=UTF-8');
    header('Cache-Control: no-store, max-age=0');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function clean(mixed $value, int $maxLength = 500): string
{
    $value = trim(strip_tags((string) $value));
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';
    $value = preg_replace('/[\r\n]+/u', ' ', $value) ?? '';
    return mb_substr($value, 0, $maxLength, 'UTF-8');
}

function safe(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, ['ok' => false, 'message' => 'Método no permitido.']);
}

$configPath = __DIR__ . DIRECTORY_SEPARATOR . 'inmobiliaria-consultas.config.php';
$config = is_file($configPath) ? require $configPath : [];
$expectedToken = (string) (getenv('IDEAMOS_INQUIRY_TOKEN') ?: ($config['token'] ?? ''));
$receivedToken = clean($_SERVER['HTTP_X_IDEAMOS_TOKEN'] ?? '', 240);

if ($expectedToken === '' || $receivedToken === '' || !hash_equals($expectedToken, $receivedToken)) {
    respond(401, ['ok' => false, 'message' => 'Acceso no autorizado.']);
}

$payload = json_decode((string) file_get_contents('php://input'), true);
if (!is_array($payload)) {
    respond(400, ['ok' => false, 'message' => 'Solicitud inválida.']);
}

$recipients = array_values(array_unique(array_filter(array_map(
    static fn (mixed $value): string => (string) filter_var(trim((string) $value), FILTER_VALIDATE_EMAIL),
    is_array($payload['recipients'] ?? null) ? $payload['recipients'] : []
))));

if ($recipients === [] || count($recipients) > MAX_RECIPIENTS) {
    respond(422, ['ok' => false, 'message' => 'Destinatarios inválidos.']);
}

$kind = clean($payload['kind'] ?? 'contact', 24);
$kind = in_array($kind, ['contact', 'valuation', 'property'], true) ? $kind : 'contact';
$leadId = clean($payload['leadId'] ?? '', 80);
$name = clean($payload['name'] ?? '', 120);
$agencyName = clean($payload['agencyName'] ?? '', 160);
$emailInput = trim((string) ($payload['email'] ?? ''));
$email = $emailInput === '' ? '' : filter_var($emailInput, FILTER_VALIDATE_EMAIL);
$phone = clean($payload['phone'] ?? '', 60);
$message = clean($payload['message'] ?? '', 4000);
$sourceUrl = filter_var(trim((string) ($payload['sourceUrl'] ?? '')), FILTER_VALIDATE_URL);
$context = is_array($payload['context'] ?? null) ? $payload['context'] : [];

if ($name === '' || $email === false || ($email === '' && $phone === '')) {
    respond(422, ['ok' => false, 'message' => 'Faltan datos obligatorios.']);
}

$labels = [
    'contact' => ['Consulta general', 'Nueva consulta desde la web'],
    'valuation' => ['Solicitud de tasación', 'Nueva solicitud de tasación'],
    'property' => ['Consulta por propiedad', 'Nueva consulta por una propiedad'],
];
[$badge, $headline] = $labels[$kind];
$subject = $headline . ' · ' . ($agencyName !== '' ? $agencyName : $name);
$encodedSubject = function_exists('mb_encode_mimeheader')
    ? mb_encode_mimeheader($subject, 'UTF-8', 'B', "\r\n")
    : $subject;

$details = '';
foreach ($context as $key => $value) {
    $label = clean((string) $key, 80);
    $display = is_scalar($value) || $value === null
        ? clean((string) $value, 800)
        : clean((string) json_encode($value, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES), 800);
    if ($label === '' || $display === '') {
        continue;
    }
    $details .= '<tr><td style="padding:13px 0;border-top:1px solid #dce5dd;color:#66786e;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;width:34%">'
        . safe($label) . '</td><td style="padding:13px 0;border-top:1px solid #dce5dd;color:#113527;font-size:14px;line-height:21px">'
        . safe($display) . '</td></tr>';
}

$safeName = safe($name);
$safeAgency = safe($agencyName !== '' ? $agencyName : 'Sin inmobiliaria informada');
$safeEmail = safe($email !== '' ? (string) $email : 'No informado');
$safePhone = safe($phone);
$safeMessage = nl2br(safe($message !== '' ? $message : 'Sin mensaje adicional.'));
$safeBadge = safe(mb_strtoupper($badge, 'UTF-8'));
$safeHeadline = safe($headline);
$phoneHref = safe(preg_replace('/[^0-9+]/', '', $phone) ?? '');

$body = '<!doctype html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>'
    . '<body style="margin:0;background:#edf2ec;font-family:Arial,Helvetica,sans-serif;color:#102a20">'
    . '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#edf2ec"><tr><td align="center" style="padding:30px 12px">'
    . '<table role="presentation" width="680" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" style="width:100%;max-width:680px;background:#fff;border:1px solid #d4dfd7;border-radius:24px;overflow:hidden">'
    . '<tr><td bgcolor="#d9ff63" style="height:8px;font-size:0">&nbsp;</td></tr>'
    . '<tr><td bgcolor="#073b2a" style="padding:30px 34px">'
    . '<table role="presentation" width="100%"><tr><td><div style="font-size:25px;font-weight:700;letter-spacing:-1px;color:#fff">ideamos</div><div style="margin-top:5px;font-size:10px;font-weight:700;letter-spacing:2px;color:#d9ff63">PROPIEDADES</div></td>'
    . '<td align="right"><span style="display:inline-block;padding:9px 13px;border:1px solid #496b5c;border-radius:999px;font-size:9px;font-weight:700;letter-spacing:1.3px;color:#fff">' . $safeBadge . '</span></td></tr></table>'
    . '<div style="margin-top:34px;font-family:Georgia,Times New Roman,serif;font-size:38px;line-height:43px;color:#fff">' . $safeHeadline . '</div>'
    . '<div style="margin-top:12px;font-size:14px;line-height:22px;color:#c7d5cd">La oportunidad ya quedó guardada en el panel y lista para responder con contexto.</div></td></tr>'
    . '<tr><td style="padding:30px 34px 12px"><div style="font-size:10px;font-weight:700;letter-spacing:1.5px;color:#687a70">CONTACTO</div>'
    . '<div style="margin-top:8px;font-family:Georgia,Times New Roman,serif;font-size:29px;color:#102a20">' . $safeName . '</div><div style="margin-top:5px;color:#5c6f65;font-size:15px">' . $safeAgency . '</div></td></tr>'
    . '<tr><td style="padding:8px 34px"><table role="presentation" width="100%"><tr><td width="50%" style="padding:16px 16px 16px 0;border-top:1px solid #dce5dd"><div style="font-size:9px;font-weight:700;letter-spacing:1.3px;color:#718078">EMAIL</div>' . ($email !== '' ? '<a href="mailto:' . $safeEmail . '" style="display:inline-block;margin-top:7px;color:#0b4a34;font-size:14px;font-weight:700;text-decoration:none">' . $safeEmail . '</a>' : '<span style="display:inline-block;margin-top:7px;color:#5c6f65;font-size:14px">No informado</span>') . '</td>'
    . '<td width="50%" style="padding:16px 0 16px 16px;border-top:1px solid #dce5dd"><div style="font-size:9px;font-weight:700;letter-spacing:1.3px;color:#718078">TELÉFONO</div><a href="tel:' . $phoneHref . '" style="display:inline-block;margin-top:7px;color:#0b4a34;font-size:14px;font-weight:700;text-decoration:none">' . $safePhone . '</a></td></tr>'
    . $details . '</table></td></tr>'
    . '<tr><td style="padding:14px 34px 10px"><table role="presentation" width="100%" bgcolor="#f2f6f1" style="background:#f2f6f1;border:1px solid #dce5dd;border-radius:16px"><tr><td style="padding:22px 24px"><div style="font-size:9px;font-weight:700;letter-spacing:1.3px;color:#687a70">MENSAJE</div><div style="margin-top:10px;font-family:Georgia,Times New Roman,serif;font-size:19px;line-height:29px;color:#17382a">' . $safeMessage . '</div></td></tr></table></td></tr>'
    . '<tr><td style="padding:20px 34px 30px"><table role="presentation"><tr>' . ($email !== '' ? '<td bgcolor="#d9ff63" style="border-radius:999px"><a href="mailto:' . $safeEmail . '" style="display:inline-block;padding:14px 22px;color:#073b2a;font-size:13px;font-weight:700;text-decoration:none">Responder por email &nbsp;↗</a></td>' : '') . ($phone !== '' ? '<td style="padding-left:10px"><a href="tel:' . $phoneHref . '" style="display:inline-block;padding:13px 19px;border:1px solid #cad6cd;border-radius:999px;color:#174532;font-size:13px;font-weight:700;text-decoration:none">Llamar</a></td>' : '') . '</tr></table></td></tr>'
    . '<tr><td bgcolor="#f5f7f3" style="padding:17px 34px;border-top:1px solid #dce5dd;color:#748279;font-size:10px">IDEAMOS PROPIEDADES · CONSULTA #' . safe($leadId) . ($sourceUrl !== false ? ' · <a href="' . safe((string) $sourceUrl) . '" style="color:#315d48;text-decoration:none">Ver origen ↗</a>' : '') . '</td></tr>'
    . '</table></td></tr></table></body></html>';

$requestId = date('Ymd-His') . '-' . substr(hash('sha256', $name . $email . microtime(true)), 0, 10);
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    'Content-Language: es-AR',
    'From: Ideamos Propiedades <' . FROM_EMAIL . '>',
    'Reply-To: ' . ($email !== '' ? $name . ' <' . (string) $email . '>' : FROM_EMAIL),
    'Message-ID: <inquiry-' . $requestId . '@ideamos.com.ar>',
    'X-Ideamos-Request-ID: ' . $requestId,
];
foreach (array_slice($recipients, 1) as $recipient) {
    $headers[] = 'Bcc: ' . $recipient;
}

// Protege acentos, eñes y símbolos frente a clientes como Outlook para Windows.
// Las entidades HTML dejan el contenido visible en ASCII y base64 evita que el
// servidor de correo vuelva a interpretar los bytes durante el transporte.
if (function_exists('mb_encode_numericentity')) {
    $body = mb_encode_numericentity(
        $body,
        [0x80, 0x10FFFF, 0, 0x1FFFFF],
        'UTF-8'
    );
}
$mailBody = chunk_split(base64_encode($body), 76, "\r\n");
$headers[] = 'X-Mailer: PHP/' . PHP_VERSION;

$sent = mail($recipients[0], $encodedSubject, $mailBody, implode("\r\n", $headers), '-f' . FROM_EMAIL);
if (!$sent) {
    respond(502, ['ok' => false, 'message' => 'El servidor de correo no pudo aceptar el mensaje.']);
}

respond(200, ['ok' => true, 'id' => $requestId]);
