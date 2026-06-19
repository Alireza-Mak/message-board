import type { Metadata } from "next";
import "./globals.css";
import { MessageProvider } from "@/contexts/MessagesContext";

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
        <MessageProvider>
            <html lang="en">
                <body>{children}</body>
            </html>
        </MessageProvider>
    );
}
