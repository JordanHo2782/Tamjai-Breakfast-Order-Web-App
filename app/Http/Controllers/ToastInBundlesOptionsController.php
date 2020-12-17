<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ToastInBundlesOptions;

class ToastInBundlesOptionsController extends Controller
{
    public function index(){
        return ToastInBundlesOptions::all();
    }
}
