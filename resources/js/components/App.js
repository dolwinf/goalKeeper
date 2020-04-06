import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
    const [goal, setGoal] = useState("");
    const [allGoals, setAllGoals] = useState([]);

    useEffect(() => {
        Axios.get("/goal").then((response) => {
            console.log(response.data.sortedGoals);
            setAllGoals(response.data.sortedGoals);
        });
    }, []);

    const handleChange = (e) => {
        setGoal(e.target.value);
    };

    const displayGoals = () => {
        return allGoals.map((goal) => (
            <div key={goal.id} className="row-md3 div-space">
                {goal.goal}
            </div>
        ));
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        Axios.post("/goal", { goal }).then((response) => {
            setAllGoals(response.data);
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
                                        className="btn btn-primary btn-space"
                                    >
                                        Set Goal
                                    </button>
                                </div>
                            </form>
                            <hr />
                            {allGoals.length > 0
                                ? displayGoals()
                                : "Loading..."}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
