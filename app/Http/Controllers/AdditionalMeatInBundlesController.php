<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AdditionalMeatInBundles;

class AdditionalMeatInBundlesController extends Controller
{
    public function index(){
        return AdditionalMeatInBundles::all();
    }
}
