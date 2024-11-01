<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    use HasFactory;
    protected $fillable = ['payee_id', 'payment_date', 'category_id', 'account', 'payee_type'];

    public function items()
    {
        return $this->hasMany(ExpenseItem::class);
    }
}
