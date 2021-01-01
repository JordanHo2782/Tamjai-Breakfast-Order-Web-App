<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductOrder;
use Illuminate\Support\Str;

class ProductOrderController extends Controller
{
    public function index(){
        return ProductOrder::all();
    }

    public function store(Request $request){
        $cart_items = $request->CartItems;

        $order_identifier = Str::uuid();
        foreach($cart_items as &$item) {
            $order = new ProductOrder;
            $order->restaurant_id = $request->restaurant_id;
            $order->restaurant_name = $request->restaurant_name;
            $order->dine_location = $request->dine_location;
            $order->sit_number = $request->sit_number;

            $order->product_id = $item['ProductID'];
            $order->product_english_name = $item['ProductTitle'];
            $order->price = $item['ProductPrice'];
            $order->options_selected = json_encode($item['OptionsSelected']);
            
            $order->order_identifier = $order_identifier;
            $order->save();
        }
        return $order_identifier;
    }
}
