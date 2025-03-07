import type { Metadata } from "next";
import { Geist, Geist_Mono as GeistMono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = GeistMono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "CinemaBuzz",
    description:
        "CinemaBuzz is your ultimate movie ticket reservation platform. Book seats, get exclusive deals, and enjoy a seamless cinema experience.",
    keywords:
        "CinemaBuzz home, movie tickets, cinema booking, online reservations, showtimes, film lovers, moviegoers",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} red-bg antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
