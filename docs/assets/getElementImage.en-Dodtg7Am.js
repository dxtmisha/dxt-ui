import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getElementImage - Get image element`}),`
`,(0,c.jsx)(t.h1,{id:`getelementimage`,children:(0,c.jsx)(t.code,{children:`getElementImage`})}),`
`,(0,c.jsxs)(t.p,{children:[`Used to safely retrieve an `,(0,c.jsx)(t.code,{children:`HTMLImageElement`}),` node. If a string (an image URL) is passed as input, the function automatically creates an `,(0,c.jsx)(t.code,{children:`<img>`}),` tag and assigns the URL to its `,(0,c.jsx)(t.code,{children:`src`}),` attribute. If an `,(0,c.jsx)(t.code,{children:`HTMLImageElement`}),` object is already passed, it simply returns it unchanged.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image: HTMLImageElement | string`}),` — An image element or a string source (URL).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`HTMLImageElement | undefined`}),` — A ready-to-use `,(0,c.jsx)(t.code,{children:`<img>`}),` tag, or `,(0,c.jsx)(t.code,{children:`undefined`}),` if the environment does not allow its creation (e.g., no DOM).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getElementImage } from '@dxtmisha/functional-basic'

// Passing a string URL
const img1 = getElementImage('/path/to/image.png')
console.log(img1 instanceof HTMLImageElement) // true
console.log(img1?.src) // 'http://.../path/to/image.png'

// Passing an existing img tag
const existingImg = document.createElement('img')
const img2 = getElementImage(existingImg)
console.log(img1 === existingImg) // true
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};