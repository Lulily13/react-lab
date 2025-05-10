import {useState} from 'react';
import 'milligram';

import './App.css';
import LoginForm from './LoginForm';
import UserPanel from './UserPanel';
import MeetingsPage from './/meetings/MeetingsPage';

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
                    ? (
                        <>
                            <UserPanel email={loggedIn} onLogout={logout}/>
                            <MeetingsPage/>
                        </>
                    )

                    : <LoginForm onLogin={login}/>
            }
        </div>
    );
}

export default App;