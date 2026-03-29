import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/getExp - Create a RegExp with escaped string`}),`
`,(0,c.jsx)(n.h1,{id:`getexp`,children:(0,c.jsx)(n.code,{children:`getExp`})}),`
`,(0,c.jsxs)(n.p,{children:[`A utility that creates a `,(0,c.jsx)(n.code,{children:`RegExp`}),` object from a template string by first escaping all special regular expression characters within it (such as `,(0,c.jsx)(n.code,{children:`.`}),` `,(0,c.jsx)(n.code,{children:`*`}),` `,(0,c.jsx)(n.code,{children:`+`}),` `,(0,c.jsx)(n.code,{children:`?`}),` `,(0,c.jsx)(n.code,{children:`^`}),` `,(0,c.jsx)(n.code,{children:`$`}),` `,(0,c.jsx)(n.code,{children:`{`}),` `,(0,c.jsx)(n.code,{children:`}`}),` `,(0,c.jsx)(n.code,{children:`(`}),` `,(0,c.jsx)(n.code,{children:`)`}),` `,(0,c.jsx)(n.code,{children:`|`}),` `,(0,c.jsx)(n.code,{children:`[`}),` `,(0,c.jsx)(n.code,{children:`]`}),` `,(0,c.jsx)(n.code,{children:`\\`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[`This is essential when the search string comes from user input or contains characters that could break a regular expression. The function allows you to specify the regex flags and a pattern string where the escaped text will replace the `,(0,c.jsx)(n.code,{children:`:value`}),` token.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string`}),` — The target string to be escaped and matched.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`flags?: string`}),` — (optional) Regular expression flags (e.g., `,(0,c.jsx)(n.code,{children:`'ig'`}),`). Defaults to `,(0,c.jsx)(n.code,{children:`'ig'`}),` (case-insensitive and global search).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pattern?: string`}),` — (optional) The regular expression template string. Defaults to just `,(0,c.jsx)(n.code,{children:`':value'`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`RegExp`}),` — The constructed regular expression object.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getExp } from '@dxtmisha/functional-basic'

// Basic search
const rx1 = getExp('user.name')
console.log(rx1) // /user\\.name/gi  (dot is escaped)

// Search with a custom flag and pattern (e.g., "starts with")
const rx2 = getExp('query[1]', 'i', '^:value.*')
console.log(rx2) // /^query\\[1\\].*/i
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};