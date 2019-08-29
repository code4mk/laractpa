<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class TicketReply extends Model
{
    protected $table = "ticket_replies";

    public function ticketAttach(){
      return $this->hasMany(TicketAttach::class, 'reply_id', 'id');
    }
}
