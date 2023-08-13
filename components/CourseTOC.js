import Link from 'next/link'
import Image from 'next/image'
import { RiBookFill } from 'react-icons/ri'
import { RiBookOpenLine } from 'react-icons/ri'
import {compareDesc, format, parseISO} from 'date-fns'



export function LessonCard(lesson) {
    return (
      <li className='shrink-1 group flex items-center justify-between rounded-lg px-2 transition ease-in-out hover:bg-[#ebebe3]  hover:transition-colors dark:hover:bg-gray-700'>
        <RiBookOpenLine size={25}/>
          <Link href={lesson.url} className='grow py-3 pl-3'>
          {lesson.title}
          </Link>
      </li>
    )
  }

export function LessonTOC({ lessons, course}){
    const sorted_lessons = lessons.sort((a, b) => compareDesc(new Date(b.date), new Date(a.date)))
    return(
        <div className="dark:border-gray-700' border-title bg-card mb-10 rounded-lg shadow dark:bg-gray-800">
            <div className='border-b p-4 pl-8 dark:border-gray-700'>
                <Link href={`courses/${course.toLowerCase().replace(/ /g, "-")}`} 
                className='group flex scroll-mt-5 items-center rounded-lg px-2 py-3 no-underline transition ease-in-out hover:bg-card-hover hover:transition-colors dark:hover:bg-gray-700'>
                    <RiBookFill size={25}/>
                    <h3 className='w-fit pl-3 text-lg font-medium'
                    id={course.toLowerCase().replace(/ /g, "-")}> 
                    {course} 
                    </h3>
                </Link>
            </div>
            <div className='p-8 py-4'>
                <div className='flex flex-col space-y-3'>
                    <ul>
                    {sorted_lessons.map((lesson, idx) => (
                        <LessonCard key={idx} {...lesson} />
                    ))}
                </ul>
                </div>
            </div>
        </div>
    )
}

export default function CourseTOC({ lessons, course, overview }) {
    //throw new Error(`Pdf array of type "${typeof(lessons)}" instead of array`)
    return(
        <div>
            <div className='mb-6'>
                <a href="#top">
                    <h1 className='mx-auto mt-4 text-center text-3xl font-bold text-title'> {course} </h1>
                </a>
            </div>
            <div className='mb-6'>
                <h2 className="mb-1 text-lg font-medium text-gray-800">
                    Overview
                </h2>
                <p className='prose max-w-none text-muted-foreground'>
                    {overview}
                </p>
            </div>


            <LessonTOC course={course} lessons={lessons}/>
        </div>
    )
}