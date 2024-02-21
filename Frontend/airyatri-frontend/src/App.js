import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Launcher1 from "./Launcher1";
import SignIn from './signin';

// Create context for managing authentication state
export const AuthContext = React.createContext();

function App() {
    const [username, setUsername] = useState(localStorage.getItem('username') || '');

    return (
        <Router>
            <AuthContext.Provider value={{ username, setUsername }}>
                <Switch>
                    <Route path="/signin" component={SignIn} />
                    <Route path="/" component={Launcher1} />
                </Switch>
            </AuthContext.Provider>
        </Router>
    );
}

export default App;
