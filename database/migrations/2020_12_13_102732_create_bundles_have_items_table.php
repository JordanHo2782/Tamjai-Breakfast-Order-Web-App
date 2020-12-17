<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBundlesHaveItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bundles_have_items', function (Blueprint $table) {
            $table->bigIncrements('have_items_id');
            $table->unsignedBigInteger('product_id');
            $table->foreign('product_id')->references('product_id')->on('products');
            $table->boolean('have_drink');
            $table->boolean('have_mini_noodle');
            $table->boolean('have_additional_meat');
            $table->boolean('have_toast');
            $table->boolean('have_noodle');
            $table->boolean('have_egg');
            $table->boolean('have_chicken');
            $table->boolean('have_baked_bean');
            $table->boolean('have_bun');
            $table->boolean('have_nissan_noodle');
            $table->boolean('have_meat_in_nissan_noodle');
            $table->boolean('have_additional_meat_in_nissan_noodle');
            $table->boolean('have_bread_in_sandwiches');
            $table->boolean('have_meat_in_sandwiches');
            $table->boolean('have_additional_meat_in_sandwiches');
            $table->boolean('have_meat_in_tomato_noodle');
            $table->boolean('have_noodle_in_tomato_noodle');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bundles_have_items');
    }
}
