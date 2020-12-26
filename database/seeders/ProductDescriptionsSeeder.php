<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ProductDescriptions;

class ProductDescriptionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ProductDescriptions::factory()->times(20)->create();
    }
}
