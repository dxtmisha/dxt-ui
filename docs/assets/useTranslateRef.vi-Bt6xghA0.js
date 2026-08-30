import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Composables/useTranslateRef - Bản địa hóa và dịch thuật`}),`
`,(0,c.jsx)(t.h1,{id:`usetranslateref`,children:(0,c.jsx)(t.code,{children:`useTranslateRef`})}),`
`,(0,c.jsx)(t.p,{children:`Composable để lấy các bản dịch phản ứng dựa trên các khóa hoặc một mảng các khóa. Nó tự động cập nhật khi ngôn ngữ của ứng dụng thay đổi.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`names: (string | string[])[]`}),` — một chuỗi hoặc một mảng các khóa để dịch.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ShallowRef<TranslateList<T>>`}),` — một tham chiếu phản ứng nông chứa các văn bản đã dịch.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useTranslateRef, t } from '@dxtmisha/functional'

// Cách sử dụng cơ bản
const translations = useTranslateRef(['home.title', 'home.description'])

// Sử dụng viết tắt 't'
const labels = t(['button.save', 'button.cancel'])

// Trong template: <h1>{{ translations['home.title'] }}</h1>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};