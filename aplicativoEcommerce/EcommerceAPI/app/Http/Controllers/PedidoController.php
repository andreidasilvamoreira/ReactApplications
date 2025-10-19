<?php

namespace App\Http\Controllers;

use App\Models\Pedido;
use Illuminate\Http\Request;

class PedidoController extends Controller
{
    public function index()
    {
        $pedidos = Pedido::with(['usuario', 'itensPedido.produto'])->get();
        return response()->json($pedidos);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'usuario_id' => 'required|exists:usuarios,id|integer',
            'status' => 'required|in:pendente,concluido,cancelado',
            'total' => 'required|numeric|min:0',
            'metodo_pagamento' => 'required|in:pix,cartao,boleto',
            'endereco_entrega' => 'required|string|max:200',
            'data_pedido' => 'required|date',
            'status_pagamento' => 'required|in:pendente,pago,falhou,estornado',
        ]);

        $pedido = Pedido::create($validated);

        return response()->json([
            'message' => 'Pedido criado com sucesso',
            'pedido' => $pedido
        ], 201);
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
