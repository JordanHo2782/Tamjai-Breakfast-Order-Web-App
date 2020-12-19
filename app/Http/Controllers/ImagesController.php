<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class ImagesController extends Controller {
    function show_by_image_name($image_name){
        return response()->file('storage/images/'.$image_name);
    }
}
