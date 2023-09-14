'use client'
import { useState } from 'react'
import { course_title } from '@/lib/utils'


import { MdToc } from 'react-icons/md'
import { LessonTOC } from './CourseTOC';


export default function InlineLessonToc({ lessons, course }) {
  const [isCollapsed, setCollapse] = useState(false)

  const CollapseHandler = () => {
    setCollapse(!isCollapsed)
  }

  const title = course_title(course)

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
            z-50 fixed mt-[40px] left-[45px] h-[200px] p-4 rounded-xl transition-all duration-300 origin-top-left`
      }>
          <LessonTOC className="h-[200px]" course={title} lessons={lessons}/>
      </aside>
    </div>
    )
}