<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Database\Seeder\Restaurant;
use App\Models\Products;
use App\Models\ProductDescriptions;
use App\Models\BundlesHaveItems;
use App\Models\DrinksOptionsInBundles;
use App\Models\ToastInBundleOptions;
use App\Models\MiniNoodlesBundlesOptions;
use App\Models\AdditionalMeatInBundles;
use App\Models\NoodlesInBundlesOptions;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(RestaurantSeeder::class);
        $this->call(ProductsSeeder::class);
        $this->call(ProductDescriptionsSeeder::class);
        $this->call(BundlesHaveItemsSeeder::class);
        $this->call(DrinksOptionsInBundlesSeeder::class);
        $this->call(ToastInBundleOptionsSeeder::class);
        $this->call(MiniNoodlesBundlesOptionsSeeder::class);
        $this->call(AdditionalMeatInBundlesSeeder::class);
        $this->call(NoodlesInBundlesOptionsSeeder::class);
    }
}
