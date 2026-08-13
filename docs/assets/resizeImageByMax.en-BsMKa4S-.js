import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/resizeImageByMax - Resize image by maximum dimension`}),`
`,(0,c.jsx)(t.h1,{id:`resizeimagebymax`,children:(0,c.jsx)(t.code,{children:`resizeImageByMax`})}),`
`,(0,c.jsx)(t.p,{children:`Proportionally resizes an image to fit within the specified maximum size constraints (by width, height, or automatically by the longest side). Returns a Base64-encoded Data URL of the scaled image.`}),`
`,(0,c.jsx)(t.p,{children:`This function is useful for compressing images on the fly before uploading to a server.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image: HTMLImageElement | string`}),` — The image element or URL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maxSize: number`}),` — The maximum allowed size in pixels (for width or height).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: ResizeImageByMaxType`}),` — The scaling strategy: `,(0,c.jsx)(t.code,{children:`'auto'`}),`, `,(0,c.jsx)(t.code,{children:`'width'`}),`, or `,(0,c.jsx)(t.code,{children:`'height'`}),`. Defaults to `,(0,c.jsx)(t.code,{children:`'auto'`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`typeData?: string`}),` — Optional MIME type for the resulting Data URL (e.g., `,(0,c.jsx)(t.code,{children:`'image/jpeg'`}),`). Defaults to `,(0,c.jsx)(t.code,{children:`'image/png'`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`string | undefined`}),` — A Data URL string containing the resized image, or `,(0,c.jsx)(t.code,{children:`undefined`}),` if the image could not be processed or is already smaller than or equal to `,(0,c.jsx)(t.code,{children:`maxSize`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { resizeImageByMax } from '@dxtmisha/functional-basic'

const imgElement = document.querySelector('img')
const resizedDataUrl = resizeImageByMax(imgElement, 800)

console.log(resizedDataUrl) 
// 'data:image/png;base64,iVBORw0KGgo...'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};