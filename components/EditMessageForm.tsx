import { useMessages } from "@/hooks/useMessages";
import { messageSchema } from "@/schemas/messageSchema";
import { MessageType } from "@/types/all";
import { useEffect, useRef, useState } from "react";

type EditMessageFormProps = {
    message: MessageType;
    setDeactivateEditing: () => void;
};

const EditMessageForm = ({
    message,
    setDeactivateEditing,
}: EditMessageFormProps) => {
    const [modifiedText, setModifiedText] = useState<string>(message.text);
    const { editMessage } = useMessages();
    const inputEl = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setDeactivateEditing();
            }
            if (event.key === "Enter") {
                const result = messageSchema.safeParse({
                    message: modifiedText,
                });
                if (!result.success) {
                    return alert(result.error.issues[0].message);
                } else {
                    editMessage(message.id, result.data.message);
                    setDeactivateEditing();
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [setDeactivateEditing, editMessage, modifiedText, message.id]);
    useEffect(() => {
        if (inputEl.current) inputEl.current.focus();
    });

    return (
        <div>
            <input
                ref={inputEl}
                className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-white outline-none focus:border-blue-500"
                type="text"
                value={modifiedText}
                onChange={(event) => setModifiedText(event.target.value)}
            />
        </div>
    );
};

export default EditMessageForm;
