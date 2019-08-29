<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Userx extends Model
{
    public function __construct()
    {
      parent::__construct();
      // if(empty($this->conuted)) {
      //     $this->conuted = self::sum('tnx_id');
      // }
    }
    protected $table = 'userx';
    public $conuted;

    public static function boot()
    {
      parent::boot();
      function retrieved()
      {
        $this->setData();
      }
    }

    public function setData()
    {
      $this->conuted = self::sum('tnx_id');
      return $this;
    }

    public function user_info()
    {
      return $this->belongsTo(UserxInfo::class, 'id', 'id');
    }

    public function user_info2()
    {
      return $this->belongsTo(UserxInfo::class, 'id', 'id');
    }

    public function user_info5()
    {
      return $this->user_info()->where('amount', '>=', 50);
    }

    public function user_info3()
    {
      return $this->user_info()->where('amount', '>=', 60);
    }

    public function tickets()
    {
      return $this->hasMany('App\Model\Ticket', 'user_id', 'id');
    }

    public function tickets_include()
    {
      return $this->hasMany('App\Model\TicketRec', 'user_id', 'id')->with();
    }
    public function ticketsRec() {

    }
  }
