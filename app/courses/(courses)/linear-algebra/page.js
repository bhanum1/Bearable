import { allLinearAlgebraLessons } from '.contentlayer/generated'
import CourseTOC from '@/components/CourseTOC'

const overview = "Start your journey into the world of Linear Algebra! This course goes in-depth on the key topics covered with MAT188, the first year engineering linear algebra course."

export default function LessonList() {
  return (
    <div className='max-w-3xl mx-auto'>
      <div className='flex justify-center'>
        <CourseTOC lessons={allLinearAlgebraLessons} course="Linear Algebra" logo={'/matrix-icon.png'} overview={overview} />
      </div>
    </div>
  )
}