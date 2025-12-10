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
    id: 'PRJ-001',
    name: '小紅書數據中台',
    description:
      '主導建構 User–Content–Data 全鏈路追蹤體系，制定社交分享增長策略。實現分享觸達率提升 45%、新客轉化率提升 20%、分享成功率提升至失敗率 < 2%。',
    link: { href: '#', label: 'View Case Study' },
    logo: logoXiaohongshu,
    metrics: [
      { label: 'Reach', value: '+45%' },
      { label: 'Conv.', value: '+20%' },
      { label: 'Fail Rate', value: '<2%' }
    ],
    featured: true,
  },
  {
    id: 'PRJ-002',
    name: '喜馬拉雅商業化模組',
    description:
      '從 0 到 1 建構商業化體系，涵蓋會員訂閱、內容付費、原生廣告三大模組。設計限時付費、內容試聽等付費轉化功能。',
    link: { href: '#', label: 'View Project' },
    logo: logoXimalaya,
    metrics: [
      { label: 'Conv.', value: '+25%' },
      { label: 'Retention', value: '+15%' },
      { label: 'CTR', value: '+27%' }
    ],
    featured: false,
  },
  {
    id: 'PRJ-003',
    name: 'Office Star 數位化專案',
    description:
      '主導服飾集團數位轉型，開發 Python + Selenium 自動化標案爬蟲、Spring Boot + Vue 電商平台與 ERP 系統。',
    link: { href: '#', label: 'View Project' },
    logo: logoOfficeStar,
    metrics: [
      { label: 'Automated', value: '100%' },
      { label: 'Efficiency', value: '+40%' },
      { label: 'Modules', value: '5+' }
    ],
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
      "bg-white dark:bg-zinc-900/40",
      "hover:bg-zinc-50 dark:hover:bg-zinc-900/80",
      "border border-zinc-200 dark:border-zinc-800",
      "hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xl"
    )}>
      {/* Geometric Accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-zinc-300 dark:border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-zinc-300 dark:border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-zinc-300 dark:border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-zinc-300 dark:border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Header with ID and Logo */}
      <div className="mb-6 flex items-start justify-between">
        <div className="flex flex-col">
          <span className="font-mono text-[10px] text-teal-500 tracking-widest mb-2">{project.id}</span>
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-none bg-zinc-100 dark:bg-zinc-800 ring-1 ring-zinc-900/5 dark:ring-zinc-700/50">
            <Image
              src={project.logo}
              alt=""
              className="h-7 w-7 grayscale group-hover:grayscale-0 transition-all duration-500"
              unoptimized
            />
          </div>
        </div>

        {project.featured && (
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span className="text-[10px] font-mono font-bold text-teal-600 dark:text-teal-400 tracking-widest">FEATURED</span>
          </div>
        )}
      </div>

      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 font-display uppercase tracking-tight group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
        <Card.Link href={project.link.href}>
          <span className="absolute -inset-x-0 -inset-y-0 z-20" />
          {project.name}
        </Card.Link>
      </h2>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 flex-grow">
        {project.description}
      </p>

      {/* Dashboard Metrics */}
      <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800/50 mt-auto">
        <div className="grid grid-cols-3 gap-px bg-zinc-100 dark:bg-zinc-800 rounded-sm overflow-hidden border border-zinc-100 dark:border-zinc-800">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="bg-white dark:bg-zinc-900 p-3 flex flex-col items-center justify-center group/metric hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider mb-1">{metric.label}</span>
              <span className="text-sm font-mono font-bold text-zinc-900 dark:text-zinc-100 group-hover/metric:text-teal-500 transition-colors">{metric.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hover Corner Icon */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0 pointer-events-none">
        <Crosshair className="w-4 h-4 text-teal-500" />
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mb-24 relative">
        <div className="absolute top-0 right-0 hidden lg:block text-right">
          <div className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600 tracking-widest mb-1">REF: 002</div>
          <div className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600 tracking-widest">ARCHIVE_STATUS: ACTIVE</div>
        </div>

        <PlusGridItem className="absolute -top-12 -right-12 hidden lg:block opacity-20" />
        <SwissLabel className="mb-8 block">Project Archive</SwissLabel>

        <h1 className="text-6xl font-bold tracking-tighter text-zinc-900 sm:text-8xl dark:text-zinc-100 font-display max-w-5xl leading-[0.8] uppercase">
          Data-Driven<br /> <span className="text-teal-500">Growth.</span>
        </h1>

        <div className="mt-12 flex flex-col lg:flex-row gap-8 lg:items-end">
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl border-l-2 border-zinc-200 dark:border-zinc-800 pl-6">
            A selection of projects where I led the transition from 0 to 1, and optimized from 1 to 100.
          </p>
          <div className="flex-1 border-b border-zinc-200 dark:border-zinc-800 mb-2 hidden lg:block" />
          <div className="font-mono text-xs text-zinc-400 mb-2">Build // 2024</div>
        </div>
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
            <div className="absolute top-0 right-0 w-full h-full border-l border-b border-dashed border-zinc-200 dark:border-zinc-800 p-8 flex flex-col justify-end opacity-50">
              <div className="font-mono text-[10px] text-zinc-400 mb-2">SYSTEM_NOTE</div>
              <div className="text-sm font-bold text-zinc-500">
                SCALING<br />PROTOCOLS<br />INITIATED
              </div>
              <Crosshair className="mt-4 text-zinc-300" />
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
