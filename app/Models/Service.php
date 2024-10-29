<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;
    protected $fillable = [
        'service_code',
        'service_date',
        'customer_id',
        'assigned_to',
        'status',
        'service_charge',
        'service_details',
    ];

    public function amcDetails()
    {
        return $this->hasMany(AmcDetail::class);
    }
}
