<?php
// Handles the contact form on /kontakt.

declare(strict_types=1);

const RECIPIENT = 'motioner@cssektionen.se';
// Must be on our own domain or the mail is flagged as spam.
const SENDER = 'no-reply@cssektionen.se';
const RETURN_URL = '/kontakt';

// Must match the options in src/pages/Contact.tsx.
const PROGRAMS = [
    'Civiling. Interaktion & Design',
    'Civiling. Datavetenskap',
    'Kandidatprogrammet i Datavetenskap',
    'Masterprogrammet i Datavetenskap',
    'Masterprogrammet i AI',
];
const TOPICS = [
    'Motion till styrelsemöte',
    'Fråga eller fundering',
    'Förslag',
    'Annat',
];

function redirect(string $status): never
{
    header('Location: ' . RETURN_URL . '?formular=' . $status . '#motioner', true, 303);
    exit;
}

// Strips line breaks to prevent header injection.
function single_line(string $value): string
{
    return trim(preg_replace('/[\r\n]+/', ' ', $value) ?? '');
}

function field(string $name): string
{
    $value = $_POST[$name] ?? '';
    return is_string($value) ? trim($value) : '';
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ' . RETURN_URL, true, 303);
    exit;
}

// Honeypot field, only bots fill it in.
if (field('website') !== '') {
    redirect('skickat');
}

$name = single_line(field('name'));
$email = single_line(field('email'));
$program = field('program');
$topic = field('topic');
$message = field('message');

$valid = $name !== '' && mb_strlen($name) <= 100
    && filter_var($email, FILTER_VALIDATE_EMAIL) !== false && mb_strlen($email) <= 254
    && in_array($program, PROGRAMS, true)
    && in_array($topic, TOPICS, true)
    && $message !== '' && mb_strlen($message) <= 5000;

if (!$valid) {
    redirect('fel');
}

$subject = '=?UTF-8?B?' . base64_encode("[Hemsidan] $topic från $name") . '?=';

$body = "Namn: $name\n"
    . "Mejladress: $email\n"
    . "Program: $program\n"
    . "Ärende: $topic\n"
    . "\n"
    . str_replace(["\r\n", "\r"], "\n", $message) . "\n";

$headers = [
    'From' => 'CS-sektionens hemsida <' . SENDER . '>',
    'Reply-To' => $email,
    'MIME-Version' => '1.0',
    'Content-Type' => 'text/plain; charset=UTF-8',
    'Content-Transfer-Encoding' => '8bit',
];

$sent = mail(RECIPIENT, $subject, $body, $headers, '-f' . SENDER);

redirect($sent ? 'skickat' : 'fel');
