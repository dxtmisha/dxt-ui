import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for visual representation of operation progress, data loading, and long-running processes.`}),`
`,(0,c.jsx)(t.p,{children:`Progress provides flexible options for indicating completion status: linear and circular progress bars, minimalist point indicators. The component automatically manages visibility with customizable appearance and hiding delays, supports both determinate progress values and indeterminate states for operations with unknown completion time.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Linear and circular progress indicators`}),`
`,(0,c.jsx)(t.li,{children:`Point variants for minimal display`}),`
`,(0,c.jsx)(t.li,{children:`Determinate mode with specific values (0-100%)`}),`
`,(0,c.jsx)(t.li,{children:`Indeterminate mode for unknown execution time`}),`
`,(0,c.jsx)(t.li,{children:`Flexible positioning (top, bottom, static)`}),`
`,(0,c.jsx)(t.li,{children:`Customizable appearance and hiding delays`}),`
`,(0,c.jsx)(t.li,{children:`Compact and inverted display modes`}),`
`,(0,c.jsx)(t.li,{children:`Automatic visibility management`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Indicating data loading from server`}),`
`,(0,c.jsx)(t.li,{children:`Displaying file upload progress`}),`
`,(0,c.jsx)(t.li,{children:`Visualizing multi-step operation execution`}),`
`,(0,c.jsx)(t.li,{children:`Global page loading indicators`}),`
`,(0,c.jsx)(t.li,{children:`Progress bars in forms and wizards`}),`
`,(0,c.jsx)(t.li,{children:`Background process indication`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const progress = ref(0)
const loading = ref(false)

const startLoading = () => {
loading.value = true
progress.value = 0

const interval = setInterval(() => {
  progress.value += 10
  if (progress.value >= 100) {
    clearInterval(interval)
    loading.value = false
  }
}, 500)
}
<\/script>

<template>
<button @click="startLoading">Start Loading</button>

<!-- Linear indicator with determinate value -->
<Progress
  :visible="loading"
  :value="progress"
  linear
  position="top"
/>

<!-- Circular indicator -->
<Progress
  :visible="loading"
  :value="progress"
  circular
/>

<!-- Indeterminate indicator -->
<Progress
  :visible="loading"
  linear
  indeterminate="type1"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};