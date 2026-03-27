import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/blobToBase64 - Convert Blob to Base64`}),`
`,(0,c.jsx)(n.h1,{id:`blobtobase64`,children:(0,c.jsx)(n.code,{children:`blobToBase64`})}),`
`,(0,c.jsxs)(n.p,{children:[`Asynchronously converts `,(0,c.jsx)(n.code,{children:`Blob`}),` or `,(0,c.jsx)(n.code,{children:`File`}),` objects into a Base64 string (Data URL).`]}),`
`,(0,c.jsx)(n.p,{children:`This is useful when preparing local files (e.g., user-uploaded images) for in-browser previews or for sending to the server in string format.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`blob: Blob`}),` — The `,(0,c.jsx)(n.code,{children:`Blob`}),` (or `,(0,c.jsx)(n.code,{children:`File`}),`) object to convert.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`Promise<string | ArrayBuffer | null>`}),` — Returns a promise that resolves with the Base64 string (Data URL) or rejects with an error if reading fails.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { blobToBase64 } from '@dxtmisha/functional-basic'

async function uploadFile(file: File) {
  try {
    const base64String = await blobToBase64(file)
    console.log(base64String) // 'data:image/png;base64,iVBORw0KGgo...'
  } catch (error) {
    console.error('Error reading the file', error)
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};