'use client'

import Link from 'next/link'
import { useState } from 'react'
import { LessonCard } from './CourseTOC'
import { course_title } from '@/lib/utils'


import { MdToc } from 'react-icons/md'
import { RiBookFill } from 'react-icons/ri'
import {compareDesc, format, parseISO} from 'date-fns'



export default function InlineLessonToc({ lessons, course }) {
  const [isCollapsed, setCollapse] = useState(false)

  const CollapseHandler = () => {
    setCollapse(!isCollapsed)
  }

  const title = course_title(course)
  const sorted_lessons = lessons.sort((a, b) => compareDesc(new Date(b.date), new Date(a.date)))

    return(
    <div>

      {/* Button Sidebar*/}
      <div className='fixed flex justify-center left-0 top-[0px] h-full w-[110px]'> 
        <button className='mt-[60px] group flex items-center justify-center h-[60px] w-[60px] hover:text-[#bb434e] transition-all duration-300' onClick = {CollapseHandler}>
          <MdToc size={40}/>
          <span className={ `${isCollapsed ? 'scale-0' : 'group-hover:scale-100' }  fixed ml-7 p-2 w-auto min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-left`
            }>
            List of Lessons
          </span>
        </button>
      </div>

      <aside className={ 
        `${isCollapsed ? 'scale-100' : 'scale-0'} 
            z-50 fixed mt-[40px] left-[45px] w-[400px] p-4 rounded-xl transition-all duration-300 origin-top-left`
      }>
          <div className="dark:border-gray-700' bg-white mb-10 rounded-lg shadow-xl dark:bg-gray-800">
                <div className='border-b p-4 pl-8 dark:border-gray-700'>
                    <a href={`#${course.toLowerCase().replace(/ /g, "-")}`} 
                    className='group flex scroll-mt-5 items-center rounded-lg px-2 py-3 no-underline transition ease-in-out hover:bg-gray-100 hover:transition-colors dark:hover:bg-gray-700'>
                        <RiBookFill size={25}/>
                        <h3 className='w-fit pl-3 text-lg font-medium'
                        id={course.toLowerCase().replace(/ /g, "-")}> 
                        {title} 
                        </h3>
                    </a>
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
      </aside>
    </div>
    )
}