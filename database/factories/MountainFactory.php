<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Mountain;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Mountain::class, function (Faker $faker) {
    $name = $faker->name;
    $book = $faker->word;
    return [
        'name' => $name,
        'height' => $faker->randomNumber(4),
        'book' => $book,
        'slug' => Str::slug($name.' '.$book, '-')
    ];
});
