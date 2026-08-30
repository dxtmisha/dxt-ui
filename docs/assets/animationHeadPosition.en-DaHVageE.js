import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`head-position-animation`,children:`Head position animation`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`animationHeadPosition`}),` property controls how the Head area behaves during show/hide animations.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Possible values:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'top'`}),` — keeps the Head at the top during transition (default)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'toBottom'`}),` — animates the Head toward the bottom together with content`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Synchronizes header movement with content animation using CSS transforms for smooth transitions. Suitable for collapsing layouts when the header should travel with expanding content. When the `,(0,c.jsx)(t.code,{children:`section`}),` property is enabled (set to `,(0,c.jsx)(t.code,{children:`true`}),`), the `,(0,c.jsx)(t.code,{children:`animationHeadPosition`}),` parameter is ignored and does not affect animation behavior.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Head stays at top -->
<MotionTransform animationHeadPosition="top" />

<!-- Head moves down with content -->
<MotionTransform animationHeadPosition="toBottom" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};