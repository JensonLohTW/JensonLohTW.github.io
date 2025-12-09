import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
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
  title: '關於',
  description:
    '我是羅吉祥（Jenson Loh），一位用數據驅動產品增長的產品經理。',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            我是羅吉祥，一位用數據驅動產品增長的產品經理。
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              我畢業於上海理工大學資訊工程學系，擁有紮實的技術背景。這段學習經歷讓我不僅能夠理解技術實現的複雜性，更能夠在產品設計時充分考慮技術可行性，成為真正能與工程師深度對話的產品經理。
            </p>
            <p>
              我的產品經理之旅始於喜馬拉雅，在那裡我從 0 到 1
              建構了商業化體系，涵蓋會員訂閱、內容付費和原生廣告三大模組。透過精細的用戶分層和付費轉化漏斗優化，成功將付費轉化率提升
              25%、用戶留存率提升 15%。
            </p>
            <p>
              之後在小紅書擔任中台產品經理，主導建構 User–Content–Data
              全鏈路追蹤體系，並制定社交分享增長策略。透過個性化分享卡片、智能推薦語和分享激勵機制，實現分享觸達率提升
              45%、新客轉化率提升 20%。
            </p>
            <p>
              我相信最好的產品經理是能在商業價值與用戶體驗之間找到平衡的人。技術背景讓我能夠準確評估需求的技術成本，數據思維讓我能夠用
              A/B 測試驗證假設，而用戶洞察則讓我始終聚焦於解決真實問題。
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={GitHubIcon}>
              GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:jenson_loh@outlook.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              jenson_loh@outlook.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
