import { MessagesType } from "./all";

type StateType = {
    messages: MessagesType;
    addMessage: (newMessageText: string) => Promise<void>;
    editMessage: (
        modifiedMessageId: string,
        modifiedMessageText: string,
    ) => Promise<void>;
    deleteMessage: (messageId: string) => Promise<void>;
};

export type{ StateType };