import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/getObjectOrNone - Đảm bảo trả về một đối tượng`}),`
`,(0,c.jsx)(n.h1,{id:`getobjectornone`,children:(0,c.jsx)(n.code,{children:`getObjectOrNone`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một tiện ích đơn giản kiểm tra xem giá trị được cung cấp có phải là một đối tượng thực tế (không phải `,(0,c.jsx)(n.code,{children:`null`}),`, không phải mảng, không phải kiểu nguyên thủy) hay không và trả về chính nó. Nếu đối số không phải là một đối tượng, hàm sẽ trả về một đối tượng rỗng `,(0,c.jsx)(n.code,{children:`{}`}),`. Việc này rất hữu ích trong việc đảm bảo an toàn khi khởi tạo hoặc truyền tham số.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — Bất kỳ giá trị nào, thường mong đợi đây là một đối tượng.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`T & Record<string, any>`}),` — Chính đối tượng ban đầu nếu kiểu dữ liệu đúng; ngược lại, trả về đối tượng rỗng `,(0,c.jsx)(n.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getObjectOrNone } from '@dxtmisha/functional-basic'

// Trả về đối tượng thành công
console.log(getObjectOrNone({ name: 'Admin' })) // { name: 'Admin' }

// Mảng không được coi là plain object, trả về {}
console.log(getObjectOrNone([1, 2, 3])) // {}

// Các kiểu thông thường và null sẽ trả về {}
console.log(getObjectOrNone(null)) // {}
console.log(getObjectOrNone('a string')) // {}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};