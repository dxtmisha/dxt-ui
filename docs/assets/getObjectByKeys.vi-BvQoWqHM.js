import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getObjectByKeys - Lấy object theo danh sách khóa`}),`
`,(0,c.jsx)(t.h1,{id:`getobjectbykeys`,children:(0,c.jsx)(t.code,{children:`getObjectByKeys`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tạo và trả về một đối tượng mới chỉ bao gồm các thuộc tính riêng (`,(0,c.jsx)(t.code,{children:`hasKey`}),`) có khóa tương ứng nằm trong danh sách truyền vào từ đối tượng nguồn. Các khóa prototype (`,(0,c.jsx)(t.code,{children:`__proto__`}),`, `,(0,c.jsx)(t.code,{children:`constructor`}),`, `,(0,c.jsx)(t.code,{children:`prototype`}),`), các thuộc tính không tồn tại hoặc có giá trị bằng `,(0,c.jsx)(t.code,{children:`undefined`}),` sẽ bị bỏ qua khi sao chép.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: T`}),` — Đối tượng nguồn chứa dữ liệu ban đầu (trong đó `,(0,c.jsx)(t.code,{children:`T extends Record<string, unknown>`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`keys: K[]`}),` — Mảng các khóa cần trích xuất từ đối tượng nguồn (trong đó `,(0,c.jsx)(t.code,{children:`K extends keyof T`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`Pick<T, K>`}),` — Một đối tượng mới chỉ chứa các thuộc tính riêng đã chọn có giá trị khác `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getObjectByKeys } from '@dxtmisha/functional-basic'

const user = {
  id: 1,
  name: 'Ivan',
  role: 'admin',
  age: undefined, // giá trị undefined sẽ bị bỏ qua
  active: true
}

const result = getObjectByKeys(user, ['id', 'name', 'age'])
console.log(result) // { id: 1, name: 'Ivan' }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};