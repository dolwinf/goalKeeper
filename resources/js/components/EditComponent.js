import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default function EditComponent(props) {
    const [goal, setGoal] = useState("");

    const handleChange = (e) => {
        console.log(e.target.value);
        setGoal(e.target.value);
    };

    const handleSubmit = (e) => {
        console.log(goal);
        e.preventDefault();
        Axios.post(`/goal/${props.match.params.id}`, { goal }).then(
            (response) => {
                console.log(response);
                props.history.push("/home");
            }
        );
    };

    useEffect(() => {
        Axios.get(`/fetch/${props.match.params.id}`).then((response) => {
            console.log(response.data);
            setGoal(response.data.goal);
        });
    }, []);
    return (
        <div className="container">
            <Link to="/home">Home</Link>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Edit Goal</div>

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
                                        Update Goal
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
