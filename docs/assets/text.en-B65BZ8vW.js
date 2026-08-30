import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";function i(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:`text-content-label-length`,children:`Text Content (label, length)`}),`
`,(0,o.jsxs)(t.p,{children:[`Controls text rendering and placeholder generation within the element. Default: `,(0,o.jsx)(t.code,{children:`length = 3`}),`.`]}),`
`,(0,o.jsxs)(t.blockquote,{children:[`
`,(0,o.jsxs)(t.p,{children:[`When default slot content is provided, `,(0,o.jsx)(t.code,{children:`label`}),` and `,(0,o.jsx)(t.code,{children:`length`}),` properties are ignored.`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`label`}),` — static text or numeric content rendered instead of generated text`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`length`}),` — expected text length (number) or length range (`,(0,o.jsx)(t.code,{children:`[min, max]`}),`)`]}),`
`]}),`
`,(0,o.jsx)(t.h3,{id:`behavior`,children:`Behavior`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[`Properties operate by priority: default slot overrides `,(0,o.jsx)(t.code,{children:`label`}),` and `,(0,o.jsx)(t.code,{children:`length`})]}),`
`,(0,o.jsxs)(t.li,{children:[`Provided `,(0,o.jsx)(t.code,{children:`label`}),` property renders directly and bypasses `,(0,o.jsx)(t.code,{children:`length`}),` generation`]}),`
`,(0,o.jsxs)(t.li,{children:[`Passing a number to `,(0,o.jsx)(t.code,{children:`length`}),` (e.g., `,(0,o.jsx)(t.code,{children:`:length="5"`}),`) generates an exact word count`]}),`
`,(0,o.jsxs)(t.li,{children:[`Passing an array to `,(0,o.jsx)(t.code,{children:`length`}),` (e.g., `,(0,o.jsx)(t.code,{children:`:length="[4, 10]"`}),`) selects word count randomly within limits`]}),`
`,(0,o.jsx)(t.li,{children:`Using a length range simulates natural text line variations across loading list elements`}),`
`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=r(),t()})))()}s();export{a as default};