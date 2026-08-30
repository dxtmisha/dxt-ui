import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`description`,children:`Description`}),`
`,(0,c.jsxs)(t.p,{children:[`The component represents an individual notification card inside the `,(0,c.jsx)(t.code,{children:`Snackbar`}),`. It is responsible for the visual presentation of a message, including titles, text, icons, and actions.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Displays labels, descriptions, and main text`}),`
`,(0,c.jsx)(t.li,{children:`Supports both leading and trailing icons`}),`
`,(0,c.jsx)(t.li,{children:`Default close button (cross)`}),`
`,(0,c.jsx)(t.li,{children:`Supports an additional action button`}),`
`,(0,c.jsx)(t.li,{children:`Flexible configuration via slots for complex content`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Usage Scenarios:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Displaying short text messages`}),`
`,(0,c.jsx)(t.li,{children:`Notifications with "Undo" or "Retry" buttons`}),`
`,(0,c.jsx)(t.li,{children:`Cards with status icons (Success, Error, Info)`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<!-- Basic Usage -->
<SnackbarItem
  label="Message sent successfully"
  icon="check"
/>

<!-- With Action Button -->
<SnackbarItem
  description="Your subscription expires in 3 days."
  button="Renew"
  @click="onRenew"
/>

<!-- With Custom Content -->
<SnackbarItem>
  <div class="custom-content">
    <strong>Attention!</strong>
    <p>An unexpected server error occurred.</p>
  </div>
</SnackbarItem>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`SnackbarItem is typically not used on its own but is rendered automatically by the `,(0,c.jsx)(t.code,{children:`Snackbar`}),` component based on a provided list of data.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};