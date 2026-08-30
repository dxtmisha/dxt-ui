import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`Placeholder`}),` component is designed to present warnings, empty states, error screens, or illustrative notifications in a standardized, clean layout. It supports combining an illustration (image or icon), a title (label), a description, and an actions panel (buttons).`]}),`
`,(0,c.jsx)(t.p,{children:`The component is highly customizable, accepting raw strings or structured property objects for each sub-element, and allows completely overriding the inner structure using slots for custom layout requirements.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Integrated sub-elements rendering (illustration, title, description, and action buttons)`}),`
`,(0,c.jsx)(t.li,{children:`Supports raw image URLs, custom attributes, or icon configurations`}),`
`,(0,c.jsx)(t.li,{children:`Flexible slots for replacing standard sub-element rendering`}),`
`,(0,c.jsx)(t.li,{children:`Bundled ARIA labeling and description bindings for high accessibility standards`}),`
`,(0,c.jsx)(t.li,{children:`Direct access to internal logical states and element references`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Empty state screens (e.g., "No Messages", "Cart is Empty")`}),`
`,(0,c.jsx)(t.li,{children:`Error pages (e.g., "404 Not Found", "No Internet Connection")`}),`
`,(0,c.jsx)(t.li,{children:`Success/Welcome panels (e.g., "Verification Successful")`}),`
`,(0,c.jsx)(t.li,{children:`Interactive instructions before starting an operation`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<Placeholder
  image="https://example.com/illustration.png"
  label="No Connection"
  description="Please check your Wi-Fi or mobile network and try again."
  :actions-list="[{ label: 'Retry', palette: 'primary' }]"
/>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Placeholder is a versatile interface component that presents warning layouts, illustrative feedback, or interactive instructions with high accessibility standard compliance.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};