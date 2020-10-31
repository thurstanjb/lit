<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAscentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ascents', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('mountain_id')->index();
            $table->unsignedBigInteger('mountaineer_id')->index();
            $table->timestamp('ascent_date');
            $table->timestamps();

            $table->foreign('mountain_id')
                ->references('id')
                ->on('mountains')
                ->onDelete('cascade');

            $table->foreign('mountaineer_id')
                ->references('id')
                ->on('mountaineers')
                ->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ascents');
    }
}
