import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Functions/hasNativeDirname - Check __dirname availability`}),`
`,(0,c.jsx)(t.h1,{id:`hasnativedirname`,children:(0,c.jsx)(t.code,{children:`hasNativeDirname`})}),`
`,(0,c.jsxs)(t.p,{children:[`The function checks if the global `,(0,c.jsx)(t.code,{children:`__dirname`}),` variable is available in the current environment.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` if `,(0,c.jsx)(t.code,{children:`__dirname`}),` is defined, `,(0,c.jsx)(t.code,{children:`false`}),` otherwise.`]}),`
`,(0,c.jsx)(t.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,c.jsxs)(t.p,{children:[`The function uses `,(0,c.jsx)(t.code,{children:`typeof __dirname !== 'undefined'`}),` to determine if the environment supports native directory name resolution (typically CommonJS environments).`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { hasNativeDirname } from '@dxtmisha/scripts'

if (hasNativeDirname()) {
  console.log('Environment supports native __dirname')
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};