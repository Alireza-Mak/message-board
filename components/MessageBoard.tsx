"use client";

import { useState } from "react";
import FilterMessage from "@/components/FilterMessage";
import DisplayMessages from "@/components/DisplayMessages";
import Link from "next/link";

const MessageBoard = () => {
    const [searchMessage, setSearchMessage] = useState("");

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
        </>
    );
};

export default MessageBoard;
