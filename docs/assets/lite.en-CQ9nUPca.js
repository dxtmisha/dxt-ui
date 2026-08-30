import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`managing-list-performance`,children:`Managing list performance`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`lite`}),` and `,(0,c.jsx)(t.code,{children:`liteThreshold`}),` properties work together to optimize rendering of large lists. They enable a lightweight display mode that reduces visual complexity and improves performance when the threshold number of items is exceeded.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lite`}),` — enables lightweight list display mode`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`liteThreshold`}),` — item count threshold for activating simplified mode, defaults to configuration value`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Display mode is determined automatically: when `,(0,c.jsx)(t.code,{children:`lite=false`}),`, the list always renders in full mode. When `,(0,c.jsx)(t.code,{children:`lite=true`}),`, the component compares the total item count with `,(0,c.jsx)(t.code,{children:`liteThreshold`}),`. If the item count does not exceed the threshold, full mode with extended visualization is used. When the threshold is exceeded, lightweight mode is activated to reduce rendering load. Use `,(0,c.jsx)(t.code,{children:`lite`}),` for working with dynamic data of variable size.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Automatic mode switching -->
<List :list="items" :lite="true" :liteThreshold="50" />

<!-- Always full mode -->
<List :list="items" :lite="false" />

<!-- Lightweight mode for large catalogs -->
<List :list="products" :lite="true" :liteThreshold="100" />

<!-- Custom threshold for mobile devices -->
<List :list="data" :lite="true" :liteThreshold="30" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};