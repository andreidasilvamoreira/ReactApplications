<?php

namespace App\Http\Controllers;

use App\Models\Endereco;
use Illuminate\Http\Request;

class EnderecoController extends Controller
{
    public function index()
    {
        $endereco = Endereco::all();
        return response()->json($endereco);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'usuario_id' => 'required|exists:usuarios,id|integer',
            'rua' => 'required|string|max:200',
            'numero' => 'required|string|max:20',
            'bairro' => 'required|string|max:100',
            'cidade' => 'required|string|max:100',
            'estado' => 'required|string|size:2',
            'cep' => 'required|string|regex:/^\d{5}-\d{3}$/',
            'complemento' => 'nullable|string|max:100',
        ]);

        $endereco = Endereco::create($validated);

        return response()->json([
            'message' => 'Endereço criado com sucesso',
            'endereco' => $endereco
        ], 201);
    }
    public function show($id)
    {
        $endereco = Endereco::findOrFail($id);

        return response()->json($endereco);
    }



    public function update(Request $request, $id)
    {
        $endereco = Endereco::findOrFail($id);

        $validated = $request->validate([
            'usuario_id' => 'required|exists:usuarios,id|integer',
            'rua' => 'required|string|max:200',
            'numero' => 'required|string|max:20',
            'bairro' => 'required|string|max:100',
            'cidade' => 'required|string|max:100',
            'estado' => 'required|string|size:2',
            'cep' => 'required|string|regex:/^\d{5}-\d{3}$/',
            'complemento' => 'nullable|string|max:100',
        ]);

        if (empty($validated)) {
            return response()->json([
                'message' => 'Pelo menos um campo deve ser enviado para atualização.'
            ], 422);
        }

        $endereco->update($validated);

        return response()->json($endereco);
    }


    public function destroy($id)
    {
        $endereco = Endereco::findOrFail($id);

        $endereco->delete();

        return response()->json(['message' => 'Endereço excluído com sucesso']);
    }
}
