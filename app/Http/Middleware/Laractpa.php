<?php

namespace App\Http\Middleware;

use Closure;
use Config;
use Exception;

class Laractpa
{
  /**
   * Handle an incoming request.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \Closure  $next
   * @return mixed
   */
  public function handle($request, Closure $next)
  {
    try {
      // barear token
      $bearerToken = " ";
      if(!empty($request->header(Config::get('laractpa.barearTokenName')))){
        $bearer  = explode(" ", $request->header(Config::get('laractpa.barearTokenName')));
        $bearerToken = $bearer[1];
      //  return response()->json($bearerToken);
      }
      if(($bearerToken === Config::get('laractpa.barearToken'))) {
        return $next($request);
      } else {
        return response()->json('unauthorized',401);
      }
    } catch (\Exception $e) {
      return response()->json("sorry,can't access");
    }
  }
}
