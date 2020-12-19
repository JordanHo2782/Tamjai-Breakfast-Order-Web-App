<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MeatInNissanNoodleOptions extends Model
{
    use HasFactory;
    protected $table = 'meat_in_nissan_noodle_options';
    public $timestamps = false;
    protected $fillable = [
        'english_name',
        'traditional_chinese_name',
        'price_change',
    ];
}
