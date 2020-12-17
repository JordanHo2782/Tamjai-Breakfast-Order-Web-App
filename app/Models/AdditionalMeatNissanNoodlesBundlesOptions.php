<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdditionalMeatNissanNoodlesBundlesOptions extends Model
{
    use HasFactory;
    protected $table = 'additional_meat_nissan_noodles_bundles_options';
    public $timestamps = false;
    protected $fillable = [
        'english_name',
        'traditional_chinese_name',
        'price_change',
    ];
}
