import React from 'react';
import Navbar from './Navbar';
import List from './List';
import AppContext  from '../contexts/AppContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddApp from './AddApp';

const App = () => {
    return(
        <AppContext>
            <Router>
                    <Navbar></Navbar>
                    <br />
                    <div className="uk-container">
                        <Switch>
                            <Route path="/create">
                                <AddApp></AddApp>
                            </Route>
                            <Route path="/">
                                {/* <h4>Minha Lista de App</h4> */}
                                <List></List>
                            </Route>
                            {/* <h1>Meu Primeiro App</h1> */}
                        </Switch>
                    </div>
            </Router>
        </AppContext>
    );
}

export default App;