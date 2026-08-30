import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Individual item within a Grid component. Controls how many columns the element should take across different screen sizes.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Customizable column span (1 to 12)`}),`
`,(0,c.jsx)(t.li,{children:`Built-in responsive support for all major breakpoints`}),`
`,(0,c.jsx)(t.li,{children:`Granular control over layout density`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
<\/script>

<template>
<Grid>
  <!-- Full width on mobile, half on desktop -->
  <GridItem base="12" md="6">Item 1</GridItem>
  <GridItem base="12" md="6">Item 2</GridItem>

  <!-- Different spans for different screen sizes -->
  <GridItem base="12" sm="6" lg="3">Responsive item</GridItem>
</Grid>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`GridItem allows for granular control over element sizing within a Grid container, enabling complex responsive layouts with zero custom CSS.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};