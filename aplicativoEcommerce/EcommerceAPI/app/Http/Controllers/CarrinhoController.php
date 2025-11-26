<?php

namespace App\Http\Controllers;

use App\Models\Carrinho;
use App\Models\ItemCarrinho;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CarrinhoController extends Controller
{
    public function index()
    {
        $carrinho = Carrinho::where('usuario_id', Auth::id())
            ->where('status', 'aberto')
            ->with('itensCarrinho.produto')
            ->first();

        if (!$carrinho) {
            return response()->json(['mensagem' => 'Carrinho vazio'], 200);
        }

        return response()->json($carrinho);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'produto_id' => 'required|exists:produtos,id',
            'quantidade' => 'required|integer|min=1'
        ]);

        $carrinho = Carrinho::firstOrCreate([
            'usuario_id' => Auth::id(),
            'status' => 'aberto'
        ]);

        $item = ItemCarrinho::where('carrinho_id', $carrinho->id)
            ->where('produto_id', $validated['produto_id'])
            ->first();

        if ($item) {
            $item->quantidade += $validated['quantidade'];
            $item->save();
        } else {
            $item = ItemCarrinho::create([
                'carrinho_id' => $carrinho->id,
                'produto_id' => $validated['produto_id'],
                'quantidade' => $validated['quantidade']
            ]);
        }

        return response()->json([
            'mensagem' => 'Item adicionado ao carrinho com sucesso!',
            'item' => $item
        ], 201);
    }

    public function destroy($id)
    {
        $carrinho = ItemCarrinho::where('id', $id)
            ->whereHas('carrinho', function ($q) {
                $q->where('usuario_id', Auth::id());
            })
            ->first();

        if (!$carrinho) {
            return response()->json(['mensagem' => 'Item não encontrado'], 404);
        }

        $carrinho->delete();

        return response()->json(['mensagem' => 'Item removido com sucesso!']);
    }

    public function show($id)
    {
        $carrinho = ItemCarrinho::where('id', $id)
            ->whereHas('carrinho', function ($q) {
                $q->where('usuario_id', Auth::id());
            })
            ->with('produto')
            ->first();

        if (!$carrinho) {
            return response()->json(['mensagem' => 'Item não encontrado'], 404);
        }

        return response()->json($carrinho);
    }

    public function fechar()
    {

        $carrinho = Carrinho::where('usuario_id', Auth::id())
            ->where('status', 'aberto')
            ->first();

        if (!$carrinho) {
            return response()->json(['mensagem' => 'Carrinho não encontrado'], 404);
        }

        $carrinho->status = 'fechado';
        $carrinho->save();

        return response()->json(['mensagem' => 'Carrinho finalizado com sucesso!']);
    }
}
