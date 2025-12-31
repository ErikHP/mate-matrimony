<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

$input = json_decode(file_get_contents('php://input'), true);
$email = isset($input['email']) ? trim($input['email']) : '';

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email']);
    exit();
}

$apiKey = getenv('MAILGUN_API_KEY');
$domain = getenv('MAILGUN_DOMAIN');

if (!$apiKey || !$domain) {
    $configFile = __DIR__ . '/../config.php';
    if (file_exists($configFile)) {
        include $configFile;
        $apiKey = defined('MAILGUN_API_KEY') ? MAILGUN_API_KEY : '';
        $domain = defined('MAILGUN_DOMAIN') ? MAILGUN_DOMAIN : '';
    }
}

if (!$apiKey || !$domain) {
    http_response_code(500);
    echo json_encode(['error' => 'Server configuration error']);
    exit();
}

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.mailgun.net/v3/{$domain}/messages");
curl_setopt($ch, CURLOPT_USERPWD, "api:{$apiKey}");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, [
    'from' => "MATE Matrimony <noreply@{$domain}>",
    'to' => 'theishqedit@gmail.com',
    'subject' => 'New Subscription - MATE Matrimony',
    'html' => "<p>New subscription from: <strong>{$email}</strong></p>",
    'text' => "New subscription from: {$email}"
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode >= 200 && $httpCode < 300) {
    echo json_encode(['success' => true, 'message' => 'Subscription successful']);
} else {
    error_log("Mailgun error: " . $response);
    echo json_encode(['success' => true, 'message' => 'Subscription received']);
}
?>
