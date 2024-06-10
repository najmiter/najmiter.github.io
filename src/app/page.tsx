import Wrapper from "@/components/Wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import {
    SiAssemblyscript,
    SiMongodb,
    SiReactquery,
    SiReactrouter,
    SiRedux,
} from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";
import {
    FaDatabase,
    FaFacebook,
    FaGitSquare,
    FaGithub,
    FaInstagram,
    FaNodeJs,
    FaPython,
    FaRust,
    FaSwift,
    FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
    RiCss3Fill,
    RiHtml5Fill,
    RiJavascriptFill,
    RiNextjsFill,
    RiReactjsFill,
    RiSupabaseFill,
    RiTailwindCssFill,
} from "react-icons/ri";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "500", "800"],
});

export default function Home() {
    return (
        <div>
            <Wrapper className="">
                <div className="min-h-[calc(100vh-61px)] py-20">
                    <header className="flex flex-col items-center justify-between gap-5">
                        <div className="relative">
                            <div className="grid place-content-center overflow-hidden w-[200px] aspect-square rounded-full bg-[linear-gradient(137.59deg,#FF8660_9.86%,#8000FF_104.95%)]">
                                <Image
                                    src="/hero.png"
                                    width={220}
                                    height={220}
                                    alt="hero image"
                                />
                            </div>
                            <div className="absolute -top-16 sm:-top-10 sm:-right-52 flex flex-col-reverse sm:flex-row">
                                <div className="sm:rotate-0 sm:translate-x-0 sm:translate-y-0 sm:skew-x-0 -rotate-45 -translate-y-14 -translate-x-10 skew-x-[30deg]">
                                    <Image
                                        src="/arrow.svg"
                                        alt="arrow"
                                        width={70}
                                        height={10}
                                    />
                                </div>
                                <h3 className="sm:-translate-y-2 translate-y-0 text-lg sm:text-xl mb-10 text-center ml-5 min-w-fit bg-[linear-gradient(180deg,#5BADFF_0,#1373D1_100%)] text-transparent bg-clip-text font-bold">
                                    Najam ul Hassan
                                </h3>
                            </div>
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
                        <h1 className="bg-[linear-gradient(180deg,#5BADFF_0,#1373D1_100%)] text-transparent bg-clip-text uppercase text-xl text-center font-semibold">
                            experienced with
                        </h1>
                        <div className="flex gap-2 sm:gap-5 justify-center flex-wrap max-w-[40rem]">
                            <RiNextjsFill size={45} color="#C5C5C5" />
                            <RiReactjsFill size={45} color="#C5C5C5" />
                            <RiJavascriptFill size={45} color="#C5C5C5" />
                            <RiHtml5Fill size={45} color="#C5C5C5" />
                            <RiCss3Fill size={45} color="#C5C5C5" />
                            <RiTailwindCssFill size={45} color="#C5C5C5" />
                            <RiSupabaseFill size={40} color="#C5C5C5" />
                            <SiRedux size={40} color="#C5C5C5" />
                            <SiReactquery size={40} color="#C5C5C5" />
                            <SiReactrouter size={40} color="#C5C5C5" />
                            <FaRust size={40} color="#C5C5C5" />
                            <FaPython size={40} color="#C5C5C5" />
                            <FaGitSquare size={40} color="#C5C5C5" />
                            <SiAssemblyscript size={40} color="#C5C5C5" />
                            <SiMongodb size={40} color="#C5C5C5" />
                            <AiOutlineDotNet size={40} color="#C5C5C5" />
                            <FaDatabase size={40} color="#C5C5C5" />
                            <FaNodeJs size={40} color="#C5C5C5" />
                            <FaSwift size={40} color="#C5C5C5" />
                        </div>
                    </div>

                    <div
                        className="flex flex-col items-center gap-5"
                        id="projects"
                    >
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
                                        get assembly code in various assembly
                                        variants (NASM, MASM, etc) and spit out
                                        a copyable rich text that is highlighted
                                        and styled.
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
                                        all the warm stuff like user validation.
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

                <section className="mt-20" id="contact">
                    <div>
                        <h1 className="text-2xl font-semibold bg-[linear-gradient(180deg,#5BADFF_0,#1373D1_100%)] text-transparent bg-clip-text py-5">
                            Contact
                        </h1>
                        <p>Feel free to contact me at any of the following</p>
                        <div className="flex gap-5 items-center mt-5">
                            <div className="flex items-center gap-1">
                                <a href="mailto:realnajmiter@gmail.com">
                                    <BiLogoGmail size={25} />
                                </a>
                            </div>
                            <div className="flex items-center gap-1">
                                <a
                                    href="https://github.com/najmiter"
                                    target="_blank"
                                >
                                    <FaGithub size={25} />
                                </a>
                            </div>
                            <div className="flex items-center gap-1">
                                <a
                                    href="https://instagram.com/najmiter"
                                    target="_blank"
                                >
                                    <FaInstagram size={25} />
                                </a>
                            </div>
                            <div className="flex items-center gap-1">
                                <a
                                    href="https://youtube.com/@najmiter"
                                    target="_blank"
                                >
                                    <FaYoutube size={25} />
                                </a>
                            </div>
                            <div className="flex items-center gap-1">
                                <a
                                    href="https://facebook.com/najmiter"
                                    target="_blank"
                                >
                                    <FaFacebook size={25} />
                                </a>
                            </div>
                            <div className="flex items-center gap-1">
                                <a
                                    href="https://x.com/najmiterer"
                                    target="_blank"
                                >
                                    <FaXTwitter size={25} />
                                </a>
                            </div>
                        </div>
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
