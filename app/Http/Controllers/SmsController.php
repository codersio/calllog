<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SmsController extends Controller
{
    public function sendWhatsAppMessage()
    {
        $chat = [
            "secret" => "3c1d2c5c4ce14c120dc4f668460ea68fb3bcdd1c", // your API secret from (Tools -> API Keys) page
            "account" => "1730203027060ad92489947d410d897474079c14776720cd93ce9f4",
            "recipient" => "+919062499838",
            "type" => "text",
            "message" => "Hello World!"
        ];

        $cURL = curl_init("https://app.bulkwise.in/api/send/whatsapp");
        curl_setopt($cURL, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($cURL, CURLOPT_POSTFIELDS, $chat);
        $response = curl_exec($cURL);
        curl_close($cURL);

        $result = json_decode($response, true);

        // do something with response
        print_r($result);
    }
}
