<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductOptionNames extends Model
{
    use HasFactory;
    protected $table = 'product_option_names';
    public $timestamps = false;
    protected $fillable = [
        'english_name',
        'traditional_chinese_name'
    ];
}
