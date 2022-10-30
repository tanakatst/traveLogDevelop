<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    //

    public function index(Request $request){
       $posts = Post::where('user_id', \Auth::id())->get();
       return response()->json($posts);
    }

    public function store(Request $request){
        $post = Post::create([
            "title"=> $request->title,
            "prefecture" => $request->prefecture,
            "content"=> $request->content,
            "user_id"=> \Auth::id()
        ]);
        $image = $request->file;
        return response()->json([$post,$image], 200);
    }
    public function update(Request $request, Post $post){
        {
            echo($request);
            $post->title = $request->title;
            $post->prefecture = $request->prefecture;
            $post->content = $request->content;
            return $post->update()
                ?response()->json($post)
                :response()->json([],500);
        }
    }
    public function destroy(Post $post)
    {
        return $post->delete()
            ? response()->json($post)
            : response()->json([],500);
    }
}







