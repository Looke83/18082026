<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Jeśli na serwerze nie instalujesz Composera, wczytamy PHPMailer ręcznie.
// Założenie: biblioteka PHPMailer znajduje się w katalogu PHPMailer/src w tym samym folderze.
if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require __DIR__ . '/vendor/autoload.php';
} elseif (file_exists(__DIR__ . '/PHPMailer/src/Exception.php')) {
    require __DIR__ . '/PHPMailer/src/Exception.php';
    require __DIR__ . '/PHPMailer/src/PHPMailer.php';
    require __DIR__ . '/PHPMailer/src/SMTP.php';
}

header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Niedozwolona metoda requestu.']);
    exit;
}

// 1. Zabezpieczenie Honeypot
if (!empty($_POST['website'])) {
    http_response_code(200);
    echo json_encode(['message' => 'Dziękujemy za wiadomość!']);
    exit;
}

// 2. Pobranie i oczyszczenie danych
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

// 3. Konfiguracja konta dhosting.pl
$smtpHost     = 'smtp.dpoczta.pl';            // Wpisz nazwę swojego serwera (np. s12.dhosting.pl) lub domeny
$smtpUsername = 'www@way-it.pl';    // Twoja skrzynka utwozona w dAdminie
$smtpPassword = '$seB7@Sk5J?j7';  // Hasło do tej skrzynki
$recipient    = 'biuro@way-it.pl';      // Gdzie ma trafiać wiadomość

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = $smtpHost;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUsername;
    $mail->Password   = $smtpPassword;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Port 587
    $mail->Port       = 587;
    $mail->CharSet    = 'UTF-8';

    // Nagłówki wiadomości
    $mail->setFrom($smtpUsername, 'Formularz Serwisu WWW');
    $mail->addReplyTo($email, $name);
    $mail->addAddress($recipient);

    $mail->isHTML(false);
    $mail->Subject = "Nowe zapytanie: " . ($service ?: 'Formularz ogólny') . " - {$name}";

    $mail->Body    = "Wpłynęło nowe zapytanie ze strony internetowej:\n\n" .
        "Imię i nazwisko: {$name}\n" .
        "E-mail: {$email}\n" .
        "Telefon: " . ($phone ?: 'Nie podano') . "\n" .
        "Wybrana usługa: " . ($service ?: 'Brak') . "\n\n" .
        "Treść wiadomości:\n" .
        "--------------------------------------------------\n" .
        "{$message}\n" .
        "--------------------------------------------------\n";

    $mail->send();
    http_response_code(200);
    echo json_encode(['message' => 'Dziękujemy! Odpowiemy w ciągu jednego dnia roboczego.']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['message' => 'Błąd podczas wysyłania wiadomości. Spróbuj ponownie za chwilę.']);
}
