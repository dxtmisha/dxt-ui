import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Functions/convectorFontFamilies - Format font family definitions`}),`
`,(0,c.jsx)(n.h1,{id:`convectorfontfamilies`,children:(0,c.jsx)(n.code,{children:`convectorFontFamilies`})}),`
`,(0,c.jsx)(n.p,{children:`The function converts raw font family strings into standard CSS font lists by appending default system fallbacks.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: PropertyItemInput`}),` — the design token property item to transform.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`void`}),` — the function directly mutates the `,(0,c.jsx)(n.code,{children:`value`}),` property of the passed `,(0,c.jsx)(n.code,{children:`item`}),` object.`]}),`
`,(0,c.jsx)(n.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,c.jsxs)(n.p,{children:[`The function checks if `,(0,c.jsx)(n.code,{children:`item.value`}),` is a string and does not contain brace interpolation characters `,(0,c.jsx)(n.code,{children:`{`}),` or `,(0,c.jsx)(n.code,{children:`}`}),`. If both conditions are met, it wraps the value in single quotes and appends `,(0,c.jsx)(n.code,{children:`, sans-serif`}),` to ensure a standard browser fallback.`]}),`
`,(0,c.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { convectorFontFamilies } from '@dxtmisha/scripts'

const item = { value: 'Inter' }
convectorFontFamilies(item)

console.log(item.value) // "'Inter', sans-serif"
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};