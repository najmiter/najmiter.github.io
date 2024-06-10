import Wrapper from "@/components/Wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "500", "800"],
});

export default function Home() {
    return (
        <div>
            <Wrapper className="">
                <div className="min-h-[calc(100vh-61px)] py-7 sm:py-20">
                    <header className="flex flex-col items-center justify-between gap-5">
                        <div className="grid place-content-center overflow-hidden w-[200px] aspect-square rounded-full bg-[linear-gradient(137.59deg,#FF8660_9.86%,#8000FF_104.95%)]">
                            <Image
                                src="/hero.png"
                                width={220}
                                height={220}
                                alt="hero image"
                            />
                        </div>
                        <h1
                            className={cn(
                                poppins.className,
                                "font-extrabold text-3xl sm:text-[55px] leading-[1.15] text-center max-w-[15ch]"
                            )}
                        >
                            I{" "}
                            <span className="bg-[linear-gradient(137.59deg,#FF8660_9.86%,#8000FF_104.95%)] text-transparent bg-clip-text">
                                love to code
                            </span>{" "}
                            and talk about it
                        </h1>
                        <p className="max-w-prose text-center text-[#C5C5C5] text-sm sm:text-lg font-light">
                            A self taught programmer with over 4 years of
                            experience (working on personal projects only).
                            Don&apos;t like talking about me much. Please check
                            out my projects for more insights on my skills and
                            what to expect.
                        </p>
                        <div className="flex justify-center gap-2 sm:gap-5 flex-wrap">
                            <Button className="capitalize" size="lg">
                                get in touch
                            </Button>
                            <Button
                                className="capitalize"
                                size="lg"
                                variant="secondary"
                            >
                                download resume
                            </Button>
                        </div>
                    </header>
                </div>

                <section className="grid gap-20">
                    <div className="flex flex-col items-center gap-5">
                        <h1 className="text-[#C5C5C5] uppercase text-xl text-center font-semibold">
                            experienced with
                        </h1>
                        <div className="flex gap-5 justify-center flex-wrap max-w-[30rem]">
                            <ExperienceImage name="javascript" />
                            <ExperienceImage name="nodejs" />
                            <ExperienceImage name="reactjs" />
                            <ExperienceImage name="css" />
                            <ExperienceImage name="html" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-5">
                        <h1 className="bg-[linear-gradient(180deg,#FF8660_0%,#D5491D_100%)] text-transparent bg-clip-text text-xl uppercase font-semibold">
                            projects
                        </h1>
                        <article className="flex gap-5 justify-center flex-wrap">
                            <ProjectCard>
                                <ProjectHeader
                                    language="javascript"
                                    heading="Chitter - An assembly language syntax highlighter"
                                />
                                <ProjectDescription>
                                    <p className="text-[#8491A0] text-sm">
                                        An assembly syntax highlighter that can
                                        get any amount of assembly code in
                                        various assembly variants (NASM, MASM,
                                        etc) and spit out a copyable rich text
                                        that is highlighted and styled - ready
                                        to be used in a document or whatever you
                                        like.
                                    </p>
                                </ProjectDescription>
                                <ProjectCta
                                    sourceCode="https://github.com/najmiter/Chitter"
                                    preview="https://najmiter.github.io/Chitter/"
                                />
                            </ProjectCard>

                            <ProjectCard>
                                <ProjectHeader
                                    language="c-sharp"
                                    heading="NutNut - A streaming website"
                                />
                                <ProjectDescription>
                                    <p className="text-[#8491A0] text-sm">
                                        This was our 5th semester final project
                                        (<strong>dotnet</strong> and{" "}
                                        <strong>blazor pages</strong>). It does
                                        all the warm stuff like: Sign in, Sign
                                        out, Sign up, Sign up for premium (yeah
                                        they&apos;re differently implemented)
                                        Check for valididty of the premium
                                        membership (it&apos;s a monthly
                                        subscription) Show movies/tv shows from
                                        a local database (<strong>MSSQL</strong>
                                        ) managed by <strong>C#</strong> Show
                                        the watch page to only a premium member
                                        (free users are redirected to sign up
                                        for a premium page)
                                    </p>
                                </ProjectDescription>
                                <ProjectCta
                                    sourceCode="https://github.com/najmiter/NutNut"
                                    preview="https://youtu.be/0rrFsoqRJmY"
                                />
                            </ProjectCard>

                            <ProjectCard>
                                <ProjectHeader
                                    language="javascript"
                                    heading="neutrabize - A Chrome extension for customising homepage"
                                />
                                <ProjectDescription>
                                    <p className="text-[#8491A0] text-sm">
                                        Your own customisable Chrome new tab and
                                        home page. A free open source extension
                                        to customise your browser&apos;s home
                                        page and new tab.
                                    </p>
                                </ProjectDescription>
                                <ProjectCta
                                    sourceCode="https://github.com/najmiter/neutrabize"
                                    preview="https://chromewebstore.google.com/detail/neutrabize/ppknddihdfnhmdfloaeamelpinalhppe"
                                />
                            </ProjectCard>
                        </article>
                    </div>
                </section>
            </Wrapper>
        </div>
    );
}

function ExperienceImage({ name }: { name: string }) {
    return (
        <Image
            src={`/vicons/${name}.svg`}
            width={40}
            height={40}
            alt={`${name} logo`}
        />
    );
}

function ProjectCta({
    sourceCode,
    preview,
}: {
    sourceCode: string;
    preview: string;
}) {
    return (
        <>
            <Button
                size="lg"
                variant="outline"
                style={{ textTransform: "uppercase" }}
                asChild
            >
                <a href={sourceCode} target="_blank">
                    source code
                </a>
            </Button>
            <Button
                size="lg"
                variant="ghost"
                style={{ textTransform: "uppercase" }}
                asChild
            >
                <a href={preview} target="_blank">
                    preview
                </a>
            </Button>
        </>
    );
}

function ProjectDescription({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
}

function ProjectHeader({
    language,
    heading,
}: {
    language: string;
    heading: string;
}) {
    return (
        <div className="flex gap-2 items-start sm:items-center">
            <Image
                src={`/icons/${language}.png`}
                width={35}
                height={35}
                alt={`${language} logo`}
            />
            <h1 className="font-semibold text-lg sm:text-xl">{heading}</h1>
        </div>
    );
}

function ProjectCard({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex gap-5 flex-col basis-full border border-slate-700 sm:hover:border-slate-600 p-3 sm:p-5 rounded-md">
            {children}
        </div>
    );
}
