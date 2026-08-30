import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for displaying input field labels with support for required indicator, character counter, and progress indicator.`}),`
`,(0,c.jsx)(t.p,{children:`FieldLabel provides uniform display of form field captions, automatically integrates with FieldCounter for character counting and Progress for loading indication. The component supports skeleton loading, customizable slots, and ensures consistent visual styling of form elements.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Text label display for input fields`}),`
`,(0,c.jsx)(t.li,{children:`Required field indicator (required marker)`}),`
`,(0,c.jsx)(t.li,{children:`FieldCounter integration for character counting`}),`
`,(0,c.jsx)(t.li,{children:`Built-in Progress indicator support`}),`
`,(0,c.jsx)(t.li,{children:`Skeleton loading support for pending states`}),`
`,(0,c.jsx)(t.li,{children:`Flexible customization via slots (leading, trailing)`}),`
`,(0,c.jsx)(t.li,{children:`Consistent spacing and styles within forms`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Labels for text fields and textareas`}),`
`,(0,c.jsx)(t.li,{children:`Forms with required fields`}),`
`,(0,c.jsx)(t.li,{children:`Fields with character count limits`}),`
`,(0,c.jsx)(t.li,{children:`Forms with file upload progress indication`}),`
`,(0,c.jsx)(t.li,{children:`Dynamic forms with skeleton loading`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<!-- Basic label -->
<Component label="Username" />

<!-- Required field label -->
<Component label="Email" required />

<!-- With progress and counter -->
<Component
  label="Loading"
  :progress="45"
  :counter="10"
  :maxlength="100"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};