import React, { useState, useEffect } from "react";
import Axios from "axios";
import Goal from "./Goal";

function App() {
    const [goal, setGoal] = useState("");
    const [allGoals, setAllGoals] = useState([]);

    useEffect(() => {
        Axios.get("/goal").then(response => {
            console.log(response);
            setAllGoals(response.data.sortedGoals);
        });
    }, []);

    const handleChange = e => {
        setGoal(e.target.value);
    };

    const handleDelete = id => {
        const updatedGoals = allGoals.filter(goal => goal.id !== id);
        setAllGoals(updatedGoals);
        Axios.delete(`/goal/${id}`);
    };

    const displayGoals = () => {
        return allGoals.map(goal => (
            <Goal key={goal.id} goal={goal} handleDelete={handleDelete} />
        ));
    };
    const handleSubmit = e => {
        e.preventDefault();

        Axios.post("/goal", { goal }).then(response => {
            setAllGoals([response.data, ...allGoals]);
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
                                    maxLength="50"
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
                            {displayGoals()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
