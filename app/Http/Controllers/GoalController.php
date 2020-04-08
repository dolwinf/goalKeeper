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

            public function edit($id){
               
                $goal = Goals::findOrFail($id);
                return response()->json([
                    'goal' => $goal
                ]);
            }
            
            public function update(Request $request, $id){
               
                $data = $request->all();
                
                $goal = Goals::findOrFail($id);
                $goal->update($data);
                return response()->json($goal->with('user')->find($goal->id));
            }

            public function fetch($id){
                
                $fetchedGoal = Goals::findOrFail($id);

                return response()->json($fetchedGoal);
            }

            public function destroy($id){
                
                Goals::findOrFail($id)->delete();
            }

            public function kick($id)
      {
          $goal = Goals::findOrFail($id);
        $goal->completed = false;
        $goal->update();

        return response()->json($goal);
      }

      public function undo($id)
      {
          $goal = Goals::findOrFail($id);
        $goal->completed = true;
        $goal->update();

        return response()->json($goal);
      }

}