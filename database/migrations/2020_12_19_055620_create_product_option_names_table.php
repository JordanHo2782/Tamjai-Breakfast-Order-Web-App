<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductOptionNamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_option_names', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('have_items_id');
            $table->foreign('have_items_id')->references('have_items_id')->on('product_options');
            $table->string('english_name');
            $table->string('traditional_chinese_name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_option_names');
    }
}
