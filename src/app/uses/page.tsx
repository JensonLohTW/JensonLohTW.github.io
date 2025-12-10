import clsx from 'clsx'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { SwissGrid, SwissGridItem } from '@/components/SwissGrid'
import { SectionLine, SwissLabel, GridLines, Crosshair } from '@/components/GeometricDecor'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

function LabSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <SwissGrid columns={12} className="md:gap-y-8">
      <SwissGridItem colSpan={3} className="col-span-12 md:col-span-3">
        <div className="sticky top-24">
          <SwissLabel className="text-teal-500 mb-4 md:mb-0 block border-l-2 border-teal-500 pl-3">{title}</SwissLabel>
        </div>
      </SwissGridItem>
      <SwissGridItem colSpan={9} className="col-span-12 md:col-span-9 space-y-12">
        {children}
      </SwissGridItem>
    </SwissGrid>
  )
}

function ProjectStatus({ status }: { status: 'prototype' | 'building' | 'research' }) {
  const styles = {
    prototype: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-400/10 border-amber-200 dark:border-amber-400/20',
    building: 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-400/10 border-teal-200 dark:border-teal-400/20',
    research: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-400/10 border-indigo-200 dark:border-indigo-400/20',
  }

  const labels = {
    prototype: 'PROTOTYPING',
    building: 'BUILDING',
    research: 'RESEARCHING',
  }

  return (
    <span className={clsx("inline-flex items-center px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-widest border rounded-none transition-colors duration-300", styles[status])}>
      <span className={clsx("w-1.5 h-1.5 rounded-none mr-2 animate-pulse",
        status === 'prototype' ? 'bg-amber-500' :
          status === 'building' ? 'bg-teal-500' : 'bg-indigo-500'
      )} />
      {labels[status]}
    </span>
  )
}

function ActiveProject({
  id,
  title,
  status,
  tech,
  children,
}: {
  id: string
  title: string
  status: 'prototype' | 'building' | 'research'
  tech: string
  children: React.ReactNode
}) {
  return (
    <div className="group relative h-full flex flex-col bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-black/50">

      {/* Tech Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 dark:border-zinc-800 group-hover:bg-zinc-50/50 dark:group-hover:bg-zinc-800/50 transition-colors">
        <span className="font-mono text-xs text-zinc-400 group-hover:text-teal-500 transition-colors tracking-widest">{id}</span>
        <ProjectStatus status={status} />
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col relative overflow-hidden">
        <GridLines className="absolute inset-0 opacity-[0.03] pointer-events-none" />

        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 font-display uppercase tracking-tight group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400 flex-grow font-sans border-l-2 border-zinc-100 dark:border-zinc-800 pl-4 group-hover:border-teal-500/30 transition-colors">
          {children}
        </p>
      </div>

      {/* Tech Footer */}
      <div className="px-6 py-3 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/30 flex items-center justify-between">
        <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
          {tech}
        </div>
        <Crosshair className="w-3 h-3 text-zinc-300 dark:text-zinc-700 group-hover:text-teal-500 transition-colors rotate-0 group-hover:rotate-90 duration-500" />
      </div>
    </div>
  )
}

function InterestTag({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 border border-zinc-200 dark:border-zinc-700 rounded-sm text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 hover:border-teal-500 hover:text-teal-500 hover:bg-teal-50/50 dark:hover:bg-teal-900/10 transition-all cursor-default uppercase tracking-wider">
      {text}
    </span>
  )
}

export const metadata = {
  title: 'Lab',
  description: 'Active projects, experiments, and research interests.',
}

export default function Lab() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <SwissLabel>Lab & Radar</SwissLabel>
          <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-grow" />
          <div className="font-mono text-xs text-zinc-400">STATUS: ACTIVE</div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-100 font-display max-w-4xl leading-[0.9] uppercase">
          Work in Progress<br />
          <span className="text-zinc-300 dark:text-zinc-700">& Active Research.</span>
        </h1>
        <p className="mt-8 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl font-mono border-l-2 border-teal-500/20 pl-6">
            // A collection of ongoing experiments, prototyping ideas,
          <br />// and the technologies I am currently exploring.
        </p>
      </div>

      <SectionLine className="mb-16" />

      <div className="space-y-24">
        <FadeInStagger>
          <LabSection title="Active Build">
            <ul className="grid grid-cols-1 gap-8">
              <FadeIn>
                <ActiveProject
                  id="PRJ-LAB-001"
                  title="Personal AI Agent"
                  status="building"
                  tech="LangChain / Pinecone / Python"
                >
                  An autonomous agent capable of managing my digital knowledge base, organizing tasks, and summarizing technical papers. Currently optimizing the retrieval augmented generation (RAG) pipeline for better context awareness.
                </ActiveProject>
              </FadeIn>
              <FadeIn>
                <ActiveProject
                  id="PRJ-SYS-092"
                  title="Swiss Design System"
                  status="prototype"
                  tech="React / Tailwind / TypeScript"
                >
                  A React component library strictly adhering to International Typographic Style principles. Focusing on mathematical grid precision, negative space, and typographic hierarchy. Currently refactoring the grid engine.
                </ActiveProject>
              </FadeIn>
              <FadeIn>
                <ActiveProject
                  id="PRJ-IOT-102"
                  title="Smart Home Bridge"
                  status="research"
                  tech="Rust / Zigbee / MQTT"
                >
                  Reverse engineering local protocols for IoT devices to create a privacy-first, cloud-free home automation hub. Investigating matter protocol compatibility and low-latency local execution.
                </ActiveProject>
              </FadeIn>
            </ul>
          </LabSection>

          <SectionLine className="my-16 opacity-30 border-dashed" />

          <LabSection title="Research Radar">
            <FadeIn>
              <div className="mb-12">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                  High Intensity
                </h3>
                <p className="text-sm text-zinc-500 mb-6 max-w-md">Topics I am deeply investigating right now. Expect new projects in these areas soon.</p>
                <div className="flex flex-wrap gap-3">
                  <InterestTag text="Generative Agents" />
                  <InterestTag text="Rust Systems" />
                  <InterestTag text="WebAssembly" />
                  <InterestTag text="Type Theory" />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                  On the Horizon
                </h3>
                <p className="text-sm text-zinc-500 mb-6 max-w-md">Emerging technologies I'm keeping an eye on.</p>
                <div className="flex flex-wrap gap-3">
                  <InterestTag text="Spatial Computing" />
                  <InterestTag text="Edge AI" />
                  <InterestTag text="Solid.js" />
                  <InterestTag text="Biomimetic Design" />
                </div>
              </div>
            </FadeIn>
          </LabSection>
        </FadeInStagger>
      </div>
    </Container>
  )
}
