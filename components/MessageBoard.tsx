"use client";

import { useEffect, useState } from "react";
import FilterMessage from "@/components/FilterMessage";
import DisplayMessages from "@/components/DisplayMessages";
import Link from "next/link";
import LoginForm from "./LoginForm";
import Loading from "./Loading";
import auth from "@/utils/auth";

const MessageBoard = () => {
    const [searchMessage, setSearchMessage] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(
        null,
    );
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsAuthenticated(auth.tokenExists() && !auth.hasTokenExpired());
    }, []);
    function handleLogout() {
        setIsAuthenticated(false);
        auth.removeToken();
    }
    if (isAuthenticated === null) return <Loading />;
    if (!isAuthenticated) return <LoginForm setIsAuth={setIsAuthenticated} />;
    return (
        <>
            <FilterMessage
                searchMessage={searchMessage}
                handleSearchMessageChange={(event) =>
                    setSearchMessage(event.target.value)
                }
            />

            <Link
                className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
                href="/addMessage"
            >
                Add a Message
            </Link>

            <DisplayMessages searchMessage={searchMessage} />
            <Link
                className="absolute top-4 right-4 rounded-lg bg-purple-600 px-6 py-3 text-white transition hover:bg-purple-700"
                onClick={handleLogout}
                href="/"
            >
                Logout
            </Link>
        </>
    );
};

export default MessageBoard;
