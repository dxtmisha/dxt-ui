import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/figma-ref/Composables/useFigmaFrameStyles - Управление стилями фреймов`}),`
`,(0,c.jsx)(t.h1,{id:`usefigmaframestyles`,children:(0,c.jsx)(t.code,{children:`useFigmaFrameStyles`})}),`
`,(0,c.jsx)(t.p,{children:`Композабл для управления и наблюдения за стилями фреймов из Figma.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styles: ComputedRef<UiFigmaFrameStylesMessengerResponse>`}),` — Реактивный список стилей фреймов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`send(attributes: UiFigmaFrameStylesMessengerAttributes): void`}),` — Метод для отправки запроса на получение или обновление стилей конкретных узлов.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<script setup lang="ts">
import { useFigmaFrameStyles } from '@dxtmisha/figma-ref'

const { styles, send } = useFigmaFrameStyles()

// Запрос стилей для конкретных нод
const updateStyles = () => {
  send({ ids: ['1:10', '1:20'], children: true })
}
<\/script>

<template>
  <div>
    <button @click="updateStyles">Обновить стили</button>
    <pre>{{ styles }}</pre>
  </div>
</template>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};