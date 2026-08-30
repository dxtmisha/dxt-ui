import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for creating anchor links with smooth scrolling and URL copying capabilities.`}),`
`,(0,c.jsx)(t.p,{children:`Anchor provides interactive anchor links for navigating through page sections. The component automatically handles clicks, updates the URL address, supports smooth scrolling with customizable offset, and integrates with Tooltip for displaying copy notifications. It can work both in regular navigation mode and in link copying mode to clipboard.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Smooth scrolling to target element with configurable parameters`}),`
`,(0,c.jsx)(t.li,{children:`Automatic navigation on page load based on URL hash`}),`
`,(0,c.jsx)(t.li,{children:`Copy mode for copying full link to clipboard`}),`
`,(0,c.jsx)(t.li,{children:`Tooltip integration for copy notifications`}),`
`,(0,c.jsx)(t.li,{children:`Icon support for visual styling`}),`
`,(0,c.jsx)(t.li,{children:`Hidden anchors for creating invisible navigation points`}),`
`,(0,c.jsx)(t.li,{children:`URL updates via history API without page reload`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Navigation through documentation sections and long pages`}),`
`,(0,c.jsx)(t.li,{children:`Anchors for headings with copy link button`}),`
`,(0,c.jsx)(t.li,{children:`Table of contents and page navigation menu`}),`
`,(0,c.jsx)(t.li,{children:`"Share link to section" buttons`}),`
`,(0,c.jsx)(t.li,{children:`Creating invisible anchor points for programmatic navigation`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<!-- Regular anchor -->
<Anchor name="section-1" text="Go to section" />

<!-- With copy mode -->
<Anchor name="section-2" text="Copy link" isCopy />

<!-- Hidden anchor -->
<Anchor name="section-3" hide />
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};