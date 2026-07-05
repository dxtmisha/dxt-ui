import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Functions/hasNativeDirname - Check __dirname availability`}),`
`,(0,c.jsx)(n.h1,{id:`hasnativedirname`,children:(0,c.jsx)(n.code,{children:`hasNativeDirname`})}),`
`,(0,c.jsxs)(n.p,{children:[`The function checks if the global `,(0,c.jsx)(n.code,{children:`__dirname`}),` variable is available in the current environment.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` if `,(0,c.jsx)(n.code,{children:`__dirname`}),` is defined, `,(0,c.jsx)(n.code,{children:`false`}),` otherwise.`]}),`
`,(0,c.jsx)(n.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,c.jsxs)(n.p,{children:[`The function uses `,(0,c.jsx)(n.code,{children:`typeof __dirname !== 'undefined'`}),` to determine if the environment supports native directory name resolution (typically CommonJS environments).`]}),`
`,(0,c.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { hasNativeDirname } from '@dxtmisha/scripts'

if (hasNativeDirname()) {
  console.log('Environment supports native __dirname')
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};