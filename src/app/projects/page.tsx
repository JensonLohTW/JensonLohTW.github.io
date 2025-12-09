import { type Metadata } from 'next'
import Image from 'next/image'
import clsx from 'clsx'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { SwissGrid, SwissGridItem } from '@/components/SwissGrid'
import { SectionLine, SwissLabel, Crosshair, PlusGridItem } from '@/components/GeometricDecor'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import logoXiaohongshu from '@/images/logos/xiaohongshu-project.svg'
import logoXimalaya from '@/images/logos/ximalaya-project.svg'
import logoOfficeStar from '@/images/logos/officestar-project.svg'

const projects = [
  {
    name: '小紅書數據中台',
    description:
      '主導建構 User–Content–Data 全鏈路追蹤體系，制定社交分享增長策略。實現分享觸達率提升 45%、新客轉化率提升 20%、分享成功率提升至失敗率 < 2%。',
    link: { href: '#', label: 'View Case Study' },
    logo: logoXiaohongshu,
    metrics: ['Reach +45%', 'Conv. +20%', 'Fail Rate <2%'],
    featured: true,
  },
  {
    name: '喜馬拉雅商業化模組',
    description:
      '從 0 到 1 建構商業化體系，涵蓋會員訂閱、內容付費、原生廣告三大模組。設計限時付費、內容試聽等付費轉化功能。',
    link: { href: '#', label: 'View Project' },
    logo: logoXimalaya,
    metrics: ['Conv. +25%', 'Retention +15%', 'CTR +27%'],
    featured: false,
  },
  {
    name: 'Office Star 數位化專案',
    description:
      '主導服飾集團數位轉型，開發 Python + Selenium 自動化標案爬蟲、Spring Boot + Vue 電商平台與 ERP 系統。',
    link: { href: '#', label: 'View Project' },
    logo: logoOfficeStar,
    metrics: ['100% Automated', 'Eff. +40%', '5+ Modules'],
    featured: false,
  },
]

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected work & case studies.',
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className={clsx(
      "group relative h-full flex flex-col p-8 transition-all duration-500",
      "hover:bg-zinc-50 dark:hover:bg-zinc-800/50",
      "border border-zinc-200 dark:border-zinc-800"
    )}>
      {/* Geometric Accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-zinc-300 dark:border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-zinc-300 dark:border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-zinc-300 dark:border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-zinc-300 dark:border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="mb-8 flex items-center justify-between">
        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-none bg-zinc-100 dark:bg-zinc-800 ring-1 ring-zinc-900/5 dark:ring-zinc-700/50">
          <Image
            src={project.logo}
            alt=""
            className="h-8 w-8 grayscale group-hover:grayscale-0 transition-all duration-500"
            unoptimized
          />
        </div>
        {project.featured && <SwissLabel className="text-teal-500">FEATURED</SwissLabel>}
      </div>

      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 font-display uppercase tracking-tight">
        <Card.Link href={project.link.href}>
          <span className="absolute -inset-x-0 -inset-y-0 z-20" />
          {project.name}
        </Card.Link>
      </h2>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 flex-grow max-w-lg">
        {project.description}
      </p>

      <div className="pt-8 border-t border-zinc-100 dark:border-zinc-800/50 mt-auto">
        <SwissLabel className="mb-4 block text-xs opacity-50">Key Metrics</SwissLabel>
        <div className="grid grid-cols-3 gap-4">
          {project.metrics.map((metric) => (
            <div key={metric} className="text-xs font-mono font-medium text-teal-600 dark:text-teal-400 uppercase tracking-wider">
              {metric}
            </div>
          ))}
        </div>
      </div>

      {/* Hover Corner Icon */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
        <Crosshair className="w-4 h-4 text-teal-500" />
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mb-24 relative">
        <PlusGridItem className="absolute -top-12 -right-12 hidden lg:block opacity-20" />
        <SwissLabel className="mb-8 block">Selected Work</SwissLabel>
        <h1 className="text-5xl font-bold tracking-tighter text-zinc-900 sm:text-7xl dark:text-zinc-100 font-display max-w-5xl leading-[0.85] uppercase">
          Data-Driven<br /> <span className="text-teal-500">Product Growth.</span>
        </h1>
        <p className="mt-8 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl border-l-2 border-teal-500 pl-6">
          A selection of projects where I led the transition from 0 to 1, and optimized from 1 to 100.
        </p>
      </div>

      <SectionLine className="mb-16" />

      <FadeInStagger>
        <SwissGrid columns={12} className="gap-y-8 lg:gap-y-12">
          {/* Featured Project - Spans 8 Columns */}
          {projects.filter(p => p.featured).map((project) => (
            <SwissGridItem key={project.name} colSpan={12} className="col-span-12 lg:col-span-8">
              <FadeIn className="h-full">
                <ProjectCard project={project} />
              </FadeIn>
            </SwissGridItem>
          ))}

          {/* Empty space next to featured project for true Swiss asymmetry, or a quote/stat could go here */}
          <SwissGridItem colSpan={4} className="hidden lg:block col-span-4 relative">
            <div className="absolute top-0 right-0 w-full h-full border-l border-dashed border-zinc-200 dark:border-zinc-800 p-8 flex items-end justify-end opacity-50">
              <Crosshair />
            </div>
          </SwissGridItem>

          {/* Standard Projects - Span 6 or 4 columns */}
          {projects.filter(p => !p.featured).map((project) => (
            <SwissGridItem key={project.name} colSpan={6} className="col-span-12 lg:col-span-6">
              <FadeIn className="h-full">
                <ProjectCard project={project} />
              </FadeIn>
            </SwissGridItem>
          ))}
        </SwissGrid>
      </FadeInStagger>
    </Container>
  )
}
