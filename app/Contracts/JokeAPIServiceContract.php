<?php
namespace App\Contracts;

interface JokeAPIServiceContract
{
    /**
     * Get an array of jokes
     *
     * @return mixed
     */
    public function importJokes(int $count);
}
