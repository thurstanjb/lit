<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Upload;
use App\User;
use Faker\Generator as Faker;

$factory->define(Upload::class, function (Faker $faker) {
    return [
        'filename' => $faker->word .'.'. $faker->fileExtension,
        'folder' => $faker->word,
        'storage_path' => '/'. $faker->domainWord . '/' . $faker->slug,
        'user_id' => function() {
            return factory(User::class);
        }
    ];
});
