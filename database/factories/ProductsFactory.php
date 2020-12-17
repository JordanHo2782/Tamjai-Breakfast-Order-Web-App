<?php

namespace Database\Factories;

use App\Models\Products;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Products::class;

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
            'photo'=>'https://source.unsplash.com/random',
            'price'=>$this->faker->randomFloat(1, 0, 100),
            'product_category'=>$this->faker->name,
        ];
    }
}
