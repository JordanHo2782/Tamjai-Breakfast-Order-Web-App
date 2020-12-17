<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BreadInSandwichesInBundlesOptions;

class BreadInSandwichesInBundlesOptionsController extends Controller
{
    public function index(){
        return BreadInSandwichesInBundlesOptions::all();
    }
}
