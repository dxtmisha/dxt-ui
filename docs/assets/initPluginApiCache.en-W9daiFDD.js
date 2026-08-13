import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/nitro-basic/Functions/initPluginApiCache - API Cache Initialization`}),`
`,(0,c.jsx)(t.h1,{id:`initpluginapicache`,children:(0,c.jsx)(t.code,{children:`initPluginApiCache`})}),`
`,(0,c.jsxs)(t.p,{children:[`A function to configure and initialize the API caching system. It uses Nitro's built-in storage (`,(0,c.jsx)(t.code,{children:`useStorage`}),`) to save, retrieve, and remove cache items. It also includes error handling via `,(0,c.jsx)(t.code,{children:`ErrorCenter`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`storageKey: string`}),` (default `,(0,c.jsx)(t.code,{children:`'Ui_ApiCache'`}),`) — The key prefix for Nitro storage.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cacheStepAgeClearOld?: number`}),` — The cache age threshold for automatically clearing outdated data.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { initPluginApiCache } from '@dxtmisha/nitro-basic'

initPluginApiCache('my-custom-cache', 3600)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};