"use client";
import { createContext, useEffect, useState } from "react";

import messageService from "@/services/messageService";
import { useRouter } from "next/navigation";
import { MessagesType } from "@/types/all";
import auth from "@/utils/auth";
type StateType = {
    messages: MessagesType;
    addMessage: (newMessageText: string) => Promise<void>;
    editMessage: (
        modifiedMessageId: string,
        modifiedMessageText: string,
    ) => Promise<void>;
    deleteMessage: (messageId: string) => Promise<void>;
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
    const router = useRouter();

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
        const bearerAuthHeader = {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        };

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
                    object: {
                        text: newMessageText,
                        owner: auth.getLoggedInUsername(),
                    },
                    reqConfig: bearerAuthHeader,
                });

                setMessages(messages.concat(newMessageObject));

                // Switch from useNavigate to useRouter
                router.push("/");
            } catch (error) {
                console.log("API Error: " + error);
            }
        }
    };

    const editMessage = async (
        modifiedMessageId: string,
        modifiedMessageText: string,
    ) => {
        const bearerAuthHeader = {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        };

        const newMessages = messages.map((message) =>
            message.id === modifiedMessageId
                ? { ...message, text: modifiedMessageText }
                : message,
        );

        try {
            await messageService.update({
                id: modifiedMessageId,
                object: { text: modifiedMessageText },
                reqConfig: bearerAuthHeader,
            });
            setMessages(newMessages);
        } catch (error) {
            console.log("API Error: " + error);
        }
    };

    const deleteMessage = async (messageId: string) => {
        const bearerAuthHeader = {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        };

        try {
            await messageService.deleteOne({
                id: messageId,
                reqConfig: bearerAuthHeader,
            });
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
