import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`progress-delay-management`,children:`Progress Delay Management`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`delay`}),` and `,(0,c.jsx)(t.code,{children:`delayHide`}),` properties control timing parameters for showing and hiding the progress indicator. These properties allow creating a smoother user experience by avoiding flickers during fast operations.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`delay`}),` — delay before showing the indicator in milliseconds, defaults to `,(0,c.jsx)(t.code,{children:`360`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`delayHide`}),` — delay before hiding the indicator in milliseconds, defaults to `,(0,c.jsx)(t.code,{children:`200`})]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`The standard `,(0,c.jsx)(t.code,{children:`delay="360"`}),` value is proven in practice and suitable for most cases. Increase `,(0,c.jsx)(t.code,{children:`delay`}),` for rapid operations where the indicator might interfere with perception. Decrease for long operations where immediate feedback is important.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Standard delays -->
<Progress delay="360" delayHide="200" />

<!-- Fast appearance -->
<Progress delay="100" delayHide="200" />

<!-- Slow appearance -->
<Progress delay="800" delayHide="300" />

<!-- No delays -->
<Progress delay="0" delayHide="0" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};