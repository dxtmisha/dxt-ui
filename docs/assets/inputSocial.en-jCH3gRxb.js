import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Social network input component with formatting and icon mapping.`}),`
`,(0,c.jsxs)(t.p,{children:[`InputSocial is a specialized input field designed for social network profiles. It automatically configures itself (mask, prefix, suffix, and label) based on the provided `,(0,c.jsx)(t.code,{children:`socialType`}),` property.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Main features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Automatic formatting and masking based on the selected social network type`}),`
`,(0,c.jsx)(t.li,{children:`Support for various social networks (e.g., Telegram, WhatsApp, Instagram, etc.)`}),`
`,(0,c.jsxs)(t.li,{children:[`Customizable social network icons via the `,(0,c.jsx)(t.code,{children:`socialIcons`}),` property`]}),`
`,(0,c.jsx)(t.li,{children:`Integrated prefix and suffix handling specific to the social network profile`}),`
`,(0,c.jsxs)(t.li,{children:[`Support for two-way data binding (`,(0,c.jsx)(t.code,{children:`v-model`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Built-in integration with `,(0,c.jsx)(t.code,{children:`Field`}),` for consistent styling and validation states`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Social network links in user profiles`}),`
`,(0,c.jsx)(t.li,{children:`Contact information fields in registration forms`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const value = ref('')
<\/script>

<template>
<InputSocial
  v-model:value="value"
  social-type="telegram"
  label="Telegram"
  placeholder="Username"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};