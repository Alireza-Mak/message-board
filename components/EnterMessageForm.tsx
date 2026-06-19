import { useState } from "react";
import { useMessages } from "../hooks/useMessages";

const EnterMessageForm = () => {
    const { addMessage } = useMessages();
    const [message, setMessage] = useState("");

    const addNewMessage = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        addMessage(message);
        setMessage("");
    };

    return (
        <form onSubmit={addNewMessage}>
            <input
                placeholder="Enter a Message:"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            />
            <button type="submit" disabled={!message}>
                Add Message
            </button>
        </form>
    );
};

export default EnterMessageForm;
