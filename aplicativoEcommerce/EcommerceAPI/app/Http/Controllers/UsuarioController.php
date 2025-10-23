<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    public function index()
    {
        $usuario = Usuario::all();
        return response()->json($usuario);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nome' => ['required', 'string', 'max:100'],
            'email' => ['required', 'email', 'max:150', 'unique:usuarios,email'],
            'senha' => ['required', 'string', 'min:6', 'max:30', 'confirmed'],
            'telefone' => ['sometimes', 'string', 'regex:/^\+?\d{10,15}$/'],
            'tipo' => ['sometimes', 'in:admin,cliente'],
        ]);

        $usuario = Usuario::create($validated);

        return response()->json([
            'message' => 'Usuario criado com sucesso',
            'usuario' => $usuario
        ], 201);
    }
    public function show($id)
    {
        $usuario = Usuario::findOrFail($id);

        return response()->json($usuario);
    }



    public function update(Request $request, $id)
    {
        $usuario = Usuario::findOrFail($id);

        $validated = $request->validate([
            'nome' => ['required', 'string', 'max:100'],
            'email' => ['required', 'email', 'max:150', 'unique:usuarios,email'],
            'senha' => ['required', 'string', 'min:6', 'max:30', 'confirmed'],
            'telefone' => ['sometimes', 'string', 'regex:/^\+?\d{10,15}$/'],
            'tipo' => ['sometimes', 'in:admin,cliente'],
        ]);

        if (empty($validated)) {
            return response()->json([
                'message' => 'Pelo menos um campo deve ser enviado para atualização.'
            ], 422);
        }

        $usuario->update($validated);

        return response()->json($usuario);
    }


    public function destroy($id)
    {
        $usuario = Usuario::findOrFail($id);

        $usuario->delete();

        return response()->json(['message' => 'Usuario excluído com sucesso']);
    }
}
