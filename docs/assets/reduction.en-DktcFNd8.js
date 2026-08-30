import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`text-shortening`,children:`Text shortening`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`reduction`}),` property determines whether the text label should be shortened to its initials.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Possible values:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`true`}),` — automatically shortens the text to initials (default)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`false`}),` — displays the full text label without shortening`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`When set to `,(0,c.jsx)(t.code,{children:`true`}),`, the component processes the name label (up to two words) and extracts the first letters to represent the user (e.g., "John Doe" becomes "JD"). This is useful for keeping the avatar display clean and compact.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Initials fallback (JD) -->
<Avatar label="John Doe" :reduction="true" />

<!-- Display full name (John Doe) -->
<Avatar label="John Doe" :reduction="false" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};