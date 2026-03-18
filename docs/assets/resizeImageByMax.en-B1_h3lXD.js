import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Functions/resizeImageByMax - Resize image by maximum dimension"}),`
`,e.jsx(n.h1,{id:"resizeimagebymax",children:e.jsx(n.code,{children:"resizeImageByMax"})}),`
`,e.jsx(n.p,{children:"Proportionally resizes an image to fit within the specified maximum size constraints (by width, height, or automatically by the longest side). Returns a Base64-encoded Data URL of the scaled image."}),`
`,e.jsx(n.p,{children:"This function is useful for compressing images on the fly before uploading to a server."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"image: HTMLImageElement | string"})," — The image element or URL."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"maxSize: number"})," — The maximum allowed size in pixels (for width or height)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: ResizeImageByMaxType"})," — The scaling strategy: ",e.jsx(n.code,{children:"'auto'"}),", ",e.jsx(n.code,{children:"'width'"}),", or ",e.jsx(n.code,{children:"'height'"}),". Defaults to ",e.jsx(n.code,{children:"'auto'"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"typeData?: string"})," — Optional MIME type for the resulting Data URL (e.g., ",e.jsx(n.code,{children:"'image/jpeg'"}),"). Defaults to ",e.jsx(n.code,{children:"'image/png'"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"string | undefined"})," — A Data URL string containing the resized image, or ",e.jsx(n.code,{children:"undefined"})," if the image could not be processed or is already smaller than or equal to ",e.jsx(n.code,{children:"maxSize"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { resizeImageByMax } from '@dxtmisha/functional-basic'

const imgElement = document.querySelector('img')
const resizedDataUrl = resizeImageByMax(imgElement, 800)

console.log(resizedDataUrl) 
// 'data:image/png;base64,iVBORw0KGgo...'
`})})]})}function h(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{h as default};
