import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/Composables/useSessionRef - Quản lý lưu trữ phiên`}),`
`,(0,c.jsx)(n.h1,{id:`usesessionref`,children:(0,c.jsx)(n.code,{children:`useSessionRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`Composable để quản lý dữ liệu phản ứng trong `,(0,c.jsx)(n.code,{children:`sessionStorage`}),`. Sử dụng pattern singleton - các phần tử có cùng tên sẽ chia sẻ cùng một trạng thái phản ứng.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — tên của khóa trong `,(0,c.jsx)(n.code,{children:`sessionStorage`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: T | (() => T)`}),` — giá trị mặc định nếu không tìm thấy gì trong bộ nhớ.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Ref<T | undefined>`}),` — một tham chiếu phản ứng đến giá trị trong bộ nhớ phiên.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useSessionRef } from '@dxtmisha/functional'

const userSession = useSessionRef('user-data', { loggedIn: false })

// Thay đổi giá trị sẽ tự động cập nhật sessionStorage
userSession.value.loggedIn = true
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};