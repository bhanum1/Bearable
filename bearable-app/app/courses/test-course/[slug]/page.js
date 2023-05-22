import { allDocs } from '.contentlayer/generated'

export const generateStaticParams = async () => allDocs.map((doc) => ({ slug: doc._raw.flattenedPath }))

export const generateMetadata = ({ params }) => {
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === params.slug)
  if (!doc) throw new Error(`Doc not found for slug: ${params.slug}`)
  return { title: doc.title }
}

const DocLayout = ({ params }) => {
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === params.slug)
  if (!doc) throw new Error(`Doc not found for slug: ${params.slug}`)

  return (
    <article>
      <div>
        <h1> Lesson Title: {doc.title}</h1> {/* Note: Try to keep the title in the markdown the same as the pathname for consistency */}
      </div>
      <div dangerouslySetInnerHTML={{ __html: doc.body.html }} />
    </article>
  )
}

export default DocLayout