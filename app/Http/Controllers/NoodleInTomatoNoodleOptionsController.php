<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NoodleInTomatoNoodleOptions;

class NoodleInTomatoNoodleOptionsController extends Controller
{
    public function index(){
        return NoodleInTomatoNoodleOptions::all();
    }
}
