<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MeatInTomatoNoodleOptions;

class MeatInTomatoNoodleOptionsController extends Controller
{
    public function index(){
        return MeatInTomatoNoodleOptions::all();
    }
}
