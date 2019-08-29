<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\UserxInfo;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(UserxInfo::class, function (Faker $faker) {
    return [
        'data1' => $faker->name,
        'data2' => $faker->name,
        'data3' => $faker->companyEmail,
        'data4' => $faker->email,
        'data5' => $faker->domainName,
        'data6' => $faker->paragraph($nbSentences = 3, $variableNbSentences = true),
        'data7' => $faker->name,
        'data8' => $faker->name,
        'data9' => $faker->name,
        'data10' => $faker->swiftBicNumber,
        'amount' => $faker->randomNumber(2),

    ];
});
