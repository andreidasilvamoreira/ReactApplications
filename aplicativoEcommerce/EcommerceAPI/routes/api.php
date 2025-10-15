<?php

use App\Http\Controllers\PedidoController;
use App\Http\Controllers\ProdutoController;
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
