<?php

use Illuminate\Database\Seeder;

class TicketAttachTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      factory(App\Model\TicketAttach::class, 500)->create();
    }
}
