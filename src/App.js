import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';

const App = () => (
    <BrowserRouter>
        <div className="md:w-9/12  md:mx-auto bg-body">
            <Navbar />
            <Switch>
                <Route path="/:page" exact component={Home} />

                <Redirect from="/" to="/1" />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;
