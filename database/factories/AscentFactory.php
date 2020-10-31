<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Ascent;
use App\Mountain;
use App\Mountaineer;
use Faker\Generator as Faker;

$factory->define(Ascent::class, function (Faker $faker) {
    return [
        'mountain_id' => function(){
            return create(Mountain::class);
        },
        'mountaineer_id' => function(){
            return create(Mountaineer::class);
        },
        'ascent_date' => $faker->date( 'Y-m-d')
    ];
});
