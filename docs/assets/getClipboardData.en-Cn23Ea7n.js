import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(n){const t={blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional-basic/Functions/getClipboardData - Get data from clipboard"}),`
`,e.jsx(t.h1,{id:"getclipboarddata",children:e.jsx(t.code,{children:"getClipboardData"})}),`
`,e.jsx(t.p,{children:"Asynchronously extracts text from the clipboard."}),`
`,e.jsxs(t.p,{children:["This function primarily attempts to retrieve text data from the provided ",e.jsx(t.code,{children:"ClipboardEvent"})," (e.g., when handling a ",e.jsx(t.code,{children:"paste"})," event). If the event is omitted or contains no data, it falls back to reading directly from the system clipboard using ",e.jsx(t.code,{children:"navigator.clipboard.readText()"}),"."]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["Note: Using ",e.jsx(t.code,{children:"navigator.clipboard.readText()"})," requires a secure context (HTTPS) and may require the user to explicitly grant clipboard reading permissions in some browsers."]}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"event?: ClipboardEvent"})," — The (optional) clipboard event that fires during cut, copy, or paste actions."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"}),`
`,e.jsx(t.code,{children:"Promise<string>"})," — A promise that resolves to the string content of the clipboard, or an empty string if retrieval fails."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { getClipboardData } from '@dxtmisha/functional-basic'

// Direct usage
document.querySelector('#paste-btn')?.addEventListener('click', async () => {
  const text = await getClipboardData()
  console.log('Clipboard text:', text)
})

// Usage inside a 'paste' event handler
document.addEventListener('paste', async (event) => {
  const text = await getClipboardData(event)
  console.log('Pasted text:', text)
})
`})})]})}function x(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{x as default};
