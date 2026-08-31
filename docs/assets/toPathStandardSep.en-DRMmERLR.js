import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Functions/toPathStandardSep - Convert path separators`}),`
`,(0,c.jsx)(t.h1,{id:`topathstandardsep`,children:(0,c.jsx)(t.code,{children:`toPathStandardSep`})}),`
`,(0,c.jsx)(t.p,{children:`The function converts forward slashes in a path string to the standard path separator of the current operating system.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — the input path string.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — the path with standard separators.`]}),`
`,(0,c.jsx)(t.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,c.jsxs)(t.p,{children:[`The function uses a regular expression to find all forward slashes (`,(0,c.jsx)(t.code,{children:`/`}),`) in the input string and replaces them with the platform-specific separator (`,(0,c.jsx)(t.code,{children:`path.sep`}),`).`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { toPathStandardSep } from '@dxtmisha/scripts'

// On Windows:
toPathStandardSep('src/components/button') // 'src\\\\components\\\\button'

// On Unix:
toPathStandardSep('src/components/button') // 'src/components/button'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};