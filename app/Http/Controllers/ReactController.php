<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Post;
use Hash;
use Auth;

class ReactController extends Controller
{

  public function register(Request $request)
  {

    $messages = [
        'name.required' => 'Must be Need a name',
        'username.required' => 'Must be Need a username',
        'email.required' => 'Must be Need a email',
        'password.required' => 'Must be Need a appointment password'
      ];
      $validator = \Validator::make($request->all(), [
            'name' => 'required',
            'username' => 'required',
            'email' => 'required',
            'password' => 'required',
        ],$messages);
        if ($validator->fails())
        {
            return response()->json([
              'staus' => 'error',
              'errors'=>$validator->errors()
            ]);
        }
    $user =  new User;
    $user->name = $request->name;
    $user->username = $request->username;
    $user->email = $request->email;
    $user->password = bcrypt($request->password);
    $user->save();
    return response()->json([
      'staus' => 'done'
    ]);

  }
    public function login(Request $request)
    {

      $messages = [
          'username.required' => 'Must be Need username or email',
          'password.required' => 'Must be Need  password',

        ];
        $validator = \Validator::make($request->all(), [
              'username' => 'required',
              'password' => 'required',
          ],$messages);
          if ($validator->fails())
          {
              return response()->json([
                'staus' => false,
                'errors'=>$validator->errors()
              ]);
          }

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
                'user'   => $user->id,
                'name' => $user->name
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

    public function info()
    {
      return response()->json(Auth::user());
    }

    public function posts()
    {
      $posts = Post::all();
      return response()->json($posts);
    }

    public function createPost(Request $request)
    {
      $messages = [
          'title.required' => 'Must be Need a title',
          'details.required' => 'Must be Need  details',

        ];
        $validator = \Validator::make($request->all(), [
              'title' => 'required',
              'details' => 'required',
          ],$messages);
          if ($validator->fails())
          {
              return response()->json([
                'staus' => 'error',
                'errors'=>$validator->errors()
              ]);
          }
      $post = new Post;
      $post->title = $request->title;
      $post->details = $request->details;
      $post->save();
      return response()->json([
        'status' => 'done'
      ]);
    }

    public function showPost(Request $request)
    {
      $post = Post::where('id',$request->id)->first();
      return response()->json($post);
    }
}
