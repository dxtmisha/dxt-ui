import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`custom-display-templates`,children:`Custom Display Templates`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`template`}),` property allows you to customize the counter display format using placeholders.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Available placeholders:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[c]`}),` — current number of entered characters`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[m]`}),` — maximum character limit`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Uses string interpolation to replace placeholders with actual counter values. Supports HTML markup inside the template for customizing styles of individual parts. When no template is provided, the component automatically determines the format: displays "50 / 100" when `,(0,c.jsx)(t.code,{children:`maxlength`}),` is present or just "50" when it's absent.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Descriptive format -->
<FieldCounter
:counter="75"
:maxlength="150"
template="Characters: [c] of [m]"
/>

<!-- Compact format -->
<FieldCounter
:counter="42"
:maxlength="100"
template="[c]/[m]"
/>

<!-- With HTML for styling -->
<FieldCounter
:counter="75"
:maxlength="150"
template="<b>[c]</b> of <i>[m]</i> characters"
/>

<!-- Current counter only with text -->
<FieldCounter
:counter="42"
template="Characters entered: [c]"
/>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};