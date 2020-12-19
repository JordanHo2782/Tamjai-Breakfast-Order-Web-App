<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ToastOptions;

class ToastOptionsController extends Controller
{
    public function index(){
        return ToastOptions::all();
    }
}
