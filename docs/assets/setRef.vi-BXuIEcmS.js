import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Functions/setRef - Cập nhật giá trị`}),`
`,(0,c.jsx)(t.h1,{id:`setref`,children:(0,c.jsx)(t.code,{children:`setRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`Một hàm tiện ích cập nhật giá trị của một `,(0,c.jsx)(t.code,{children:`Ref`}),` phản ứng. Nó bao gồm một kiểm tra tích hợp để đảm bảo rằng việc cập nhật chỉ xảy ra nếu giá trị mới khác với giá trị hiện tại, ngăn chặn các kích hoạt phản ứng không cần thiết.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: Ref<T>`}),` — Phần tử `,(0,c.jsx)(t.code,{children:`Ref`}),` phản ứng cần được cập nhật.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — Giá trị mới để gán cho `,(0,c.jsx)(t.code,{children:`Ref`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { setRef } from '@dxtmisha/functional'

const status = ref('idle')

// Cập nhật giá trị thành 'loading'
setRef(status, 'loading')

// Cuộc gọi này sẽ bị bỏ qua vì giá trị đã là 'loading'
setRef(status, 'loading')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};