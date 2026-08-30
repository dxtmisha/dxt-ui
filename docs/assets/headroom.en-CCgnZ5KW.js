import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`description`,children:`Description`}),`
`,(0,c.jsx)(t.p,{children:`A component for managing sticky header positioning, scroll metrics calculations, transformation threshold percentages, and disappears scroll mode updates.`}),`
`,(0,c.jsx)(t.p,{children:`Headroom tracks scrolling activity on a target element or window and dynamically updates its sticky state, dataset attributes, transformation properties, and disappearing offset positioning.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Automatic scroll tracking and sticky state evaluation`}),`
`,(0,c.jsx)(t.li,{children:`Disappears mode that hides the element on scroll down and reveals it on scroll up`}),`
`,(0,c.jsx)(t.li,{children:`Dynamic transform custom CSS properties and dataset attributes for styling`}),`
`,(0,c.jsx)(t.li,{children:`Customizable container element or target window`}),`
`,(0,c.jsx)(t.li,{children:`Configurable HTML tag for rendering`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Sticky site navigation bars and headers`}),`
`,(0,c.jsx)(t.li,{children:`Auto-hiding headers on mobile and desktop views`}),`
`,(0,c.jsx)(t.li,{children:`Scroll-linked header animations and visual transformations`}),`
`,(0,c.jsx)(t.li,{children:`Sticky toolbar containers with dynamic offset calculations`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<!-- Basic Headroom header -->
<Headroom>
  <header class="header">
    Headroom Header Content
  </header>
</Headroom>

<!-- Headroom with disappears scroll mode -->
<Headroom disappears :transformThreshold="100">
  <header class="header">
    Auto-hiding Header Content
  </header>
</Headroom>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Headroom is a component for managing sticky headers with auto-hiding behavior, scroll calculations, and CSS transformation metrics.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};