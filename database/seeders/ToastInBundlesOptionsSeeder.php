<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ToastInBundleOptions;

class ToastInBundlesOptionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ToastInBundlesOptions::factory()->times(5)->create();
    }
}
