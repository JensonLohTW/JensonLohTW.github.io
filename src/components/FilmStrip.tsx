import clsx from 'clsx'
import Image, { type ImageProps } from 'next/image'
import { Container } from '@/components/Container'

interface FilmStripProps {
    originalImages: ImageProps['src'][]
}

export function FilmStrip({ originalImages }: FilmStripProps) {
    // Duplicate images to create a longer strip for scrolling feel if needed, 
    // or just use originalImages if enough.
    // For visual effect, we can assume originalImages is distinct.

    return (
        <div className="mt-16 sm:mt-24 relative overflow-hidden group">
            <Container>
                <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest px-1 mb-8">
                    <span className="text-teal-500 mr-2">●</span>
                    Visual Records
                </h2>
            </Container>

            {/* Decorative track lines */}
            <div className="absolute top-1/2 left-0 w-full h-[120%] -translate-y-1/2 bg-zinc-100 dark:bg-zinc-900/50 -skew-y-1 z-0" />

            <div className="flex overflow-x-auto pb-8 pt-4 px-4 sm:px-8 gap-8 snap-x snap-mandatory scrollbar-hide relative z-10 no-scrollbar">
                {originalImages.map((image, index) => (
                    <div
                        key={typeof image === 'string' ? image : index}
                        className="flex-none w-72 sm:w-80 relative snap-center shrink-0"
                    >
                        {/* Film Film Perforation Top */}
                        <div className="flex justify-between px-2 mb-2 opacity-30">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="w-3 h-4 bg-zinc-900 dark:bg-zinc-800 rounded-sm" />
                            ))}
                        </div>

                        <div className="relative aspect-[4/5] bg-zinc-200 dark:bg-zinc-800 p-2 shadow-lg transform transition-transform duration-500 hover:-translate-y-2 hover:rotate-1">
                            {/* Metadata Header */}
                            <div className="absolute top-0 left-0 w-full flex justify-between px-3 py-1 z-20">
                                <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">{`EXP_0${index + 1}`}</span>
                                <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">ISO 400</span>
                            </div>

                            <div className="relative w-full h-full overflow-hidden filter grayscale contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-700 ease-out">
                                <Image
                                    src={image}
                                    alt=""
                                    className="object-cover w-full h-full"
                                    sizes="(min-width: 640px) 18rem, 11rem"
                                />

                                {/* Grain Overlay */}
                                <div className="absolute inset-0 bg-transparent opacity-20 pointer-events-none mix-blend-overlay"
                                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                                />
                            </div>
                        </div>

                        {/* Film Film Perforation Bottom */}
                        <div className="flex justify-between px-2 mt-2 opacity-30">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="w-3 h-4 bg-zinc-900 dark:bg-zinc-800 rounded-sm" />
                            ))}
                        </div>

                        <div className="mt-4 text-center">
                            <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.2em]">{index + 1}A — 24</span>
                        </div>
                    </div>
                ))}
                <div className="flex-none w-8" /> {/* Spacer */}
            </div>
        </div>
    )
}
