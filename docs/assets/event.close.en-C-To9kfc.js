import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`close`,children:(0,c.jsx)(t.code,{children:`close`})}),`
`,(0,c.jsx)(t.p,{children:`The event is triggered when the element is closed (clicking the close button or programmatic closing).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: string | undefined`}),` — element identification (the value of the `,(0,c.jsx)(t.code,{children:`value`}),` property)`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const onClose = (value) => {
console.log('Element closed:', value)
}
<\/script>

<template>
<SnackbarItem value="item-1" @close="onClose" />
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};