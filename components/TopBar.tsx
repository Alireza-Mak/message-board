"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import auth from "@/utils/auth";
import ProfileAvatar from "./ProfileAvatar";
import useAuth from "@/hooks/useAuth";

const TopBar = () => {
    const [username, setUsername] = useState<string | null>(null);
    const { isAuthenticated, setAuthentication } = useAuth();

    useEffect(() => {
        (() => {
            if (isAuthenticated) {
                setUsername(auth.getLoggedInUsername());
            }
        })();
    }, [isAuthenticated]);

    function handleLogout() {
        setUsername(null);
        setAuthentication(false);
    }

    if (!username) return null;

    return (
        <div className="flex items-center justify-between w-full px-4 sm:px-8 py-3 border-b border-neutral-800 bg-neutral-950">
            <ProfileAvatar username={username} />
            <Link
                className="rounded-lg bg-purple-600 px-4 py-2 text-sm sm:text-base text-white transition hover:bg-purple-700"
                onClick={handleLogout}
                href="/"
            >
                Logout
            </Link>
        </div>
    );
};

export default TopBar;
