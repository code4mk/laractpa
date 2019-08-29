<?php

use Illuminate\Database\Seeder;

class TicketReplyTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      factory(App\Model\TicketReply::class, 500)->create();
    }
}
