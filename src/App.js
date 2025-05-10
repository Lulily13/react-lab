import {useState} from 'react';
import 'milligram';

import './App.css';
import LoginForm from './LoginForm';
import UserPanel from './UserPanel';

function App() {
    const [loggedIn, setLoggedIn] = useState(null);

    function login(email) {
        setLoggedIn(email);
    }

    function logout() {
        setLoggedIn(null);
    }

    return (
        <div className="app-container">
            <h1 className="app-title">System do zapisów na zajęcia</h1>
            {
                loggedIn
                    ? <UserPanel username={loggedIn} onLogout={logout}/>
                    : <LoginForm onLogin={login}/>
            }
        </div>
    );
}

export default App;