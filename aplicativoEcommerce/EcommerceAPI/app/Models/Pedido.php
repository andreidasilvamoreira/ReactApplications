<?php

namespace App\Models;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    use HasFactory;

    protected $table = 'pedidos';
    public $timestamps = false;
    protected $fillable = [
        'usuario_id',
        'status',
        'total',
        'metodo_pagamento',
        'endereco_entrega',
        'data_entrega',
        'data_pedido',
        'status_pagamento',
    ];


    public function getDataPedidoAttribute($value)
    {
        return Carbon::parse($value)->format('d/m/Y');
    }

    public function getDataEntregaAttribute($value)
    {
        return Carbon::parse($value)->format('d/m/Y');
    }

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
