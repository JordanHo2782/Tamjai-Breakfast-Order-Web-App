<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DrinksOptionsInBundles;

class DrinksOptionsInBundlesController extends Controller
{
    public function index(){
        return DrinksOptionsInBundles::all();
    }
}
