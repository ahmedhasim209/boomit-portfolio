<?php
header("Access-Control-Allow-Origin: https://whitesmoke-curlew-319885.hostingersite.com/"); // replace with your domain
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    // Sanitize all fields
    $company_name    = htmlspecialchars($data['company_name'] ?? '');
    $industry        = htmlspecialchars($data['industry'] ?? '');
    $website         = htmlspecialchars($data['website'] ?? '');
    $founded         = htmlspecialchars($data['founded'] ?? '');
    $social_media    = htmlspecialchars($data['social_media'] ?? '');
    $instagram       = htmlspecialchars($data['instagram'] ?? '');
    $contact_person  = htmlspecialchars($data['contact_person'] ?? '');
    $email           = filter_var($data['email'] ?? '', FILTER_VALIDATE_EMAIL);
    $phone           = htmlspecialchars($data['phone'] ?? '');
    $platforms       = htmlspecialchars($data['platforms'] ?? '');
    $tov             = htmlspecialchars($data['tov'] ?? '');
    $persona         = htmlspecialchars($data['persona'] ?? '');
    $audience        = htmlspecialchars($data['audience'] ?? '');
    $contact_time    = htmlspecialchars($data['contact_time'] ?? '');
    $services        = htmlspecialchars($data['services'] ?? '');
    $media_production = htmlspecialchars($data['media_production'] ?? '');
    $budget          = htmlspecialchars($data['budget'] ?? '');

    if ($company_name && $email && $contact_person) {

        $to = "ahmmed.hashim0209@gmail.com"; // replace with your email
        $subject = "New Brief from $company_name";

        $message = "NEW CLIENT BRIEF\n";
        $message .= "================\n\n";
        $message .= "Company Name:      $company_name\n";
        $message .= "Industry:          $industry\n";
        $message .= "Website:           $website\n";
        $message .= "Founded:           $founded\n";
        $message .= "Social Media:      $social_media\n";
        $message .= "Instagram:         $instagram\n\n";
        $message .= "Contact Person:    $contact_person\n";
        $message .= "Email:             $email\n";
        $message .= "Phone:             $phone\n";
        $message .= "Preferred Time:    $contact_time\n\n";
        $message .= "Active Platforms:  $platforms\n";
        $message .= "Tone of Voice:     $tov\n";
        $message .= "Persona:           $persona\n";
        $message .= "Audience:          $audience\n\n";
        $message .= "Services:          $services\n";
        $message .= "Media Production:  $media_production\n";
        $message .= "Budget:            $budget\n";

        $headers = "From: ahmed.hashim0209@gmail.com\r\n"; // replace with your domain email
        $headers .= "Reply-To: $email\r\n";

        if (mail($to, $subject, $message, $headers)) {
            echo json_encode(["success" => true]);
        } else {
            http_response_code(500);
            echo json_encode(["success" => false, "error" => "Mail sending failed."]);
        }

    } else {
        http_response_code(400);
        echo json_encode(["success" => false, "error" => "Missing required fields."]);
    }
}
?>