import Link from 'next/link'
import { allLinearAlgebraLessons } from '.contentlayer/generated'

function LessonCard(lesson) {

  return (
    <li>
        <Link href={lesson.url}>
            <h2 className='text-3xl font-bold'>{lesson.title}</h2>
        </Link>
        <ul className='ml-8 flex'> 
            Authors: {lesson.authors.map((author) => (
                <li className='ml-3' key={author}> {author}</li>
            ))}
        </ul>
        <p className='ml-20'>{lesson.description}</p>
    </li>
  )
}

export default function LessonList() {
  return (
    <div>
      <h1 className='text-4xl font-bold mb-10'>List of Lessons:</h1>
      <ul>
      {allLinearAlgebraLessons.map((lesson, idx) => (
        <LessonCard key={idx} {...lesson} />
      ))}
      </ul>
    </div>
  )
}