// app/page.tsx
import Link from 'next/link'
import { allDocs, Doc } from '.contentlayer/generated'

function DocCard(doc) {
  return (
    <div>
        <ul>
            <li>
                <Link href={doc.url}>
                {doc.title}
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default function LessonList() {
  return (
    <div>
      <h1>List of Markdown Files:</h1>
      {allDocs.map((doc, idx) => (
        <DocCard key={idx} {...doc} />
      ))}
    </div>
  )
}