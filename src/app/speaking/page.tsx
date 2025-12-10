import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { SwissGrid, SwissGridItem } from '@/components/SwissGrid'
import { SwissLabel, SectionLine } from '@/components/GeometricDecor'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'



function StarIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M10 1L12.9389 7.4209L19.9818 8.16933L14.7077 12.9304L16.208 19.8631L10 16.3268L3.79201 19.8631L5.29235 12.9304L0.0181987 8.16933L7.06109 7.4209L10 1Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function AcademicIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 17L12 22L22 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12L12 17L22 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TrophyIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 15C15.866 15 19 11.866 19 8V3H5V8C5 11.866 8.13401 15 12 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 4H2V8C2 9.65685 3.34315 11 5 11V4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 4H22V8C22 9.65685 20.6569 11 19 11V4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15V18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 21H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Achievement({
  title,
  description,
  event,
  icon: Icon = StarIcon,
}: {
  title: string
  description: string
  event: string
  icon?: React.ComponentType<{ className?: string }>
}) {
  return (
    <Card as="article" className="pl-14 relative">
      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
        <Icon className="h-6 w-6 text-teal-500" />
      </div>
      <Card.Title as="h3">
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
    </Card>
  )
}

export const metadata: Metadata = {
  title: '成就',
  description: '我的學術成就、獲獎記錄與論文發表。',
}

export default function Achievements() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mb-16">
        <SwissLabel className="mb-8 block">Recognition</SwissLabel>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100 font-display max-w-3xl leading-[0.9]">
          Honors & Academic Achievements.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
          My pursuit of excellence in academia and professional competition.
        </p>
      </div>

      <SectionLine className="mb-16" />

      <div className="space-y-20">
        <FadeInStagger>
          <SwissGrid columns={12} className="gap-y-8">
            <SwissGridItem colSpan={3} className="col-span-12 lg:col-span-3">
              <SwissLabel className="text-teal-500">Research</SwissLabel>
            </SwissGridItem>
            <SwissGridItem colSpan={9} className="col-span-12 lg:col-span-9 border-t border-zinc-100 dark:border-zinc-800 pt-8 lg:pt-0 lg:border-none">
              <FadeIn>
                <Achievement
                  title="基於雙向 GRU 的通信基站流量預測研究"
                  description="提出 Bi-GRU（雙向門控循環單元）預測模型，應用於通信基站流量預測。相比傳統方法，模型 R² 提升約 0.1，預測精度顯著優化，為基站資源調度提供數據支撐。"
                  event="本科畢業論文"
                  icon={AcademicIcon}
                />
              </FadeIn>
            </SwissGridItem>
          </SwissGrid>

          <SectionLine className="my-16 opacity-30" />

          <SwissGrid columns={12} className="gap-y-8">
            <SwissGridItem colSpan={3} className="col-span-12 lg:col-span-3">
              <SwissLabel className="text-teal-500">Competitions</SwissLabel>
            </SwissGridItem>
            <SwissGridItem colSpan={9} className="col-span-12 lg:col-span-9 space-y-16 border-t border-zinc-100 dark:border-zinc-800 pt-8 lg:pt-0 lg:border-none">
              <FadeIn>
                <Achievement
                  title="上海市大學計算機能力大賽 — 一等獎"
                  description="在上海市級計算機能力競賽中脫穎而出，展示了紮實的程式設計基礎和問題解決能力。"
                  event="2021 年"
                  icon={TrophyIcon}
                />
              </FadeIn>
              <FadeIn>
                <Achievement
                  title="MCM/ICM 美國大學生數學建模競賽 — H 獎"
                  description="參與國際數學建模競賽，運用數學模型和程式設計解決複雜的實際問題，獲得 Honorable Mention 榮譽。"
                  event="2021 年"
                  icon={TrophyIcon}
                />
              </FadeIn>
              <FadeIn>
                <Achievement
                  title="全國大學生算法設計大賽 — 銅獎"
                  description="在全國性的算法設計競賽中展現出優秀的算法思維和編程能力。"
                  event="2020-2021 年"
                  icon={TrophyIcon}
                />
              </FadeIn>
            </SwissGridItem>
          </SwissGrid>

          <SectionLine className="my-16 opacity-30" />

          <SwissGrid columns={12} className="gap-y-8">
            <SwissGridItem colSpan={3} className="col-span-12 lg:col-span-3">
              <SwissLabel className="text-teal-500">Scholarships</SwissLabel>
            </SwissGridItem>
            <SwissGridItem colSpan={9} className="col-span-12 lg:col-span-9 border-t border-zinc-100 dark:border-zinc-800 pt-8 lg:pt-0 lg:border-none">
              <FadeIn>
                <Achievement
                  title="校級獎學金（二等）"
                  description="連續兩年獲得校級獎學金，表彰在學業成績和綜合表現上的優異表現。"
                  event="2021、2022 年"
                  icon={StarIcon}
                />
              </FadeIn>
            </SwissGridItem>
          </SwissGrid>
        </FadeInStagger>
      </div>
    </Container>
  )
}
