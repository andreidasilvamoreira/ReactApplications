<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Carrinho extends Model
{
    use HasFactory;

    protected $table = 'carrinhos';

    public $timestamps = false;
    protected  $fillable = [
        'usuario_id',
        'status'
    ];

    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'usuario_id');
    }

    public function itensCarrinho()
    {
        return $this->hasMany(ItemCarrinho::class, 'carrinho_id');
    }
}
