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

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>

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
