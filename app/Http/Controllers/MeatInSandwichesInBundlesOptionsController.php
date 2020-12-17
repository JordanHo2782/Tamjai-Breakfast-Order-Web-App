<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MeatInSandwichesInBundlesOptions;

class MeatInSandwichesInBundlesOptionsController extends Controller
{
    public function index(){
        return MeatInSandwichesInBundlesOptions::all();
    }
}
