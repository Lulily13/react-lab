import { useState } from 'react';

function App() {
    const [email, setEmail] = useState('natalia.grzywna@agh.edu.pl');
    const [savedEmail, setSavedEmail] = useState('');

    function handleChange(event) {
        setEmail(event.target.value);
        console.log(event.target.value);
    }

    function handleSave() {
        setSavedEmail(email);
        console.log('Zapisano e-mail:', email);
    }

    let message;
    if (email.length < 8) {
        message = <div>Twój adres e-mail jest trochę za krótki.</div>;
    } else if (email.length <= 20) {
        message = <div>Adres e-mail wygląda dobrze!</div>;
    } else {
        message = <div>Twój adres e-mail jest dość długi – upewnij się, że wszystko się zgadza.</div>;
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>

            {message}

            <input
                type="text"
                value={email}
                onChange={handleChange}
                placeholder="Podaj swój email"
            />
            <button onClick={handleSave}>Zapisz</button>

            <h2>Twój zapisany e-mail to: {savedEmail}</h2>

        </div>
    );
}


export default App;
