<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BakedBeanOptions;

class BakedBeanOptionsController extends Controller
{
    public function index(){
        return BakedBeanOptions::all();
    }
}
