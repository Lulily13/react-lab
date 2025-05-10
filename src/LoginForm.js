import { useState } from 'react';

export default function LoginForm(props) {
    const [email, setEmail] = useState('');

    return (
        <div>
            <label>Zaloguj się e-mailem</label>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Wpisz swój email"
            />
            <button
                type="button"
                onClick={() => props.onLogin(email)}
            >
                Wchodzę
            </button>
        </div>
    );
}
