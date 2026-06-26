"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import auth from "@/utils/auth";
import Loading from "@/components/Loading";

export default function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(
        null,
    );

    useEffect(() => {
        if (!auth.tokenExists() || auth.hasTokenExpired()) {
            router.replace("/");
        } else {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsAuthenticated(false);
        }
    }, [router]);
    if (isAuthenticated === null) return <Loading />;
    return <>{children}</>;
}
