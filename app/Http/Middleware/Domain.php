<?php

namespace App\Http\Middleware;

use Closure;
use Config;

class Domain
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next,$service)
    {


        $getService = (string) $service;
        $isDomain = Config::get('domain'. '.' . $getService . '.domain' );
        $parseURI = parse_url(request()->root());
        if($isDomain){

          $path = str_replace('/'.Config::get('domain'. '.' . $getService . '.slug' ), "", request()->getRequestUri());
          //$parseURI['port']
          // $request->path()
          return redirect()->to($parseURI['scheme'].'://'. Config::get('domain'. '.' . $getService . '.slug' ) . '.' . $parseURI['host'].$path);
        }
        return $next($request);
    }
}
