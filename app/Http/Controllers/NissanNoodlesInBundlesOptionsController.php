<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NissanNoodlesInBundlesOptions;

class NissanNoodlesInBundlesOptionsController extends Controller
{
    public function index(){
        return NissanNoodlesInBundlesOptions::all();
    }
}
