import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Base container for form controls that composes label, messages, counter, icons, and progress into a unified structure.`}),`
`,(0,c.jsx)(t.p,{children:`Field centralizes the visual representation management of input fields, handles focus and validation states, coordinates auxiliary element positioning, and provides a consistent API for building any type of inputs. It serves as the fundamental foundation for creating consistent forms with slot support, control icons, and subcomponent integration.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Core capabilities:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Subcomponent composition (FieldLabel, FieldMessage, FieldCounter, Progress)`}),`
`,(0,c.jsx)(t.li,{children:`State management (focus, disabled, readonly, selected, block)`}),`
`,(0,c.jsx)(t.li,{children:`Slot coordination (caption, prefix, suffix, leading, trailing)`}),`
`,(0,c.jsx)(t.li,{children:`Validation highlighting based on validationMessage and forceShowMessage`}),`
`,(0,c.jsx)(t.li,{children:`Control icons with customizable visibility (cancel, arrows)`}),`
`,(0,c.jsx)(t.li,{children:`Flexible counter positioning via counterTop`}),`
`,(0,c.jsx)(t.li,{children:`Built-in helpers for sizing and icons (FieldSize, FieldIcons)`}),`
`,(0,c.jsx)(t.li,{children:`Loading progress integration and skeleton state`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Base container for Input, Select, Textarea, and other form controls`}),`
`,(0,c.jsx)(t.li,{children:`Building custom form components with unified styling`}),`
`,(0,c.jsx)(t.li,{children:`Creating fields with validation and character counters`}),`
`,(0,c.jsx)(t.li,{children:`Developing component libraries with consistent UI`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
import { Field } from '@dxtmisha/constructor'

const value = ref('')

// Field provides structure and management
<\/script>

<template>
<Field
  label="Username"
  helper-message="Enter your name"
  :counter="value.length"
  counter-max="50"
>
  <template #default="{ id, className }">
    <input
      :id="id"
      :class="className"
      v-model="value"
      maxlength="50"
    />
  </template>
</Field>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Field is a constructor container: it does not handle data input directly, but organizes structure, classes, and auxiliary element display for any type of input fields.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};