<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('userx', function(){
  $u = App\Userx::with(['tickets', 'tickets.ticketReply', 'tickets.ticketReply.ticketAttach'])->limit(1500)->get();
  dd(App\Userx::first());
  // echo $u[0]->tickets->count()."\n";
  // echo '<pre>';
  // var_dump($u[1]->tickets);
  // echo $u[1]->tickets[0]->ticketReply->count()."\n";
  // echo '</pre>';
  // echo '<pre>';
  // var_dump($u[0]->tickets[0]->ticketReply);
  // echo '</pre>';

  // die();
  return var_dump(LARAVEL_START).var_dump($u).var_dump(microtime(1));
  // return response()->json($u);
  return view("executetime",["users"=>$u]);

  //return response()->json($u);
  $user = App\Userx::where('email','kamal@kamal.com')->first();
  $info = App\UserxInfo::where('data3','kamal@kamal.com')->get();
  $sum = App\Userx::sum('tnx_id');
  return response()->json(['user'=> $user,'sum_tnx' => $sum,'u_info'=> '$info']);
});

Route::get('userx-infoo', function(){
  $user = App\UserxInfo::where('data3','kamal@kamal.com')->first();
  $sum = App\UserxInfo::sum('id');
  return response()->json(['user'=> $user,'sum_data6' => $sum]);
});

Route::get('/', function () {
    return redirect('/react');
    //return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::prefix('react/api')->middleware(['laractpa'])->group(function () {
    Route::get('/login', 'ReactController@login');
    Route::get('/logout', 'ReactController@logout');
    Route::get('/u/info', 'ReactController@info');
    Route::get('/u/register', 'ReactController@register');
    Route::get('/posts', 'ReactController@posts');
    Route::get('/post/create', 'ReactController@createPost');
    Route::get('/post/show', 'ReactController@showPost');
});

Route::get('/react/{any?}',function(){
  return view('Laractpa');
})->where('any', '.*');
