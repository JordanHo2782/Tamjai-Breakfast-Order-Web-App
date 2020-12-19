<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductOptions extends Model
{
    use HasFactory;
    protected $table = 'product_options';
    public $timestamps = false;
    protected $fillable = [
        'drink_options',
        'mini_noodle_options',
        'additional_meat_options',
        'toast_options',
        'noodle_options',
        'egg_options',
        'chicken_options',
        'baked_bean_options',
        'bun_options',
        'nissan_noodle_options',
        'meat_in_nissan_noodle_options',
        'additional_meat_in_nissan_noodle_options',
        'bread_in_sandwiches_options',
        'meat_in_sandwiches_options',
        'additional_meat_in_sandwiches_options',
        'meat_in_tomato_noodle_options',
        'noodle_in_tomato_noodle_options',
    ];

}
