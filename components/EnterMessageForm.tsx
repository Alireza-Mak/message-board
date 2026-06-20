"use client";
import { useState } from "react";
import Link from "next/link";
import { messageSchema } from "@/schemas/messageSchema";
import { useMessages } from "@/hooks/useMessages";

const EnterMessageForm = () => {
    const { addMessage } = useMessages();
    const [message, setMessage] = useState<string>("");
    const [error, setError] = useState<string>("");

    const addNewMessage = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError("");
        const result = messageSchema.safeParse({ message });

        if (!result.success) {
            setError(result.error.issues[0].message);
            return;
        }

        addMessage(result.data.message);
        setMessage("");
    };

    return (
        <form
            className="flex w-full flex-col gap-4 md:w-1/2"
            onSubmit={addNewMessage}
        >
            <input
                className="text-white rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter a Message:"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            />
            {error && <p className="text-xs text-red-500">{error}</p>}
            <button
                className=" cursor-pointer rounded-lg bg-blue-600 p-3 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
                type="submit"
                disabled={!message}
            >
                Add Message
            </button>
            <Link
                className="rounded-lg bg-green-700 p-3 text-center text-white transition hover:bg-green-900"
                href="/"
            >
                Cancel
            </Link>
        </form>
    );
};

export default EnterMessageForm;
