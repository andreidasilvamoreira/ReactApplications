<?php

namespace App\Http\Controllers;

use App\Models\Pedido;
use Illuminate\Http\Request;

class PedidoController extends Controller
{
    public function index()
    {
        return Pedido::all();
    }

    public function show($id)
    {
        $pedido = Pedido::findOrFail($id);

        return response()->json($pedido);
    }

    public function update(Request $request, $id)
    {
        $pedido = Pedido::findOrFail($id);

        $validated = $request->validate([
            'usuario_id' => 'sometimes|exists:usuarios,id|integer',
            'status' => 'sometimes|in:pendente,concluido,cancelado',
            'total' => 'sometimes|numeric|min:0',
            'metodo_pagamento' => 'sometimes|in:pix,cartao,boleto',
            'endereco_entrega' => 'sometimes|string|max:200',
            'data_pedido' => 'sometimes|date',
            'status_pagamento' => 'sometimes|in:pendente,pago,falhou,estornado',
        ]);

        if (empty($validated)) {
            return response()->json([
                'message' => 'Pelo menos um campo deve ser enviado para atualização.'
            ], 422);
        }

        $pedido->update($validated);

        return response()->json($pedido);
    }


    public function destroy($id)
    {
        $pedido = Pedido::findOrFail($id);

        $pedido->delete();

        return response()->json(['message' => 'Pedido excluído com sucesso']);
    }
}
