<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order', function (Blueprint $table) {
            $table->bigIncrements('order_id');

            $table->unsignedBigInteger('restaurant_id');
            $table->foreign('restaurant_id')->references('restaurant_id')->on('restaurants');
            $table->string('restaurant_name');
            $table->string('dine_location');
            $table->integer('sit_number')->nullable()->unsigned();

            $table->unsignedBigInteger('product_id');
            $table->foreign('product_id')->references('product_id')->on('products');
            $table->string('product_english_name');
            $table->double('price','6','4');
            $table->json('options_selected');

            $table->uuid('order_identifier');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order');
    }
}
