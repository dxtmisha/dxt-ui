import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{c as r,f as i,s as a}from"./blocks-DeABI6Wb.js";import{t as o}from"./mdx-react-shim-n552quEh.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/blobToBase64 - Converting Blob to Base64`}),`
`,(0,l.jsx)(n.h1,{id:`blobtobase64`,children:(0,l.jsx)(n.code,{children:`blobToBase64`})}),`
`,(0,l.jsxs)(n.p,{children:[`Asynchronously converts `,(0,l.jsx)(n.code,{children:`Blob`}),` or `,(0,l.jsx)(n.code,{children:`File`}),` objects into a Base64 string (Data URL).`]}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`blob: Blob`}),` — The `,(0,l.jsx)(n.code,{children:`Blob`}),` (or `,(0,l.jsx)(n.code,{children:`File`}),`) object to be converted.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`clean: boolean = false`}),` — If `,(0,l.jsx)(n.code,{children:`true`}),`, removes the Data URL prefix (e.g., `,(0,l.jsx)(n.code,{children:`data:image/png;base64,`}),`).`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Environment Support:`}),`
The utility automatically detects the environment:`]}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Browser`}),`: Uses `,(0,l.jsx)(n.code,{children:`FileReader`}),` to read the content.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Server (SSR)`}),`: Uses `,(0,l.jsx)(n.code,{children:`Buffer`}),` and the asynchronous `,(0,l.jsx)(n.code,{children:`blob.arrayBuffer()`}),` method.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Returns:`}),`
`,(0,l.jsx)(n.code,{children:`Promise<string | undefined>`}),` — Base64 string or `,(0,l.jsx)(n.code,{children:`undefined`}),` if conversion is not possible.`]}),`
`,(0,l.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { blobToBase64 } from '@dxtmisha/functional-basic'

// 1. Default (returns Data URL)
const dataUrl = await blobToBase64(file)
// 'data:image/png;base64,iVBORw0KGgo...'

// 2. Raw Base64 (without prefix)
const rawBase64 = await blobToBase64(file, true)
// 'iVBORw0KGgo...'

// 3. Handling API unavailability
const result = await blobToBase64(blob)
if (result) {
// work with string
}
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};