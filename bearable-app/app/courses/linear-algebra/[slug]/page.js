import { allLinearAlgebraLessons } from '.contentlayer/generated'
import { LessonCheck, LessonParams, LessonLayout } from '@/components/LessonLayout'
import { notFound } from 'next/navigation'

export async function generateStaticParams() { 
  return LessonParams(allLinearAlgebraLessons)}

export function generateMetadata({ params }) {
  const lesson = LessonCheck(params.slug, allLinearAlgebraLessons, "linear-algebra") 
  return { title: lesson.title } // try to keep roughly the same as the file name
}

export default function Layout({ params }) {
  return (
    <div>
       <LessonLayout lessons={allLinearAlgebraLessons} course="linear-algebra" slug={params.slug}/>
    </div>
  )
} 