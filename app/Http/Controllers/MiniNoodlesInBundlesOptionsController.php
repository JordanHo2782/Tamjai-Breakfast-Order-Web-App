<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MiniNoodlesInBundlesOptions;

class MiniNoodlesInBundlesOptionsController extends Controller
{
    public function index(){
        return MiniNoodlesInBundlesOptions::all();
    }
}
