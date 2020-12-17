<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NoodlesInBundlesOptions extends Model
{
    use HasFactory;
    protected $table = 'noodles_in_bundles_options';
    public $timestamps = false;
    protected $fillable = [
        'english_name',
        'traditional_chinese_name',
        'price_change',
    ];
}
