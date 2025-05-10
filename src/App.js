import { useState } from 'react';
import "milligram";

import './App.css';


function App() {
    const [email, setEmail] = useState('natalia.grzywna@agh.edu.pl');
    const [savedEmail, setSavedEmail] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleChange(event) {
        setEmail(event.target.value);
        console.log(event.target.value);
    }

    function handleSave() {
        setSavedEmail(email);
        console.log('Zapisano e-mail:', email);
    }

    function handleAlert() {
        alert(`Wpisany e-mail to: ${email}`);
    }

    function handleLogin() {
        setSavedEmail(email);
        setIsLoggedIn(true);
    }

    function handleLogout() {
        setIsLoggedIn(false);
        setSavedEmail('');
    }

    let message;
    if (email.length < 8) {
        message = <div className="message short-email">Twój adres e-mail jest trochę za krótki.</div>;
    } else if (email.length <= 35) {
        message = <div className="message good-email">Adres e-mail wygląda dobrze!</div>;
    } else {
        message = <div className="message long-email">Twój adres e-mail jest dość długi – upewnij się, że wszystko się zgadza.</div>;
    }

    return (
        <div className="app-container">
            <h1 className="app-title">Witaj w systemie do zapisów na zajęcia!</h1>

            {message}

            {!isLoggedIn ? (
                <>
                    <input
                        type="text"
                        value={email}
                        onChange={handleChange}
                        placeholder="Podaj swój email"
                        className="email-input"
                    />
                    <button
                        onClick={() => {
                            handleAlert();
                            handleSave();
                            handleLogin();
                        }}
                        className="submit-button"
                    >
                        Zaloguj się
                    </button>
                </>
            ) : (
                <>
                    <h2 className="welcome-message">Witaj {savedEmail}!</h2>
                    <button
                        onClick={handleLogout}
                        className="logout-button"
                    >
                        Wyloguj się
                    </button>
                </>
            )}

        </div>
    );
}

export default App;


