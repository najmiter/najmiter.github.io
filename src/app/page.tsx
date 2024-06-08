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
                <header className="grid gap-20 max-h-dvh">
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
                            <h3 className="font-light text-3xl">
                                A developer who
                            </h3>
                            <h1 className="text-5xl font-bold leading-[1.5]">
                                Cant&apos;t come up with a catchy and{" "}
                                <span className="text-purple-500 inline-block relative after:absolute after:w-[110%] after:h-16 after:-rotate-[8deg] after:rounded-[50%] after:border-white after:border after:top-3 after:-left-[5%]">
                                    impressive
                                </span>{" "}
                                line...
                            </h1>
                            <h6 className="text-xl">
                                But you can check out my projects listed below
                                to get an idea of my work.
                            </h6>
                        </div>
                    </div>
                    <div className="grid gap-10">
                        <div className="flex flex-col gap-5">
                            <h1 className="text-6xl font-semibold">
                                I&apos;m a software developer
                            </h1>
                            <p className="text-xl font-light">
                                Currently making my resume to get hired by
                                someone. Hopefully.
                            </p>
                        </div>
                        <div>
                            <p className="max-w-prose text-lg font-light">
                                A self taught (I do have a university degree
                                though) programmer with over 4 years of
                                experience (working on personal projects only).
                            </p>
                        </div>
                    </div>
                </header>
            </div>
        </Wrapper>
    );
}
