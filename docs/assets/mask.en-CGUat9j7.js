import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`mask-template`,children:`Mask template`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`mask`}),` property defines a template for structured data input with automatic real-time formatting.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Possible values:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`string`}),` — single mask for fixed format`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`string[]`}),` — array of masks to support multiple formats with automatic selection`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`The template uses two types of characters: special characters (default `,(0,c.jsx)(t.code,{children:`*`}),`) denote positions for user input, while literal characters are inserted automatically and cannot be changed. The component automatically adds separators during typing and restricts input to only allowed characters in corresponding positions. When using an array of masks, the system automatically selects the most suitable template based on entered data. Works together with the validation system through `,(0,c.jsx)(t.code,{children:`pattern`}),` and `,(0,c.jsx)(t.code,{children:`check`}),` properties. For built-in types (`,(0,c.jsx)(t.code,{children:`currency`}),`, `,(0,c.jsx)(t.code,{children:`number`}),`, `,(0,c.jsx)(t.code,{children:`date`}),`), masks are generated automatically based on regional settings.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Russian phone -->
<Mask mask="+7 *** *** ** **" />

<!-- Bank card -->
<Mask mask="**** **** **** ****" />

<!-- Multiple formats -->
<Mask :mask="['+7 *** *** ** **', '8 *** *** ** **']" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};