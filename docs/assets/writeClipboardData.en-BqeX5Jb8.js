import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/writeClipboardData - Writing text to the clipboard`}),`
`,(0,c.jsx)(t.h1,{id:`writeclipboarddata`,children:(0,c.jsx)(t.code,{children:`writeClipboardData`})}),`
`,(0,c.jsxs)(t.p,{children:[`Writes a text string to the user's clipboard. It uses the modern `,(0,c.jsx)(t.code,{children:`navigator.clipboard API`}),`, falling back to `,(0,c.jsx)(t.code,{children:`document.execCommand`}),` if the former is unavailable.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`text: string`}),` — The text to write.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<void>`}),` — A promise that resolves after a successful write.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { writeClipboardData } from '@dxtmisha/functional-basic'

await writeClipboardData('Copied text')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};