<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AdditionalMeatInSandwichOptions;

class AdditionalMeatInSandwichOptionsController extends Controller
{
    public function index(){
        return AdditionalMeatInSandwichOptions::all();
    }
}
