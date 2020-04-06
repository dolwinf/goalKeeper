import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import EditComponent from "./EditComponent";

export default function Routes() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/home" component={App} />
                    <Route exact path="/edit/:id" component={EditComponent} />
                </Switch>
            </div>
        </Router>
    );
}
