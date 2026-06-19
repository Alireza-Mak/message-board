"use client";

import { useState } from "react";
import FilterMessage from "@/components/FilterMessage";
import DisplayMessages from "@/components/DisplayMessages";
import Link from "next/link";

const MessageBoard = () => {
    const [searchMessage, setSearchMessage] = useState("");

    return (
        <main className="flex flex-col items-center gap-6 px-4 py-6">
            <FilterMessage
                searchMessage={searchMessage}
                handleSearchMessageChange={(event) =>
                    setSearchMessage(event.target.value)
                }
            />

            <Link
                className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
                href="/addmessage"
            >
                Add a Message
            </Link>

            <DisplayMessages searchMessage={searchMessage} />
        </main>
    );
};

export default MessageBoard;
