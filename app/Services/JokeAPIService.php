<?php
namespace App\Services;

use App\Contracts\JokeAPIServiceContract;
use App\Models\Joke;
use App\Models\User;
use Illuminate\Support\Facades\Http;

class JokeAPIService implements JokeAPIServiceContract
{
    private $url = 'https://v2.jokeapi.dev/joke/Programming';

    private $options = [
        'safe-mode',
        'type' => 'twopart',
        'amount' => '10'
    ];

    public function importJokes(int $count)
    {
        for ($i = 0; $i < $count; $i += 10) {
            $jokeApiData = Http::get($this->url, $this->options);

            collect($jokeApiData->json()['jokes'])->map(function ($attributes) {
                $joke = $this->saveJoke($attributes);
                
                $this->saveVotes($joke);
            });
        }
    }

    private function saveJoke(array $attributes): Joke
    {
        // Save the Joke into the database if it doesn't exist already
        return Joke::firstOrCreate(
            [
                'joke_id' => $attributes['id']
            ],
            [
                'joke_id' => $attributes['id'],
                'setup' => $attributes['setup'],
                'delivery' => $attributes['delivery']
            ]
        );
    }

    private function saveVotes(Joke $joke): Joke
    {
        if ($joke->wasRecentlyCreated) {
            $userIds = User::select('id')->pluck('id')->toArray();

            shuffle($userIds);

            $votedBy = array_slice($userIds, 0, rand(1, count($userIds)));
            
            // randomly assign votes to jokes from various users
            $joke->votes()->sync($votedBy);
        }

        return $joke;
    }
}
