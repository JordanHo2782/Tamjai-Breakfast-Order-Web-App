<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NissanNoodleOptions;

class NissanNoodleOptionsController extends Controller
{
    public function index(){
        return NissanNoodleOptions::all();
    }
}
