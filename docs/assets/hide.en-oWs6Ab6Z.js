import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`hidden-anchors`,children:`Hidden anchors`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`hide`}),` property creates an invisible anchor point for programmatic navigation without visual representation.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hide`}),` — hides the visual representation of the component (default `,(0,c.jsx)(t.code,{children:`false`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name`}),` — anchor name for navigation (required property)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`When `,(0,c.jsx)(t.code,{children:`hide`}),` is enabled, the component renders as a hidden `,(0,c.jsx)(t.code,{children:`<a name="...">`}),` element without text, icons, or styling. This is useful for creating invisible navigation points that can be programmatically scrolled to or used as target elements for other anchors. The hidden anchor remains in the DOM and is accessible for navigation via URL hash or scroll methods.`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<!-- Hidden anchor in section -->
<section>
  <Anchor name="section-start" hide />
  <h2>Section heading</h2>
</section>

<!-- Combination of hidden and visible -->
<h3>
  <Anchor name="heading" hide />
  Heading
  <Anchor name="heading" isCopy iconTag="link" />
</h3>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};