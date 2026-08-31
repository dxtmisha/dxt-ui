import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getObjectOrNone - Đảm bảo trả về một đối tượng`}),`
`,(0,c.jsx)(t.h1,{id:`getobjectornone`,children:(0,c.jsx)(t.code,{children:`getObjectOrNone`})}),`
`,(0,c.jsxs)(t.p,{children:[`Một tiện ích đơn giản kiểm tra xem giá trị được cung cấp có phải là một đối tượng thực tế (không phải `,(0,c.jsx)(t.code,{children:`null`}),`, không phải mảng, không phải kiểu nguyên thủy) hay không và trả về chính nó. Nếu đối số không phải là một đối tượng, hàm sẽ trả về một đối tượng rỗng `,(0,c.jsx)(t.code,{children:`{}`}),`. Việc này rất hữu ích trong việc đảm bảo an toàn khi khởi tạo hoặc truyền tham số.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — Bất kỳ giá trị nào, thường mong đợi đây là một đối tượng.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`T & Record<string, any>`}),` — Chính đối tượng ban đầu nếu kiểu dữ liệu đúng; ngược lại, trả về đối tượng rỗng `,(0,c.jsx)(t.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getObjectOrNone } from '@dxtmisha/functional-basic'

// Trả về đối tượng thành công
console.log(getObjectOrNone({ name: 'Admin' })) // { name: 'Admin' }

// Mảng không được coi là plain object, trả về {}
console.log(getObjectOrNone([1, 2, 3])) // {}

// Các kiểu thông thường và null sẽ trả về {}
console.log(getObjectOrNone(null)) // {}
console.log(getObjectOrNone('a string')) // {}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};