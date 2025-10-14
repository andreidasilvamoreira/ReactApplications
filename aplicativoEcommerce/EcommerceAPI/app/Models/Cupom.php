<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cupom extends Model
{
    use HasFactory;

    protected $table = 'cupoms';

    public $timestamps = false;

    protected $fillable = [
        'codigo',
        'tipo',
        'valor',
        'validade',
        'ativo',
        'limite_uso',
        'usos',
    ];

    public function pedido()
    {
        return $this->belongsToMany(Pedido::class, 'cupons_pedidos');
    }
}
