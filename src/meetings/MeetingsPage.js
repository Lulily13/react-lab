import { useState, useEffect } from "react";
import NewMeetingForm from "./NewMeetingForm";
import MeetingsList from "./MeetingsList";

export default function MeetingsPage() {
    const [meetings, setMeetings] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const savedMeetings = JSON.parse(localStorage.getItem("meetings")) || [];
        setMeetings(savedMeetings);
    }, []);

    useEffect(() => {
        if (meetings.length > 0) {
            localStorage.setItem("meetings", JSON.stringify(meetings));
        }
    }, [meetings]);

    function handleNewMeeting(meeting) {
        const meetingWithAttendees = { ...meeting, attendees: meeting.attendees || [] };
        const nextMeetings = [...meetings, meetingWithAttendees];
        setMeetings(nextMeetings);
        setShowForm(false);
    }

    function handleRegister(meetingIndex) {
        const email = prompt("Podaj swój email, aby się zapisać:");
        if (!email) return;

        const updatedMeetings = [...meetings];
        const meeting = updatedMeetings[meetingIndex];

        if (Array.isArray(meeting.attendees)) {
            if (!meeting.attendees.includes(email)) {
                meeting.attendees.push(email);
                setMeetings(updatedMeetings);
            } else {
                alert("Już jesteś zapisany na to spotkanie.");
            }
        } else {
            meeting.attendees = [email];
            setMeetings(updatedMeetings);
        }
    }

    function handleDeleteMeeting(meetingIndex) {
        const updatedMeetings = meetings.filter((_, index) => index !== meetingIndex);
        setMeetings(updatedMeetings);


        localStorage.setItem("meetings", JSON.stringify(updatedMeetings));
    }

    return (
        <div>
            <h2>Zajęcia ({meetings.length})</h2>
            <button onClick={() => setShowForm(true)}>Dodaj nowe spotkanie</button>
            {showForm && <NewMeetingForm onSubmit={handleNewMeeting} />}
            {Array.isArray(meetings) && meetings.length > 0 ? (
                <MeetingsList
                    meetings={meetings}
                    onRegister={handleRegister}
                    onDelete={handleDeleteMeeting}
                />
            ) : (
                <p>Brak spotkań</p>
            )}
        </div>
    );
}








