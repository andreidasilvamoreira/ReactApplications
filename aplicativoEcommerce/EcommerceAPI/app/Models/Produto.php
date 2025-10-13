<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    use HasFactory;

    protected $table = 'produtos';
    protected $timestamp = false;

    protected $fillable = [
        'nome',
        'descricao',
        'preco',
        'estoque',
        'imagem',
        'status',
    ];

    public function categoria()
    {
        return $this->belongsTo(Categoria::class);
    }

    public function avaliacao()
    {
        return $this->hasMany(Avaliacao::class);
    }

    public function itensPedidos()
    {
        return $this->hasMany(ItemPedido::class);
    }
}
