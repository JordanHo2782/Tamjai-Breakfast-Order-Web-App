<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AdditionalMeat;

class AdditionalMeatController extends Controller
{
    public function index(){
        return AdditionalMeat::all();
    }
}
