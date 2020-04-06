<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Goals;

class GoalController extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }


    public function index(Request $request, Goals $goal){
        $allGoals = $goal->whereIn('user_id', $request->user())->with('user');
        $sortedGoals = $allGoals->orderBy('created_at', 'DESC')->take(10)->get();
        return response()->json([
            'sortedGoals' => $sortedGoals
        ]);
    }

    public function store(Request $request){
    
        $this->validate($request, [
            'goal' => 'required'
        ]);
       
      //create a goal based on user relationship
        
      $goal = $request->user()->goals()->create([
          'goal' => $request->goal
      ]);

      //return with user
      return response()->json($goal->with('user')->find($goal->id));
}
}