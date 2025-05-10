import { useState } from 'react';

export default function NewMeetingForm({ onSubmit }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function submit(event) {
        event.preventDefault();
        onSubmit({ title, description });
        setTitle('');
        setDescription('');
    }

    return (
        <form onSubmit={submit} className="form">
            <h3>Dodaj nowe spotkanie</h3>
            <label>Nazwa</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>Opis</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            <button className="button">Dodaj</button>
        </form>
    );
}



