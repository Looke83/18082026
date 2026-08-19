<?php
// Włączamy raportowanie błędów do testów
//ini_set('display_errors', '1');
//ini_set('display_startup_errors', '1');
//error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require __DIR__ . '/vendor/autoload.php';
} elseif (file_exists(__DIR__ . '/PHPMailer/src/Exception.php')) {
    require __DIR__ . '/PHPMailer/src/Exception.php';
    require __DIR__ . '/PHPMailer/src/PHPMailer.php';
    require __DIR__ . '/PHPMailer/src/SMTP.php';
} else {
    header("Content-Type: application/json; charset=UTF-8");
    http_response_code(500);
    echo json_encode(['message' => 'BŁĄD: Brak plików PHPMailer w katalogu api/']);
    exit;
}

header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Niedozwolona metoda requestu.']);
    exit;
}

// Honeypot
if (!empty($_POST['website'])) {
    http_response_code(200);
    echo json_encode(['message' => 'Dziękujemy za wiadomość!']);
    exit;
}

$name    = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
$email   = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$phone   = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_SPECIAL_CHARS);
$service = filter_input(INPUT_POST, 'service', FILTER_SANITIZE_SPECIAL_CHARS);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS);

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['message' => 'Wypełnij poprawnie wszystkie wymagane pola.']);
    exit;
}

$mail = new PHPMailer(true);

try {
    // PRZEŁĄCZENIE NA WYSYŁKĘ SYSTEMOWĄ (isMail)
    // Omija blokady portów SMTP i problemy z DNS w dhosting
    $mail->isMail();
    $mail->CharSet = 'UTF-8';

    // Nadawca MUSI być podany dokładnie tak samo jak skrzynka w dAdminie (Skrzynka funkcji mail)
    $mail->setFrom('www@way-it.pl', 'Formularz way-IT');
    $mail->addReplyTo($email, $name);
    $mail->addAddress('biuro@way-it.pl');

    $mail->isHTML(false);
    $mail->Subject = "Nowe zapytanie: " . ($service ?: 'Formularz ogólny') . " - {$name}";
    $mail->Body    = "Wpłynęło nowe zapytanie ze strony:\n\n" .
        "Imię i nazwisko: {$name}\n" .
        "E-mail: {$email}\n" .
        "Telefon: " . ($phone ?: 'Nie podano') . "\n" .
        "Usługa: " . ($service ?: 'Brak') . "\n\n" .
        "Treść:\n{$message}\n";

    $mail->send();
    http_response_code(200);
    echo json_encode(['message' => 'Dziękujemy! Odpowiemy w ciągu jednego dnia roboczego.']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['message' => 'Błąd wysyłki: ' . $mail->ErrorInfo]);
}
