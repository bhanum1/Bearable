// app/page.tsx
import Link from 'next/link'
import { allDocs } from '.contentlayer/generated'

function DocCard(doc) {
  return (
    <li>
        <Link href={doc.url}>
        {doc.title}
        </Link>
    </li>
  )
}

export default function LessonList() {
  return (
    <div>
      <h1>List of Markdown Files:</h1>
      <ul>
      {allDocs.map((doc, idx) => (
        <DocCard key={idx} {...doc} />
      ))}
      </ul>
    </div>
  )
}