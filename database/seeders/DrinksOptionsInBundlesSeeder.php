<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\DrinksOptionsInBundles;

class DrinksOptionsInBundlesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DrinksOptionsInBundles::factory()->times(20)->create();
    }
}
