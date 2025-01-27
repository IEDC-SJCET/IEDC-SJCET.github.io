import "@/app/globals.css";
import "./favicon.ico";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Boot Camp",
    description: "Discovering Creative Students among us",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}