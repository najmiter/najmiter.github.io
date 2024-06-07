import Image from "next/image";
import Wrapper from "./Wrapper";
import { cn } from "@/lib/utils";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["500"],
});

export default function Navbar() {
    return (
        <Wrapper className="max-w-full">
            <nav className="sticky top-0 left-0 bg-[#1A0B2E]">
                <div className="flex items-center justify-between max-w-[70rem] mx-auto py-4">
                    <Image
                        src="/logo.svg"
                        width={40}
                        height={40}
                        alt="najmiter logo"
                    />
                    <ul
                        className={cn(
                            "flex gap-20 font-light cursor-pointer",
                            plusJakartaSans.className
                        )}
                    >
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </nav>
        </Wrapper>
    );
}
