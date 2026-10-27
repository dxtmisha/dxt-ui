import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getElementImage - Get image element`}),`
`,(0,c.jsx)(t.h1,{id:`getelementimage`,children:(0,c.jsx)(t.code,{children:`getElementImage`})}),`
`,(0,c.jsxs)(t.p,{children:[`Used to safely retrieve an `,(0,c.jsx)(t.code,{children:`HTMLImageElement`}),` node. If a string (an image URL) is passed as input, the function creates a new `,(0,c.jsx)(t.code,{children:`<img>`}),` tag, optionally attaches `,(0,c.jsx)(t.code,{children:`onload`}),` and `,(0,c.jsx)(t.code,{children:`onerror`}),` event listeners, and then assigns the URL to its `,(0,c.jsx)(t.code,{children:`src`}),` attribute. If an `,(0,c.jsx)(t.code,{children:`HTMLImageElement`}),` object is already passed, it returns it immediately unchanged.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image?: HTMLImageElement | string`}),` — An image element or a string source (URL / Base64 / Blob URL).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`onload?: GetElementImageCallback`}),` (`,(0,c.jsx)(t.code,{children:`(image: HTMLImageElement, event?: Event | string) => void`}),`) — Optional callback invoked on successful image loading.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`onerror?: GetElementImageCallback`}),` (`,(0,c.jsx)(t.code,{children:`(image: HTMLImageElement, event?: Event | string) => void`}),`) — Optional callback invoked on image load error.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`HTMLImageElement | undefined`}),` — A ready-to-use `,(0,c.jsx)(t.code,{children:`<img>`}),` tag, or `,(0,c.jsx)(t.code,{children:`undefined`}),` if the environment does not allow its creation (e.g., SSR) or if `,(0,c.jsx)(t.code,{children:`image`}),` was omitted.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getElementImage } from '@dxtmisha/functional-basic'

// 1. Simple creation from a string URL
const img1 = getElementImage('/path/to/image.png')
console.log(img1 instanceof HTMLImageElement) // true
console.log(img1?.src) // 'http://.../path/to/image.png'

// 2. Creation with load and error lifecycle callbacks
const imgWithEvents = getElementImage(
  '/path/to/avatar.jpg',
  (image) => console.log('Image loaded successfully:', image.naturalWidth),
  (image) => console.error('Image load failed:', image.src)
)

// 3. Passing an existing img tag (returned directly without modifications)
const existingImg = document.createElement('img')
const img2 = getElementImage(existingImg)
console.log(img2 === existingImg) // true
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};