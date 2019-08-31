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
    public function handle($request, Closure $next,$service,$type='root')
    {
        $getService = (string) $service;
        $isDomain = Config::get('domain'. '.' . $getService . '.domain' );
        $parseURI = parse_url(request()->root());
        if($isDomain && $type === 'root'){

          $path = str_replace('/'.Config::get('domain'. '.' . $getService . '.slug' ), "", request()->getRequestUri());
          //$parseURI['port']
          // $request->path()
          return redirect()->to($parseURI['scheme'].'://'. Config::get('domain'. '.' . $getService . '.slug' ) . '.' . $parseURI['host'].$path);
        }

        if(!$isDomain && $type === 'sub'){
          // return response()->json(request()->getRequestUri());
          $uri = str_replace(Config::get('domain'. '.' . $getService . '.slug' ).'.', "", $parseURI['host']);
          return redirect()->to($parseURI['scheme'].'://'.$uri.'/'.Config::get('domain'. '.' . $getService . '.slug' ).request()->getRequestUri());
        }
        return $next($request);
    }
}
