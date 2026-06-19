import { useState } from "react";
import EditMessageForm from "./EditMessageForm";
import { Button, ListItem } from "@mui/material";
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
        <ListItem onDoubleClick={() => setIsEditable(true)}>
            {isEditable ? (
                <EditMessageForm
                    messageText={messageText}
                    modifyMessage={modifyMessage}
                />
            ) : (
                messageText
            )}
            <Button onClick={() => deleteMessage(id)}>delete</Button>
        </ListItem>
    );
};

export default Message;
