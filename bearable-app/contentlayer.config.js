import { defineDocumentType, makeSource } from '@contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkMath from 'remark-math'
import remarkImages from 'remark-images'
import remarkEmoji from 'remark-emoji'
import rehypeKatex from 'rehype-katex'


export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `test-course/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { 
      type: 'string', 
      required: true }
  },
  computedFields: {
    url: { 
      type: 'string', 
      resolve: (doc) => `courses/${doc._raw.flattenedPath}` 
    },
  },
}))

export const LinearAlgebraLesson = defineDocumentType(() => ({
  name: 'LinearAlgebraLesson',
  filePathPattern: `linear-algebra/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { 
      type: 'string', 
      required: true 
    },
    description: {
      type: 'string', 
      required: true
    },
    authors: {
      type: 'list', 
      of: {type: 'string'},
      required: true
    }
  },
  computedFields: {
    url: { 
      type: 'string', 
      resolve: (doc) => `courses/${doc._raw.flattenedPath}` 
    },
  },
}))

export default makeSource({ 
  contentDirPath: './course-content', 
  documentTypes: [Doc, LinearAlgebraLesson],
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
      rehypeKatex, 
      ]
    ]
  }
})