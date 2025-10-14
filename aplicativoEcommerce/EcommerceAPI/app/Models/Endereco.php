<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Endereco extends Model
{
    use HasFactory;

    protected $table = 'endereco';

    public $timestamps = false;

    protected $fillable = [
        'usuario_id',
        'rua',
        'numero',
        'bairro',
        'cidade',
        'estado',
        'cep',
        'complemento',
    ];

    public function usuario()
    {
        return $this->belongsTo(Usuario::class);
    }
}
