import { allDocs } from '.contentlayer/generated'
import { Mdx } from '@/components/mdx-components'
import { notFound } from 'next/navigation'

export async function generateStaticParams() { 
  return allDocs.map((doc) => ({ 
    slug: doc._raw.flattenedPath 
  }))}

export function generateMetadata({ params }) {
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === `test-course/${params.slug}`)
  if (!doc) throw new Error(`Doc not found for slug: test-course/${params.slug}`) 
  // TODO: change throw to notFound() in final version of website
  
  return { title: doc.title } // try to keep roughly the same as the file name
}


export default function DocLayout({ params }) {
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === `test-course/${params.slug}`)
  if (!doc) throw new Error(`Doc not found for slug: test-course/${params.slug}`)
  // TODO: change throw to notFound() in final version of website
  
  return (
    <div>
        <div className='flex justify-center'>
          <h1 className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight"> Lesson Title: {doc.title}</h1> 
        </div>
        <article className='flex justify-center '>
        <div className='max-w-[850px] p-10'>
          <Mdx code={doc.body.code} />
        </div>
      </article>
    </div>
  )
} 