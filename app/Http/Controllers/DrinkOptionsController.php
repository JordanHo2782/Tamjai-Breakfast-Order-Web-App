<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DrinkOptions;

class DrinkOptionsController extends Controller
{
    public function index(){
        return DrinkOptions::all();
    }
}
