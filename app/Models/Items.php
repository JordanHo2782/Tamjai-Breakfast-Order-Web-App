<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Items extends Model
{
    use HasFactory;
    protected $table = 'items';
    public $timestamps = false;
    protected $fillable = [
        'english_item_name',
        'traditional_chinese_item_name',
    ];
}
