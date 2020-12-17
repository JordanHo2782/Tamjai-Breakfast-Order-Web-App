<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductCategories;

class ViewProductCategoriesController extends Controller
{
    public function index(){
        return ProductCategories::all();
    }
}
