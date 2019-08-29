<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserxInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('userx_infos', function (Blueprint $table) {
            $table->bigIncrements('id');
            // $table->bigInteger('user_id')->nullable();
            $table->string('data1');
            $table->string('data2');
            $table->string('data3');
            $table->string('data4');
            $table->string('data5');
            $table->string('data6');
            $table->string('data7');
            $table->string('data8');
            $table->string('data9');
            $table->string('data10');
            $table->integer('amount');
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
        Schema::dropIfExists('userx_infos');
    }
}
