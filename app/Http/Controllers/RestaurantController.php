<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Restaurant;

class RestaurantController extends Controller
{
    //return all of the model
    public function index(){
        return Restaurant::all();
    }
    //return row with specified id
    public function show_by_id($id){
        return Restaurant::where('restaurant_id', $id)->get();
    }

    public function show_by_english_name($english_name){
        return Restaurant::where('english_name', $english_name)->get();
    }

    public function show_by_traditional_chinese_name($traditional_chinese_name){
        return Restaurant::where('traditional_chinese_name', $traditional_chinese_name)->get();
    }
}
