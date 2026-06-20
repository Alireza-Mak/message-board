import EditMessageForm from "@/components/EditMessageForm";
import { useMessages } from "@/hooks/useMessages";
import { MessageType } from "@/types/MessagesType";

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

    const isEditable = editableMessageId === message.id;
    return (
        <div
            onDoubleClick={() => setEditableMessageId(message.id)}
            className="cursor-pointer grid grid-cols-[1fr_auto] 
            items-center gap-4 border-b border-neutral-800
            bg-neutral-700 px-4 py-4 hover:odd:bg-neutral-950
            hover:bg-neutral-800 last:border-b-0 odd:bg-neutral-900"
        >
            <div className="text-white">
                {isEditable ? (
                    <EditMessageForm
                        message={message}
                        setDeactivateEditing={() => setEditableMessageId("")}
                    />
                ) : (
                    message.text
                )}
            </div>
            <button
                onClick={() => deleteMessage(message.id)}
                className="flex h-8 cursor-pointer w-15 items-center justify-center rounded bg-red-600 text-white transition hover:bg-red-700"
            >
                delete
            </button>
        </div>
    );
};

export default Message;
