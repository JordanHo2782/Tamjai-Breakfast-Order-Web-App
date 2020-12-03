<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RestaurantController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('get/restaurants/', [RestaurantController::class, 'index']);
Route::get('get/restaurants/id={id}', [RestaurantController::class, 'show_by_id']);
Route::get('get/restaurants/english_name={english_name}', [RestaurantController::class, 'show_by_english_name']);
Route::get('get/restaurants/traditional_chinese_name={chinese_name}', [RestaurantController::class, 'show_by_traditional_chinese_name']);


