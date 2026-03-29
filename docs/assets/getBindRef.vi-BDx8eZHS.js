import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/Functions/getBindRef - Tạo liên kết (phản ứng)`}),`
`,(0,c.jsx)(n.h1,{id:`getbindref`,children:(0,c.jsx)(n.code,{children:`getBindRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`Phiên bản phản ứng của hàm `,(0,c.jsx)(n.a,{href:`../getBind/getBind.vi.mdx`,children:(0,c.jsx)(n.code,{children:`getBind`})}),` để tạo các thuộc tính cho một thành phần phụ dựa trên các giá trị phản ứng hoặc bình thường. Nó giúp tạo ra các liên kết nhất quán khi truyền prop từ thành phần cha sang thành phần con, đặc biệt là khi sử dụng `,(0,c.jsx)(n.code,{children:`Ref`}),` của Vue.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: RefOrNormal<T | R> | undefined`}),` — Giá trị đầu vào. Có thể là một ref phản ứng hoặc một đối tượng bình thường chứa nhiều thuộc tính.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nameExtra: RefOrNormal<ItemList> | string = {}`}),` — Các tham số bổ sung hoặc tên thuộc tính sẽ được hợp nhất vào đối tượng liên kết cuối cùng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string = 'value'`}),` — Tên thuộc tính sẽ sử dụng cho giá trị chính (mặc định là `,(0,c.jsx)(n.code,{children:`'value'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`ComputedRef<R>`}),` — Một computed ref phản ứng chứa đối tượng các thuộc tính đã được hợp nhất, sẵn sàng để liên kết (ví dụ: thông qua `,(0,c.jsx)(n.code,{children:`v-bind`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { getBindRef } from '@dxtmisha/functional'

const modelValue = ref('Xin chào')
const extraProps = { placeholder: 'Nhập tại đây...' }

// Tạo một liên kết computed: { value: 'Xin chào', placeholder: 'Nhập tại đây...' }
const bindings = getBindRef(modelValue, extraProps)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};