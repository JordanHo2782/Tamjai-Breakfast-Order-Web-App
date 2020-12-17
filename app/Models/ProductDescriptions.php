<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductDescriptions extends Model
{
    use HasFactory;
    protected $table = 'product_descriptions';
    public $timestamps = false;
    protected $fillable = [
        'is_muted',
        'english_text',
        'traditional_chinese_text',
    ];
}
