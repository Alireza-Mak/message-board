"use-client";

import { useState } from "react";
import EditMessageForm from "@/components/EditMessageForm";
import { useContext } from "react";
import { MessagesContext } from "../contexts/MessagesContext";

type MessageProps = {
    id: number;
    messageText: string;
};

const Message = ({ id, messageText }: MessageProps) => {
    const [isEditable, setIsEditable] = useState(false);

    const { editMessage, deleteMessage } = useContext(MessagesContext);

    const modifyMessage = (modifiedText: string) => {
        editMessage(id, modifiedText);
        setIsEditable(false);
    };

    return (
        <div onDoubleClick={() => setIsEditable(true)}>
            {isEditable ? (
                <EditMessageForm
                    messageText={messageText}
                    modifyMessage={modifyMessage}
                />
            ) : (
                messageText
            )}
            <button onClick={() => deleteMessage(id)}>delete</button>
        </div>
    );
};

export default Message;
