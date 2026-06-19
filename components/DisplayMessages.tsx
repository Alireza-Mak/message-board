import Message from "@/components/Message";
import { useMessages } from "../hooks/useMessages";

const DisplayMessages = ({ searchMessage }: { searchMessage: string }) => {
    const { messages } = useMessages();

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
                        id={message.id}
                        messageText={message.text}
                    />
                ))}
            </div>
        </section>
    );
};

export default DisplayMessages;
