<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AdditionalMeatInSandwichesInBundlesOptions;

class AdditionalMeatInSandwichesInBundlesOptionsController extends Controller
{
    public function index(){
        return AdditionalMeatInSandwichesInBundlesOptions::all();
    }
}
