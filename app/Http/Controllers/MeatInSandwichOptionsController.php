<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MeatInSandwichOptions;

class MeatInSandwichOptionsController extends Controller
{
    public function index(){
        return MeatInSandwichOptions::all();
    }
}
