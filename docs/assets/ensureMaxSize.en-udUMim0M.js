import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/ensureMaxSize - Resize image to fit maximum size`}),`
`,(0,c.jsx)(n.h1,{id:`ensuremaxsize`,children:(0,c.jsx)(n.code,{children:`ensureMaxSize`})}),`
`,(0,c.jsx)(n.p,{children:`Ensures that an image does not exceed the maximum size by resizing it if needed. It returns the image as a Base64 string.`}),`
`,(0,c.jsx)(n.p,{children:`This function is useful for optimizing images before uploading them to a server, reducing bandwidth usage and storage requirements.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`file: Uint8Array`}),` — The image file as a `,(0,c.jsx)(n.code,{children:`Uint8Array`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`compress: number`}),` (optional, default: `,(0,c.jsx)(n.code,{children:`0.56`}),`) — The maximum size as a fraction of the original size.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` (optional, default: `,(0,c.jsx)(n.code,{children:`'image/jpeg'`}),`) — The MIME type of the output image.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`Promise<string>`}),` — Returns a promise that resolves with the Base64 string of the resized image.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ensureMaxSize } from '@dxtmisha/functional-basic'

async function processImage(u8array: Uint8Array) {
  const base64 = await ensureMaxSize(u8array, 0.8, 'image/webp')
  console.log(base64) // 'data:image/webp;base64,...'
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};