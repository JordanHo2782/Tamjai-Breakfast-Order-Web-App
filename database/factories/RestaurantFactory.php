<?php

namespace Database\Factories;

use App\Models\Restaurant;
use Illuminate\Database\Eloquent\Factories\Factory;

class RestaurantFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Restaurant::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'english_name'=>$this->faker->name,
            'traditional_chinese_name'=>$this->faker->name,
            'sit_number'=>$this->faker->numberBetween($min = 1, $max = 50),
            'x_coordinate'=>$this->faker->latitude($min = -90, $max = 90),
            'y_coordinate'=>$this->faker->longitude($min = -180, $max = 180),
        ];
    }
}
