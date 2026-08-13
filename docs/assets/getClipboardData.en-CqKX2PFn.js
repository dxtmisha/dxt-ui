import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getClipboardData - Get data from clipboard`}),`
`,(0,c.jsx)(t.h1,{id:`getclipboarddata`,children:(0,c.jsx)(t.code,{children:`getClipboardData`})}),`
`,(0,c.jsx)(t.p,{children:`Asynchronously extracts text from the clipboard.`}),`
`,(0,c.jsxs)(t.p,{children:[`This function primarily attempts to retrieve text data from the provided `,(0,c.jsx)(t.code,{children:`ClipboardEvent`}),` (e.g., when handling a `,(0,c.jsx)(t.code,{children:`paste`}),` event). If the event is omitted or contains no data, it falls back to reading directly from the system clipboard using `,(0,c.jsx)(t.code,{children:`navigator.clipboard.readText()`}),`.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Note: Using `,(0,c.jsx)(t.code,{children:`navigator.clipboard.readText()`}),` requires a secure context (HTTPS) and may require the user to explicitly grant clipboard reading permissions in some browsers.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event?: ClipboardEvent`}),` — The (optional) clipboard event that fires during cut, copy, or paste actions.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<string>`}),` — A promise that resolves to the string content of the clipboard, or an empty string if retrieval fails.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getClipboardData } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};