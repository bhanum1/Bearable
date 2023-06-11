'use client'

import Link from 'next/link'
import { useState } from 'react'
import { LessonCard } from './CourseTOC'
import { course_title } from '@/lib/utils'


import { MdToc } from 'react-icons/md'
import { RiBookFill } from 'react-icons/ri'



export default function InlineLessonToc({ lessons, course }) {
  const [isCollapsed, setCollapse] = useState(false)

  const CollapseHandler = () => {
    setCollapse(!isCollapsed)
  }

  const title = course_title(course)


    return(
    <div className=''>

      {/* Button Sidebar*/}
      <div className='fixed flex-col justify-center items-center left-0 top-[64px] h-full w-[60px]'> 
        <button className='mt-[60px] relative group flex items-center justify-center h-[60px] w-[60px] hover:text-[#bb434e] transition-all duration-300' onClick = {CollapseHandler}>
          <MdToc size={40}/>
          <span className='fixed ml-7 p-2 w-auto min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 group-hover:scale-100 origin-left'>
            List of Lessons
          </span>
        </button>
      </div>

      <aside className={ 
        `${isCollapsed ? ' bg-white shadow scale-100' : 'scale-0'} 
            fixed mt-[40px] left-[45px] w-[300px] p-4 rounded-xl transition-all duration-300 origin-top-left`
      }>
          <div className='p-8 px-4 pt-4 pb-4 border-b'>
                    <Link href={`/courses/${course}`} 
                    className='flex items-center no-underline py-3 px-2 scroll-mt-5 group hover:bg-gray-100 rounded-lg transition ease-in-out  hover:transition-colors'>
                        <RiBookFill size={25}/>
                        <h3 className='pl-3 text-lg font-medium text-gray-900 hover:underline w-fit'
                        id={course}> 
                        {title} 
                        </h3>
                    </Link>
                </div>
                <div className='p-8 py-4 px-4'>
                    <div className='flex flex-col space-y-3'>
                        <ul>
                        {lessons.map((lesson, idx) => (
                            <LessonCard key={idx} {...lesson} />
                        ))}
                    </ul>
                </div>
          </div>
      </aside>
    </div>
    )
}