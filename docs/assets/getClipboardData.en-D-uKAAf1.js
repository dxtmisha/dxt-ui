import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/getClipboardData - Get data from clipboard`}),`
`,(0,c.jsx)(n.h1,{id:`getclipboarddata`,children:(0,c.jsx)(n.code,{children:`getClipboardData`})}),`
`,(0,c.jsx)(n.p,{children:`Asynchronously extracts text from the clipboard.`}),`
`,(0,c.jsxs)(n.p,{children:[`This function primarily attempts to retrieve text data from the provided `,(0,c.jsx)(n.code,{children:`ClipboardEvent`}),` (e.g., when handling a `,(0,c.jsx)(n.code,{children:`paste`}),` event). If the event is omitted or contains no data, it falls back to reading directly from the system clipboard using `,(0,c.jsx)(n.code,{children:`navigator.clipboard.readText()`}),`.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`Note: Using `,(0,c.jsx)(n.code,{children:`navigator.clipboard.readText()`}),` requires a secure context (HTTPS) and may require the user to explicitly grant clipboard reading permissions in some browsers.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`event?: ClipboardEvent`}),` — The (optional) clipboard event that fires during cut, copy, or paste actions.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`Promise<string>`}),` — A promise that resolves to the string content of the clipboard, or an empty string if retrieval fails.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getClipboardData } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};