import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getColumn - Trích xuất một cột dữ liệu`}),`
`,(0,c.jsx)(t.h1,{id:`getcolumn`,children:(0,c.jsx)(t.code,{children:`getColumn`})}),`
`,(0,c.jsxs)(t.p,{children:[`Một tiện ích lặp qua mảng các đối tượng và trả về một mảng mới chỉ bao gồm các giá trị từ một khóa (thuộc tính) cụ thể của mỗi đối tượng. Về cơ bản, điều này tương đương với cú pháp `,(0,c.jsx)(t.code,{children:`Array.prototype.map(item => item[key])`}),` nhưng được định kiểu tĩnh chặt chẽ.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`array: ObjectOrArray<T>`}),` — Một mảng (hoặc một đối tượng từ điển) chứa các phần tử kiểu `,(0,c.jsx)(t.code,{children:`T`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`column: K`}),` — Khóa (tên thuộc tính) có các giá trị mà bạn muốn trích xuất.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`(T[K] | undefined)[]`}),` — Một mảng chứa các giá trị của `,(0,c.jsx)(t.code,{children:`column`}),` được yêu cầu. Nếu một phần tử không có thuộc tính này, giá trị tại vị trí đó sẽ là `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getColumn } from '@dxtmisha/functional-basic'

const users = [
  { id: 1, name: 'Anna', role: 'admin' },
  { id: 2, name: 'Ivan', role: 'user' },
  { id: 3, name: 'Maria', role: 'user' }
]

const names = getColumn(users, 'name')
console.log(names) // ['Anna', 'Ivan', 'Maria']

const ids = getColumn(users, 'id')
console.log(ids) // [1, 2, 3]
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};