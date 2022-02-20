<?php

namespace Database\Seeders;

use App\Contracts\JokeAPIServiceContract as JokeApiService;
use App\Models\Joke;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;

class JokesSeeder extends Seeder
{
    private $jokeService;

    public function __construct(JokeApiService $jokeService)
    {
        $this->jokeService = $jokeService;
    }
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Call api to get some jokes - max 10 per call
        $this->jokeService->importJokes(50);
    }
}
