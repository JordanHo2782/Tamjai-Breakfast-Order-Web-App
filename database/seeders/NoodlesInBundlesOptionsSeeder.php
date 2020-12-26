<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\NoodlesInBundlesOptions;

class NoodlesInBundlesOptionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        NoodlesInBundlesOptions::factory()->times(20)->create();
    }
}
