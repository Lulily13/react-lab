import MeetingItem from './MeetingItem';

export default function MeetingsList({
                                         meetings,
                                         registrations,
                                         onRegister,
                                         onUnregister,
                                         onDelete
                                     }) {
    return (
        <div>
            {meetings.length > 0 && (
                <table className="table" style={{ marginLeft: 0 }}>
                    <thead>
                    <tr>
                        <th>Nazwa</th>
                        <th>Opis</th>
                        <th>Akcje</th>
                    </tr>
                    </thead>
                    <tbody>
                    {meetings.map((meeting, index) => (
                        <MeetingItem
                            key={index}
                            meeting={meeting}
                            isRegistered={registrations.includes(meeting.title)}
                            onRegister={onRegister}
                            onUnregister={onUnregister}
                            onDelete={onDelete}
                        />
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}








