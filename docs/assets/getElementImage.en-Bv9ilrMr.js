import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/getElementImage - Get image element`}),`
`,(0,c.jsx)(n.h1,{id:`getelementimage`,children:(0,c.jsx)(n.code,{children:`getElementImage`})}),`
`,(0,c.jsxs)(n.p,{children:[`Used to safely retrieve an `,(0,c.jsx)(n.code,{children:`HTMLImageElement`}),` node. If a string (an image URL) is passed as input, the function automatically creates an `,(0,c.jsx)(n.code,{children:`<img>`}),` tag and assigns the URL to its `,(0,c.jsx)(n.code,{children:`src`}),` attribute. If an `,(0,c.jsx)(n.code,{children:`HTMLImageElement`}),` object is already passed, it simply returns it unchanged.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`image: HTMLImageElement | string`}),` — An image element or a string source (URL).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`HTMLImageElement | undefined`}),` — A ready-to-use `,(0,c.jsx)(n.code,{children:`<img>`}),` tag, or `,(0,c.jsx)(n.code,{children:`undefined`}),` if the environment does not allow its creation (e.g., no DOM).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getElementImage } from '@dxtmisha/functional-basic'

// Passing a string URL
const img1 = getElementImage('/path/to/image.png')
console.log(img1 instanceof HTMLImageElement) // true
console.log(img1?.src) // 'http://.../path/to/image.png'

// Passing an existing img tag
const existingImg = document.createElement('img')
const img2 = getElementImage(existingImg)
console.log(img1 === existingImg) // true
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};