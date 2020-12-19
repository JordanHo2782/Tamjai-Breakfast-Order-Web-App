<!-- <?php

// namespace App\Http\Controllers;

// use Illuminate\Http\Request;
// use App\Models\Products;
// use App\Models\ProductDescriptions;

// class ViewProductsController extends Controller
// {
//     function index(){
//         $products = Products::all()->toArray();
//         $products_copy_array = $products;
//         for($count=0;$count<=sizeof($products)-1; $count++){
//             $product_in_array = $products[$count];
//             $product_in_array['product_descriptions'] = ProductDescriptions::where('product_id', $count+1)->get()->toArray();
//             //1. Extract the element in the array
//             //2. Add the product_descriptions in the array
//             //3. Add the element back into the array
//             array_splice($products_copy_array,$count,1,[$product_in_array]);
//         }
//         return $products_copy_array;
//     }

//     function show_by_category_id($category_id){
//         $products = Products::where('category_id', $category_id)->get()->toArray();
//         $products_copy_array = $products;
//         for($count=0;$count<=sizeof($products)-1; $count++){
//             $product_in_array = $products[$count];
//             $product_in_array['product_descriptions'] = ProductDescriptions::where('product_id', $product_in_array['product_id'])->get()->toArray();
//             array_splice($products_copy_array,$count,1,[$product_in_array]);
//         }
//         return $products_copy_array;
//     }
// } -->
