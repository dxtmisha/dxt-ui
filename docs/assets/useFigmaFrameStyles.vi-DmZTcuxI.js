import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/figma-ref/Composables/useFigmaFrameStyles - Quản lý style của frame`}),`
`,(0,c.jsx)(t.h1,{id:`usefigmaframestyles`,children:(0,c.jsx)(t.code,{children:`useFigmaFrameStyles`})}),`
`,(0,c.jsx)(t.p,{children:`Một composable để quản lý và quan sát các style của frame từ Figma.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styles: ComputedRef<UiFigmaFrameStylesMessengerResponse>`}),` — Danh sách phản hồi các style của frame.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`send(attributes: UiFigmaFrameStylesMessengerAttributes): void`}),` — Phương thức để gửi yêu cầu lấy hoặc cập nhật style cho các node cụ thể.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<script setup lang="ts">
import { useFigmaFrameStyles } from '@dxtmisha/figma-ref'

const { styles, send } = useFigmaFrameStyles()

// Yêu cầu style cho các node cụ thể
const updateStyles = () => {
  send({ ids: ['1:10', '1:20'], children: true })
}
<\/script>

<template>
  <div>
    <button @click="updateStyles">Cập nhật Styles</button>
    <pre>{{ styles }}</pre>
  </div>
</template>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};