import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`A verification code input component designed for entering OTP (One-Time Password) codes, SMS verification codes, or PINs.`}),`
`,(0,c.jsx)(t.p,{children:`InputCode coordinates a sequence of individual input cells (InputCodeItem), automatically managing active focus transition (focusing the next cell as digits are typed, or focusing the previous cell when backspacing). It supports success and validation states, loading state styling, customized verification regex (match), and variable code length (defaults to 4).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Coordinated cell-by-cell code input with automatic focus movement`}),`
`,(0,c.jsxs)(t.li,{children:[`Customizable code length (`,(0,c.jsx)(t.code,{children:`length`}),` property)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Custom validation support (`,(0,c.jsx)(t.code,{children:`validation`}),` and `,(0,c.jsx)(t.code,{children:`success`}),` states)`]}),`
`,(0,c.jsx)(t.li,{children:`Loading state handling`}),`
`,(0,c.jsxs)(t.li,{children:[`Input regex restriction (e.g., numeric only via `,(0,c.jsx)(t.code,{children:`match`}),`)`]}),`
`,(0,c.jsx)(t.li,{children:`Integration with standard Field components for label and message management`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Usage Scenarios:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`SMS authentication and phone number verification`}),`
`,(0,c.jsx)(t.li,{children:`Two-factor authentication (2FA) verification forms`}),`
`,(0,c.jsx)(t.li,{children:`PIN or passcode entry dialogs`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const code = ref('')

const handleInput = (value) => {
console.log('Current code:', value)
}
<\/script>

<template>
<InputCode
  v-model="code"
  :length="6"
  label="Verification Code"
  helperMessage="We sent a 6-digit code to your phone"
  @input="handleInput"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};