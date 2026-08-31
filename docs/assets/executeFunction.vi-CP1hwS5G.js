import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/executeFunction - Thực thi hàm hoặc trả về giá trị`}),`
`,(0,c.jsx)(t.h1,{id:`executefunction`,children:(0,c.jsx)(t.code,{children:`executeFunction`})}),`
`,(0,c.jsxs)(t.p,{children:[`Một tiện ích linh hoạt được thiết kế để xử lý các đối số có thể là giá trị tĩnh hoặc hàm. Nếu đối số được cung cấp là một hàm, `,(0,c.jsx)(t.code,{children:`executeFunction`}),` sẽ gọi hàm đó với các đối số đã chỉ định và trả về kết quả. Nếu không, nó sẽ trả về chính đối số đó.`]}),`
`,(0,c.jsx)(t.p,{children:`Mô hình này rất hiệu quả để triển khai tính toán lười biếng (lazy evaluation), các giá trị mặc định động hoặc các thuộc tính cấu hình có thể cố định hoặc được tính toán.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: T | ((...args: any[]) => T)`}),` — Giá trị cần xử lý. Có thể là một giá trị cụ thể hoặc một hàm trả về kiểu `,(0,c.jsx)(t.code,{children:`T`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`...args: any[]`}),` (tùy chọn) — Các đối số được truyền vào hàm nếu `,(0,c.jsx)(t.code,{children:`callback`}),` có thể gọi được.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`T`}),` — Kết quả của việc thực thi hàm hoặc chính giá trị ban đầu.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { executeFunction } from '@dxtmisha/functional-basic'

// 1. Xử lý giá trị tĩnh
console.log(executeFunction('Xin chào')) // 'Xin chào'

// 2. Thực thi động
const getLabel = (prefix: string) => \`\${prefix}: Nhãn động\`
console.log(executeFunction(getLabel, 'Admin')) // 'Admin: Nhãn động'

// 3. Logic điều kiện trong cuộc gọi
const value = Math.random() > 0.5 ? 'Tĩnh' : () => 'Đã tính toán'
console.log(executeFunction(value)) // 'Tĩnh' hoặc 'Đã tính toán'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};