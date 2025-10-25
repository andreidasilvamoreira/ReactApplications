<?php

namespace App\Http\Controllers;

use App\Models\ItemPedido;
use Illuminate\Http\Request;

class ItemPedidoController extends Controller
{
    public function index()
    {
        $itemPedido = ItemPedido::all();
        return response()->json($itemPedido);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'pedido_id' => 'required|integer|exists:pedidos,id',
            'produto_id' => 'required|integer|exists:produtos,id',
            'quantidade' => 'required|integer|min:1',
            'preco_unitario' => 'required|numeric|min:0',
            'sub_total' => 'nullable|numeric|min:0',
        ]);

        $itemPedido = ItemPedido::create($validated);
        return response()->json(["mensagem" => "Item Pedido cadastrado com sucesso!", "itemPedido" => $itemPedido]);
    }

    public function show($id)
    {
        $itemPedido = ItemPedido::find($id);
        if (!$itemPedido) {
            return response()->json(['mensagem' => 'Item Pedido não encontrado'], 404);
        }
        return response()->json($itemPedido);
    }

    public function destroy($id)
    {
        $itemPedido = ItemPedido::find($id);
        if (!$itemPedido) {
            return response()->json(['mensagem' => 'Item Pedido não encontrado'], 404);
        }
        $itemPedido->delete();
    return response()->json(["mensagem" => "ItemPedido removido com sucesso!"]);
    }

    public function update(Request $request, $id)
    {
        $itemPedido = ItemPedido::find($id);
        if (!$itemPedido) {
            return response()->json(['mensagem' => 'Item Pedido não encontrado'], 404);
        }
        $validated = $request->validate([
            'pedido_id' => 'required|integer|exists:pedidos,id',
            'produto_id' => 'required|integer|exists:produtos,id',
            'quantidade' => 'required|integer|min:1',
            'preco_unitario' => 'required|numeric|min:0',
            'sub_total' => 'nullable|numeric|min:0',
        ]);


        $itemPedido->update($validated);
        return response()->json($itemPedido);
    }
}
