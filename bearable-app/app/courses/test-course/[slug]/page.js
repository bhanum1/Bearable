import { allDocs } from '.contentlayer/generated'
import { Mdx } from '../../../../components/mdx-components'
import { FC } from 'react'
import { notFound } from 'next/navigation'

export async function generateStaticParams() { 
  return allDocs.map((doc) => ({ 
    slug: doc._raw.flattenedPath 
  }))}

export function generateMetadata({ params }) {
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === params.slug)
  if (!doc) throw new Error(`Doc not found for slug: ${params.slug}`) 
  // TODO: change throw to notFound() in final version of website
  
  return { title: doc.title } // try to keep roughly the same as the file name
}


export default function DocLayout({ params }) {
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === params.slug)
  if (!doc) throw new Error(`Doc not found for slug: ${params.slug}`)
  // TODO: change throw to notFound() in final version of website

  return (
    <article>
      <div>
        <h1> Lesson Title: {doc.title}</h1> 
      </div>
      <div>
      <Mdx code={doc.body.code}/>
      </div>
    </article>
  )
} 