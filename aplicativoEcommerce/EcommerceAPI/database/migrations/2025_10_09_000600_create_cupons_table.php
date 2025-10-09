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
        Schema::create('cupons', function (Blueprint $table) {
            $table->id();
            $table->string('codigo')->unique(); 
            $table->enum('tipo', ['percentual', 'fixo']); 
            $table->decimal('valor', 10, 2); 
            $table->date('validade'); 
            $table->boolean('ativo')->default(true);
            $table->integer('limite_uso')->nullable(); 
            $table->integer('usos')->default(0); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cupons');
    }
};
