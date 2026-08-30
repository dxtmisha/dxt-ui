import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`table-header-state`,children:`Table Header State`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`isHeader`}),` property toggles the table row into the header display mode:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Header cells (`,(0,c.jsx)(t.code,{children:`TableHeaderItem`}),` / `,(0,c.jsx)(t.code,{children:`<th>`}),`) are rendered instead of standard data cells (`,(0,c.jsx)(t.code,{children:`TableItem`}),` / `,(0,c.jsx)(t.code,{children:`<td>`}),`).`]}),`
`,(0,c.jsx)(t.li,{children:`Header-specific styles are automatically applied (font weight, alignment, background).`}),`
`,(0,c.jsx)(t.li,{children:`Built-in tooltip support is activated for the cells if configured.`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<TableRecord
:isHeader="true"
:columns="['name', 'role']"
:item="{ name: 'Name', role: 'Role' }"
/>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};