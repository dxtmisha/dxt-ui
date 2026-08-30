import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`preserving-groups-on-deletion`,children:`Preserving groups on deletion`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`groupSave`}),` property controls behavior when deleting characters in a mask with multiple types of special characters.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Possible values:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`true`}),` — preserves group separation on deletion (default)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`false`}),` — allows characters from different groups to mix on deletion`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`With `,(0,c.jsx)(t.code,{children:`groupSave: true`}),` and different groups ahead, the character is not physically deleted but marked with a deletion marker, preserving the mask structure. With `,(0,c.jsx)(t.code,{children:`false`}),`, characters are deleted completely, which can lead to "collapsing" of groups and loss of structure. Only works for fixed (non-rubber) groups of special characters.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Preserve group structure (default) -->
<Mask
mask="***-###"
:special="['*', '#']"
groupSave
/>

<!-- Without structure preservation -->
<Mask
mask="***-###"
:special="['*', '#']"
:groupSave="false"
/>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};