import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Navbar />
                <Switch>
                    <Route path="/:page" exact component={Home} />

                    <Redirect from="/" to="/1" />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
