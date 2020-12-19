<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ChickenOption;

class ChickenOptionsController extends Controller
{
    public function index(){
        return ChickenOption::all();
    }
}
