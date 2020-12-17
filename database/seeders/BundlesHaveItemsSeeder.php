<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\BundlesHaveItems;

class BundlesHaveItemsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        BundlesHaveItems::factory()->times(20)->create();
    }
}
