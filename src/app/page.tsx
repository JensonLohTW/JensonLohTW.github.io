import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { SwissGrid, SwissGridItem } from '@/components/SwissGrid'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import logoJiexi from '@/images/logos/jiexi.svg'
import logoOfficeStar from '@/images/logos/officestar.svg'
import logoXiaohongshu from '@/images/logos/xiaohongshu.svg'
import logoXimalaya from '@/images/logos/ximalaya.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { Crosshair, PlusGridItem, SectionLine, SwissLabel } from '@/components/GeometricDecor'
import { FilmStrip } from '@/components/FilmStrip'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function ContactMe() {
  return (
    <div className="p-0 lg:ml-6">
      <div className="border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 p-6 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
          <MailIcon className="h-24 w-24 -mr-8 -mt-8" />
        </div>

        <h2 className="flex text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest mb-4">
          <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
          Communication
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed z-10 relative">
          Open for collaboration on product strategy, growth hacking, and technical architecture.
        </p>
        <div className="mt-6 relative z-10">
          <div className="text-[10px] font-mono text-zinc-400 mb-1 uppercase tracking-wider">Email Protocol</div>
          <a
            href="mailto:jenson_loh@outlook.com"
            className="flex items-center text-sm font-bold font-mono text-teal-600 dark:text-teal-400 hover:underline"
          >
            jenson_loh@outlook.com
          </a>
        </div>
      </div>
    </div>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-none bg-zinc-50 dark:bg-zinc-800">
        <Image src={role.logo} alt="" className="h-7 w-7 grayscale group-hover:grayscale-0 transition-all duration-300" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: '杰悉科技',
      title: '專案經理',
      logo: logoJiexi,
      start: '2025',
      end: {
        label: '現在',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Office Star',
      title: '全端工程師 / 產品主管',
      logo: logoOfficeStar,
      start: '2024',
      end: '2025',
    },
    {
      company: '小紅書',
      title: '中台產品經理',
      logo: logoXiaohongshu,
      start: '2023',
      end: '2024',
    },
    {
      company: '喜馬拉雅',
      title: '商業化產品實習生',
      logo: logoXimalaya,
      start: '2022',
      end: '2023',
    },
  ]

  return (
    <div className="p-0 lg:ml-6 mt-10 lg:mt-0">
      <h2 className="flex items-center text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest mb-6">
        <BriefcaseIcon className="h-6 w-6 flex-none text-teal-500" />
        <span className="ml-3">Career Log</span>
      </h2>

      <div className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
        <div className="grid grid-cols-12 gap-4 p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/50 text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-medium">
          <div className="col-span-4">Company</div>
          <div className="col-span-5">Role</div>
          <div className="col-span-3 text-right">Period</div>
        </div>
        <ol className="divide-y divide-zinc-100 dark:divide-zinc-800">
          {resume.map((role, roleIndex) => {
            let startLabel = typeof role.start === 'string' ? role.start : role.start.label
            let startDate = typeof role.start === 'string' ? role.start : role.start.dateTime
            let endLabel = typeof role.end === 'string' ? role.end : role.end.label
            let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

            return (
              <li key={roleIndex} className="grid grid-cols-12 gap-4 p-4 items-center group hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                <div className="col-span-4 flex items-center gap-3">
                  <div className="relative h-8 w-8 flex-none bg-white p-0.5 border border-zinc-100 dark:border-zinc-700 dark:bg-zinc-800">
                    <Image src={role.logo} alt="" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all" unoptimized />
                  </div>
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-200 truncate">{role.company}</span>
                </div>
                <div className="col-span-5 flex items-center">
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">{role.title}</span>
                </div>
                <div className="col-span-3 text-right flex items-center justify-end">
                  <span className="text-[10px] font-mono text-zinc-400 group-hover:text-teal-500 transition-colors">
                    <time dateTime={startDate}>{startLabel}</time> — <time dateTime={endDate}>{endLabel}</time>
                  </span>
                </div>
              </li>
            )
          })}
        </ol>
      </div>

      <Button href="#" variant="secondary" className="group mt-6 w-full rounded-none bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-300 border-none py-3">
        Download Full CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50 ml-2" />
      </Button>
    </div>
  )
}


export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <FadeInStagger>
      <Container className="mt-16 md:mt-24 relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10 opacity-50">
          <PlusGridItem className="top-10 left-10 hidden lg:block" />
          <PlusGridItem className="top-10 right-10 hidden lg:block" />
          <PlusGridItem className="bottom-10 left-10 hidden lg:block" />
        </div>

        <FadeIn>
          <div className="mb-8 pl-1">
            <SwissLabel>Portfolio 2024 — Jenson Loh</SwissLabel>
          </div>
          <SectionLine className="mb-12" />

          <SwissGrid columns={12} className="items-start">
            <SwissGridItem colSpan={8} className="lg:col-span-8 md:col-span-12 col-span-12 relative">
              <Crosshair className="absolute -top-14 -left-2 text-teal-500 hidden lg:block" />
              <div className="absolute top-0 right-0 font-mono text-[10px] text-zinc-400 dark:text-zinc-600 tracking-widest hidden lg:block">
                REF: 001<br />
                P.M. v3.0
              </div>
              <h1 className="text-7xl font-bold tracking-tighter text-zinc-900 sm:text-9xl dark:text-zinc-100 font-display leading-[0.8] uppercase">
                Product<br />
                Manager<span className="text-teal-500">.</span>
              </h1>
            </SwissGridItem>
            <SwissGridItem colSpan={4} className="lg:col-span-4 md:col-span-12 col-span-12 mt-12 lg:mt-2">
              <div className="lg:border-l border-zinc-200 dark:border-zinc-800 lg:pl-8 h-full">
                <SwissLabel className="block mb-4">Introduction</SwissLabel>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                  我是羅吉祥（Jenson），一位懂技術的產品經理。曾在小紅書主導分享增長策略，實現觸達率提升
                  45%；在喜馬拉雅從 0 到 1 建構商業化體系，付費轉化率提升
                  25%。
                  <br /><br />
                  我相信最好的產品經理是能在商業價值與用戶體驗之間找到平衡的人。
                </p>
                <div className="mt-10 flex gap-6">
                  <SocialLink
                    href="mailto:jenson_loh@outlook.com"
                    aria-label="Email"
                    icon={MailIcon}
                  />
                  <SocialLink
                    href="#"
                    aria-label="Follow on GitHub"
                    icon={GitHubIcon}
                  />
                  <SocialLink
                    href="#"
                    aria-label="Follow on LinkedIn"
                    icon={LinkedInIcon}
                  />
                </div>
              </div>
            </SwissGridItem>
          </SwissGrid>
        </FadeIn>
      </Container>

      <FilmStrip originalImages={[image1, image2, image3, image4, image5]} />

      <Container className="mt-24 md:mt-32">
        <SwissGrid columns={12}>
          <SwissGridItem colSpan={7} className="lg:col-span-7 col-span-12 border-t border-zinc-200 dark:border-zinc-800 pt-10">
            <h2 className="text-2xl font-bold mb-10 text-zinc-900 dark:text-white">最新文章</h2>
            <div className="flex flex-col gap-16">
              <FadeIn>
                {articles.map((article) => (
                  <Article key={article.slug} article={article} />
                ))}
              </FadeIn>
            </div>
          </SwissGridItem>

          <SwissGridItem colSpan={4} start={9} className="lg:col-span-4 lg:col-start-9 col-span-12 mt-16 lg:mt-0 border-t border-zinc-200 dark:border-zinc-800 pt-10">
            <FadeIn>
              <ContactMe />
              <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800 my-10 lg:ml-6" />
              <Resume />
            </FadeIn>
          </SwissGridItem>
        </SwissGrid>
      </Container>
    </FadeInStagger>
  )
}
