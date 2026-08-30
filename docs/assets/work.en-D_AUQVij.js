import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`how-to-work-with-component`,children:`How to Work with Component`}),`
`,(0,c.jsxs)(t.p,{children:[`To ensure correct FLIP animation functionality when using `,(0,c.jsx)(t.strong,{children:`MotionFlip`}),`, follow these instructions:`]}),`
`,(0,c.jsx)(t.h3,{id:`1-element-structure-requirements`,children:`1. Element Structure Requirements`}),`
`,(0,c.jsxs)(t.p,{children:[`Every direct child element of `,(0,c.jsx)(t.code,{children:`<MotionFlip>`}),` must contain an inner nested element (`,(0,c.jsx)(t.code,{children:`>*`}),`).`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Outer Container (Wrapper):`}),` preserves layout positioning and grid dimensions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Inner Element:`}),` smoothly animates via FLIP technique during reordering, insertion, or removal.`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<MotionFlip ref="flipRef">
<!-- Outer wrapper (positioning container) -->
<div v-for="item in items" :key="item" class="item-wrapper">
  <!-- Inner element (animated content) -->
  <div class="item">
    {{ item }}
  </div>
</div>
</MotionFlip>
`,language:`html`}),`
`,(0,c.jsx)(t.h3,{id:`2-state-mutation-and-animation-triggering`,children:`2. State Mutation and Animation Triggering`}),`
`,(0,c.jsxs)(t.p,{children:[`By default, the component operates in manual mode. Wrap any array state changes or DOM mutations inside the callback of the `,(0,c.jsx)(t.code,{children:`update()`}),` method:`]}),`
`,(0,c.jsx)(i,{code:`
await flipRef.value.update(() => {
// Perform array mutations (reorder, insert, remove)
})
`,language:`javascript`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};