import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,p:`p`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`кастомные-иконки`,children:`Кастомные иконки`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`socialIcons`}),` позволяет передать словарь, сопоставляющий типы социальных сетей с конкретными именами иконок в вашем проекте.`]}),`
`,(0,c.jsx)(t.p,{children:`Это полезно, когда необходимо отображать иконку рядом с полем ввода, используя набор иконок вашей дизайн-системы.`}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const customIcons = {
telegram: 'custom-telegram-icon',
vk: 'custom-vk-icon'
}
<\/script>

<template>
<InputSocial
  social-type="telegram"
  :social-icons="customIcons"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};