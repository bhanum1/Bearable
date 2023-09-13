import {BsArrowRightSquare} from 'react-icons/bs'
import Link from 'next/link'
import { compareDesc } from 'date-fns'
import Image from 'next/image'

export default function NextButton({course, lessons, lesson}) {
    const sorted_lessons = lessons.sort((a, b) => compareDesc(new Date(b.date), new Date(a.date)))

    const next_index = sorted_lessons.indexOf(lesson) + 1
    const next_lesson = sorted_lessons[next_index]
    return(
        <div className="justify-center items-center self-center gap-10 flex bottom-10 mb-5 bg-card p-8 w-[95%] rounded-md border">
            <Image
                src='/About-page/community.svg'
                className='absolute'
                style={{width: '100%', height: 'auto'}}
                width={0}
                height={0} 
                quality={100}
                alt="Background Image"
                />
            <button className="group bg-[#CC4955] text-white rounded-md px-5 py-3 text-center text-lg">
                <Link href={`/courses/${course}`}>View Lessons</Link>
            </button>

            <button className="items-center bg-[#CC4955] text-white rounded-md px-5 py-3 text-center text-lg">
                <Link className='flex gap-2 items-center' href={next_lesson.url}>
                Next <BsArrowRightSquare />
                </Link>
            </button>
        </div>
    )
}