import { AosInit } from "@/app/_components/aos-init";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	weight: "400",
});

export const metadata: Metadata = {
	title: "Alexandre Bandeira | Portfólio",
	description: "Portfólio de Alexandre Bandeira.",
	icons: {
		icon: "favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt" className={inter.className}>
			<body className="flex min-h-screen flex-col space-y-4 bg-gradient-to-b from-[#1A2A3A] to-[#2C3E50] p-4 text-white">
				{children}
			</body>
			<AosInit />
		</html>
	);
}
