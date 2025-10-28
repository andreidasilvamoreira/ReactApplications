<?php

namespace App\Http\Controllers;

use App\Models\Cupom;
use Illuminate\Http\Request;

class CupomController extends Controller
{
    public function index()
    {
        $cupom = Cupom::all();
        return response()->json($cupom);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'codigo' => 'required|string|max:50|unique:cupons,codigo',
            'tipo' => 'required|in:percentual,fixo',
            'valor' => 'required|numeric|min:0.01',
            'validade' => 'required|date|after:today',
            'ativo' => 'required|boolean',
            'limite_uso' => 'nullable|integer|min:1',
            'usos' => 'nullable|integer',
]);
        $cupom = Cupom::create($validated);
        return response()->json([
            'message' => 'cupom criado com sucesso',
            'cupom' => $cupom
        ]);
    }

    public function show($id)
    {
        $cupom = Cupom::find($id);
        if (!$cupom) {
            return response()->json(['mensagem' => 'Cupom não encontrado'], 404);
        }
        return response()->json($cupom);
    }

    public function update(Request $request, $id)
    {
        $cupom = Cupom::find($id);
        if (!$cupom) {
            return response()->json(['mensagem' => 'Cupom não encontrado'], 404);
        }

        $validated = $request->validate([
            'codigo' => 'required|string|max:50|unique:cupons,codigo',
            'tipo' => 'required|in:percentual,fixo',
            'valor' => 'required|numeric|min:0.01',
            'validade' => 'required|date|after:today',
            'ativo' => 'required|boolean',
            'limite_uso' => 'nullable|integer|min:1',
            'usos' => 'nullable|integer',
        ]);
        $cupom->update($validated);
        return response()->json([$cupom]);
    }

    public function destroy($id)
    {
        $cupom = Cupom::find($id);
        if (!$cupom) {

            return response()->json(['mensagem' => 'Cupom não encontrado'], 404);
        }
        $cupom->delete();
        return response()->json(['mensagem' => 'Cupom excluido com sucesso'], 200);

    }
}
