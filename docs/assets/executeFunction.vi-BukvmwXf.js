import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/executeFunction - Thực thi hàm hoặc trả về giá trị`}),`
`,(0,c.jsx)(n.h1,{id:`executefunction`,children:(0,c.jsx)(n.code,{children:`executeFunction`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một tiện ích linh hoạt được thiết kế để xử lý các đối số có thể là giá trị tĩnh hoặc hàm. Nếu đối số được cung cấp là một hàm, `,(0,c.jsx)(n.code,{children:`executeFunction`}),` sẽ gọi hàm đó với các đối số đã chỉ định và trả về kết quả. Nếu không, nó sẽ trả về chính đối số đó.`]}),`
`,(0,c.jsx)(n.p,{children:`Mô hình này rất hiệu quả để triển khai tính toán lười biếng (lazy evaluation), các giá trị mặc định động hoặc các thuộc tính cấu hình có thể cố định hoặc được tính toán.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: T | ((...args: any[]) => T)`}),` — Giá trị cần xử lý. Có thể là một giá trị cụ thể hoặc một hàm trả về kiểu `,(0,c.jsx)(n.code,{children:`T`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`...args: any[]`}),` (tùy chọn) — Các đối số được truyền vào hàm nếu `,(0,c.jsx)(n.code,{children:`callback`}),` có thể gọi được.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`T`}),` — Kết quả của việc thực thi hàm hoặc chính giá trị ban đầu.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { executeFunction } from '@dxtmisha/functional-basic'

// 1. Xử lý giá trị tĩnh
console.log(executeFunction('Xin chào')) // 'Xin chào'

// 2. Thực thi động
const getLabel = (prefix: string) => \`\${prefix}: Nhãn động\`
console.log(executeFunction(getLabel, 'Admin')) // 'Admin: Nhãn động'

// 3. Logic điều kiện trong cuộc gọi
const value = Math.random() > 0.5 ? 'Tĩnh' : () => 'Đã tính toán'
console.log(executeFunction(value)) // 'Tĩnh' hoặc 'Đã tính toán'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};