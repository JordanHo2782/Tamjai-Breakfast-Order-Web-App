<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BakedBeanInBundlesOptions;

class BakedBeanInBundlesOptionsController extends Controller
{
    public function index(){
        return BakedBeanInBundlesOptions::all();
    }
}
