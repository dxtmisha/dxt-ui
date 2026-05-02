import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional/Composables/useTranslateRef - Bản địa hóa và dịch thuật`}),`
`,(0,c.jsx)(n.h1,{id:`usetranslateref`,children:(0,c.jsx)(n.code,{children:`useTranslateRef`})}),`
`,(0,c.jsx)(n.p,{children:`Composable để lấy các bản dịch phản ứng dựa trên các khóa hoặc một mảng các khóa. Nó tự động cập nhật khi ngôn ngữ của ứng dụng thay đổi.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`names: (string | string[])[]`}),` — một chuỗi hoặc một mảng các khóa để dịch.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`ShallowRef<TranslateList<T>>`}),` — một tham chiếu phản ứng nông chứa các văn bản đã dịch.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useTranslateRef, t } from '@dxtmisha/functional'

// Cách sử dụng cơ bản
const translations = useTranslateRef(['home.title', 'home.description'])

// Sử dụng viết tắt 't'
const labels = t(['button.save', 'button.cancel'])

// Trong template: <h1>{{ translations['home.title'] }}</h1>
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};