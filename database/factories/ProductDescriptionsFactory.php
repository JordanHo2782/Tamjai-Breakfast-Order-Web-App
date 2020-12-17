<?php

namespace Database\Factories;

use App\Models\ProductDescriptions;
use App\Models\Products;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductDescriptionsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ProductDescriptions::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'product_id'=>$this->faker->unique()->numberBetween(1, Products::count()),
            'is_muted'=>$this->faker->boolean,
            'english_text'=>$this->faker->sentence($nbWords = 10, $variableNbWords = true),
            'traditional_chinese_text'=>$this->faker->sentence($nbWords = 10, $variableNbWords = true),
        ];
    }
}
