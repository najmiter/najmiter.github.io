import Image from "next/image";
import Wrapper from "./Wrapper";
import { cn } from "@/lib/utils";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["500"],
});

export default function Navbar() {
    return (
        <Wrapper className="max-w-full p-0">
            <nav className="sticky top-0 left-0 bg-[#222222] px-3">
                <div className="flex items-center justify-between max-w-[70rem] mx-auto py-4">
                    <Image
                        src="/logo.svg"
                        width={40}
                        height={40}
                        alt="najmiter logo"
                    />
                    <ul
                        className={cn(
                            "flex gap-2 sm:gap-20 font-light cursor-pointer",
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
