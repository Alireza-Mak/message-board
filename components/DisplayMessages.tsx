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
        <div>
            {messagesToShow.map((message) => (
                <Message
                    key={message.id}
                    id={message.id}
                    messageText={message.text}
                />
            ))}
        </div>
    );
};

export default DisplayMessages;
