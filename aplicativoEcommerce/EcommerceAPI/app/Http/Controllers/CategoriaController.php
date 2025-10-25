<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    public function index()
    {
        $categorias = Categoria::all();
        return response()->json($categorias);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nome' => 'required|string|max:100|unique:categorias,nome',
            'descricao' => 'nullable|string|max:255',]);
        $categoria = Categoria::create($validated);
        return response()->json([
            'message' => 'Produto criado com sucesso',
            'categoria' => $categoria
        ], 201);
    }

    public function show($id)
    {
        $categoria = Categoria::find($id);
        if (!$categoria) {
            return response()->json(['mensagem' => 'Categoria não encontrada'], 404);
        }
        return response()->json($categoria);
    }

    public function destroy($id)
    {
        $categoria = Categoria::find($id);
        if (!$categoria) {
            return response()->json(['mensagem' => 'Categoria não encontrada'], 404);
        }
        $categoria->delete();
        return response()->json(['mensagem' => "Categoria removida com sucesso!"]);
    }

    public function update(Request $request, $id)
    {
        $categoria = Categoria::find($id);
        if (!$categoria) {
            return response()->json(['mensagem' => 'Categoria não encontrada'], 404);
        }
        $validated = $request->validate ([
            'nome' => 'required|string|max:100',
            'descricao' => 'nullable|string|max:255'
            ]);
        if (empty($validated)) {
            return response()->json([
                'message' => 'Pelo menos um campo deve ser enviado para atualização.'
            ], 422);
        }
        $categoria->update($validated);
        return response()->json($categoria);
    }
}
