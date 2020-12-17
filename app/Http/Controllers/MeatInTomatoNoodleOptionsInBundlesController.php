<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MeatInTomatoNoodleOptionsInBundles;

class MeatInTomatoNoodleOptionsInBundlesController extends Controller
{
    public function index(){
        return MeatInTomatoNoodleOptionsInBundles::all();
    }
}
