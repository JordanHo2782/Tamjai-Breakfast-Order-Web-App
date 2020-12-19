<?php

namespace App\Http\Controllers;
use App\Models\NoodleOptions;

use Illuminate\Http\Request;

class NoodleOptionsController extends Controller
{
    public function index(){
        return NoodleOptions::all();
    }
}
