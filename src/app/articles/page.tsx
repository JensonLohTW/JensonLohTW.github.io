import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { SwissGrid, SwissGridItem } from '@/components/SwissGrid'
import { SectionLine, SwissLabel } from '@/components/GeometricDecor'

function Article({ article }: { article: any }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block text-right font-mono text-xs tracking-widest uppercase opacity-50"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mb-16">
        <SwissLabel className="mb-8 block">Writing</SwissLabel>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100 font-display max-w-2xl">
          Writing on software design, company building, and the aerospace industry.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
          All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.
        </p>
      </div>

      <SectionLine className="mb-16" />

      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </Container>
  )
}
