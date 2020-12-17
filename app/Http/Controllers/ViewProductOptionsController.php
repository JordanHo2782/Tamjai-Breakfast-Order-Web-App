<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Models\Products;
use App\Models\ProductDescriptions;
use App\Models\DrinksOptionsInBundles;
use App\Models\MiniNoodlesInBundlesOptions;
use App\Models\AdditionalMeatInBundles;

use App\Models\ToastInBundlesOptions;
use App\Models\NoodlesInBundlesOptions;
use App\Models\EggsInBundlesOptions;

use App\Models\ChickenInBundlesOption;

use App\Models\BakedBeanInBundlesOptions;
use App\Models\BunInBundlesOptions;

use App\Models\NissanNoodlesInBundlesOptions;
use App\Models\MeatInNissanNoodlesInBundlesOptions;

use App\Models\BreadInSandwichesInBundlesOptions;
use App\Models\MeatInSandwichesInBundlesOptions;

use App\Models\NoodleInTomatoNoodleInBundlesOptions;
use App\Models\MeatInTomatoNoodleOptionsInBundles;

class ViewProductOptionsController extends Controller
    {
        public function show_by_product_id($category_id, $product_id){
            $product = Products::where('product_id', $product_id)->get();
            $product[0]['product_descriptions'] = ProductDescriptions::where('product_id', $product_id)->get()->toArray();
            $product_options = array();

            if($product_id>0&&$product_id<7){
                $drinks_options_in_bundles = DrinksOptionsInBundles::all()->toArray();
                $mini_noodles_in_bundles_options = MiniNoodlesInBundlesOptions::all()->toArray();
                $additional_meat_in_bundles = AdditionalMeatInBundles::all()->toArray();
                array_push($product_options, $drinks_options_in_bundles, $mini_noodles_in_bundles_options, $additional_meat_in_bundles);
                switch($product_id){
                    case 1:
                        $toast_in_bundles_options = ToastInBundlesOptions::all()->toArray();
                        $noodles_in_bundles_options = NoodlesInBundlesOptions::all()->toArray();
                        $eggs_in_bundles_options = EggsInBundlesOptions::all()->toArray();
                        array_push($product_options, $toast_in_bundles_options, $noodles_in_bundles_options, $eggs_in_bundles_options);
                        break;
                    case 2:
                        //1. have toast
                        //2. have egg
                        //3. have chicken
                        $toast_in_bundles_options = ToastInBundlesOptions::all()->toArray();
                        $eggs_in_bundles_options = EggsInBundlesOptions::all()->toArray();
                        $chicken_in_bundles_options = ChickenInBundlesOption::all()->toArray();
                        array_push($product_options, $toast_in_bundles_options, $eggs_in_bundles_options, $chicken_in_bundles_options);
                        break;
                    case 3:
                        //1. have noodle
                        //2. have egg
                        //3. have baked bean
                        //4. HaveBun
                        $noodles_in_bundles_options = NoodlesInBundlesOptions::all()->toArray();
                        $eggs_in_bundles_options = EggsInBundlesOptions::all()->toArray();
                        $baked_beans_in_bundles_options = BakedBeanInBundlesOptions::all()->toArray();
                        $bun_in_bundles_options = BunInBundlesOptions::all()->toArray();
                        array_push($product_options, $noodles_in_bundles_options, $eggs_in_bundles_options, $baked_beans_in_bundles_options, $bun_in_bundles_options);
                        break;
                    case 4:
                        //1. HaveNissanNoodle
                        //2. HaveMeatInNissanNoodle
                        $nissan_noodles_in_bundles_options = NissanNoodlesInBundlesOptions::all()->toArray();
                        $meat_in_nissan_noodles_in_bundles_options = MeatInNissanNoodlesInBundlesOptions::all()->toArray();
                        array_push($product_options, $nissan_noodles_in_bundles_options, $meat_in_nissan_noodles_in_bundles_options);
                        break;
                    case 5:
                        $bread_in_sandwiches_in_bundles_options = BreadInSandwichesInBundlesOptions::all()->toArray();
                        $meat_in_sandwiches_in_bundles_options = MeatInSandwichesInBundlesOptions::all()->toArray();
                        array_push($product_options, $bread_in_sandwiches_in_bundles_options, $meat_in_sandwiches_in_bundles_options);
                        break;
                        //1. HaveBreadInSandwiches
                        //2. HaveMeatInSandwiches
                    case 6:
                        $meat_in_tomato_noodle_options_in_bundle = MeatInTomatoNoodleOptionsInBundles::all()->toArray();
                        $noodle_in_tomato_noodle_options_in_bundle = NoodleInTomatoNoodleInBundlesOptions::all()->toArray();
                        array_push($product_options, $meat_in_tomato_noodle_options_in_bundle, $noodle_in_tomato_noodle_options_in_bundle);
                        break;
                        //1. Have Meat In Tomato Noodle
                        //2. Have Noodle In Tomato Noodle
                }
            }

            $product[0]['product_options'] = $product_options;
            return $product;
        }
    }
