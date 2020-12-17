<?php

namespace Database\Factories;

use App\Models\BundlesHaveItems;
use App\Models\Products;
use Illuminate\Database\Eloquent\Factories\Factory;

class BundlesHaveItemsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = BundlesHaveItems::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'product_id'=>$this->faker->numberBetween(1, Products::count()),
            'have_drink'=>$this->faker->boolean,
            'have_mini_noodle'=>$this->faker->boolean,
            'have_additional_meat'=>$this->faker->boolean,
            'have_toast'=>$this->faker->boolean,
            'have_noodle'=>$this->faker->boolean,
            'have_egg'=>$this->faker->boolean,
            'have_chicken'=>$this->faker->boolean,
            'have_baked_bean'=>$this->faker->boolean,
            'have_bun'=>$this->faker->boolean,
            'have_nissan_noodle'=>$this->faker->boolean,
            'have_meat_in_nissan_noodle'=>$this->faker->boolean,
            'have_additional_meat_in_nissan_noodle'=>$this->faker->boolean,
            'have_bread_in_sandwiches'=>$this->faker->boolean,
            'have_meat_in_sandwiches'=>$this->faker->boolean,
            'have_additional_meat_in_sandwiches'=>$this->faker->boolean,
            'have_meat_in_tomato_noodle'=>$this->faker->boolean,
            'have_noodle_in_tomato_noodle'=>$this->faker->boolean,
        ];
    }
}
