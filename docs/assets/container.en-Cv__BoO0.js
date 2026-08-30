import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`description`,children:`Description`}),`
`,(0,c.jsx)(t.p,{children:`Container is a base layout component used to constrain content width and control horizontal spacing.
By default, it helps keep a readable content width and ensures consistent layout rhythm across screens.`}),`
`,(0,c.jsxs)(t.p,{children:[`The component supports alignment via `,(0,c.jsx)(t.code,{children:`align`}),` (`,(0,c.jsx)(t.code,{children:`left`}),`, `,(0,c.jsx)(t.code,{children:`center`}),`, `,(0,c.jsx)(t.code,{children:`right`}),`) and works with `,(0,c.jsx)(t.code,{children:`width`}),` and `,(0,c.jsx)(t.code,{children:`marginX`}),` design tokens.
You can also use the `,(0,c.jsx)(t.code,{children:`area`}),` prop to integrate with area context.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Constrain content width with the `,(0,c.jsx)(t.code,{children:`width`}),` token`]}),`
`,(0,c.jsxs)(t.li,{children:[`Manage horizontal spacing via `,(0,c.jsx)(t.code,{children:`marginX`})]}),`
`,(0,c.jsxs)(t.li,{children:[`Container alignment options: `,(0,c.jsx)(t.code,{children:`left`}),`, `,(0,c.jsx)(t.code,{children:`center`}),`, `,(0,c.jsx)(t.code,{children:`right`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`default`}),` slot support for arbitrary content`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`area`}),` prop support for context-based placement`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Outer wrapper for page sections`}),`
`,(0,c.jsx)(t.li,{children:`Limiting text and form width`}),`
`,(0,c.jsx)(t.li,{children:`Aligning content inside grid and block structures`}),`
`,(0,c.jsx)(t.li,{children:`Base container for reusable layout blocks`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<Container
  align="center"
  area="container"
>
  <p>Content inside a width-constrained container.</p>
</Container>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Use Container as a foundational layout layer, while semantic sectioning is handled by outer components (`,(0,c.jsx)(t.code,{children:`Section`}),`, `,(0,c.jsx)(t.code,{children:`Group`}),`, `,(0,c.jsx)(t.code,{children:`Page`}),`).`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};