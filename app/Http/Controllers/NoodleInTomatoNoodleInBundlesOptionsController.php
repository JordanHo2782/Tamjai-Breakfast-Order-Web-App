<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NoodleInTomatoNoodleInBundlesOptions;

class NoodleInTomatoNoodleInBundlesOptionsController extends Controller
{
    public function index(){
        return NoodleInTomatoNoodleInBundlesOptions::all();
    }
}
