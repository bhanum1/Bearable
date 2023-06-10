import { allDocs } from '.contentlayer/generated'
import { LessonCheck, LessonParams, LessonLayout } from '@/components/LessonLayout'
import { notFound } from 'next/navigation'

export async function generateStaticParams() { 
  return LessonParams(allDocs)}

export function generateMetadata({ params }) {
  const lesson = LessonCheck(params.slug, allDocs, "test-course") 
  return { title: lesson.title } // try to keep roughly the same as the file name
}

export default function Layout({ params }) {
  return (
    <div>
       <LessonLayout lessons={allDocs} course="test-course" slug={params.slug}/>
    </div>
  )
} 