import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`main-value`,children:`Main value`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`value`}),` property defines the image content. This universal property supports multiple source types for maximum flexibility.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Supported types:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Icon name`}),` — built-in or custom icon from the design system`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Image URL`}),` — direct link to file (PNG, JPG, SVG, GIF, WebP, etc.)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`File object`}),` — JavaScript File object obtained from `,(0,c.jsx)(t.code,{children:`<input type="file">`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`PDF document`}),` — direct link to PDF file with automatic display`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`The component automatically detects the source type and selects the optimal display method. When passing a File object, the content is read and previewed. The property is reactive and supports dynamic updates.`}),`
`,(0,c.jsx)(i,{code:`
<!-- Icon by name -->
<Image value="icon-user" />

<!-- Image by URL -->
<Image value="https://example.com/image.png" />

<!-- User file -->
<Image :value="fileFromInput" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};