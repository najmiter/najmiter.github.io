import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata: Metadata = {
    title: "najmiter land",
    description: "Najam's portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={cn(poppins.className, "bg-[#161513]")}>
                <div className="sticky top-0 z-50">
                    <Navbar />
                </div>
                {children}
                <Footer />
            </body>
        </html>
    );
}
