import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`value-management`,children:`Value Management`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`value`}),`, `,(0,c.jsx)(t.code,{children:`valueVariant`}),`, and `,(0,c.jsx)(t.code,{children:`valueVariantHide`}),` properties are designed for managing checkbox values during form submission and two-way data binding.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value`}),` — current checkbox state (true/false or custom values)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`valueVariant`}),` — value passed when checkbox is checked`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`valueVariantHide`}),` — value passed when checkbox is unchecked (default: "0")`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Properties work together: `,(0,c.jsx)(t.code,{children:`value`}),` determines the current checkbox state and works with `,(0,c.jsx)(t.code,{children:`v-model`}),` for two-way binding. `,(0,c.jsx)(t.code,{children:`valueVariant`}),` allows setting a custom value for the checked state (e.g., "yes", "1", "active"), which will be passed during form submission. `,(0,c.jsx)(t.code,{children:`valueVariantHide`}),` automatically creates a hidden input field with the specified value, which is submitted when the checkbox is unchecked, ensuring data presence in the form even with an inactive checkbox.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const agreed = ref(false)
const formData = ref({})

const handleSubmit = () => {
console.log('Form data:', formData.value)
}
<\/script>

<template>
<!-- Standard usage with boolean -->
<Checkbox
  v-model="agreed"
  name="terms"
  label="I agree to the terms"
/>
<!-- value: true/false -->

<!-- Custom values for form -->
<Checkbox
  name="subscribe"
  label="Subscribe to newsletter"
  valueVariant="yes"
  valueVariantHide="no"
/>
<!-- When checked sends: subscribe=yes -->
<!-- When unchecked sends: subscribe=no -->

<!-- Numeric values -->
<Checkbox
  name="notification"
  label="Enable notifications"
  valueVariant="1"
  valueVariantHide="0"
/>
<!-- When checked sends: notification=1 -->
<!-- When unchecked sends: notification=0 -->

<!-- Without hidden value -->
<Checkbox
  name="optional"
  label="Optional setting"
  valueVariant="enabled"
  :valueVariantHide="null"
/>
<!-- Only sent when checked: optional=enabled -->
<!-- When unchecked field is not sent -->
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};