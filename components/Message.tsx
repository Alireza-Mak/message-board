import EditMessageForm from "@/components/EditMessageForm";
import { useMessages } from "@/hooks/useMessages";
import { MessageType } from "@/types/all";
import auth from "@/utils/auth";
import { useState } from "react";

type MessageProps = {
    message: MessageType;
    editableMessageId: string;
    setEditableMessageId: React.Dispatch<React.SetStateAction<string>>;
};

const Message = ({
    message,
    editableMessageId,
    setEditableMessageId,
}: MessageProps) => {
    const { deleteMessage } = useMessages();
    const [Error, setError] = useState<string>("");

    const isOwner = auth.getLoggedInUsername() === message.owner;
    const isEditable = editableMessageId === message.id;

    function handleDoubleClick() {
        if (!isOwner) {
            setError("You are not allowed to edit this message.");
            return;
        }
        setError("");
        setEditableMessageId(message.id);
    }

    function handleDelete() {
        if (!isOwner) {
            setError("You are not allowed to delete this message.");
            return;
        }
        setError("");
        deleteMessage(message.id);
    }

    return (
        <div
            className="cursor-pointer grid grid-cols-[1fr_auto]
        items-center gap-4 border-b border-neutral-800
        bg-neutral-700 px-4 py-4 hover:odd:bg-neutral-950
        hover:bg-neutral-800 last:border-b-0 odd:bg-neutral-900"
        >
            <div className="text-white" onDoubleClick={handleDoubleClick}>
                {isEditable ? (
                    <EditMessageForm
                        message={message}
                        setDeactivateEditing={() => setEditableMessageId("")}
                    />
                ) : (
                    <>
                        <span>{message.text}</span>
                        {Error && (
                            <p className="mt-1 text-xs text-red-400">{Error}</p>
                        )}
                    </>
                )}
            </div>
            <button
                onClick={handleDelete}
                className="flex h-8 cursor-pointer w-15 items-center justify-center rounded bg-red-600 text-white transition hover:bg-red-700"
            >
                delete
            </button>
        </div>
    );
};

export default Message;
