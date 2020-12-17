<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AdditionalMeatNissanNoodlesBundlesOptions;

class AdditionalMeatNissanNoodlesBundlesOptionsController extends Controller
{
    public function index(){
        return AdditionalMeatNissanNoodlesBundlesOptions::all();
    }
}
