import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { SwissGrid, SwissGridItem } from '@/components/SwissGrid'
import { SwissLabel, SectionLine } from '@/components/GeometricDecor'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'



function Achievement({
  title,
  description,
  event,
}: {
  title: string
  description: string
  event: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3">{title}</Card.Title>
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
                />
              </FadeIn>
              <FadeIn>
                <Achievement
                  title="MCM/ICM 美國大學生數學建模競賽 — H 獎"
                  description="參與國際數學建模競賽，運用數學模型和程式設計解決複雜的實際問題，獲得 Honorable Mention 榮譽。"
                  event="2021 年"
                />
              </FadeIn>
              <FadeIn>
                <Achievement
                  title="全國大學生算法設計大賽 — 銅獎"
                  description="在全國性的算法設計競賽中展現出優秀的算法思維和編程能力。"
                  event="2020-2021 年"
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
                />
              </FadeIn>
            </SwissGridItem>
          </SwissGrid>
        </FadeInStagger>
      </div>
    </Container>
  )
}
