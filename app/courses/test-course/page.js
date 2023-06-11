import Link from 'next/link'
import { allDocs } from '.contentlayer/generated'
import CourseTOC from '@/components/CourseTOC'

const overview = "This is where it all begins! A hands-on introduction to all of the essential tools you'll need to build real, working websites. You'll learn what web developers actually do – the foundations you'll need for later courses."

export default function LessonList() {
  return (
    <div className='max-w-3xl mx-auto'>
      <div className='flex justify-center'>
        <CourseTOC lessons={allDocs} course="Test Course" logo={'/bearable-logo.png'} overview={overview} />
      </div>
    </div>
  )
}