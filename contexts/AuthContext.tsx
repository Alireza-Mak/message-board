"use client";
import auth from "@/utils/auth";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthStateType } from "@/types/AuthType";

const initAuthState: AuthStateType = {
    isAuthenticated: null,
    setAuthentication: () => {},
};
const AuthContext = createContext(initAuthState);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(
        null,
    );
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsAuthenticated(auth.tokenExists() && !auth.hasTokenExpired());
    }, []);

    function setAuthentication(isLoggedIn: boolean) {
        setIsAuthenticated(isLoggedIn);
        if (!isLoggedIn) {
            router.push("/");
            auth.removeToken();
        }
    }
    const state: AuthStateType = { isAuthenticated, setAuthentication };
    return (
        <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
    );
};
export { AuthProvider, AuthContext };
