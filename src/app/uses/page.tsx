import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: '工具',
  description: '我日常使用的軟體工具和工作方法。',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="我的工具箱"
      intro="作為一個懂技術的產品經理，我使用這些工具來設計產品、分析數據、管理專案。這是我的完整工具棧。"
    >
      <div className="space-y-20">
        <ToolsSection title="產品設計">
          <Tool title="Figma">
            我的主力設計工具。從低保真線框圖到高保真原型，Figma
            的協作功能讓我能夠快速與團隊同步設計方案，收集反饋並迭代。
          </Tool>
          <Tool title="Axure RP">
            當需要製作複雜的交互原型時，Axure
            是我的選擇。特別是在展示複雜業務流程和多狀態交互時非常有用。
          </Tool>
          <Tool title="Mermaid">
            用代碼繪製流程圖、時序圖和架構圖。作為懂技術的 PM，我喜歡用
            Mermaid 在文檔中嵌入可維護的圖表。
          </Tool>
        </ToolsSection>
        <ToolsSection title="數據分析">
          <Tool title="Python + Pandas">
            數據分析的瑞士軍刀。無論是用戶行為分析、漏斗轉化還是 A/B
            測試結果統計，Python 都能高效完成。
          </Tool>
          <Tool title="SQL">
            直接查詢數據庫是產品經理的必備技能。熟練的 SQL
            能力讓我能夠自主驗證假設，不需要等待數據分析師的排期。
          </Tool>
          <Tool title="神策 / GrowingIO">
            埋點和用戶行為分析平台。用於追蹤關鍵指標、分析用戶路徑、評估功能效果。
          </Tool>
        </ToolsSection>
        <ToolsSection title="開發工具">
          <Tool title="VS Code">
            輕量但強大的編輯器。作為懂技術的 PM，我會用它來閱讀代碼、編寫
            SQL、處理數據腳本，偶爾也會寫一些小工具。
          </Tool>
          <Tool title="Git">
            版本控制不只是工程師的工具。我用 Git 管理 PRD
            文檔、追蹤需求變更，與開發團隊使用同一套工作流。
          </Tool>
          <Tool title="Postman">
            API 測試工具。在需求評審和聯調階段，我會用 Postman
            來驗證接口邏輯，確保需求被正確實現。
          </Tool>
        </ToolsSection>
        <ToolsSection title="專案管理">
          <Tool title="Notion">
            知識庫和專案管理的完美結合。我用 Notion
            管理需求池、撰寫PRD、追蹤專案進度、沉澱團隊知識。
          </Tool>
          <Tool title="飛書 / Lark">
            高效的協作平台。文檔協作、會議紀錄、任務追蹤，一站式解決團隊協作需求。
          </Tool>
          <Tool title="Jira">
            敏捷開發的標配。用於 Sprint
            規劃、任務分配、Bug追蹤，確保團隊按節奏交付。
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
