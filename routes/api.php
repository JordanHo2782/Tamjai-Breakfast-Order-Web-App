<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\RestaurantController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ProductDescriptionsController;

use App\Http\Controllers\ViewProductsController;
use App\Http\Controllers\ViewProductOptionsController;

use App\Http\Controllers\ViewProductCategoriesController;
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

Route::get('get/products', [ProductsController::class, 'index']);
Route::get('get/products/id={id}', [ProductsController::class, 'show_by_id']);

Route::get('get/products_descriptions', [ProductDescriptionsController::class, 'index']);
Route::get('get/products_descriptions/product_id={product_id}', [ProductDescriptionsController::class, 'show_by_id']);

// Route::get('get/products_view/{category_id}', [ViewProductsController::class, 'show_by_category_id']);
// Route::get('get/product_options_view/{id}', [ViewProductOptionsController::class, 'show_by_id']);

Route::get('get/categories/{category_id}/{product_id}', [ViewProductOptionsController::class, 'show_by_product_id']);
Route::get('get/categories/{category_id}', [ViewProductsController::class, 'show_by_category_id']);
Route::get('get/categories', [ViewProductCategoriesController::class, 'index']);
