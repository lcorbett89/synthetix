<?php

use App\Http\Controllers\Api\Auth\AuthController;
use App\Http\Controllers\Api\JokeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('login', [AuthController::class, 'login']);

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('me', [AuthController::class, 'me'])->name('me');
    
    Route::apiResource('jokes', JokeController::class)->only('index', 'store', 'show');
});
