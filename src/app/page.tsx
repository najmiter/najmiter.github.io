import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["300", "500"],
});

export default function Home() {
    return (
        <Wrapper className="">
            <div>
                <header>
                    <div className="mt-20 flex gap-10">
                        <div className="relative min-w-[300px]">
                            <div className="absolute -top-10 -left-5 bg-[radial-gradient(circle,#763CAC_0,transparent_100%)] w-80 aspect-square blur-3xl" />
                            <Image
                                className="absolute -top-10 left-0"
                                src="/hero.png"
                                alt="hero image"
                                width={300}
                                height={300}
                            />
                        </div>
                        <div
                            className={cn(
                                plusJakartaSans.className,
                                "flex flex-col gap-7"
                            )}
                        >
                            <h3 className="font-light text-5xl">
                                A developer who
                            </h3>
                            <h1 className="text-7xl font-bold leading-[1.5]">
                                Does&apos;t judge anything by its{" "}
                                <span className="text-purple-500 inline-block relative after:absolute after:w-[110%] after:h-24 after:-rotate-[8deg] after:rounded-[50%] after:border-white after:border after:top-3 after:-left-[5%]">
                                    coding
                                </span>{" "}
                                styles...
                            </h1>
                            <h6 className="text-xl">
                                Because the software should be working and
                                should fit users&apos; requirements.
                            </h6>
                        </div>
                    </div>
                </header>
            </div>
        </Wrapper>
    );
}
