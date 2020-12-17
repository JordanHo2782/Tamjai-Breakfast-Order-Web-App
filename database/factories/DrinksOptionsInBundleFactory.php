<?php

namespace Database\Factories;

use App\Models\DrinksOptionsInBundles;
use App\Models\Items;
use Illuminate\Database\Eloquent\Factories\Factory;

class DrinksOptionsInBundlesFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = DrinksOptionsInBundles::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'item_id'=>$this->faker->numberBetween(1, Items::count()),
            'english_name'=>$this->faker->name,
            'traditional_chinese_name'=>$this->faker->name,
            'price_change'=>$this->faker->randomFloat(1, 0, 100),
            'have_milk'=>$this->faker->boolean,
            'have_coffee'=>$this->faker->boolean,
            'have_lemon'=>$this->faker->boolean,
            'have_honey'=>$this->faker->boolean,
            'have_watercress'=>$this->faker->boolean,
            'have_ovaltine'=>$this->faker->boolean,
            'have_horlick'=>$this->faker->boolean,
            'have_ice'=>$this->faker->boolean,
        ];
    }
}
