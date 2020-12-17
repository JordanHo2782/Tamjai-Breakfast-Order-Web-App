<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BunInBundlesOptions;

class BunInBundlesOptionsController extends Controller
{
    public function index(){
        return BunInBundlesOptions::all();
    }
}
