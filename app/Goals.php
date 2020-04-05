<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Goals extends Model
{
    //
    protected $fillable = ['goal'];
    public function user(){
        return $this->belongsTo(User::class);
    }
    
}
