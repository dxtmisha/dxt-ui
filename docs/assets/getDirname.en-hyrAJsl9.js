import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Functions/getDirname - Get current directory name`}),`
`,(0,c.jsx)(n.h1,{id:`getdirname`,children:(0,c.jsx)(n.code,{children:`getDirname`})}),`
`,(0,c.jsx)(n.p,{children:`The function returns the name of the current directory, handling both CommonJS and ESM environments.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — the current directory name.`]}),`
`,(0,c.jsx)(n.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,c.jsxs)(n.p,{children:[`The function checks if the environment has native `,(0,c.jsx)(n.code,{children:`__dirname`}),` support (using `,(0,c.jsx)(n.code,{children:`hasNativeDirname`}),`). If it does, it returns `,(0,c.jsx)(n.code,{children:`__dirname`}),`. Otherwise, it derives the directory name from `,(0,c.jsx)(n.code,{children:`import.meta.url`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getDirname } from '@dxtmisha/scripts'

const dirname = getDirname()
console.log(dirname)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};