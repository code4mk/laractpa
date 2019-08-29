<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    protected $table = "tickets";


    public function ticketReply(){
      return $this->hasMany(TicketReply::class, 'ticket_id', 'id');
    }

}
