<?php

namespace Database\Factories;

use App\Models\ToastInBundlesOptions;
use App\Models\Items;
use Illuminate\Database\Eloquent\Factories\Factory;

class ToastInBundlesOptionsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ToastInBundlesOptions::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'item_id'=>numberBetween(1, Items::count()),
            'english_name' => $this->faker->name,
            'traditional_chinese_name' => $this->faker->name,
            'price_change'=>$this->faker->fakerrandomFloat(1, 0, 100),
        ];
    }
}
