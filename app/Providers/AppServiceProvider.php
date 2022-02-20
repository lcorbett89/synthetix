<?php

namespace App\Providers;

use App\Contracts\JokeAPIServiceContract;
use App\Services\JokeApiService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(JokeAPIServiceContract::class, JokeApiService::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
