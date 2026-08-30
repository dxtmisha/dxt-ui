import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for creating animated interface placeholders during content loading.`}),`
`,(0,c.jsxs)(t.p,{children:[`Skeleton provides smooth transitions between loading state and real content display. The component automatically manages child element visibility through the `,(0,c.jsx)(t.code,{children:`active`}),` property and supports a CSS class system for creating various types of placeholders.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Automatic content visibility management`}),`
`,(0,c.jsx)(t.li,{children:`Support for special CSS classes for placeholders`}),`
`,(0,c.jsxs)(t.li,{children:[`Component integration via `,(0,c.jsx)(t.code,{children:`isSkeleton`}),` flag`]}),`
`,(0,c.jsx)(t.li,{children:`Flexible placeholder types (text, background, borders)`}),`
`,(0,c.jsx)(t.li,{children:`Animated loading effects`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Product and user card placeholders`}),`
`,(0,c.jsx)(t.li,{children:`List and table skeletons`}),`
`,(0,c.jsx)(t.li,{children:`Image and avatar placeholders`}),`
`,(0,c.jsx)(t.li,{children:`Text blocks during loading`}),`
`,(0,c.jsx)(t.li,{children:`Complex forms with multiple fields`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const isLoading = ref(true)

setTimeout(() => {
isLoading.value = false
}, 2000)
<\/script>

<template>
<Skeleton :active="isLoading">
  <!-- Placeholders visible during loading -->
  <div class="skeleton__background avatar"></div>
  <div class="skeleton__text title"></div>
  <div class="skeleton__textVariant subtitle"></div>

  <!-- Real content -->
  <img src="/avatar.jpg" alt="User avatar" />
  <h3>{{ user.name }}</h3>
  <p>{{ user.description }}</p>
</Skeleton>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};