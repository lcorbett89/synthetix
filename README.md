# installation instructions

install composer php dependencies
`composer install`

copy example environment config file
`cp .env.example .env`

generate a key for the application:
`php artisan key:generate`

set following variables for local development  
- APP_URL 
- DB_DATABASE

migrate and seed the database:
`php artisan migrate:fresh --seed`

install npm packages & compile resources
`npm install && npm run dev`

start Laravel's local development server using the Artisan CLI's serve command:
`php artisan serve`
