<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('expenses', function (Blueprint $table) {
            $table->id();
            $table->string('empolyee_type'); // "Employee", "Customer", "Vendor"
            $table->unsignedBigInteger('payee_id'); // Foreign key to users or vendors table
            $table->date('payment_date');
            $table->unsignedBigInteger('category_id'); // Foreign key to categories
            $table->string('account')->default('Cash');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('expenses');
    }
};
