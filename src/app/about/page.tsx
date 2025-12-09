import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import { SwissGrid, SwissGridItem } from '@/components/SwissGrid'
import { Crosshair, SectionLine, SwissLabel, GridLines } from '@/components/GeometricDecor'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  children: React.ReactNode
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link
      href={href}
      className={clsx(
        className,
        'group flex items-center p-4 transition-all duration-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700'
      )}
    >
      <Icon className="h-5 w-5 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
      <span className="ml-4 text-sm font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 uppercase tracking-wide">
        {children}
      </span>
      <Crosshair className="ml-auto w-3 h-3 text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
    </Link>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Jenson Loh. I live in Taipei, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">

      {/* Editorial Header */}
      <div className="mb-16 lg:mb-24 relative">
        <div className="absolute top-0 right-0 hidden lg:block">
          <SwissLabel>Est. 1995</SwissLabel>
        </div>
        <h1 className="text-5xl font-bold tracking-tighter text-zinc-900 sm:text-7xl dark:text-zinc-100 font-display max-w-5xl leading-[0.85] uppercase">
          I’m Jenson Loh.<br />
          I live in Taipei,<br />
          <span className="text-zinc-400 dark:text-zinc-600">designing the future.</span>
        </h1>
      </div>

      <SectionLine className="mb-16" />

      <SwissGrid columns={12} className="items-start gap-y-12 lg:gap-y-0">

        {/* Left Column: Portrait & Technical Data */}
        <SwissGridItem colSpan={5} className="lg:col-span-4 col-span-12 relative">
          <FadeIn>
            <div className="relative group">
              <div className="absolute -inset-4 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Crosshair className="absolute -top-1 -left-1 hidden lg:block text-zinc-300" />
              <Crosshair className="absolute -bottom-1 -right-1 hidden lg:block text-zinc-300" />

              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-[3/4] w-full rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 grayscale hover:grayscale-0 transition-all duration-700 rotate-2 group-hover:rotate-0"
              />

              <div className="mt-4 flex justify-between text-xs font-mono text-zinc-400">
                <span>IMG_001.JPG</span>
                <span>TAIPEI, TW</span>
              </div>
            </div>

            <div className="mt-12 hidden lg:block">
              <SwissLabel className="mb-6 block border-b border-zinc-100 dark:border-zinc-800 pb-2">Connect</SwissLabel>
              <div className="space-y-2">
                <SocialLink href="#" icon={XIcon}>Follow on X</SocialLink>
                <SocialLink href="#" icon={InstagramIcon}>Follow on Instagram</SocialLink>
                <SocialLink href="#" icon={GitHubIcon}>Follow on GitHub</SocialLink>
                <SocialLink href="#" icon={LinkedInIcon}>Follow on LinkedIn</SocialLink>
                <SocialLink href="mailto:jenson_loh@outlook.com" icon={MailIcon}>
                  jenson_loh@outlook.com
                </SocialLink>
              </div>
            </div>
          </FadeIn>
        </SwissGridItem>

        {/* Right Column: Editorial Content */}
        <SwissGridItem colSpan={7} start={6} className="lg:col-span-7 lg:col-start-6 col-span-12">
          <FadeInStagger>
            <FadeIn>
              <div className="text-xl font-medium text-zinc-900 dark:text-zinc-100 leading-relaxed mb-8 border-l-2 border-teal-500 pl-6 lg:pl-8">
                I’ve loved making things for as long as I can remember, and wrote my
                first program when I was 6 years old, just two weeks after my mom
                brought home the brand new Macintosh LC 550 that I taught myself to
                type on.
              </div>
            </FadeIn>

            <FadeIn>
              <div className="space-y-7 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-serif lg:font-sans">
                <p>
                  The only thing I loved more than computers as a kid was space. When
                  I was 8, I climbed my 40-foot oak tree specifically to read the
                  book that The Time Warp Trio wrote about blasting off into space.
                </p>
                <p>
                  Today, I’m the founder of Planetaria, where we’re working on
                  civilian space suits and manned shuttle kits for the average
                  eccentric billionaire.
                </p>
                <p>
                  (This is a placeholder bio for display purposes.)
                </p>
              </div>
            </FadeIn>

            {/* Mobile Social Links */}
            <div className="mt-12 lg:hidden">
              <SwissLabel className="mb-6 block border-b border-zinc-100 dark:border-zinc-800 pb-2">Connect</SwissLabel>
              <div className="space-y-2">
                <SocialLink href="#" icon={XIcon}>X</SocialLink>
                <SocialLink href="#" icon={InstagramIcon}>Instagram</SocialLink>
                <SocialLink href="#" icon={GitHubIcon}>GitHub</SocialLink>
                <SocialLink href="#" icon={LinkedInIcon}>LinkedIn</SocialLink>
                <SocialLink href="mailto:jenson_loh@outlook.com" icon={MailIcon}>
                  Email
                </SocialLink>
              </div>
            </div>

          </FadeInStagger>
        </SwissGridItem>

      </SwissGrid>
    </Container>
  )
}
