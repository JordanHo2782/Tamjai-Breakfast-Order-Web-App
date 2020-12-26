<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\RestaurantController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductOptionsController;
use App\Http\Controllers\ProductDescriptionsController;
use App\Http\Controllers\ProductCategoriesController;
use App\Http\Controllers\ImagesController;

use App\Http\Controllers\OrderController;
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

Route::get('get/product/{category_id}/{product_id}', [ProductController::class, 'show_by_product_id']);
Route::get('get/product_options/{category_id}/{product_id}', [ProductOptionsController::class, 'show_by_product_id']);
Route::get('get/product/{category_id}', [ProductController::class, 'show_by_category_id']);
Route::get('get/categories', [ProductCategoriesController::class, 'index']);
Route::get('get/image/{image_name}', [ImagesController::class, 'show_by_image_name']);

Route::get('get/order', [OrderController::class, 'index']);
Route::post('post/order', [OrderController::class, 'store']);