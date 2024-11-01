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
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('customer_id');
            $table->string('subject');
            $table->foreignId('task_type_id')->constrained('task_types')->cascadeOnDelete();
            $table->text('description');
            $table->string('attachment');
            $table->foreignId('employee_id')->constrained('users')->cascadeOnDelete();
            $table->date('assign_date');
            $table->string('remarks')->nullable();
            $table->date('close_date');
            $table->string('status')->default('open');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
