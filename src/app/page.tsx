import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["300", "500"],
});

export default function Home() {
    return (
        <div>
            <Wrapper className="">
                <div className="py-5 max-h-dvh min-h-dvh">
                    <header className="grid gap-20">
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
                                    Cant&apos;t come up with a catchy and an{" "}
                                    <span className="text-purple-500 inline-block relative after:absolute after:w-[110%] after:h-16 after:-rotate-[8deg] after:rounded-[50%] after:border-white after:border after:top-3 after:-left-[5%]">
                                        impressive
                                    </span>{" "}
                                    heading...
                                </h1>
                                <h6 className="text-xl">
                                    But you can check out my projects listed
                                    below to get an idea of my work.
                                </h6>
                            </div>
                        </div>
                        <div className="grid gap-10">
                            <div className="flex flex-col gap-5">
                                <h1 className="text-6xl font-normal">
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
                                    experience (working on personal projects
                                    only).
                                </p>
                            </div>
                        </div>
                    </header>
                </div>

                {/* EXPERIENCE */}

                <div className="relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] aspect-square bg-[radial-gradient(circle,#763CAC_0%,transparent_100%)] rounded-full blur-[7rem]" />
                    <section className="">
                        <h1
                            className={cn(
                                "text-4xl font-semibold",
                                plusJakartaSans.className
                            )}
                        >
                            Projects
                        </h1>
                        <div className="grid grid-cols-2 gap-5 my-5">
                            <ExperienceCard>
                                <div className="flex gap-5 basis-full px-10">
                                    <Image
                                        src="/icons/javascript.png"
                                        alt="javascript logo"
                                        width={120}
                                        height={120}
                                    />

                                    <div className="">
                                        <h1 className="text-2xl font-normal">
                                            JavaScript
                                        </h1>
                                        <p className="text-xs font-light">
                                            Done various Javascript projects
                                            ranging from frontend to backend as
                                            well as some browser extensions
                                        </p>
                                        <ExploreButton>
                                            <Link href="">Explore</Link>
                                        </ExploreButton>
                                    </div>
                                </div>
                            </ExperienceCard>
                            <ExperienceCard>
                                <div className="flex gap-5 basis-full px-10">
                                    <Image
                                        src="/icons/c-sharp.png"
                                        alt="c sharp logo"
                                        width={120}
                                        height={120}
                                    />

                                    <div className="">
                                        <h1 className="text-2xl font-normal">
                                            C#
                                        </h1>
                                        <p className="text-xs font-light">
                                            Created a movie website using
                                            C#&apos;s .NET and Blazor Pages and
                                            MSSQL with user authentication and
                                            sign in/sign up.
                                        </p>
                                        <ExploreButton>
                                            <Link href="">Explore</Link>
                                        </ExploreButton>
                                    </div>
                                </div>
                            </ExperienceCard>

                            <ExperienceCard>
                                <div className="flex gap-5 basis-full px-10">
                                    <Image
                                        src="/icons/react.png"
                                        alt="react logo"
                                        width={120}
                                        height={120}
                                    />

                                    <div className="">
                                        <h1 className="text-2xl font-normal">
                                            React
                                        </h1>
                                        <p className="text-xs font-light">
                                            Made projects with React (including{" "}
                                            <strong>React Router</strong>,{" "}
                                            <strong>Redux</strong>,{" "}
                                            <strong>React Query</strong>, etc)
                                            which included a resume maker, an
                                            e-commerce site and much more.
                                        </p>
                                        <ExploreButton>
                                            <Link href="">Explore</Link>
                                        </ExploreButton>
                                    </div>
                                </div>
                            </ExperienceCard>

                            <ExperienceCard>
                                <div className="flex gap-5 basis-full px-10">
                                    <Image
                                        src="/icons/css.png"
                                        alt="css logo"
                                        width={120}
                                        height={120}
                                    />

                                    <div className="">
                                        <h1 className="text-2xl font-normal">
                                            Frontend
                                        </h1>
                                        <p className="text-xs font-light">
                                            Created a lot of frontend projects
                                            with pure CSS and HTML which mainly
                                            included Windows 11 clone and an
                                            animated night sky.
                                        </p>
                                        <ExploreButton>
                                            <Link href="">Explore</Link>
                                        </ExploreButton>
                                    </div>
                                </div>
                            </ExperienceCard>
                        </div>
                    </section>
                </div>
            </Wrapper>
        </div>
    );
}

function ExploreButton({ children }: { children: React.ReactNode }) {
    return (
        <Button
            variant="outline"
            className="bg-[#2C1250] hover:bg-[#371764] border-[#693B93] rounded-lg mt-3 px-10"
        >
            {children}
        </Button>
    );
}

function ExperienceCard({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-[linear-gradient(90deg,#130428_7%,#251043_34%,#38126D_57%,#261045_85%,#190634_100%)] h-48 rounded-lg overflow-hidden border-t-4 border-[#4F228D] shadow-lg">
            <div className="w-full h-full bg-stone-950/20 backdrop-blur-3xl flex justify-center items-center">
                {children}
            </div>
        </div>
    );
}
