<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;
use App\Models\ProductDescriptions;

class ViewProductsInCategoryController extends Controller
{
    function show_by_category_id($category_id){
        $products = Products::where('category_id', $category_id)->get()->toArray();
        $products_copy_array = $products;
        for($count=0;$count<=sizeof($products)-1; $count++){
            $product_in_array = $products[$count];
            $product_in_array['product_descriptions'] = ProductDescriptions::where('product_id', $product_in_array['product_id'])->get()->toArray();
            array_splice($products_copy_array,$count,1,[$product_in_array]);
        }
        return $products_copy_array;
    }
}
