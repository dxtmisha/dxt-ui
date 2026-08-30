import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`ScrollSticky is a layout helper component that provides a sticky, synchronized horizontal scrollbar for scrollable content containers.
It is typically used to render a custom scrollbar that remains visible at the bottom of the viewport even when the main content container is taller than the screen, improving readability and navigation on desktop platforms.`}),`
`,(0,c.jsx)(t.p,{children:`The component supports two-way synchronization: scrolling the sticky scrollbar scrolls the target container, and scrolling the target container updates the position of the sticky scrollbar.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Sticky positioning at the bottom of the container or viewport`}),`
`,(0,c.jsx)(t.li,{children:`Two-way scroll synchronization with a target scrollable element`}),`
`,(0,c.jsx)(t.li,{children:`Custom scroll element styling support`}),`
`,(0,c.jsx)(t.li,{children:`Built-in resize observation to dynamically adapt to element and window size changes`}),`
`,(0,c.jsx)(t.li,{children:`Hides the browser's standard scrollbar for clean presentation`}),`
`,(0,c.jsxs)(t.li,{children:[`Visibility control of the scrollbar via the `,(0,c.jsx)(t.code,{children:`visible`}),` property`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Large data tables with many columns that require horizontal scrolling`}),`
`,(0,c.jsx)(t.li,{children:`Horizontal cards or grids inside tall content containers`}),`
`,(0,c.jsx)(t.li,{children:`Responsive list views requiring consistent scroll control visibility`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<ScrollSticky v-slot="{ onResize }">
  <table class="data-table">
    <!-- Scrollable table content -->
  </table>
</ScrollSticky>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};