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
                handleSearchMessageChange={(
                    event: React.ChangeEvent<HTMLInputElement>,
                ) => setSearchMessage(event.target.value)}
            />
            <div>
                <Link
                    className="btn rounded-lg font-normal bg-blue-700"
                    href="/addmessage"
                >
                    Add a Message
                </Link>
            </div>

            <DisplayMessages searchMessage={searchMessage} />
        </>
    );
};

export default MessageBoard;
