import { defineDocumentType, makeSource } from '@contentlayer/source-files'

// remark imports
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkImages from 'remark-images'
import remarkEmoji from 'remark-emoji'

// rehype imports
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'

// other
import GithubSlugger from 'github-slugger'

const computedFields = {
  url: {
    type: "string",
    resolve: (doc) => `courses/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  },
  headings: {
    type: "json",
    resolve: async (doc) => {
      const slugger = new GithubSlugger();

      // https://stackoverflow.com/a/70802303
      const regex = /\n\n(?<flag>#{1,6})\s+(?<content>.+)/g;
      const headings = Array.from(doc.body.raw.matchAll(regex)).map(
        ({ groups }) => {
          const flag = groups?.flag;
          const content = groups?.content;
          return {
            heading: flag?.length,
            text: content,
            slug: content ? slugger.slug(content) : undefined,
          };
        }
      );

      return headings;
    },
  },
}

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `test-course/**/*.mdx`,
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
  computedFields
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
  computedFields
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
          behaviour: 'wrap',
          properties:{
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