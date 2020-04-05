import React, { useState } from "react";
import Axios from "axios";

function App() {
    const [goal, setGoal] = useState("");
    const [allGoals, setAllGoals] = useState([]);

    const handleChange = (e) => {
        setGoal(e.target.value);
    };

    // const displayGoals = () => {
    //     allGoals.map((goal) => (
    //         <div key={goal.id} className="row-md3">
    //             {goal.goal}
    //         </div>
    //     ));
    // };
    const handleSubmit = (e) => {
        e.preventDefault();

        Axios.post("/goal", { goal }).then((response) => {
            console.log(response);
            setAllGoals([response, ...allGoals]);
            console.log(allGoals);
            setGoal("");
        });
    };
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Set your Goals</div>

                        <div className="card-body">
                            <form
                                className="form-group"
                                onSubmit={handleSubmit}
                            >
                                <input
                                    type="text"
                                    required
                                    name="goal"
                                    className="form-control"
                                    value={goal}
                                    onChange={handleChange}
                                />
                                <div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Set Goal
                                    </button>
                                </div>
                            </form>
                            <hr />
                            {/* {displayGoals()} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
