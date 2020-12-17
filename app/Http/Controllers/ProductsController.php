<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;

use App\Models\DrinksOptionsInBundles;
use App\Models\AdditionalMeatInBundles;
use App\Models\MiniNoodlesInBundlesOptions;

class ProductsController extends Controller
{
    public function index(){
        return Products::all();
    }

    public function show_by_id($category_id, $product_id){
        $product = Products::where('product_id', $product_id)->get()[0];
        // return $product->product_id
        if($product->product_id>0 and $product->product_id<7){
            //all bundle have drink
            //all bundle have mini noodle
            //all bundle have additional meat
            $bundles = (object) [
                'english_name'=>$product->english_name,
                'traditional_chinese_name'=>$product->traditional_chinese_name,
                'photo'=>$product->photo,
                'price'=>$product->price,
                'options'=>array(
                    DrinksOptionsInBundles::all(), 
                    AdditionalMeatInBundles::all(), 
                    MiniNoodlesInBundlesOptions::all(),
                ),
            ];
            return array($bundles);
        }else{
            return $product;
        }

    }
}
