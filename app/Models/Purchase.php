<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    use HasFactory;

    protected $fillable = [
        'purchase_no',
        'date',
        'contact_person',
        'status',
        'supplier_id',
        'billing_address',
        'discount',
        'mobile_no',
        'email',
        'sales_details',
    ];

    protected $casts = [
        'sales_details' => 'json',
    ];
}
