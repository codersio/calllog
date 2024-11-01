<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Amc extends Model
{
    use HasFactory;
    protected $fillable = [
        'amc_no',
        'contact_person',
        'date',
        'customer_id',
        'mobile_no',
        'assigned_to',
        'details',
        'email',
        'interval',
        'attachments',
        'no_of_service',
        'billing_address',
        'services',
        'service_details',
        'amc_details',
    ];

    protected $casts = [
        'services'=>'json',
        'service_details'=>'json',
        'amc_details'=>'json'
    ];
}
