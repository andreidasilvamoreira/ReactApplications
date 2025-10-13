<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    use HasFactory;

    protected $table = 'pedidos';
    public $timestamp = false;
    protected $fillable = [
        'usuario_id',
        'status',
        'total',
        'metodo_pagamento',
        'endereco_entrega',
        'data_entrega',
        'status_pagamento',
    ];

    public function usuario()
    {
        return $this->belongsTo(Usuario::class);
    }

    public function itensPedido()
    {
        return $this->hasMany(ItemPedido::class);
    }

    public function cupons()
    {
        return $this->belongsToMany(Cupom::class, 'cupons_pedidos');
    }
}
