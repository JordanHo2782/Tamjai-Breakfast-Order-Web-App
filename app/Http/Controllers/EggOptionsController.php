<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EggOptions;

class EggOptionsController extends Controller
{
    public function index(){
        return EggOptions::all();
    }
}
