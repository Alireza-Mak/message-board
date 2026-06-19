import type { Metadata } from "next";
import "./globals.css";
import { MessageProvider } from "@/contexts/MessagesContext";
import Header from "@/components/Header";

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
        // Wrap the whole app with MessageProvider
        <>
            <Header />
            <MessageProvider>
                <html lang="en">
                    <body className="min-h-screen bg-black">{children}</body>
                </html>
            </MessageProvider>
        </>
    );
}
