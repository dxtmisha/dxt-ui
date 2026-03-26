import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/writeClipboardData - Writing text to the clipboard`}),`
`,(0,c.jsx)(n.h1,{id:`writeclipboarddata`,children:(0,c.jsx)(n.code,{children:`writeClipboardData`})}),`
`,(0,c.jsxs)(n.p,{children:[`Writes a text string to the user's clipboard. It uses the modern `,(0,c.jsx)(n.code,{children:`navigator.clipboard API`}),`, falling back to `,(0,c.jsx)(n.code,{children:`document.execCommand`}),` if the former is unavailable.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`text: string`}),` — The text to write.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`Promise<void>`}),` — A promise that resolves after a successful write.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { writeClipboardData } from '@dxtmisha/functional-basic'

await writeClipboardData('Copied text')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};