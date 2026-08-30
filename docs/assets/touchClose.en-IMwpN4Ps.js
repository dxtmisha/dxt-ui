import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`touch-close-gesture`,children:`Touch Close Gesture`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`touchClose`}),` property enables closing the ActionSheet with a swipe-down gesture.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Possible values:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`true`}),` — enables closing by swiping down (default)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`false`}),` — disables gesture closing`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`When enabled, a special tab indicator (drag handle) is displayed in the header area, which users can pull down to close the panel. This follows iOS and Material Design mobile interface patterns, providing intuitive interaction on touch devices.`}),`
`,(0,c.jsx)(i,{code:`
<!-- With gesture closing enabled -->
<ActionSheet :touchClose="true" />

<!-- Without gesture closing -->
<ActionSheet :touchClose="false" />
`,language:`html`}),`
`,(0,c.jsx)(t.p,{children:`The closing gesture is triggered by swiping down in the header area. The component automatically manages touch events and closing animation, ensuring smooth follow-through with the user's finger movement.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};