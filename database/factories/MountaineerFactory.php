<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Mountaineer;
use Faker\Generator as Faker;

$factory->define(Mountaineer::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'slug' => $faker->slug
    ];
});
