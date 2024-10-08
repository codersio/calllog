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
        Schema::create('d_istributers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('address');
            $table->string('pin');
            $table->string('con1');
            $table->string('con2');
            $table->string('gstn');
            $table->string('pan');
            $table->string('email');
            $table->string('password');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('d_istributers');
    }
};
