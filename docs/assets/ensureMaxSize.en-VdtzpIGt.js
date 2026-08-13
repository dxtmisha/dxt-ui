import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/ensureMaxSize - Resize image to fit maximum size`}),`
`,(0,c.jsx)(t.h1,{id:`ensuremaxsize`,children:(0,c.jsx)(t.code,{children:`ensureMaxSize`})}),`
`,(0,c.jsx)(t.p,{children:`Ensures that an image does not exceed the maximum size by resizing it if needed. It returns the image as a Base64 string.`}),`
`,(0,c.jsx)(t.p,{children:`This function is useful for optimizing images before uploading them to a server, reducing bandwidth usage and storage requirements.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`file: Uint8Array`}),` — The image file as a `,(0,c.jsx)(t.code,{children:`Uint8Array`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`compress: number`}),` (optional, default: `,(0,c.jsx)(t.code,{children:`0.56`}),`) — The maximum size as a fraction of the original size.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string`}),` (optional, default: `,(0,c.jsx)(t.code,{children:`'image/jpeg'`}),`) — The MIME type of the output image.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<string>`}),` — Returns a promise that resolves with the Base64 string of the resized image.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ensureMaxSize } from '@dxtmisha/functional-basic'

async function processImage(u8array: Uint8Array) {
  const base64 = await ensureMaxSize(u8array, 0.8, 'image/webp')
  console.log(base64) // 'data:image/webp;base64,...'
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};