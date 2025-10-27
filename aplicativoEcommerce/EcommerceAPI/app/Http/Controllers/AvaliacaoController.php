<?php

namespace App\Http\Controllers;

use App\Models\Avaliacao;
use Illuminate\Http\Request;

class AvaliacaoController extends Controller
{
    public function index()
    {
        $avaliacao = Avaliacao::all();
        return response()->json($avaliacao);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'usuario_id' => 'required|integer|exists:usuarios,id',
            'produto_id' => 'required|integer|exists:produtos,id',
            'nota' => 'required|numeric|min:0|max:5',
            'comentario' => 'nullable|string|max:1000',
        ]);
        $avaliacao = Avaliacao::create($validated);
        return response()->json([
            'message' => 'Avaliação criada com sucesso',
            'endereço' => $avaliacao], 201);
    }

    public function show($id)
    {
        $avaliacao = Avaliacao::find($id);
        if (!$avaliacao) {
            return response()->json(['message' => 'Avaliação não encontrada']);
        }
        return response()->json($avaliacao);
    }

    public function update(Request $request, $id)
    {
        $avaliacao = Avaliacao::find($id);
        if (!$avaliacao) {
            return response()->json(['message' => 'Avaliação não encontrado']);
        }
        $validated = $request->validate([
            'usuario_id' => 'required|integer|exists:usuarios,id',
            'produto_id' => 'required|integer|exists:produtos,id',
            'nota' => 'required|numeric|min:0|max:5',
            'comentario' => 'nullable|string|max:1000',
        ]);

        $avaliacao->update($validated);
        return response()->json($avaliacao);
    }

    public function destroy($id)
    {
        $avaliacao = Avaliacao::find($id);
        if (!$avaliacao) {
            return response()->json(['mensagem' => 'Avaliação não encontrado'], 404);
        }
        $avaliacao->delete();
        return response()->json(['message' => 'Avaliação excluida com sucesso']);
    }
}
