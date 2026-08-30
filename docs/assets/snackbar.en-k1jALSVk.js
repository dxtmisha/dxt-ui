import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`description`,children:`Description`}),`
`,(0,c.jsx)(t.p,{children:`A component used to display temporary notifications (snackbars) in various parts of the screen. Snackbars provide brief messages about app processes at the bottom or top of the screen.`}),`
`,(0,c.jsx)(t.p,{children:`Snackbar manages a message queue, automatically hiding notifications after a specified time or upon user interaction.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Flexible positioning (top/bottom, left/right/block)`}),`
`,(0,c.jsx)(t.li,{children:`Configurable auto-hide delay (default 8 seconds)`}),`
`,(0,c.jsx)(t.li,{children:`Supports different entrance animations based on position`}),`
`,(0,c.jsx)(t.li,{children:`Active notification list management`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Usage Scenarios:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Confirming user actions (e.g., "File saved erfolgreich")`}),`
`,(0,c.jsx)(t.li,{children:`Informing about errors or warnings`}),`
`,(0,c.jsx)(t.li,{children:`Real-time system notifications`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const snackbar = ref(null)

const addMessage = () => {
snackbar.value?.data.add({
  label: 'Notification Title',
  description: 'Description of the event that occurred in the app.',
  button: 'Ok'
})
}
<\/script>

<template>
<Button label="Show Notification" @click="addMessage" />

<Snackbar
  ref="snackbar"
  vertical="bottom"
  horizontal="right"
/>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`It is recommended to use Snackbar for non-critical information that does not require immediate user action.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};