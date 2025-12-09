import clsx from 'clsx'

export function GridLines({ className }: { className?: string }) {
    return (
        <div className={clsx("absolute inset-0 pointer-events-none select-none overflow-hidden", className)}>
            <div className="absolute inset-0 grid grid-cols-12 gap-x-8">
                {Array.from({ length: 13 }).map((_, i) => (
                    <div
                        key={i}
                        className={clsx(
                            "h-full w-px bg-zinc-900/5 dark:bg-white/5",
                            i === 0 && "hidden",
                            i === 12 && "hidden"
                        )}
                    />
                ))}
            </div>
        </div>
    )
}

export function Crosshair({ className }: { className?: string }) {
    return (
        <div className={clsx("relative h-4 w-4", className)}>
            <div className="absolute top-1/2 left-0 h-px w-full bg-zinc-900 dark:bg-white" />
            <div className="absolute left-1/2 top-0 h-full w-px bg-zinc-900 dark:bg-white" />
        </div>
    )
}

export function PlusGridItem({ className }: { className?: string }) {
    return (
        <div className={clsx("absolute w-3 h-3", className)}>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-teal-500/50" />
            <div className="absolute left-1/2 top-0 h-full w-[1px] bg-teal-500/50" />
        </div>
    )
}

export function SwissLabel({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <span className={clsx("font-mono text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500", className)}>
            {children}
        </span>
    )
}

export function SectionLine({ className }: { className?: string }) {
    return (
        <div className={clsx("w-full h-px bg-zinc-900 dark:bg-white", className)} />
    )
}
