import type { Metadata } from "next";
import "./globals.css";

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
            <body>{children}</body>
        </html>
    );
}
