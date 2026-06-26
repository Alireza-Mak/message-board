interface MessageType {
    text: string;
    id: string;
    owner: string;
}

type MessagesType = MessageType[];
export type { MessageType, MessagesType };
