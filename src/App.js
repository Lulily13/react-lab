import {useEffect, useState} from 'react';
import 'milligram';

import './App.css';
import LoginForm from './LoginForm';
import UserPanel from './UserPanel';
import MeetingsPage from './meetings/MeetingsPage';
import {Helmet} from "react-helmet";

function App() {
    const [loggedIn, setLoggedIn] = useState(null);
    const [meetings, setMeetings] = useState(() => {
        const saved = localStorage.getItem('meetings');
        return saved ? JSON.parse(saved) : [];
    });

    const [registrations, setRegistrations] = useState(() => {
        const saved = localStorage.getItem('registrations');
        return saved ? JSON.parse(saved) : {};
    });


    useEffect(() => {
        localStorage.setItem('meetings', JSON.stringify(meetings));
    }, [meetings]);

    useEffect(() => {
        localStorage.setItem('registrations', JSON.stringify(registrations));
    }, [registrations]);

    function login(email) {
        setLoggedIn(email);
    }

    function logout() {
        setLoggedIn(null);
    }

    function handleNewMeeting(meeting) {
        setMeetings(prev => [...prev, meeting]);
    }

    function handleDeleteMeeting(meeting) {
        setMeetings(prev => prev.filter(m => m.title !== meeting.title));
        setRegistrations(prev => {
            const updated = {...prev};
            for (const user in updated) {
                updated[user] = updated[user].filter(title => title !== meeting.title);
            }
            return updated;
        });
    }

    function handleRegister(meeting) {
        setRegistrations(prev => {
            const userRegs = prev[loggedIn] || [];
            if (!userRegs.includes(meeting.title)) {
                return {...prev, [loggedIn]: [...userRegs, meeting.title]};
            }
            return prev;
        });
    }

    function handleUnregister(meeting) {
        setRegistrations(prev => {
            const userRegs = prev[loggedIn] || [];
            return {...prev, [loggedIn]: userRegs.filter(title => title !== meeting.title)};
        });
    }

    return (
        <>
            <Helmet>
                <title>Bookify</title>
            </Helmet>
            <div className="app-container">
                <h1 className="app-title">System do zapisów na zajęcia</h1>
                {loggedIn ? (
                    <>
                        <UserPanel email={loggedIn} onLogout={logout}/>
                        <MeetingsPage
                            email={loggedIn}
                            meetings={meetings}
                            registrations={registrations[loggedIn] || []}
                            onNewMeeting={handleNewMeeting}
                            onDelete={handleDeleteMeeting}
                            onRegister={handleRegister}
                            onUnregister={handleUnregister}
                        />
                    </>
                ) : (
                    <LoginForm onLogin={login}/>
                )}
            </div>
        </>
    );
}

export default App;

