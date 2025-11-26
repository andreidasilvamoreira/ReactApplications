<?php

namespace App\Http\Controllers;

use App\Models\ItemCarrinho;
use App\Models\Carrinho;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ItemCarrinhoController extends Controller
{
    public function index()
    {
        $itensCarrinho = ItemCarrinho::whereHas('carrinho', function ($q) {
            $q->where('usuario_id', Auth::id())
                ->where('status', 'aberto');
        })
            ->with('produto')
            ->get();

        if (!$itensCarrinho) {
            return response()->json(['mensagem' => 'Carrinho vazio'], 200);
        }

        return response()->json($itensCarrinho);
    }

    public function store(Request $request)
    {
        $request->validate([
            'produto_id' => 'required|exists:produtos,id',
            'quantidade' => 'required|integer|min:1'
        ]);

        $carrinho = Carrinho::firstOrCreate([
            'usuario_id' => Auth::id(),
            'status' => 'aberto'
        ]);

        $itemCarrinho = ItemCarrinho::create([
            'carrinho_id' => $carrinho->id,
            'produto_id' => $request->produto_id,
            'quantidade' => $request->quantidade
        ]);

        return response()->json($itemCarrinho, 201);
    }

    public function show($id)
    {
        $itemCarrinho = ItemCarrinho::where('id', $id)
            ->whereHas('carrinho', function ($q) {
                $q->where('usuario_id', Auth::id());
            })
            ->with('produto')
            ->first();

        if (!$itemCarrinho) {
            return response()->json(['mensagem' => 'Item não encontrado'], 404);
        }

        return response()->json($itemCarrinho);
    }


    public function update(Request $request, $id)
    {
        $itemCarrinho = ItemCarrinho::where('id', $id)
            ->whereHas('carrinho', function ($q) {
                $q->where('usuario_id', Auth::id())
                    ->where('status', 'aberto');
            })
            ->first();

        if (!$itemCarrinho) {
            return response()->json(['mensagem' => 'Item não encontrado'], 404);
        }

        $request->validate([
            'quantidade' => 'required|integer|min:1'
        ]);

        $itemCarrinho->quantidade = $request->quantidade;
        $itemCarrinho->save();

        return response()->json($itemCarrinho);
    }


    public function destroy($id)
    {
        $itemCarrinho = ItemCarrinho::where('id', $id)
            ->whereHas('carrinho', function ($q) {
                $q->where('usuario_id', Auth::id())
                    ->where('status', 'aberto');
            })
            ->first();

        if (!$itemCarrinho) {
            return response()->json(['mensagem' => 'Item não encontrado'], 404);
        }

        $itemCarrinho->delete();

        return response()->json(['mensagem' => 'Item removido']);
    }

}
