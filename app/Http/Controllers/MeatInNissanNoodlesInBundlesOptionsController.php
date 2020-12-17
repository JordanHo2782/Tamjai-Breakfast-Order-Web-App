<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MeatInNissanNoodlesInBundlesOptions;

class MeatInNissanNoodlesInBundlesOptionsController extends Controller
{
    public function index(){
        return MeatInNissanNoodlesInBundlesOptions::all();
    }
}
