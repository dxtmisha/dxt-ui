import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`managing-search-and-highlighting`,children:`Managing search and highlighting`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`highlight`}),` and `,(0,c.jsx)(t.code,{children:`highlightLengthStart`}),` properties work together to control match highlighting when searching through list items. They set the search string and minimum query length for activating visual highlighting of found fragments.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`highlight`}),` — search string for finding and highlighting in list items`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`highlightLengthStart`}),` — minimum search string length to start highlighting, defaults to `,(0,c.jsx)(t.code,{children:`2`})]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Match highlighting is activated automatically: when the `,(0,c.jsx)(t.code,{children:`highlight`}),` length is less than `,(0,c.jsx)(t.code,{children:`highlightLengthStart`}),`, search works but visual highlighting is not applied. When the minimum length is reached, the component begins highlighting found fragments across the entire list hierarchy. Search works in real-time and considers nested items in groups and menus. Use `,(0,c.jsx)(t.code,{children:`highlightLengthStart`}),` to prevent excessive highlighting with short queries.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Standard search with highlighting from 2 characters -->
<List :list="items" highlight="text" />

<!-- Search with highlighting from 3 characters -->
<List :list="items" highlight="abc" :highlightLengthStart="3" />

<!-- Dynamic search with v-model -->
<List :list="items" :highlight="searchQuery" :highlightLengthStart="1" />

<!-- Search without minimum threshold -->
<List :list="products" :highlight="filter" :highlightLengthStart="0" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};