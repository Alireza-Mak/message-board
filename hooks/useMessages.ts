import { useContext } from "react";
import { MessagesContext } from "../contexts/MessagesContext";

export const useMessages = () => {
    const state = useContext(MessagesContext);
    if (state === undefined)
        throw new Error("Message Context was used out of the MessageProvider");
    return state;
};
