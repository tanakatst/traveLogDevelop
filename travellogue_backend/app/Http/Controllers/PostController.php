<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    //

    public function getPost(Request $request){
       $posts = Post::where('user_id', \Auth::id())->get();
       return response()->json($posts);
    }

    public function post(Request $request){
        $post = Post::create([
            "title"=> $request->title,
            "prefecture" => $request->prefecture,
            "content"=> $request->content,
            "user_id"=> \Auth::id()
        ]);
        return response()->json($post, 200);
    }
}







