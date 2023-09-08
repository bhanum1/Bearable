import { Mdx } from '@/components/mdx-components'
import HeadingToc from '@/components/HeadingToc'
import InlineLessonToc from './InlineLessonToc'
import '@/app/katex.css'
import { BsFileArrowUpFill } from 'react-icons/bs'
import { notFound } from 'next/navigation'

import TitleBar from './lesson-title-bar'

export function LessonParams(lessons) { 
  return lessons.map((lesson) => ({
    slug: lesson.slugAsParams
  }))}

export function LessonCheck( slug, lessons, course) {
  const lesson = lessons.find((lesson) => lesson.slugAsParams === `${slug}`)
  if (!lesson) throw new Error(`Lesson not found for slug: ${slug}`) 
  // TODO: change throw to notFound() in final version of website
  
  return lesson
}

export function LessonLayout({ slug, lessons, course, colour }) {
    const lesson = LessonCheck(slug, lessons, course)
  // TODO: change throw to notFound() in final version of website

  // GRADIENT: bg-gradient-to-r from-emerald-500 from-50% to-sky-500

  return (
    <div>
      {/* Lesson Contents and Components */}
        <HeadingToc headings={lesson.headings} />
        <div className='hidden md:block'>
          <InlineLessonToc lessons={lessons} course={course} />
        </div>
        <article className='flex justifiy-stretch lg:pr-[350px] sm:pr-[60px] md:ml-[70px]'>
          <div className='max-w-[470px] sm:max-w-[920px] px-10 mt-3'>
            <TitleBar title={lesson.title} description={lesson.description} authors={lesson.authors} date={lesson.date}/> 
            <Mdx code={lesson.body.code} />
          </div>
        </article>
        <button className='fixed group right-8 bottom-[100px] hover:text-[#bb434e] transition-all'>
          <a href='#top'>
            <BsFileArrowUpFill size={50}/>
          </a>
          <span className='fixed p-2 w-auto min-w-max bottom-14 right-2 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 group-hover:scale-100 origin-bottom'>
            Scroll to Top
          </span>
        </button>
    </div>
  )
}