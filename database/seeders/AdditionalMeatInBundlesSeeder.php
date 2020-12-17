<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\AdditionalMeatInBundles;

class AdditionalMeatInBundlesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        AdditionalMeatInBundles::factory()->times(5)->create();
    }
}
