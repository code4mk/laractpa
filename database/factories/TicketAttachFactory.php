<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Model\TicketAttach;
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

$factory->define(TicketAttach::class, function (Faker $faker) {
    return [
        'reply_id' => $faker->randomDigit,
        'ticket_id' => $faker->randomDigit,
        'file' => $faker->imageUrl($width = 640, $height = 480),
        'doc_type' => 'img'
    ];
});
