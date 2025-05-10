export default function MeetingItem({
                                        meeting,
                                        isRegistered,
                                        onRegister,
                                        onUnregister,
                                        onDelete
                                    }) {
    return (
        <tr>
            <td>{meeting.title}</td>
            <td>{meeting.description}</td>
            <td>
                {!isRegistered ? (
                    <>
                        <button className="button" onClick={() => onRegister(meeting)}>
                            Zapisz się
                        </button>
                        <button className="button alert" onClick={() => onDelete(meeting)}>
                            Usuń spotkanie
                        </button>
                    </>
                ) : (
                    <button className="button alert" onClick={() => onUnregister(meeting)}>
                        Wypisz się
                    </button>
                )}
            </td>
        </tr>
    );
}

