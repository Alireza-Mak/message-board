"use client";

import FilterMessage from "@/components/FilterMessage";
import DisplayMessages from "@/components/DisplayMessages";
import Link from "next/link";
import LoginForm from "./LoginForm";
import Loading from "./Loading";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import TopBar from "./TopBar";

const MessageBoard = () => {
    const [searchMessage, setSearchMessage] = useState("");
    const { isAuthenticated } = useAuth();
    
    if (isAuthenticated === null) return <Loading />;

    if (!isAuthenticated) return <LoginForm />;

    return (
        <>
            <TopBar />
            <div className="flex flex-col items-center gap-6 w-full">
                <div className="flex items-center justify-between w-full px-2"></div>
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
        </>
    );
};

export default MessageBoard;
