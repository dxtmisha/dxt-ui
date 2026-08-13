import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getExp - Create a RegExp with escaped string`}),`
`,(0,c.jsx)(t.h1,{id:`getexp`,children:(0,c.jsx)(t.code,{children:`getExp`})}),`
`,(0,c.jsxs)(t.p,{children:[`A utility that creates a `,(0,c.jsx)(t.code,{children:`RegExp`}),` object from a template string by first escaping all special regular expression characters within it (such as `,(0,c.jsx)(t.code,{children:`.`}),` `,(0,c.jsx)(t.code,{children:`*`}),` `,(0,c.jsx)(t.code,{children:`+`}),` `,(0,c.jsx)(t.code,{children:`?`}),` `,(0,c.jsx)(t.code,{children:`^`}),` `,(0,c.jsx)(t.code,{children:`$`}),` `,(0,c.jsx)(t.code,{children:`{`}),` `,(0,c.jsx)(t.code,{children:`}`}),` `,(0,c.jsx)(t.code,{children:`(`}),` `,(0,c.jsx)(t.code,{children:`)`}),` `,(0,c.jsx)(t.code,{children:`|`}),` `,(0,c.jsx)(t.code,{children:`[`}),` `,(0,c.jsx)(t.code,{children:`]`}),` `,(0,c.jsx)(t.code,{children:`\\`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`This is essential when the search string comes from user input or contains characters that could break a regular expression. The function allows you to specify the regex flags and a pattern string where the escaped text will replace the `,(0,c.jsx)(t.code,{children:`:value`}),` token.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: string`}),` — The target string to be escaped and matched.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`flags?: string`}),` — (optional) Regular expression flags (e.g., `,(0,c.jsx)(t.code,{children:`'ig'`}),`). Defaults to `,(0,c.jsx)(t.code,{children:`'ig'`}),` (case-insensitive and global search).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`pattern?: string`}),` — (optional) The regular expression template string. Defaults to just `,(0,c.jsx)(t.code,{children:`':value'`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`RegExp`}),` — The constructed regular expression object.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getExp } from '@dxtmisha/functional-basic'

// Basic search
const rx1 = getExp('user.name')
console.log(rx1) // /user\\.name/gi  (dot is escaped)

// Search with a custom flag and pattern (e.g., "starts with")
const rx2 = getExp('query[1]', 'i', '^:value.*')
console.log(rx2) // /^query\\[1\\].*/i
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};