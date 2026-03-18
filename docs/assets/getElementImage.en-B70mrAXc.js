import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional-basic/Functions/getElementImage - Get image element"}),`
`,e.jsx(n.h1,{id:"getelementimage",children:e.jsx(n.code,{children:"getElementImage"})}),`
`,e.jsxs(n.p,{children:["Used to safely retrieve an ",e.jsx(n.code,{children:"HTMLImageElement"})," node. If a string (an image URL) is passed as input, the function automatically creates an ",e.jsx(n.code,{children:"<img>"})," tag and assigns the URL to its ",e.jsx(n.code,{children:"src"})," attribute. If an ",e.jsx(n.code,{children:"HTMLImageElement"})," object is already passed, it simply returns it unchanged."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"image: HTMLImageElement | string"})," — An image element or a string source (URL)."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"HTMLImageElement | undefined"})," — A ready-to-use ",e.jsx(n.code,{children:"<img>"})," tag, or ",e.jsx(n.code,{children:"undefined"})," if the environment does not allow its creation (e.g., no DOM)."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getElementImage } from '@dxtmisha/functional-basic'

// Passing a string URL
const img1 = getElementImage('/path/to/image.png')
console.log(img1 instanceof HTMLImageElement) // true
console.log(img1?.src) // 'http://.../path/to/image.png'

// Passing an existing img tag
const existingImg = document.createElement('img')
const img2 = getElementImage(existingImg)
console.log(img1 === existingImg) // true
`})})]})}function d(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{d as default};
