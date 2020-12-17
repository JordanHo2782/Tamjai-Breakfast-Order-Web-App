<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductDescriptions;

class ProductDescriptionsController extends Controller
{
    public function index(){
        return ProductDescriptions::all();
    }

    public function show_by_id($id){
        return ProductDescriptions::where('product_id', $id)->get();
    }
}
