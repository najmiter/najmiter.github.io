import { cn } from "@/lib/utils";

export default function Wrapper({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn("max-w-[70rem] mx-auto px-5 sm:p-0", className)}>
            {children}
        </div>
    );
}
