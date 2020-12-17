<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdditionalMeatInSandwichesInBundlesOptions extends Model
{
    use HasFactory;
    protected $table = 'additional_meat_in_sandwiches_in_bundle_options';
    public $timestamps = false;
    protected $fillable = [
        'english_name',
        'traditional_chinese_name',
        'price_change',
    ];
}
