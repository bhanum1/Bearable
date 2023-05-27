import { defineDocumentType, makeSource } from '@contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkMath from 'remark-math'
import rehypeMathJaxSvg from 'rehype-mathjax'
import remarkImages from 'remark-images'
import remarkEmoji from 'remark-emoji'


export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { 
      type: 'string', 
      required: true }
  },
  computedFields: {
    url: { 
      type: 'string', 
      resolve: (doc) => `courses/test-course/${doc._raw.flattenedPath}` 
    },
  },
}))

export default makeSource({ 
  contentDirPath: 'Docs', 
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm, remarkMath, remarkImages, remarkEmoji],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode, // NOTE: Later one if we use the code blocks, we can use a JSON file for the code theme
        // See rehype pretty code documentation to learn more abou this
        {
          theme: 'monokai',
          keepBackground: true,
          onVisitLine(node) {
            // prevent lines from collapsing in 'display: gird' mode and allow empty lines to be copy/pasted
            if (node.children.length === 0) {
              node.children=[{type: "text", value: ' '}]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.classname.push('line--highlighted')
          },
          onVisitHighlightedWord(node) {
            node.properties.classname = ['word--highlighted']
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties:{
            className: ['subheading-anchor'],
            arialabel: 'Link to section'
          }
        }
      ],
      [
      rehypeMathJaxSvg, 
      {
        tex: {
          inlineMath: [['$', '$'], ['\\(', '\\)']],
          displayMath: [['$$', '$$'], ['\\[', '\\]']],
        },
        svg: {
          displayAlign: 'center'
        }
      }
      ]
    ]
  }
})