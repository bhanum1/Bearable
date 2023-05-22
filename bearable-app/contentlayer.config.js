// contentlayer.config.ts
import { defineDocumentType, makeSource } from '@contentlayer/source-files'

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `**/**/*.md`,
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
  documentTypes: [Doc] 
})