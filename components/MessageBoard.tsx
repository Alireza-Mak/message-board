"use client";

import { useEffect, useState } from "react";
import FilterMessage from "@/components/FilterMessage";
import DisplayMessages from "@/components/DisplayMessages";
import Link from "next/link";
import LoginForm from "./LoginForm";
import Loading from "./Loading";
import auth from "@/utils/auth";
import ProfileAvatar from "./ProfileAvatar";

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
    const owner = auth.getLoggedInUsername();
    return (
        <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex items-center justify-between w-full px-2">
                <ProfileAvatar username={owner} />
                <Link
                    className="rounded-lg bg-purple-600 px-4 py-2 text-sm sm:text-base text-white transition hover:bg-purple-700 shrink-0"
                    onClick={handleLogout}
                    href="/"
                >
                    Logout
                </Link>
            </div>
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
        </div>
    );
};

export default MessageBoard;
