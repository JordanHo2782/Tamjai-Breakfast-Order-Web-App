<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MiniNoodlesBundlesOptions;

class MiniNoodlesBundlesOptionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        MiniNoodlesBundlesOptions::factory()->times(5)->create();
    }
}
