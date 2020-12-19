<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductDescriptions;

class ProductDescriptionsController extends Controller
{
    public function index(){
        return ProductDescriptions::all();
    }

    public function show_by_product_id($category_id, $product_id){
        return ProductDescriptions::where('product_id', $product_id)->get();
    }
}
