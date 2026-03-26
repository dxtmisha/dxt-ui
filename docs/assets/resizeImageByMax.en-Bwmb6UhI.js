import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/resizeImageByMax - Resize image by maximum dimension`}),`
`,(0,c.jsx)(n.h1,{id:`resizeimagebymax`,children:(0,c.jsx)(n.code,{children:`resizeImageByMax`})}),`
`,(0,c.jsx)(n.p,{children:`Proportionally resizes an image to fit within the specified maximum size constraints (by width, height, or automatically by the longest side). Returns a Base64-encoded Data URL of the scaled image.`}),`
`,(0,c.jsx)(n.p,{children:`This function is useful for compressing images on the fly before uploading to a server.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`image: HTMLImageElement | string`}),` — The image element or URL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`maxSize: number`}),` — The maximum allowed size in pixels (for width or height).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: ResizeImageByMaxType`}),` — The scaling strategy: `,(0,c.jsx)(n.code,{children:`'auto'`}),`, `,(0,c.jsx)(n.code,{children:`'width'`}),`, or `,(0,c.jsx)(n.code,{children:`'height'`}),`. Defaults to `,(0,c.jsx)(n.code,{children:`'auto'`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`typeData?: string`}),` — Optional MIME type for the resulting Data URL (e.g., `,(0,c.jsx)(n.code,{children:`'image/jpeg'`}),`). Defaults to `,(0,c.jsx)(n.code,{children:`'image/png'`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`string | undefined`}),` — A Data URL string containing the resized image, or `,(0,c.jsx)(n.code,{children:`undefined`}),` if the image could not be processed or is already smaller than or equal to `,(0,c.jsx)(n.code,{children:`maxSize`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { resizeImageByMax } from '@dxtmisha/functional-basic'

const imgElement = document.querySelector('img')
const resizedDataUrl = resizeImageByMax(imgElement, 800)

console.log(resizedDataUrl) 
// 'data:image/png;base64,iVBORw0KGgo...'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};