<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Hash;
use Auth;

class ReactController extends Controller
{
    public function login(Request $request)
    {
        $username = $request->username;
        $password =  $request->password;

        $user = User::where(function($query) use($username){
                        $query->where('email',$username)
                              ->orWhere('username',$username);
                       })->first();


        $isPassword = false;

        if($user){
            if(Hash::check($password,$user->password)){
                $isPassword = true;
            }
        }

        if($isPassword){
            Auth::loginUsingId($user->id, true);
            return response()->json([
                'status' => true,
                'auth' => 'true',
                'user'   => $user->id
            ]);
        }else{
            return response()->json([
                'status' => false
            ]);
        }
    }

    public function logout()
    {
      Auth::logout();
      return response()->json([
        'status' => 'done'
      ]);
    }
}
