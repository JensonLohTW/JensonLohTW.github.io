# CLAUDE.md

此檔案為 Claude Code (claude.ai/code) 在此儲存庫中工作時提供指引。

## 指令

```bash
npm run dev      # 啟動開發伺服器於 localhost:3000
npm run build    # 建置生產版本
npm run start    # 啟動生產伺服器
npm run lint     # 執行 ESLint
```

## 架構

這是一個使用 App Router 的 Next.js 15 個人作品集網站，使用 Tailwind CSS v4 和 React 19 建構。

### 主要結構

- `src/app/` - Next.js App Router 頁面
- `src/components/` - 可重複使用的 React 元件
- `src/lib/` - 工具函式（文章載入、日期格式化）
- `src/styles/` - CSS 檔案（Tailwind 和 Prism 語法高亮）

### 文章系統

文章以 MDX 檔案形式撰寫於 `src/app/articles/[slug]/page.mdx`。每篇文章匯出：
- `article` 物件，包含 metadata（title、description、author、date）
- `metadata` 用於 Next.js SEO
- 預設匯出將內容包裝於 `ArticleLayout`

文章結構範例：
```tsx
import { ArticleLayout } from '@/components/ArticleLayout'

export const article = {
  author: 'Author Name',
  date: '2022-09-02',
  title: 'Article Title',
  description: 'Article description',
}

export const metadata = {
  title: article.title,
  description: article.description,
}

export default (props) => <ArticleLayout article={article} {...props} />

// MDX 內容於下方...
```

文章透過 `src/lib/articles.ts` 載入，該檔案使用 fast-glob 來探索所有 `*/page.mdx` 檔案。

### 路徑別名

使用 `@/*` 來匯入 `src/` 目錄下的檔案（設定於 tsconfig.json）。

### 環境變數

在 `.env.local` 中設定 `NEXT_PUBLIC_SITE_URL` 以用於 RSS feed URL。
