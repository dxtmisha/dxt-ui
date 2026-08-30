import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/replaceTemplate - Thay thế giá trị vào chuỗi mẫu`}),`
`,(0,c.jsx)(t.h1,{id:`replacetemplate`,children:(0,c.jsx)(t.code,{children:`replaceTemplate`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tìm kiếm các điểm đánh dấu có dạng `,(0,c.jsx)(t.code,{children:`[pattern]`}),` trong chuỗi gốc và thay thế chúng bằng các giá trị tương ứng từ đối tượng được cung cấp. Nếu giá trị của điểm đánh dấu là một hàm, hàm đó sẽ tự động được gọi và kết quả của nó sẽ được chèn vào chuỗi.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: string`}),` — Chuỗi mẫu chứa các điểm đánh dấu (ví dụ: `,(0,c.jsx)(t.code,{children:`[name]`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`replaces: Record<string, string | FunctionReturn<string>>`}),` — Một đối tượng chứa dữ liệu thay thế, trong đó khóa là tên của điểm đánh dấu bên trong ngoặc vuông, và giá trị là một chuỗi hoặc một hàm trả về chuỗi.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Một chuỗi mới với các giá trị đã được thay thế.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { replaceTemplate } from '@dxtmisha/functional-basic'

const template = 'Xin chào, [name]! Số dư của bạn: [balance].'
const data = {
  name: 'John',
  balance: () => '$100' // Hàm được thực thi trong quá trình thay thế
}

console.log(replaceTemplate(template, data)) 
// 'Xin chào, John! Số dư của bạn: $100.'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};