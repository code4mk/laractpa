<?php

use Illuminate\Database\Seeder;

class UserxInfoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      factory(App\UserxInfo::class, 1500)->create();
    }
}
