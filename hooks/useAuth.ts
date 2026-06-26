import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

function useAuth() {
    const state = useContext(AuthContext);
    if (state === undefined)
        throw new Error("Message Context was used out of the MessageProvider");
    return state;
}

export default useAuth;