import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Functions/convectorTypography - Format typography values`}),`
`,(0,c.jsx)(n.h1,{id:`convectortypography`,children:(0,c.jsx)(n.code,{children:`convectorTypography`})}),`
`,(0,c.jsx)(n.p,{children:`The function normalizes typography design tokens by converting simple string values into standard basic font configurations.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: PropertyItemInput`}),` — the design token property item to transform.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`void`}),` — the function directly mutates the `,(0,c.jsx)(n.code,{children:`value`}),` property of the passed `,(0,c.jsx)(n.code,{children:`item`}),` object.`]}),`
`,(0,c.jsx)(n.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,c.jsxs)(n.p,{children:[`The function checks if `,(0,c.jsx)(n.code,{children:`item.value`}),` is a string. If so, it wraps the string inside a key-value object under the `,(0,c.jsx)(n.code,{children:`basic`}),` theme property: `,(0,c.jsx)(n.code,{children:`{ basic: item.value }`}),` to ensure consistency with complex responsive typography layouts.`]}),`
`,(0,c.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { convectorTypography } from '@dxtmisha/scripts'

const item = { value: '16px/1.5 Inter' }
convectorTypography(item)

console.log(item.value) // { basic: "16px/1.5 Inter" }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};