import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-WIGGT2yz.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/en/functional-basic/Functions/blobToBase64 - Converting Blob to Base64`}),`
`,(0,l.jsx)(t.h1,{id:`blobtobase64`,children:(0,l.jsx)(t.code,{children:`blobToBase64`})}),`
`,(0,l.jsxs)(t.p,{children:[`Asynchronously converts `,(0,l.jsx)(t.code,{children:`Blob`}),` or `,(0,l.jsx)(t.code,{children:`File`}),` objects into a Base64 string (Data URL).`]}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`blob: Blob`}),` — The `,(0,l.jsx)(t.code,{children:`Blob`}),` (or `,(0,l.jsx)(t.code,{children:`File`}),`) object to be converted.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`clean: boolean = false`}),` — If `,(0,l.jsx)(t.code,{children:`true`}),`, removes the Data URL prefix (e.g., `,(0,l.jsx)(t.code,{children:`data:image/png;base64,`}),`).`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Environment Support:`}),`
The utility automatically detects the environment:`]}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Browser`}),`: Uses `,(0,l.jsx)(t.code,{children:`FileReader`}),` to read the content.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Server (SSR)`}),`: Uses `,(0,l.jsx)(t.code,{children:`Buffer`}),` and the asynchronous `,(0,l.jsx)(t.code,{children:`blob.arrayBuffer()`}),` method.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Returns:`}),`
`,(0,l.jsx)(t.code,{children:`Promise<string | undefined>`}),` — Base64 string or `,(0,l.jsx)(t.code,{children:`undefined`}),` if conversion is not possible.`]}),`
`,(0,l.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
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
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};