<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MeatInNissanNoodleOptions;

class MeatInNissanNoodleOptionsController extends Controller
{
    public function index(){
        return MeatInNissanNoodleOptions::all();
    }
}
