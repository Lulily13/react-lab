import NewMeetingForm from './NewMeetingForm';
import MeetingsList from './MeetingsList';

export default function MeetingsPage({
                                         email,
                                         meetings,
                                         registrations,
                                         onNewMeeting,
                                         onDelete,
                                         onRegister,
                                         onUnregister
                                     }) {
    return (
        <div>
            <h2>Zajęcia ({meetings.length})</h2>
            <NewMeetingForm onSubmit={onNewMeeting} />
            <MeetingsList
                meetings={meetings}
                registrations={registrations}
                onRegister={onRegister}
                onUnregister={onUnregister}
                onDelete={onDelete}
            />
        </div>
    );
}
















