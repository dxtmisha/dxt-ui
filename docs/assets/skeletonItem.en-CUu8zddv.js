import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Individual skeleton item element used to create custom loading placeholders, text lines, containers, or borders within a Skeleton component.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Customizable placeholder styles (text, textVariant, background, backgroundVariant, border, borderVariant)`}),`
`,(0,c.jsxs)(t.li,{children:[`Random text generator with configurable length or length range `,(0,c.jsx)(t.code,{children:`[min, max]`})]}),`
`,(0,c.jsx)(t.li,{children:`Static label support or default slot override`}),`
`,(0,c.jsxs)(t.li,{children:[`Flexible HTML tag configuration (`,(0,c.jsx)(t.code,{children:`tag`}),` prop)`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
<\/script>

<template>
<Skeleton :active="isLoading">
  <!-- Single text line skeleton -->
  <SkeletonItem text />

  <!-- Text line with random length range between 4 and 10 words -->
  <SkeletonItem text :length="[4, 10]" />

  <!-- Container skeleton with background token -->
  <SkeletonItem background style="width: 100px; height: 100px;" />
</Skeleton>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`SkeletonItem provides building blocks for creating custom loading placeholders when composite components cannot cover unique card or widget layouts.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};