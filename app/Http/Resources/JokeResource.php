<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class JokeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'setup' => $this->setup,
            'delivery' => $this->delivery,
            'votes_count' => $this->votes_count,
            'votes' => $this->whenLoaded('votes', UserResource::collection($this->votes), [])
        ];
    }
}
