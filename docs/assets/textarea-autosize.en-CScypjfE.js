import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Text field component that automatically adjusts its height based on content.`}),`
`,(0,c.jsx)(t.p,{children:`TextareaAutosize provides a multi-line text field that dynamically changes its height depending on the amount of entered text. The component uses a hidden clone element for precise height calculation, taking into account all padding and styles of the original textarea. This ensures smooth and natural behavior when entering text without manual height adjustment.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Automatic height adjustment based on content`}),`
`,(0,c.jsx)(t.li,{children:`Precise size calculation considering padding and styles`}),`
`,(0,c.jsx)(t.li,{children:`Smooth height transitions on content change`}),`
`,(0,c.jsx)(t.li,{children:`Optional autosize toggle for fixed height`}),`
`,(0,c.jsx)(t.li,{children:`Support for all standard textarea attributes`}),`
`,(0,c.jsx)(t.li,{children:`Reactive value binding with input events`}),`
`,(0,c.jsx)(t.li,{children:`Optimized performance through requestAnimationFrame`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Comment and review fields`}),`
`,(0,c.jsx)(t.li,{children:`Feedback forms with long texts`}),`
`,(0,c.jsx)(t.li,{children:`Description and notes editors`}),`
`,(0,c.jsx)(t.li,{children:`Chats and messengers`}),`
`,(0,c.jsx)(t.li,{children:`Forms with dynamic content`}),`
`,(0,c.jsx)(t.li,{children:`Multi-line fields in adaptive interfaces`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const message = ref('')

const handleInput = (event) => {
console.log('Current value:', event.target.value)
}
<\/script>

<template>
<div class="form">
  <TextareaAutosize
    v-model="message"
    :inputAttrs="{
      placeholder: 'Enter your message...',
      maxlength: 500
    }"
    @input="handleInput"
  />

  <TextareaAutosize
    value="Text field with fixed height"
    :autosize="false"
    :inputAttrs="{
      placeholder: 'Height does not change',
      rows: 3
    }"
  />

  <TextareaAutosize
    :inputAttrs="{
      placeholder: 'Comment',
      'aria-label': 'Comment field',
      required: true
    }"
  />
</div>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};