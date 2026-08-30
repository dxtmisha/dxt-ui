import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getImageSrc - Get image source URL`}),`
`,(0,c.jsx)(t.h1,{id:`getimagesrc`,children:(0,c.jsx)(t.code,{children:`getImageSrc`})}),`
`,(0,c.jsxs)(t.p,{children:[`Safely extracts the source URL or Data URL string from an `,(0,c.jsx)(t.code,{children:`HTMLImageElement`}),` or string value. If a string is provided, it is returned directly. If an `,(0,c.jsx)(t.code,{children:`<img>`}),` element is provided, its `,(0,c.jsx)(t.code,{children:`src`}),` attribute is returned. Returns an empty string if undefined or empty.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image?: HTMLImageElement | string`}),` — The image element, string source (URL), or `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — The image source string or an empty string `,(0,c.jsx)(t.code,{children:`''`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getImageSrc } from '@dxtmisha/functional-basic'

// Passing a string URL
const src1 = getImageSrc('https://example.com/photo.png')
console.log(src1) // 'https://example.com/photo.png'

// Passing an HTMLImageElement
const imgElement = document.querySelector('img')
const src2 = getImageSrc(imgElement)
console.log(src2) // 'https://example.com/...'

// Passing undefined
console.log(getImageSrc(undefined)) // ''
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};