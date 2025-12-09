import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoXiaohongshu from '@/images/logos/xiaohongshu-project.svg'
import logoXimalaya from '@/images/logos/ximalaya-project.svg'
import logoOfficeStar from '@/images/logos/officestar-project.svg'

const projects = [
  {
    name: '小紅書數據中台',
    description:
      '主導建構 User–Content–Data 全鏈路追蹤體系，制定社交分享增長策略。實現分享觸達率提升 45%、新客轉化率提升 20%、分享成功率提升至失敗率 < 2%。',
    link: { href: '#', label: '產品成果' },
    logo: logoXiaohongshu,
    metrics: ['觸達率 +45%', '轉化率 +20%', '失敗率 <2%'],
  },
  {
    name: '喜馬拉雅商業化模組',
    description:
      '從 0 到 1 建構商業化體系，涵蓋會員訂閱、內容付費、原生廣告三大模組。設計限時付費、內容試聽等付費轉化功能，建立需求池管理與敏捷開發流程。',
    link: { href: '#', label: '產品成果' },
    logo: logoXimalaya,
    metrics: ['轉化率 +25%', '留存率 +15%', 'CTR +27%'],
  },
  {
    name: 'Office Star 數位化專案',
    description:
      '主導服飾集團數位轉型，開發 Python + Selenium 自動化標案爬蟲、Spring Boot + Vue 電商平台與 ERP 系統。打通跨部門數據 Pipeline，上線 5+ 業務模組。',
    link: { href: '#', label: '產品成果' },
    logo: logoOfficeStar,
    metrics: ['100% 自動化', '效率 +40%', '5+ 模組'],
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: '專案',
  description: '我主導的產品專案，用數據驅動增長的實踐案例。',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="我主導的產品專案"
      intro="這些是我在產品經理生涯中主導的核心專案。每個專案都是從用戶需求出發，透過數據分析和迭代優化，最終實現顯著的業務增長。"
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.metrics.map((metric) => (
                <span
                  key={metric}
                  className="inline-flex items-center rounded-full bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-teal-600/20 ring-inset dark:bg-teal-400/10 dark:text-teal-400 dark:ring-teal-400/20"
                >
                  {metric}
                </span>
              ))}
            </div>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
