import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`scroll-management-during-animation`,children:`Scroll Management during Animation`}),`
`,(0,c.jsx)(t.p,{children:`The component automatically manages scroll visibility during transition animations to prevent content jumps.`}),`
`,(0,c.jsx)(t.h3,{id:`usage`,children:`Usage`}),`
`,(0,c.jsxs)(t.p,{children:[`To enable this feature, add the `,(0,c.jsx)(t.code,{children:`*__scroll`}),` class to the parent container that has scrolling.`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsx)(t.li,{children:`Wrap the component in a scrollable container.`}),`
`,(0,c.jsxs)(t.li,{children:[`Add the `,(0,c.jsx)(t.code,{children:`*__scroll`}),` class to this container (where `,(0,c.jsx)(t.code,{children:`*`}),` is the component class name, e.g., `,(0,c.jsx)(t.code,{children:`d1-tabs__scroll`}),`).`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<div class="d1-tabs__scroll">
<Tabs ... />
</div>
`,language:`html`}),`
`,(0,c.jsxs)(t.p,{children:[`During the animation, the component will automatically add the `,(0,c.jsx)(t.code,{children:`*__scroll--hidden`}),` class (which applies `,(0,c.jsx)(t.code,{children:`overflow: hidden`}),`) to this container, and remove it after the animation ends.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};