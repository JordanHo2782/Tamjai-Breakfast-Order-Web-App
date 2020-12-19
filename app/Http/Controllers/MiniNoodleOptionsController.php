<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MiniNoodleOptions;

class MiniNoodleOptionsController extends Controller
{
    public function index(){
        return MiniNoodleOptions::all();
    }
}
