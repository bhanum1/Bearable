import Link from 'next/link'
import Image from 'next/image'
import { RiBookFill } from 'react-icons/ri'
import { RiBookOpenLine } from 'react-icons/ri'

export function LessonCard(lesson) {
    return (
      <li className='flex justify-between items-center flex-shrink-1 group hover:bg-gray-100 px-2 rounded-lg transition ease-in-out  hover:transition-colors'>
        <RiBookOpenLine size={25}/>
          <Link href={lesson.url} className='grow py-3 pl-3'>
          {lesson.title}
          </Link>
      </li>
    )
  }

export default function CourseTOC({ lessons, course, logo, overview }) {
    return(
        <div>
            <div className='mb-6'>
                <div className='flex justify-center'>
                    <a href='#top'> {/* Place holder link*/}
                        <Image 
                        src={logo} 
                        alt="Logo for course" 
                        width="90"
                        height="90"
                        />
                    </a>
                </div>
                <a href="#top">
                    <h1 className='mt-4 text-center text-3xl font-medium mx-auto text-gray-800'> {course} </h1>
                </a>
            </div>
            <div className='mb-6'>
                <h2 className="text-lg font-medium mb-1 text-gray-700">
                    Overview
                </h2>
                <p className='text-slate-500 prose max-w-none'>
                    {overview}
                </p>
            </div>


            <div className="bg-white shadow rounded-lg mb-10">
                <div className='p-8 px-4 pt-4 pb-4 border-b'>
                    <a href={`#${course.toLowerCase().replace(/ /g, "-")}`} 
                    className='flex items-center no-underline py-3 px-2 scroll-mt-5 group hover:bg-gray-100 rounded-lg transition ease-in-out  hover:transition-colors'>
                        <RiBookFill size={25}/>
                        <h3 className='pl-3 text-lg font-medium text-gray-900 hover:underline w-fit'
                        id={course.toLowerCase().replace(/ /g, "-")}> 
                        {course} 
                        </h3>
                    </a>
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
            </div>
        </div>
    )
}