import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(r){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional-basic/Functions/blobToBase64 - Convert Blob to Base64"}),`
`,e.jsx(n.h1,{id:"blobtobase64",children:e.jsx(n.code,{children:"blobToBase64"})}),`
`,e.jsxs(n.p,{children:["Asynchronously converts ",e.jsx(n.code,{children:"Blob"})," or ",e.jsx(n.code,{children:"File"})," objects into a Base64 string (Data URL)."]}),`
`,e.jsx(n.p,{children:"This is useful when preparing local files (e.g., user-uploaded images) for in-browser previews or for sending to the server in string format."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"blob: Blob"})," — The ",e.jsx(n.code,{children:"Blob"})," (or ",e.jsx(n.code,{children:"File"}),") object to convert."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"Promise<string | ArrayBuffer | null>"})," — Returns a promise that resolves with the Base64 string (Data URL) or rejects with an error if reading fails."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { blobToBase64 } from '@dxtmisha/functional-basic'

async function uploadFile(file: File) {
  try {
    const base64String = await blobToBase64(file)
    console.log(base64String) // 'data:image/png;base64,iVBORw0KGgo...'
  } catch (error) {
    console.error('Error reading the file', error)
  }
}
`})})]})}function x(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{x as default};
