import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function AchievementSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

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
    <SimpleLayout
      title="成就與榮譽"
      intro="在學業和職業生涯中，我持續追求卓越。這些是我在學術研究和競賽中獲得的成就與認可。"
    >
      <div className="space-y-20">
        <AchievementSection title="學術研究">
          <Achievement
            title="基於雙向 GRU 的通信基站流量預測研究"
            description="提出 Bi-GRU（雙向門控循環單元）預測模型，應用於通信基站流量預測。相比傳統方法，模型 R² 提升約 0.1，預測精度顯著優化，為基站資源調度提供數據支撐。"
            event="本科畢業論文"
          />
        </AchievementSection>
        <AchievementSection title="競賽獲獎">
          <Achievement
            title="上海市大學計算機能力大賽 — 一等獎"
            description="在上海市級計算機能力競賽中脫穎而出，展示了紮實的程式設計基礎和問題解決能力。"
            event="2021 年"
          />
          <Achievement
            title="MCM/ICM 美國大學生數學建模競賽 — H 獎"
            description="參與國際數學建模競賽，運用數學模型和程式設計解決複雜的實際問題，獲得 Honorable Mention 榮譽。"
            event="2021 年"
          />
          <Achievement
            title="全國大學生算法設計大賽 — 銅獎"
            description="在全國性的算法設計競賽中展現出優秀的算法思維和編程能力。"
            event="2020-2021 年"
          />
        </AchievementSection>
        <AchievementSection title="獎學金">
          <Achievement
            title="校級獎學金（二等）"
            description="連續兩年獲得校級獎學金，表彰在學業成績和綜合表現上的優異表現。"
            event="2021、2022 年"
          />
        </AchievementSection>
      </div>
    </SimpleLayout>
  )
}
