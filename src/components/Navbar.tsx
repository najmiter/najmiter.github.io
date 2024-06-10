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
    return (
        <Wrapper className="max-w-full p-0">
            <nav
                className={`sticky top-0 bg-[#222222b3] px-5 backdrop-blur-3xl text-stone-200`}
            >
                <div
                    className={`flex items-center justify-between max-w-[70rem] mx-auto transition-all duration-300 py-3`}
                >
                    <Link href="/">
                        <Image
                            src="/logo.svg"
                            width={35}
                            height={35}
                            alt="najmiter logo"
                        />
                    </Link>
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
