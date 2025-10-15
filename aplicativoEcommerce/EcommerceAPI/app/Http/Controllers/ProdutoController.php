<?php

namespace App\Http\Controllers;

use App\Models\Produto;
use Illuminate\Http\Request;

class ProdutoController extends Controller
{
    public function index()
    {
        $produto = Produto::all();
        return response()->json($produto);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nome' => 'sometimes|string|max:45',
            'descricao' => 'sometimes|string|max:200',
            'preco' => 'sometimes|numeric|min:0',
            'estoque' => 'sometimes|integer|min:0',
            'imagem' => 'nullable|string|max:255',
            'status' => 'sometimes|in:ativo,inativo',
            'categoria_id' => 'sometimes|exists:categorias,id|integer',
        ]);

        $produto = Produto::create($validated);

        return response()->json([
            'message' => 'Produto criado com sucesso',
            'produto' => $produto
        ], 201);
    }
    public function show($id)
    {
        $produto = Produto::findOrFail($id);

        return response()->json($produto);
    }



    public function update(Request $request, $id)
    {
        $produto = Produto::findOrFail($id);

        $validated = $request->validate([
            'nome' => 'sometimes|string|max:45',
            'descricao' => 'sometimes|string|max:200',
            'preco' => 'sometimes|numeric|min:0',
            'estoque' => 'sometimes|integer|min:0',
            'imagem' => 'nullable|string|max:255',
            'status' => 'sometimes|in:ativo,inativo',
            'categoria_id' => 'sometimes|exists:categorias,id|integer',
        ]);

        if (empty($validated)) {
            return response()->json([
                'message' => 'Pelo menos um campo deve ser enviado para atualização.'
            ], 422);
        }

        $produto->update($validated);

        return response()->json($produto);
    }


    public function destroy($id)
    {
        $produto = Produto::findOrFail($id);

        $produto->delete();

        return response()->json(['message' => 'Produto excluído com sucesso']);
    }
}
