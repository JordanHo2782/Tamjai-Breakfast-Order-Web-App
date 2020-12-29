<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $table = 'product_order';
    protected $fillable = [
        'restaurant_id',
        'restaurant_name',
        'dine_location',
        'sit_number',
        'product_id',
        'product_english_name',
        'price',
        'options_selected',
        'order_identifier'
    ];
}
