import { defineDocumentType, makeSource } from '@contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'


export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `**/**/*.md`,
  contentType: 'mdx',
  fields: {
    title: { 
      type: 'string', 
      required: true 
    },
  },
  computedFields: {
    url: { 
      type: 'string', 
      resolve: (doc) => `courses/test-course/${doc._raw.flattenedPath}` 
    },
  },
}))

export default makeSource({ 
  contentDirPath: '../lecture-content/plugin-test/Docs', 
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug, 
      [
        rehypePrettyCode, 
        {
          theme: 'github-dark',
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{type: 'text', value: ' '}]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted')
          }, 
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted']
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            arialabel: 'Link to section.',
          },
        }
      ]
    ],
  },
})