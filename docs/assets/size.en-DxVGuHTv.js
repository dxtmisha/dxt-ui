import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`image-display-control`,children:`Image display control`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`size`}),`, `,(0,c.jsx)(t.code,{children:`coordinator`}),`, `,(0,c.jsx)(t.code,{children:`x`}),`, and `,(0,c.jsx)(t.code,{children:`y`}),` properties allow you to precisely control image scaling, visible area, and positioning within the container.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`size`}),` — scaling and fill mode of the image (`,(0,c.jsx)(t.code,{children:`auto`}),`, `,(0,c.jsx)(t.code,{children:`contain`}),`, `,(0,c.jsx)(t.code,{children:`cover`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`coordinator`}),` — array of coordinates for cropping the display area `,(0,c.jsx)(t.code,{children:`[left, top, right, bottom]`}),` in percentages`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`x`}),` — horizontal offset of the image (pixels, percentages)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`y`}),` — vertical offset of the image (pixels, percentages)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Properties work together or individually. The `,(0,c.jsx)(t.code,{children:`size`}),` value defines the scaling mode: `,(0,c.jsx)(t.code,{children:`auto`}),` uses the original size, `,(0,c.jsx)(t.code,{children:`contain`}),` fits the image completely, `,(0,c.jsx)(t.code,{children:`cover`}),` fills the container with possible cropping. The `,(0,c.jsx)(t.code,{children:`coordinator`}),` property sets the visible area by cropping the image at specified coordinates. The `,(0,c.jsx)(t.code,{children:`x`}),` and `,(0,c.jsx)(t.code,{children:`y`}),` parameters shift the image relative to the container for precise positioning.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Scaling mode -->
<Image value="image.png" size="contain" />

<!-- Cropping by coordinates -->
<Image value="image.png" :coordinator="[10, 20, 100, 80]" />

<!-- Position offset -->
<Image value="image.png" x="15" y="-10" />

<!-- Combined parameters -->
<Image
value="image.png"
size="cover"
:coordinator="[0, 0, 100, 50]"
x="10"
y="5"
/>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};