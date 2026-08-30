import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";function i(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,ul:`ul`,...n(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,o.jsx)(t.h3,{id:`action`,children:`Action`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`update(callback: MotionFlipCallback): Promise<void>`}),` — Performs DOM mutation callback and animates child layout changes using FLIP animation.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`stop(): void`}),` — Stops active FLIP animation and clears animation state.`]}),`
`]}),`
`,(0,o.jsx)(t.h2,{id:`flip-animation-updates`,children:`FLIP Animation Updates`}),`
`,(0,o.jsxs)(t.p,{children:[`The `,(0,o.jsx)(t.code,{children:`update`}),` method orchestrates FLIP layout animations during DOM modifications.`]}),`
`,(0,o.jsxs)(t.ol,{children:[`
`,(0,o.jsx)(t.li,{children:`Records original bounding rectangles for all child elements before DOM modification.`}),`
`,(0,o.jsxs)(t.li,{children:[`Executes the asynchronous `,(0,o.jsx)(t.code,{children:`callback`}),` function to update state and DOM elements.`]}),`
`,(0,o.jsx)(t.li,{children:`Measures new child positions and applies calculated offset CSS variables.`}),`
`,(0,o.jsx)(t.li,{children:`Triggers smooth CSS transform transition to animate elements to their target positions.`}),`
`]}),`
`,(0,o.jsxs)(t.blockquote,{children:[`
`,(0,o.jsxs)(t.p,{children:[`Important: Always wrap DOM-modifying state changes inside the `,(0,o.jsx)(t.code,{children:`update`}),` callback so that initial and final element coordinates can be accurately measured.`]}),`
`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=r(),t()})))()}s();export{a as default};