import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`описание`,children:`Описание`}),`
`,(0,c.jsx)(t.p,{children:`Отдельный элемент внутри компонента Grid. Управляет тем, сколько колонок должен занимать элемент на различных размерах экрана.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Настраиваемый охват колонок (от 1 до 12)`}),`
`,(0,c.jsx)(t.li,{children:`Встроенная поддержка адаптивности для всех основных брейкпоинтов`}),`
`,(0,c.jsx)(t.li,{children:`Детальный контроль над плотностью макета`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
<\/script>

<template>
<Grid>
  <!-- Полная ширина на мобильных, половина на десктопе -->
  <GridItem base="12" md="6">Элемент 1</GridItem>
  <GridItem base="12" md="6">Элемент 2</GridItem>

  <!-- Различный охват для разных размеров экрана -->
  <GridItem base="12" sm="6" lg="3">Адаптивный элемент</GridItem>
</Grid>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`GridItem обеспечивает детальный контроль над размером элементов внутри контейнера Grid, позволяя создавать сложные адаптивные макеты без написания дополнительного CSS.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};