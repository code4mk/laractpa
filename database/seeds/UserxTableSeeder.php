<?php

use Illuminate\Database\Seeder;

class UserxTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      factory(App\Userx::class, 1500)->create();
    }
}
