<?php

namespace App\Services;

class WhatsAppService
{
    private $apiSecret;
    private $account;

    public function __construct()
    {
        $this->apiSecret = "3c1d2c5c4ce14c120dc4f668460ea68fb3bcdd1c"; // Move to .env in production
        $this->account = "1730203027060ad92489947d410d897474079c14776720cd93ce9f4"; // Move to .env in production
    }

    public function sendMessage($recipient, $message)
    {
        $chat = [
            "secret" => $this->apiSecret,
            "account" => $this->account,
            "recipient" => $recipient,
            "type" => "text",
            "message" => $message
        ];

        $cURL = curl_init("https://app.bulkwise.in/api/send/whatsapp");
        curl_setopt($cURL, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($cURL, CURLOPT_POSTFIELDS, $chat);
        $response = curl_exec($cURL);
        curl_close($cURL);

        return json_decode($response, true);
    }
}
