import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`field-width`,children:`Field width`}),`
`,(0,c.jsxs)(t.p,{children:[`Property `,(0,c.jsx)(t.code,{children:`width`}),` defines the horizontal size of the Field container.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Possible values:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`any valid CSS value (`,(0,c.jsx)(t.code,{children:`'320px'`}),`, `,(0,c.jsx)(t.code,{children:`'48rem'`}),`, `,(0,c.jsx)(t.code,{children:`'50%'`}),`, `,(0,c.jsx)(t.code,{children:`'min(100%,320px)'`}),`, `,(0,c.jsx)(t.code,{children:`'clamp(240px,40vw,480px)'`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`design system tokens (e.g., `,(0,c.jsx)(t.code,{children:`'sm'`}),`, `,(0,c.jsx)(t.code,{children:`'md'`}),`, `,(0,c.jsx)(t.code,{children:`'lg'`}),` if supported)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'custom'`}),` — internal technical marker (not used directly)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Controls the fixed or relative width of the field, applying the value directly without additional wrappers. When the property is not set, the width remains flexible and depends on the parent container. When the `,(0,c.jsx)(t.code,{children:`block`}),` property is active (set to `,(0,c.jsx)(t.code,{children:`true`}),`), the field takes 100% width regardless of the specified `,(0,c.jsx)(t.code,{children:`width`}),` value, with block mode taking priority.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Automatic width -->
<Field label="auto" />

<!-- Fixed width -->
<Field width="320px" label="320px" />

<!-- Relative width -->
<Field width="50%" label="50%" />

<!-- CSS functions -->
<Field width="min(100%, 320px)" label="min(...)" />
<Field width="clamp(240px, 40vw, 480px)" label="clamp(...)" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};