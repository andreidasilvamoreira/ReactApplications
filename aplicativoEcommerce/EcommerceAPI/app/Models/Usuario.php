<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;
    protected $table = 'usuarios';
    public $timestamp = false;
    protected $fillable = [
        'nome',
        'email',
        'senha',
        'telefone',
        'tipo',
    ];

    public function endereco()
    {
        return $this->hasMany(Endereco::class);
    }

    public function pedido()
    {
        return $this->hasMany(Pedido::class);
    }

    public function avaliacao()
    {
        return $this->hasMany(Avaliacao::class);
    }
}
