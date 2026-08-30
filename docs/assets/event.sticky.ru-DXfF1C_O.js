import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`sticky`,children:(0,c.jsx)(t.code,{children:`sticky`})}),`
`,(0,c.jsx)(t.p,{children:`Событие, возникающее при изменении статуса прикрепления липкого элемента (когда элемент становится липким или возвращается в обычный поток).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`status: boolean`}),` — новый статус прикрепления (`,(0,c.jsx)(t.code,{children:`true`}),`, если элемент прилип, иначе `,(0,c.jsx)(t.code,{children:`false`}),`)`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleSticky = (status) => {
console.log('Статус прикрепления изменился на:', status)
}
<\/script>

<template>
<MotionSticky @sticky="handleSticky">
  <div>Липкий контент</div>
</MotionSticky>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};