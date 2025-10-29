<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\AvaliacaoController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\CupomController;
use App\Http\Controllers\EnderecoController;
use App\Http\Controllers\ItemPedidoController;
use App\Http\Controllers\PedidoController;
use App\Http\Controllers\ProdutoController;
use App\Http\Controllers\UsuarioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('pedidos')->group(function () {
    Route::get('/', [PedidoController::class, 'index']);
    Route::post('/', [PedidoController::class, 'store']);
    Route::get('/{id}', [PedidoController::class, 'show']);
    Route::put('/{id}', [PedidoController::class, 'update']);
    Route::delete('/{id}', [PedidoController::class, 'destroy']);
});


Route::prefix('produtos')->group(function () {
    Route::get('/', [ProdutoController::class, 'index']);
    Route::post('/', [ProdutoController::class, 'store']);
    Route::get('/{id}', [ProdutoController::class, 'show']);
    Route::put('/{id}', [ProdutoController::class, 'update']);
    Route::delete('/{id}', [ProdutoController::class, 'destroy']);
});

Route::prefix('enderecos')->group(function () {
    Route::get('/', [EnderecoController::class, 'index']);
    Route::post('/', [EnderecoController::class, 'store']);
    Route::get('/{id}', [EnderecoController::class, 'show']);
    Route::put('/{id}', [EnderecoController::class, 'update']);
    Route::delete('/{id}', [EnderecoController::class, 'destroy']);
});

Route::prefix('usuarios')->group(function () {
    Route::get('/', [UsuarioController::class, 'index']);
    Route::post('/', [UsuarioController::class, 'store']);
    Route::get('/{id}', [UsuarioController::class, 'show']);
    Route::put('/{id}', [UsuarioController::class, 'update']);
    Route::delete('/{id}', [UsuarioController::class, 'destroy']);
});

Route::prefix('categorias')->group(function () {
    Route::get('/', [CategoriaController::class, 'index']);
    Route::post('/', [CategoriaController::class, 'store']);
    Route::get('/{id}', [CategoriaController::class, 'show']);
    Route::put('/{id}', [CategoriaController::class, 'update']);
    Route::delete('/{id}', [CategoriaController::class, 'destroy']);
});

Route::prefix('itensPedidos')->group(function () {
    Route::get('/', [ItemPedidoController::class, 'index']);
    Route::post('/', [ItemPedidoController::class, 'store']);
    Route::get('/{id}', [ItemPedidoController::class, 'show']);
    Route::put('/{id}', [ItemPedidoController::class, 'update']);
    Route::delete('/{id}', [ItemPedidoController::class, 'destroy']);
});

Route::prefix('avaliacao')->group(function () {
    Route::get('/', [AvaliacaoController::class, 'index']);
    Route::post('/', [AvaliacaoController::class, 'store']);
    Route::get('/{id}', [AvaliacaoController::class, 'show']);
    Route::put('/{id}', [AvaliacaoController::class, 'update']);
    Route::delete('/{id}', [AvaliacaoController::class, 'destroy']);
});

Route::prefix('cupom')->group(function () {
    Route::get('/', [CupomController::class, 'index']);
    Route::post('/', [CupomController::class, 'store']);
    Route::get('/{id}', [CupomController::class, 'show']);
    Route::put('/{id}', [CupomController::class, 'update']);
    Route::delete('/{id}', [CupomController::class, 'destroy']);
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::post('/register', [AuthController::class, 'register']);
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
