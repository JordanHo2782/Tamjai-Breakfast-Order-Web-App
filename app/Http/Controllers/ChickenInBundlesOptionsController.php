<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ChickenInBundlesOption;

class ChickenInBundlesOptionsController extends Controller
{
    public function index(){
        return ChickenInBundlesOption::all();
    }
}
