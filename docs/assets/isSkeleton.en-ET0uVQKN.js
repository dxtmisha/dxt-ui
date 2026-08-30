import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`skeleton-mode`,children:`Skeleton mode`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`isSkeleton`}),` property defines element behavior when interacting with the parent Skeleton component.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Possible values:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`true`}),` — element displays as skeleton when Skeleton is in active state`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`false`}),` — element becomes invisible when Skeleton is in active state`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Works in conjunction with the Skeleton component to control visibility and display mode of child elements. When parent Skeleton has `,(0,c.jsx)(t.code,{children:`active=false`}),`, all child elements display normally regardless of `,(0,c.jsx)(t.code,{children:`isSkeleton`}),` value. When `,(0,c.jsx)(t.code,{children:`active=true`}),`, elements with `,(0,c.jsx)(t.code,{children:`isSkeleton=true`}),` are shown as skeleton placeholders, while elements with `,(0,c.jsx)(t.code,{children:`isSkeleton=false`}),` are completely hidden.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Element will display as skeleton -->
<Skeleton active>
<Component isSkeleton text="Loading..." />
</Skeleton>

<!-- Element will be hidden -->
<Skeleton active>
<Component :isSkeleton="false" text="Hidden text" />
</Skeleton>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};