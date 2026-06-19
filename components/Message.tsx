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
        <div
            onDoubleClick={() => setIsEditable(true)}
            className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-neutral-800 bg-neutral-900 px-4 py-4 last:border-b-0 odd:bg-neutral-950"
        >
            <div className="text-white">
                {isEditable ? (
                    <EditMessageForm
                        messageText={messageText}
                        modifyMessage={modifyMessage}
                    />
                ) : (
                    messageText
                )}
            </div>
            <button
                onClick={() => deleteMessage(id)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white transition hover:bg-red-700"
            >
                delete
            </button>
        </div>
    );
};

export default Message;
