<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|email|',
            'senha' => 'required|string|min:6',
            'tipo' => 'in:cliente,admin'
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['senha']),
            'tipo' => $validated['tipo'] ?? 'cliente',
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['message' => 'Usuario criado com sucesso!'], 201);
    }
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'senha' => 'required|string',
        ]);

        $credentials = [
            'email' => $request->email,
            'password' => $request->senha
        ];

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'message' => 'Login realizado com sucesso',
                'user' => $user,
                'token' => $token
            ]);
        }

        return response()->json(['erro' => 'Email ou senha inválidos'], 401);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logout realizado com sucesso']);
    }
}
