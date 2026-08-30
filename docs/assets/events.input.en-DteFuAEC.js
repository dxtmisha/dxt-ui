import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`input`,children:(0,c.jsx)(t.code,{children:`input`})}),`
`,(0,c.jsx)(t.p,{children:`Event fires when the value in the input field changes, passing the original DOM event and validation data.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: InputEvent`}),` — original DOM input event`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: FieldValidationItem`}),` — object with validation data`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`FieldValidationItem structure:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`group: string | undefined`}),` — mask group key`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`input: HTMLInputElement | HTMLTextAreaElement | undefined`}),` — related input element`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`pattern: FieldPatternItemOrFunction | undefined`}),` — validation pattern used`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string | undefined`}),` — custom type`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`status: boolean | undefined`}),` — validation success status`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`required: boolean | undefined`}),` — field required flag`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isFull: boolean | undefined`}),` — value completion flag`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`validationMessage: string | undefined`}),` — error message text`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`validity: ValidityState | undefined`}),` — native validity state`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`validityMessage: string | undefined`}),` — custom validity message`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: any`}),` — original value`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`valueInput: any | undefined`}),` — entered value`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail: Record<string, any> | undefined`}),` — additional data`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleInput = (event, value) => {
console.log('DOM event:', event)
console.log('Value:', value.value)
console.log('Validation:', value.status)
console.log('Complete:', value.isFull)

if (!value.status) {
  console.log('Error:', value.validationMessage)
}
}
<\/script>

<template>
<Mask
  mask="+1 (***) ***-****"
  @input="handleInput"
/>
</template>
`,language:`html`}),`
`,(0,c.jsx)(t.h3,{id:`inputlite`,children:(0,c.jsx)(t.code,{children:`inputLite`})}),`
`,(0,c.jsx)(t.p,{children:`Event fires when the value in the input field changes, passing only validation data without the original DOM event (lightweight version).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: FieldValidationItem`}),` — object with validation data`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`change`,children:(0,c.jsx)(t.code,{children:`change`})}),`
`,(0,c.jsx)(t.p,{children:`Event fires when input is completed and focus is lost, passing the original DOM event and validation data.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: InputEvent`}),` — original DOM input event`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: FieldValidationItem`}),` — object with validation data`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`FieldValidationItem structure:`}),` same as for `,(0,c.jsx)(t.code,{children:`input`}),` event`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleChange = (event, value) => {
console.log('DOM event:', event)
console.log('Final value:', value.value)

if (value.status && value.isFull) {
  // Submit data to server
  submitForm(value.value)
}
}
<\/script>

<template>
<Mask
  mask="+1 (***) ***-****"
  @change="handleChange"
/>
</template>
`,language:`html`}),`
`,(0,c.jsx)(t.h3,{id:`changelite`,children:(0,c.jsx)(t.code,{children:`changeLite`})}),`
`,(0,c.jsx)(t.p,{children:`Event fires when input is completed and focus is lost, passing only validation data without the original DOM event (lightweight version).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: FieldValidationItem`}),` — object with validation data`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};