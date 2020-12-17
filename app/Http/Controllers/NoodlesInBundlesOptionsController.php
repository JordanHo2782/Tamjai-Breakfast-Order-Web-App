<?php

namespace App\Http\Controllers;
use App\Models\NoodlesInBundlesOptions;

use Illuminate\Http\Request;

class NoodlesInBundlesOptionsController extends Controller
{
    public function index(){
        return NoodlesInBundlesOptions::all();
    }
}
