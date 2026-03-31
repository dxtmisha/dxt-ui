import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/Functions/setRef - Cập nhật giá trị`}),`
`,(0,c.jsx)(n.h1,{id:`setref`,children:(0,c.jsx)(n.code,{children:`setRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một hàm tiện ích cập nhật giá trị của một `,(0,c.jsx)(n.code,{children:`Ref`}),` phản ứng. Nó bao gồm một kiểm tra tích hợp để đảm bảo rằng việc cập nhật chỉ xảy ra nếu giá trị mới khác với giá trị hiện tại, ngăn chặn các kích hoạt phản ứng không cần thiết.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: Ref<T>`}),` — Phần tử `,(0,c.jsx)(n.code,{children:`Ref`}),` phản ứng cần được cập nhật.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — Giá trị mới để gán cho `,(0,c.jsx)(n.code,{children:`Ref`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { setRef } from '@dxtmisha/functional'

const status = ref('idle')

// Cập nhật giá trị thành 'loading'
setRef(status, 'loading')

// Cuộc gọi này sẽ bị bỏ qua vì giá trị đã là 'loading'
setRef(status, 'loading')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};