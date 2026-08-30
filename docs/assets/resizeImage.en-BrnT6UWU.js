import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/resizeImage - Asynchronously resize image`}),`
`,(0,c.jsx)(t.h1,{id:`resizeimage`,children:(0,c.jsx)(t.code,{children:`resizeImage`})}),`
`,(0,c.jsxs)(t.p,{children:[`Asynchronously loads and resizes an image if its width or height exceeds the specified `,(0,c.jsx)(t.code,{children:`maxSize`}),`. Returns a Promise with a Data URL string of the scaled image, or the original source if no scaling is needed.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image: HTMLImageElement | string`}),` — The image element or string source (URL, Data URL).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maxSize: number`}),` — The maximum allowed size in pixels (defaults to `,(0,c.jsx)(t.code,{children:`1280`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`typeData?: string`}),` — Optional MIME type for the resulting Data URL (e.g., `,(0,c.jsx)(t.code,{children:`'image/jpeg'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<string>`}),` — A promise resolving with the resized Data URL string or the original source.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { resizeImage } from '@dxtmisha/functional-basic'

// Resize from Data URL or URL
const resizedDataUrl = await resizeImage('data:image/png;base64,...', 1280)
console.log(resizedDataUrl)

// Usage with an <img> element
const img = document.querySelector('img')
const result = await resizeImage(img, 800, 'image/jpeg')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};