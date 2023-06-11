import { Mdx } from '@/components/mdx-components'
import HeadingToc from '@/components/HeadingToc'
import InlineLessonToc from './InlineLessonToc'
import '@/app/katex.css'
import { BsFileArrowUpFill } from 'react-icons/bs'
import { notFound } from 'next/navigation'

export function LessonParams(lessons) { 
  return lessons.map((lesson) => ({
    slug: lesson._raw.flattenedPath 
  }))}

export function LessonCheck( slug, lessons, course) {
  const lesson = lessons.find((lesson) => lesson._raw.flattenedPath === `${slug.replace(/%2F/g, "/")}`)
  if (!lesson) throw new Error(`Lesson not found for slug: ${slug.replace(/%2F/g, "/")}`) 
  // TODO: change throw to notFound() in final version of website
  
  return lesson
}

export function LessonLayout({ slug, lessons, course }) {
    const lesson = LessonCheck(slug, lessons, course)
  // TODO: change throw to notFound() in final version of website

  return (
    <div>
      
      {/* Title Bar */}
      <div className='sticky top-0 pl-40 bg-gradient-to-r from-emerald-500 from-50% to-sky-500 text-white h-[64px] shadow-xl'>
        <div className='flex justify-left'>
          <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
            <a href="#top">
            {lesson.title}
            </a>
          </h1> 
        </div>
        <div className='flex justify-left'>
            <ul className='flex'> 
                Written By: {lesson.authors.map((author) => (
                    <li className='ml-3' key={author}> {author}</li>
                ))}
            </ul>
        </div>
      </div>

      {/* Lesson Contents and Components */}
      <div>
        <div>
          <HeadingToc headings={lesson.headings} />
        </div>
        <div>
          <div className='relative'>
            <InlineLessonToc lessons={lessons} course={course} />
          </div>
          <article className='flex justifiy-stretch lg:pr-[350px] pr-[60px] ml-[70px]'>
            <div className='max-w-[920px] px-10 mt-3'> {/* not sure whether to keep max width or not */}
              <Mdx code={lesson.body.code} />
            </div>
          </article>
        </div>
        <button className='fixed group right-8 bottom-[100px] hover:text-[#bb434e] transition-all'>
          <a href='#top'>
            <BsFileArrowUpFill size={50}/>
          </a>
          <span className='fixed p-2 w-auto min-w-max bottom-14 right-2 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 group-hover:scale-100 origin-bottom'>
            Scroll to Top
          </span>
        </button>
      </div>
    </div>
  )
}