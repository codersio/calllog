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
        Schema::create('purchases', function (Blueprint $table) {
            $table->id();
            $table->string('purchase_no');
            $table->date('date');
            $table->string('contact_person');
            $table->string('status')->default('open');
            $table->unsignedBigInteger('supplier_id');
            $table->text('billing_address')->nullable();
            $table->integer('discount')->default(0);
            $table->string('mobile_no')->nullable();
            $table->string('email')->nullable();
            $table->json('sales_details');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('purchases');
    }
};
