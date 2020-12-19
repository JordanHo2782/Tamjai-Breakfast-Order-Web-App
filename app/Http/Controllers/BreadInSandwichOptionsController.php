<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BreadInSandwichOptions;

class BreadInSandwichOptionsController extends Controller
{
    public function index(){
        return BreadInSandwichOptions::all();
    }
}
