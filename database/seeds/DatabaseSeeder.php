<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        // $this->call(UserxTableSeeder::class);
        // $this->call(UserxInfoTableSeeder::class);
        //$this->call(TicketTableSeeder::class);
        //$this->call(TicketReplyTableSeeder::class);
        $this->call(TicketAttachTableSeeder::class);
    }
}
