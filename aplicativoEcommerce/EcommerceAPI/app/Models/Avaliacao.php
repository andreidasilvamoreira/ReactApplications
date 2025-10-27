<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Testing\Fluent\Concerns\Has;

class Avaliacao extends Model
{
    use HasFactory;

    protected $table = 'avaliacoes';
    public $timestamps = false;
    protected $fillable = [
        'usuario_id',
        'produto_id',
        'nota',
        'comentario',
    ];

    public function produto()
    {
        return $this->belongsTo(Produto::class);
    }

    public function usuario()
    {
        return $this->belongsTo(Usuario::class);
    }
}
