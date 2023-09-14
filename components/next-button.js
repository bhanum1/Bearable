import {BsArrowRightSquare} from 'react-icons/bs'
import { LuList, LuArrowRight } from "react-icons/lu";
import Link from 'next/link'
import { compareDesc } from 'date-fns'
import Image from 'next/image'

export default function NextButton({course, lessons, lesson}) {
    const sorted_lessons = lessons.sort((a, b) => compareDesc(new Date(b.date), new Date(a.date)))

    const next_index = sorted_lessons.indexOf(lesson) + 1
    if (next_index > sorted_lessons.length - 1) {
        var next_lesson = {
            url: `/courses/${course}`
        }
    } else {
        var next_lesson = sorted_lessons[next_index]
    }

    return(
        <div className="mt-20 relative justify-center items-center self-center gap-10 flex bottom-10 mb-5 bg-card p-8 w-[95%] rounded-md border overflow-hidden">
                <Image
                    src='/Courses-page/long-tree.svg'
                    className='absolute bottom-0 right-0'
                    style={{width: '55%', height: 'auto'}}
                    width={0}
                    height={0}
                    alt="Background Image"
                    />
                <Image
                    src='/Courses-page/long-tree.svg'
                    className='absolute bottom-0 left-0 -scale-x-100'
                    style={{width: '55%', height: 'auto'}}
                    width={0}
                    height={0}
                    alt="Background Image"
                    />
            <button className="z-30 group bg-[#CC4955] text-white rounded-md px-5 py-3 text-center text-lg">
                <Link className='flex items-center gap-2' href={`/courses/${course}`}>
                    <LuList /> View Lessons 
                </Link>
            </button>

            <button className="z-30 items-center bg-[#CC4955] text-white rounded-md px-5 py-3 text-center text-lg">
                <Link className='flex gap-2 items-center' href={next_lesson.url}>
                    Next <LuArrowRight />
                </Link>
            </button>
        </div>
    )
}