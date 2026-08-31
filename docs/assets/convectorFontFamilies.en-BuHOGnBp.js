import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Functions/convectorFontFamilies - Format font family definitions`}),`
`,(0,c.jsx)(t.h1,{id:`convectorfontfamilies`,children:(0,c.jsx)(t.code,{children:`convectorFontFamilies`})}),`
`,(0,c.jsx)(t.p,{children:`The function converts raw font family strings into standard CSS font lists by appending default system fallbacks.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: PropertyItemInput`}),` — the design token property item to transform.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`void`}),` — the function directly mutates the `,(0,c.jsx)(t.code,{children:`value`}),` property of the passed `,(0,c.jsx)(t.code,{children:`item`}),` object.`]}),`
`,(0,c.jsx)(t.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,c.jsxs)(t.p,{children:[`The function checks if `,(0,c.jsx)(t.code,{children:`item.value`}),` is a string and does not contain brace interpolation characters `,(0,c.jsx)(t.code,{children:`{`}),` or `,(0,c.jsx)(t.code,{children:`}`}),`. If both conditions are met, it wraps the value in single quotes and appends `,(0,c.jsx)(t.code,{children:`, sans-serif`}),` to ensure a standard browser fallback.`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { convectorFontFamilies } from '@dxtmisha/scripts'

const item = { value: 'Inter' }
convectorFontFamilies(item)

console.log(item.value) // "'Inter', sans-serif"
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};