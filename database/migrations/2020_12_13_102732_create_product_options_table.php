<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductOptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_options', function (Blueprint $table) {
            $table->bigIncrements('have_items_id');
            $table->unsignedBigInteger('product_id');
            $table->foreign('product_id')->references('product_id')->on('products');
            $table->boolean('drink_options');
            $table->boolean('mini_noodle_options');
            $table->boolean('additional_meat_options');
            $table->boolean('toast_options');
            $table->boolean('noodle_options');
            $table->boolean('egg_options');
            $table->boolean('chicken_options');
            $table->boolean('baked_bean_options');
            $table->boolean('bun_options');
            $table->boolean('nissan_noodle_options');
            $table->boolean('meat_in_nissan_noodle_options');
            $table->boolean('additional_meat_in_nissan_noodle_options');
            $table->boolean('bread_in_sandwiches_options');
            $table->boolean('meat_in_sandwiches_options');
            $table->boolean('additional_meat_in_sandwiches_options');
            $table->boolean('meat_in_tomato_noodle_options');
            $table->boolean('noodle_in_tomato_noodle_options');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_options');
    }
}
