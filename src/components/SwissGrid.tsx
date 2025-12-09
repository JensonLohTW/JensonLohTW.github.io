import clsx from 'clsx'

interface SwissGridProps {
    children: React.ReactNode
    className?: string
    columns?: number
    gap?: string
    align?: 'start' | 'center' | 'end' | 'stretch'
}

export function SwissGrid({
    children,
    className,
    columns = 12,
    gap = 'gap-x-8',
    align = 'start',
}: SwissGridProps) {
    return (
        <div
            className={clsx(
                'grid',
                `grid-cols-4 md:grid-cols-8 lg:grid-cols-${columns}`,
                gap,
                align === 'start' && 'items-start',
                align === 'center' && 'items-center',
                align === 'end' && 'items-end',
                align === 'stretch' && 'items-stretch',
                className
            )}
        >
            {children}
        </div>
    )
}

export function SwissGridItem({
    children,
    className,
    colSpan = 1,
    start,
}: {
    children: React.ReactNode
    className?: string
    colSpan?: number
    start?: number
}) {
    return (
        <div
            className={clsx(
                colSpan && `col-span-${colSpan}`,
                start && `col-start-${start}`,
                className
            )}
        >
            {children}
        </div>
    )
}
