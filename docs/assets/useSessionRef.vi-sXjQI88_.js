import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Composables/useSessionRef - Quản lý lưu trữ phiên`}),`
`,(0,c.jsx)(t.h1,{id:`usesessionref`,children:(0,c.jsx)(t.code,{children:`useSessionRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`Composable để quản lý dữ liệu phản ứng trong `,(0,c.jsx)(t.code,{children:`sessionStorage`}),`. Sử dụng pattern singleton - các phần tử có cùng tên sẽ chia sẻ cùng một trạng thái phản ứng.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — tên của khóa trong `,(0,c.jsx)(t.code,{children:`sessionStorage`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue?: T | (() => T)`}),` — giá trị mặc định nếu không tìm thấy gì trong bộ nhớ.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Ref<T | undefined>`}),` — một tham chiếu phản ứng đến giá trị trong bộ nhớ phiên.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useSessionRef } from '@dxtmisha/functional'

const userSession = useSessionRef('user-data', { loggedIn: false })

// Thay đổi giá trị sẽ tự động cập nhật sessionStorage
userSession.value.loggedIn = true
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};