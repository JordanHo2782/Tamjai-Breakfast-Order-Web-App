<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMeatInTomatoNoodleOptionsInBundles extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('meat_in_tomato_noodle_options_in_bundles', function (Blueprint $table) {
            $table->unsignedBigInteger('item_id');
            $table->foreign('item_id')->references('item_id')->on('items');
            $table->string('english_name');
            $table->string('traditional_chinese_name');
            $table->double('price_change');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('meat_in_tomato_noodle_options_in_bundles');
    }
}
