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
        Schema::create('parts', function (Blueprint $table) {
            $table->id();
            $table->string('serial');
            $table->string('code')->nullable();
            $table->text('description');
            $table->integer('amount');
            $table->string('box')->nullable();
            $table->string('notch')->nullable();
            $table->text('observation')->nullable();
            $table->boolean('status');
            $table->foreignId('component_id')
                ->constrained()
                ->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('parts');
    }
};
