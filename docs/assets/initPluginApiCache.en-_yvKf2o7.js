import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/nitro-basic/Functions/initPluginApiCache - API Cache Initialization`}),`
`,(0,c.jsx)(n.h1,{id:`initpluginapicache`,children:(0,c.jsx)(n.code,{children:`initPluginApiCache`})}),`
`,(0,c.jsxs)(n.p,{children:[`A function to configure and initialize the API caching system. It uses Nitro's built-in storage (`,(0,c.jsx)(n.code,{children:`useStorage`}),`) to save, retrieve, and remove cache items. It also includes error handling via `,(0,c.jsx)(n.code,{children:`ErrorCenter`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`storageKey: string`}),` (default `,(0,c.jsx)(n.code,{children:`'Ui_ApiCache'`}),`) — The key prefix for Nitro storage.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cacheStepAgeClearOld?: number`}),` — The cache age threshold for automatically clearing outdated data.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { initPluginApiCache } from '@dxtmisha/nitro-basic'

initPluginApiCache('my-custom-cache', 3600)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};