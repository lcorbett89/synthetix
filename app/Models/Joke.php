<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Joke extends Model
{
    use HasFactory;

    protected $fillable = [
        'setup',
        'delivery'
    ];

    public function votes()
    {
        return $this->belongsToMany(User::class)->withTimestamps();
    }
}
