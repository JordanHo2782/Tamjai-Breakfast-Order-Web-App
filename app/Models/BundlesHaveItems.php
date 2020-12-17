<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BundlesHaveItems extends Model
{
    use HasFactory;
    protected $table = 'bundles_have_items';
    public $timestamps = false;
    protected $fillable = [
        'have_drink',
        'have_mini_noodle',
        'have_additional_meat',
        'have_toast',
        'have_noodle',
        'have_egg',
        'have_chicken',
        'have_baked_bean',
        'have_bun',
        'have_nissan_noodle',
        'have_meat_in_nissan_noodle',
        'have_additional_meat_in_nissan_noodle',
        'have_bread_in_sandwiches',
        'have_meat_in_sandwiches',
        'have_additional_meat_in_sandwiches',
        'have_meat_in_tomato_noodle',
        'have_noodle_in_tomato_noodle',
    ];
}
