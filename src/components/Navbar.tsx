"use client";

import Image from "next/image";
import Wrapper from "./Wrapper";
import { cn } from "@/lib/utils";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["500"],
});

export default function Navbar() {
    const [padding, setPadding] = useState("py-4");

    useEffect(function () {
        document.addEventListener("scroll", function () {
            if (window.scrollY > 20) {
                setPadding("py-2");
            } else setPadding("py-4");
        });
    }, []);

    return (
        <Wrapper className="max-w-full p-0">
            <nav
                className={`sticky top-0 bg-[#222222b3] px-5 backdrop-blur-3xl ${padding !== "py-4" && "text-stone-300"}`}
            >
                <div
                    className={`flex items-center justify-between max-w-[70rem] mx-auto transition-all duration-300 ${padding}`}
                >
                    <Image
                        src="/logo.svg"
                        width={padding === "py-4" ? 40 : 35}
                        height={padding === "py-4" ? 40 : 35}
                        alt="najmiter logo"
                    />
                    <ul
                        className={cn(
                            "flex gap-3 sm:gap-20 font-light cursor-pointer text-sm sm:text-base",
                            plusJakartaSans.className
                        )}
                    >
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="#projects">Projects</Link>
                        </li>
                        <li>
                            <Link href="#contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Wrapper>
    );
}
