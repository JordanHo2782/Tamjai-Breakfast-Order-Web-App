<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BreadInSandwichesInBundlesOptions extends Model
{
    use HasFactory;
    protected $table = 'bread_in_sandwiches_in_bundles_options';
    public $timestamps = false;
    protected $fillable = [
        'english_name',
        'traditional_chinese_name',
        'price_change',
    ];
}