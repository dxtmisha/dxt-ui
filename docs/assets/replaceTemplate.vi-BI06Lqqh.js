import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/replaceTemplate - Thay thế giá trị vào chuỗi mẫu`}),`
`,(0,c.jsx)(n.h1,{id:`replacetemplate`,children:(0,c.jsx)(n.code,{children:`replaceTemplate`})}),`
`,(0,c.jsxs)(n.p,{children:[`Tìm kiếm các điểm đánh dấu có dạng `,(0,c.jsx)(n.code,{children:`[pattern]`}),` trong chuỗi gốc và thay thế chúng bằng các giá trị tương ứng từ đối tượng được cung cấp. Nếu giá trị của điểm đánh dấu là một hàm, hàm đó sẽ tự động được gọi và kết quả của nó sẽ được chèn vào chuỗi.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string`}),` — Chuỗi mẫu chứa các điểm đánh dấu (ví dụ: `,(0,c.jsx)(n.code,{children:`[name]`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaces: Record<string, string | FunctionReturn<string>>`}),` — Một đối tượng chứa dữ liệu thay thế, trong đó khóa là tên của điểm đánh dấu bên trong ngoặc vuông, và giá trị là một chuỗi hoặc một hàm trả về chuỗi.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Một chuỗi mới với các giá trị đã được thay thế.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { replaceTemplate } from '@dxtmisha/functional-basic'

const template = 'Xin chào, [name]! Số dư của bạn: [balance].'
const data = {
  name: 'John',
  balance: () => '$100' // Hàm được thực thi trong quá trình thay thế
}

console.log(replaceTemplate(template, data)) 
// 'Xin chào, John! Số dư của bạn: $100.'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};