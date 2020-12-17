<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BundlesHaveItems;

class BundlesHaveItemsController extends Controller
{
    public function index(){
        return BundlesHaveItems::all();
    }
}
