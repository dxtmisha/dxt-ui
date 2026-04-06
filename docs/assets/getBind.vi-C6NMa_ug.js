import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional/Functions/getBind - Tạo liên kết`}),`
`,(0,c.jsx)(n.h1,{id:`getbind`,children:(0,c.jsx)(n.code,{children:`getBind`})}),`
`,(0,c.jsx)(n.p,{children:`Hàm tiện ích cơ bản để tạo đối tượng các thuộc tính cho một thành phần phụ dựa trên các giá trị bình thường (không phản ứng). Nó xử lý các loại đầu vào khác nhau và đảm bảo cấu trúc nhất quán cho việc liên kết thuộc tính.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T | R | undefined | null`}),` — Giá trị đầu vào cần liên kết. Có thể là kiểu nguyên thủy hoặc đối tượng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nameExtra: ItemList | string = {}`}),` — Các thuộc tính bổ sung để hợp nhất hoặc tên của thuộc tính sẽ sử dụng nếu `,(0,c.jsx)(n.code,{children:`value`}),` không phải là một đối tượng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string = 'value'`}),` — Tên thuộc tính mặc định (mặc định là `,(0,c.jsx)(n.code,{children:`'value'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`except: boolean = false`}),` — Nếu true, sẽ bỏ qua việc kiểm tra yêu cầu khóa chính trong đối tượng `,(0,c.jsx)(n.code,{children:`value`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`ConstrBind<R>`}),` — Một đối tượng chứa các thuộc tính sẵn sàng để liên kết.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getBind } from '@dxtmisha/functional'

// Trường hợp 1: Giá trị đơn giản
const bind1 = getBind('Xin chào', {}, 'label') 
// Kết quả: { label: 'Xin chào' }

// Trường hợp 2: Đối tượng với các thuộc tính bổ sung
const bind2 = getBind({ id: 1 }, { class: 'active' }, 'data')
// Kết quả: { id: 1, class: 'active' }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};