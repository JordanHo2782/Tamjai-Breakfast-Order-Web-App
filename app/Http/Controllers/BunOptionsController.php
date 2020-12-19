<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BunOptions;

class BunOptionsController extends Controller
{
    public function index(){
        return BunOptions::all();
    }
}
