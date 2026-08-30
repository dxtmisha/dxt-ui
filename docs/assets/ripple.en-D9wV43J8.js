import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for creating animated wave effect on element click.`}),`
`,(0,c.jsx)(t.p,{children:`Ripple provides visual feedback during user interaction with interactive elements, automatically tracking clicks and generating an animated wave expanding from the touch point. The effect enhances user experience by making the interface more responsive and modern.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Automatic click event tracking`}),`
`,(0,c.jsx)(t.li,{children:`Wave animation from touch point`}),`
`,(0,c.jsxs)(t.li,{children:[`Control via `,(0,c.jsx)(t.code,{children:`disabled`}),` property`]}),`
`,(0,c.jsx)(t.li,{children:`Automatic animation removal after completion`}),`
`,(0,c.jsx)(t.li,{children:`Support for any interactive elements`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Buttons and links`}),`
`,(0,c.jsx)(t.li,{children:`Cards and lists`}),`
`,(0,c.jsx)(t.li,{children:`Toggles and checkboxes`}),`
`,(0,c.jsx)(t.li,{children:`Menu and navigation elements`}),`
`,(0,c.jsx)(t.li,{children:`Interactive icons`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<!-- Button with ripple effect -->
<button style="position: relative;">
  Click me
  <Ripple />
</button>

<!-- Disabled effect -->
<button style="position: relative;">
  No effect
  <Ripple :disabled="true" />
</button>

<!-- Card with effect -->
<div class="card" style="position: relative; cursor: pointer;">
  <h3>Interactive card</h3>
  <p>Card content</p>
  <Ripple />
</div>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};