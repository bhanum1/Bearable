import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutoLinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypeMathJaxSvg from 'rehype-mathjax';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
// import rehypeKatex from 'rehype-katex';
// import rehypeMathJaxSvg from 'rehype-mathjax';

/**  @type {import('contentlayer/source-files').ComputedFields} */
const computedFileds = {
    slug : {
        type: 'string',
        resolve: (doc) => `/${doc.__raw.flattendPath}`,
    },
    slugAsParams: {
        type: 'string',
        resolve: (doc) => doc.__raw.flattendPath.split('/').slice(1).join('/'),
    },
};

export const Doc = defineDocumentType(() => ({
    name: 'Doc',
    filePathPattern: '../lecture-content/plugin-test/Doc/**/*.mdx', 
    contentType: `mdx`,
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        description: {
            type: 'string',
        },
        published: {
            type: 'boolean',
            default: true,
        },
    },
    computedFileds,
}));

export default makeSource({
    contentDirPath: '../lecture-content/plugin-test', 
    documentTypes: [Doc],
    mdx: {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [
            rehypeSlug,
            [
             rehypePrettyCode,
             {
                theme: 'github-light',
                onVisitLine(node) {
                    // prevent lines from collapsin in `display: grid` mode, and allow empty lines to be copy/pasted
                    if (node.children.length === 0) {
                        node.children = [{ type: 'text', value: ' ' }]
                    }
                },
                onVisitHighlightedLine(node) {
                    node.properties.className.push('line--highlighted')
                },
                onVistedHighlightedWord(node) {
                    node.properties.className = ['word--highlighted']
                }
             },   
            ],
            [
                rehypeAutoLinkHeadings,
                {
                    properties: {
                        className: ['subheading-anchor'],
                        arialabel: 'Link to section'
                    },
                }
            ],
            // rehypeKatex,
            // rehypeMathJaxSvg // NOTE: EXPLORE rehype-mdx-math-enhanced WHICH ALLOWS YOU TO REFERENCE JAVASCRIPT IN CALCULATIONS
        ],
    }
})