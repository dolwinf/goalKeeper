import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Goal({ goal, handleDelete }) {
    return (
        <div key={goal.id} className="media">
            <div className="media-body div-space">
                <button
                    key={goal.created_at}
                    className="btn btn-danger float-right btn-space-left-10"
                    onClick={() => handleDelete(goal.id)}
                >
                    Delete
                </button>
                <Link
                    key={goal.id}
                    to={`/edit/${goal.id}`}
                    className="btn btn-warning float-right btn-space-left-10"
                >
                    Update
                </Link>
                <Button goal={goal} />
            </div>
        </div>
    );
}
