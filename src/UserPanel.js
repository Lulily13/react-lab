export default function UserPanel({ email, onLogout }) {
    return (
        <div>
            <h2>Witaj {email}!</h2>
            <button onClick={onLogout}>
                Wyloguj się
            </button>
        </div>
    );
}
