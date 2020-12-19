<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AdditionalMeatNissanNoodleOptions;

class AdditionalMeatNissanNoodleOptionsController extends Controller
{
    public function index(){
        return AdditionalMeatNissanNoodleOptions::all();
    }
}
