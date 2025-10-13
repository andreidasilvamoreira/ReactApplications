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
        Schema::create('pedidos', function (Blueprint $table) {
            $table->id();
            $table->enum('status', ['pendente', 'concluido', 'cancelado'])->default('pendente');
            $table->decimal('total', 10,2);
            $table->enum('metodo_pagamento', ['pix', 'cartao', 'boleto']);
            $table->text('endereco_entrega', 200);
            $table->timestamp('data_pedido');
            $table->enum('status_pagamento', ['pendente', 'pago', 'falhou', 'estornado'])->default('pendente');
            $table->foreignId('usuario_id')->constrained('usuarios')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pedidos');
    }
};
