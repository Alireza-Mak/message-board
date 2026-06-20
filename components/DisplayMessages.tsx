import Message from "@/components/Message";
import { useMessages } from "../hooks/useMessages";
import { useState } from "react";

const DisplayMessages = ({ searchMessage }: { searchMessage: string }) => {
    const { messages } = useMessages();
    const [editableMessageId, setEditableMessageId] = useState<string>("");

    const messagesToShow = searchMessage
        ? messages.filter((message) =>
              message.text.toLowerCase().includes(searchMessage),
          )
        : messages;

    return (
        <section className="w-full md:w-1/2">
            <div className="grid grid-cols-[1fr_auto] px-4 py-3 text-sm font-semibold uppercase text-gray-400">
                <span>Message</span>
                <span>Action</span>
            </div>

            <div className="overflow-hidden rounded-lg border border-neutral-800">
                {messagesToShow.map((message) => (
                    <Message
                        key={message.id}
                        message={message}
                        editableMessageId={editableMessageId}
                        setEditableMessageId={setEditableMessageId}
                    />
                ))}
            </div>
        </section>
    );
};

export default DisplayMessages;
