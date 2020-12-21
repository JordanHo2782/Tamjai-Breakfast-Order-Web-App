<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductOptions;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class ProductOptionsController extends Controller {
    public function show_by_product_id($category_id, $product_id){
        $product_options_had_and_had_not = ProductOptions::where('product_id', $product_id)->get()->toArray()[0];
        $product_options_had_and_had_not_without_id = array_slice($product_options_had_and_had_not, 2, sizeof($product_options_had_and_had_not)-2);
        $product_options_had_without_id = array_filter($product_options_had_and_had_not_without_id, function($have_option){ return $have_option; });
        $product_options_key_had_without_id = array_keys($product_options_had_without_id);
        $product_options_model_names = array_map(function($key){ return Str::studly(Str::singular($key))."s";}, $product_options_key_had_without_id);

        $product_options = array_map(function($model_name){
            $model = 'App\Models\\'.$model_name;
            return array("product_options"=>$model::all(), "english_name"=>preg_replace('/([a-z])([A-Z])/', '$1 $2', $model_name), "traditional_chinese_name"=>"");
        }, $product_options_model_names);
        return $product_options;
    }
}
