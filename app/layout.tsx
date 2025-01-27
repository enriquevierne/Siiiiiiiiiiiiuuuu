import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Siiiiiiiiiiiiuuuu",
    description: "How much does CR7 earn from Al Nassr?",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>{children}</body>
        </html>
    );
}
