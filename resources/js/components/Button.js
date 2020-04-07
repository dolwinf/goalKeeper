import React, { useState, useEffect } from "react";
import Axios from "axios";

function Button() {
    const [isClicked, setIsClicked] = useState(false);
    const [text, setText] = useState("Kick");

    const handleKick = () => {
        if (isClicked) {
            setIsClicked(false);
            setText("Kick");
        } else {
            setIsClicked(true);
            setText("Undo");
        }
    };

    return (
        <button
            className="btn btn-success float-right btn-size-20"
            onClick={handleKick}
        >
            <div>{text}</div>
        </button>
    );
}

export default Button;