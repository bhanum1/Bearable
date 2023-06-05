import { allLinearAlgebraLessons } from '.contentlayer/generated'
import { Mdx } from '@/components/mdx-components'
import HeadingToc from '@/components/heading-toc'
import { notFound } from 'next/navigation'

export async function generateStaticParams() { 
  return allLinearAlgebraLessons.map((lesson) => ({ 
    slug: lesson._raw.flattenedPath 
  }))}

export function generateMetadata({ params }) {
  const lesson = allLinearAlgebraLessons.find((lesson) => lesson._raw.flattenedPath === `linear-algebra/${params.slug}`)
  if (!lesson) throw new Error(`Lesson not found for slug: linear-algebra/${params.slug}`) 
  // TODO: change throw to notFound() in final version of website
  
  return { title: lesson.title } // try to keep roughly the same as the file name
}



export default function LessonLayout({ params }) {
  const lesson = allLinearAlgebraLessons.find((lesson) => lesson._raw.flattenedPath === `linear-algebra/${params.slug}`)
  if (!lesson) throw new Error(`Lesson not found for slug: linear-algebra/${params.slug}`)
  // TODO: change throw to notFound() in final version of website

  return (
    <div>
        <div className='flex justify-center'>
          <h1 className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight"> Lesson Title: {lesson.title}</h1> 
        </div>
        <div className='fixed right-10'>
          <HeadingToc headings={lesson.headings}/>
        </div>
        <div className='flex justify-center'>
            <ul className='ml-8 flex'> 
                Authors: {lesson.authors.map((author) => (
                    <li className='ml-3' key={author}> {author}</li>
                ))}
            </ul>
        </div>
        <article className='flex justify-center '>
        <div className='max-w-[850px] min-w-[850px] p-10'> {/*TODO: CHANGE THE MINIMUM WDITH IN THE FINAL VERSION*/}
          <Mdx code={lesson.body.code} />
        </div>
      </article>
    </div>
  )
}