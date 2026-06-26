import type { Metadata } from "next";
import "./globals.css";
import { MessageProvider } from "@/contexts/MessagesContext";
import Header from "@/components/Header";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = {
    title: "Message Board App",
    description: "Front-end for Message Board App",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-black">
                <Header />
                <AuthProvider>
                    <MessageProvider>
                        <main className="relative flex flex-col items-center gap-6 px-4 py-6">
                            {children}
                        </main>
                    </MessageProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
