"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import TopBar from "@/components/TopBar";
import useAuth from "@/hooks/useAuth";

export default function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (!isAuthenticated) {
            router.replace("/");
        }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) return <Loading />;

    return (
        <>
            <TopBar />
            {children}
        </>
    );
}
