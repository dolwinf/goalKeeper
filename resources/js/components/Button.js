import React, { useState, useEffect } from "react";
import Axios from "axios";

function Button({ goal }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleKick = () => {
        if (isClicked) {
            setIsClicked(false);

            Axios.post(`/kick/${goal.id}`).then(response =>
                console.log(response)
            );
        } else {
            setIsClicked(true);

            Axios.post(`/undo/${goal.id}`).then(response =>
                console.log(response)
            );
        }
    };

    return (
        <div>
            <span
                style={{
                    textDecorationLine:
                        isClicked || goal.completed ? "line-through" : ""
                }}
            >
                {goal.goal}
            </span>{" "}
            <button
                className="btn btn-success float-right btn-size-20"
                onClick={handleKick}
            >
                <div>{isClicked || goal.completed ? "Undo" : "Kick"}</div>
            </button>
        </div>
    );
}

export default Button;
