import Link from 'next/link'
import { ContainerOuter, ContainerInner } from '@/components/Container'
import { SwissLabel, SectionLine, Crosshair } from '@/components/GeometricDecor'
import { SwissGrid, SwissGridItem } from '@/components/SwissGrid'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400 block w-full py-1"
    >
      {children}
    </Link>
  )
}

function SocialLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between py-2 border-b border-zinc-200 dark:border-zinc-800 transition hover:border-teal-500 text-sm font-mono text-zinc-600 dark:text-zinc-400 hover:text-teal-500"
    >
      <span>{children}</span>
      <Crosshair className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <SectionLine />
      <ContainerOuter>
        <div className="pb-16 pt-16">
          <ContainerInner>
            <SwissGrid columns={12} className="gap-y-12">
              {/* 1. Monumental Name */}
              <SwissGridItem colSpan={6} className="col-span-12 lg:col-span-6 flex flex-col justify-between h-full min-h-[300px]">
                <div>
                  <SwissLabel className="mb-8 block">Full Stack Engineer</SwissLabel>
                  <h2 className="text-[120px] leading-[0.8] font-bold tracking-tighter font-display text-zinc-900 dark:text-zinc-100 uppercase mix-blend-difference opacity-20 select-none">
                    Jen<br />Son.
                  </h2>
                </div>
                <div className="hidden lg:block text-xs font-mono text-zinc-400 max-w-xs">
                  Designing the future from Taipei.<br />
                  Strict adherence to International Typographic Style.
                </div>
              </SwissGridItem>

              {/* 2. Sitemap */}
              <SwissGridItem colSpan={3} className="col-span-6 lg:col-span-3 border-l border-zinc-100 dark:border-zinc-800 pl-8">
                <SwissLabel className="mb-6 block text-teal-500">Sitemap</SwissLabel>
                <div className="flex flex-col gap-2 text-sm font-bold font-mono uppercase tracking-widest text-zinc-900 dark:text-zinc-100">
                  <NavLink href="/">Index</NavLink>
                  <NavLink href="/about">About</NavLink>
                  <NavLink href="/projects">Projects</NavLink>
                  <NavLink href="/speaking">Speaking</NavLink>
                  <NavLink href="/uses">The Lab</NavLink>
                </div>
              </SwissGridItem>

              {/* 3. Connect */}
              <SwissGridItem colSpan={3} className="col-span-6 lg:col-span-3 border-l border-zinc-100 dark:border-zinc-800 pl-8">
                <SwissLabel className="mb-6 block text-teal-500">Connect</SwissLabel>
                <div className="flex flex-col gap-1">
                  <SocialLink href="#">GitHub</SocialLink>
                  <SocialLink href="#">LinkedIn</SocialLink>
                  <SocialLink href="#">X / Twitter</SocialLink>
                  <SocialLink href="#">Instagram</SocialLink>
                </div>
              </SwissGridItem>

              {/* 4. Copyright */}
              <SwissGridItem colSpan={12} className="col-span-12 border-t border-zinc-100 dark:border-zinc-800 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-zinc-400 uppercase tracking-wider">
                <p>&copy; {new Date().getFullYear()} Jenson Loh. All rights reserved.</p>
                <p className="mt-2 md:mt-0">Made in Taipei, Taiwan</p>
              </SwissGridItem>
            </SwissGrid>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
