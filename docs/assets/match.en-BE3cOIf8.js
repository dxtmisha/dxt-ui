import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`input-character-validation`,children:`Input character validation`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`match`}),` property defines a regular expression for checking the validity of entered characters.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Possible values:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`RegExp`}),` — regular expression (default `,(0,c.jsx)(t.code,{children:`/[0-9]/`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`string`}),` — string converted to regular expression`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Checks each character during input. Characters that don't match the expression are ignored. Local `,(0,c.jsx)(t.code,{children:`match`}),` in group settings (`,(0,c.jsx)(t.code,{children:`special[group].match`}),`) takes priority over global. Differs from `,(0,c.jsx)(t.code,{children:`pattern`}),` in that `,(0,c.jsx)(t.code,{children:`match`}),` is a simple regular expression check, while `,(0,c.jsx)(t.code,{children:`pattern`}),` can be a function with access to mask state.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Digits only (default) -->
<Mask mask="***-***" />

<!-- HEX characters -->
<Mask mask="***-***" :match="/[A-F0-9]/i" />

<!-- Different rules for groups -->
<Mask
mask="***-###"
match="\\d"
:special="{
  '*': {},
  '#': { match: /[A-Z]/ }
}"
/>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};