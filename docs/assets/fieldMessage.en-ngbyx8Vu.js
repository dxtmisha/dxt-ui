import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for displaying helper and validation messages below form fields.`}),`
`,(0,c.jsx)(t.p,{children:`FieldMessage centralizes management of text hints and error messages in forms. The component automatically determines display priority (validation errors take precedence over hints), supports forced display via forceShow, and integrates with input fields and character counters. It provides a flexible slot system for customization and works with both static and reactive values.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Two message types: helper and validation`}),`
`,(0,c.jsx)(t.li,{children:`Message priority — validation message overrides helper message`}),`
`,(0,c.jsx)(t.li,{children:`Smart visibility — automatic display logic based on provided values`}),`
`,(0,c.jsx)(t.li,{children:`Forced display via forceShow property`}),`
`,(0,c.jsx)(t.li,{children:`Flexible sources — support for static and reactive values`}),`
`,(0,c.jsx)(t.li,{children:`Integration with FieldCounter for complex forms`}),`
`,(0,c.jsx)(t.li,{children:`Customizable rendering through design system and slots`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Helper hints below input fields`}),`
`,(0,c.jsx)(t.li,{children:`Displaying validation errors in forms`}),`
`,(0,c.jsx)(t.li,{children:`Dynamic messages with reactive content`}),`
`,(0,c.jsx)(t.li,{children:`Complex forms with counters and validation`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<!-- Helper message -->
<Component helper="Enter your name" />

<!-- Validation message -->
<Component validation="Minimum 3 characters" />

<!-- Slots -->
<Component>
  <template #helper>💡 Hint</template>
  <template #validation>⚠️ Error</template>
</Component>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`The component focuses on text messages and should be used together with input control elements.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};