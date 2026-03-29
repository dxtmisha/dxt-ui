import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/getColumn - Trích xuất một cột dữ liệu`}),`
`,(0,c.jsx)(n.h1,{id:`getcolumn`,children:(0,c.jsx)(n.code,{children:`getColumn`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một tiện ích lặp qua mảng các đối tượng và trả về một mảng mới chỉ bao gồm các giá trị từ một khóa (thuộc tính) cụ thể của mỗi đối tượng. Về cơ bản, điều này tương đương với cú pháp `,(0,c.jsx)(n.code,{children:`Array.prototype.map(item => item[key])`}),` nhưng được định kiểu tĩnh chặt chẽ.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`array: ObjectOrArray<T>`}),` — Một mảng (hoặc một đối tượng từ điển) chứa các phần tử kiểu `,(0,c.jsx)(n.code,{children:`T`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`column: K`}),` — Khóa (tên thuộc tính) có các giá trị mà bạn muốn trích xuất.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`(T[K] | undefined)[]`}),` — Một mảng chứa các giá trị của `,(0,c.jsx)(n.code,{children:`column`}),` được yêu cầu. Nếu một phần tử không có thuộc tính này, giá trị tại vị trí đó sẽ là `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getColumn } from '@dxtmisha/functional-basic'

const users = [
  { id: 1, name: 'Anna', role: 'admin' },
  { id: 2, name: 'Ivan', role: 'user' },
  { id: 3, name: 'Maria', role: 'user' }
]

const names = getColumn(users, 'name')
console.log(names) // ['Anna', 'Ivan', 'Maria']

const ids = getColumn(users, 'id')
console.log(ids) // [1, 2, 3]
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};