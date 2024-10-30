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
        Schema::create('amcs', function (Blueprint $table) {
            $table->id();
            $table->string('amc_no');
            $table->string('contact_person')->nullable();
            $table->unsignedBigInteger('customer_id')->nullable();
            $table->unsignedBigInteger('assigned_to')->nullable();
            $table->string('status')->default('open');
            $table->string('details');
            $table->string('interval');
            $table->string('no_of_service');
            $table->date('date');
            $table->string('mobile_no');
            $table->string('email');
            $table->string('billing_address');
            $table->string('attachments');
            $table->json('services')->nullable();
            $table->json('amc_details');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('amcs');
    }
};
