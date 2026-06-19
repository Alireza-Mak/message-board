import { createContext, useEffect, useState } from "react";
import type { MessagesType } from "../App";

import messageService from "../services/messageService";
import { useNavigate } from "react-router-dom";
type StateType = {
    messages: MessagesType;
    addMessage: (newMessageText: string) => Promise<void>;
    editMessage: (
        modifiedMessageId: number,
        modifiedMessageText: string,
    ) => Promise<void>;
    deleteMessage: (messageId: number) => Promise<void>;
};
const initialState: StateType = {
    messages: [],
    addMessage: async () => {},
    editMessage: async () => {},
    deleteMessage: async () => {},
};
const MessagesContext = createContext<StateType>(initialState);

const MessageProvider = ({ children }: { children: React.ReactNode }) => {
    const [messages, setMessages] = useState<MessagesType>([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("useEffect was executed!");
        // start of IIFE
        (async () => {
            try {
                const serverMessages = await messageService.getAll();
                setMessages(serverMessages);
            } catch (error) {
                console.log("API Error: " + error);
            }
        })();
    }, []);

    const addMessage = async (newMessageText: string) => {
        if (
            messages.some(
                (message) =>
                    message.text.toLowerCase() === newMessageText.toLowerCase(),
            )
        ) {
            alert(`${newMessageText} message is already in list of messages!`);
        } else {
            // POST Request
            try {
                const newMessageObject = await messageService.create({
                    text: newMessageText,
                });
                setMessages(messages.concat(newMessageObject));
                navigate("/");
            } catch (error) {
                console.log("API Error: " + error);
            }
        }
    };

    const editMessage = async (
        modifiedMessageId: number,
        modifiedMessageText: string,
    ) => {
        const newMessages = messages.map((message) =>
            message.id === modifiedMessageId
                ? { ...message, text: modifiedMessageText }
                : message,
        );

        try {
            await messageService.update(modifiedMessageId, {
                text: modifiedMessageText,
            });
            setMessages(newMessages);
        } catch (error) {
            console.log("API Error: " + error);
        }
    };

    const deleteMessage = async (messageId: number) => {
        try {
            await messageService.deleteOne(messageId);
            setMessages(messages.filter((message) => message.id !== messageId));
        } catch (error) {
            console.log("API Error: " + error);
        }
    };
    const state: StateType = {
        deleteMessage,
        editMessage,
        addMessage,
        messages,
    };
    return (
        <MessagesContext.Provider value={state}>
            {children}
        </MessagesContext.Provider>
    );
};
export { MessageProvider, MessagesContext };
