<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemCarrinho extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = 'itens_carrinho';

    protected $fillable = [
        'carrinho_id',
        'produto_id',
        'quantidade',
        'preco_unitario'
    ];

    public function carrinho()
    {
        return $this->belongsTo(Carrinho::class, 'carrinho_id');
    }

    public function produto()
    {
        return $this->belongsTo(Produto::class, 'produto_id');
    }
}
