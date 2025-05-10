export default function MeetingsList({ meetings = [], onRegister, onDelete }) {
    return (
        <div>
            {meetings.map((meeting, index) => (
                <div key={index} className="meeting">
                    <h3>{meeting.title}</h3>
                    <p>{meeting.description}</p>
                    <p>
                        <strong>Uczestnicy:</strong>{" "}
                        {Array.isArray(meeting.attendees) && meeting.attendees.length > 0
                            ? meeting.attendees.join(", ")
                            : ""}
                    </p>
                    <button onClick={() => onRegister(index)}>Zapisz się</button>
                    <button onClick={() => onDelete(index)}>Usuń spotkanie</button>
                </div>
            ))}
        </div>
    );
}





