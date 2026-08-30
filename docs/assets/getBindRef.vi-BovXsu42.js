import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Functions/getBindRef - Tạo liên kết (phản ứng)`}),`
`,(0,c.jsx)(t.h1,{id:`getbindref`,children:(0,c.jsx)(t.code,{children:`getBindRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`Phiên bản phản ứng của hàm `,(0,c.jsx)(t.a,{href:`../getBind/getBind.vi.mdx`,children:(0,c.jsx)(t.code,{children:`getBind`})}),` để tạo các thuộc tính cho một thành phần phụ dựa trên các giá trị phản ứng hoặc bình thường. Nó giúp tạo ra các liên kết nhất quán khi truyền prop từ thành phần cha sang thành phần con, đặc biệt là khi sử dụng `,(0,c.jsx)(t.code,{children:`Ref`}),` của Vue.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<T | R> | undefined`}),` — Giá trị đầu vào. Có thể là một ref phản ứng hoặc một đối tượng bình thường chứa nhiều thuộc tính.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`nameExtra: RefOrNormal<ItemList> | string = {}`}),` — Các tham số bổ sung hoặc tên thuộc tính sẽ được hợp nhất vào đối tượng liên kết cuối cùng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string = 'value'`}),` — Tên thuộc tính sẽ sử dụng cho giá trị chính (mặc định là `,(0,c.jsx)(t.code,{children:`'value'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`ComputedRef<R>`}),` — Một computed ref phản ứng chứa đối tượng các thuộc tính đã được hợp nhất, sẵn sàng để liên kết (ví dụ: thông qua `,(0,c.jsx)(t.code,{children:`v-bind`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { getBindRef } from '@dxtmisha/functional'

const modelValue = ref('Xin chào')
const extraProps = { placeholder: 'Nhập tại đây...' }

// Tạo một liên kết computed: { value: 'Xin chào', placeholder: 'Nhập tại đây...' }
const bindings = getBindRef(modelValue, extraProps)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};