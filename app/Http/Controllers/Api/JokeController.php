<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\JokeResource;
use App\Models\Joke;
use Illuminate\Http\Request;

class JokeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->has('voteable') && auth()->check()) {
            return JokeResource::collection(
                Joke::whereDoesntHave('votes', function ($q) {
                    $q->where('users.id', auth()->id());
                })
                ->inRandomOrder()
                ->limit(2)
                ->get()
            );
        }

        return JokeResource::collection(Joke::withCount('votes')->orderByDesc('votes_count')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Joke  $joke
     * @return \Illuminate\Http\Response
     */
    public function show(Joke $joke)
    {
        return new JokeResource($joke->load('votes'));
    }
}
