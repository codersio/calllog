<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AmcDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'service_id',
        'product',
        'note',
    ];

    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}
