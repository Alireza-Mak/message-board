import List from "@mui/material/List";
import Message from "./Message";
import { useMessages } from "../hooks/useMessages";

const DisplayMessages = ({ searchMessage }: { searchMessage: string }) => {
    const { messages } = useMessages();

    const messagesToShow = searchMessage
        ? messages.filter((message) =>
              message.text.toLowerCase().includes(searchMessage),
          )
        : messages;

    return (
        <List sx={{ ml: 1 }}>
            {messagesToShow.map((message) => (
                <Message
                    key={message.id}
                    id={message.id}
                    messageText={message.text}
                />
            ))}
        </List>
    );
};

export default DisplayMessages;
