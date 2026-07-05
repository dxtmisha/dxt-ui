import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/figma-ref/Composables/useFigmaFrameStyles - Quản lý style của frame`}),`
`,(0,c.jsx)(n.h1,{id:`usefigmaframestyles`,children:(0,c.jsx)(n.code,{children:`useFigmaFrameStyles`})}),`
`,(0,c.jsx)(n.p,{children:`Một composable để quản lý và quan sát các style của frame từ Figma.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styles: ComputedRef<UiFigmaFrameStylesMessengerResponse>`}),` — Danh sách phản hồi các style của frame.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`send(attributes: UiFigmaFrameStylesMessengerAttributes): void`}),` — Phương thức để gửi yêu cầu lấy hoặc cập nhật style cho các node cụ thể.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-vue`,children:`<script setup lang="ts">
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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};