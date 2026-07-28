import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-CKlddtvc.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/sortList - Sắp xếp mảng nhiều cột`}),`
`,(0,c.jsx)(n.h1,{id:`sortlist`,children:(0,c.jsx)(n.code,{children:`sortList`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một tiện ích sắp xếp một mảng các đối tượng hoặc phần tử theo một hoặc nhiều đường dẫn thuộc tính cột, hướng sắp xếp (`,(0,c.jsx)(n.code,{children:`'asc'`}),` hoặc `,(0,c.jsx)(n.code,{children:`'desc'`}),`), hoặc một hàm so sánh tùy chỉnh. Tiện ích thực hiện so sánh chuỗi theo ngữ cảnh địa phương bằng `,(0,c.jsx)(n.code,{children:`Intl.Collator`}),` với tùy chọn so sánh số và không phân biệt chữ hoa chữ thường, đồng thời đưa các giá trị `,(0,c.jsx)(n.code,{children:`null`}),` hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),` về cuối danh sách đã sắp xếp.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list: T[]`}),` — Mảng các phần tử đầu vào cần sắp xếp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`sortColumns: SortColumnItem[]`}),` — Mảng các chỉ định sắp xếp cột `,(0,c.jsx)(n.code,{children:`{ column: string, dir: SortDir }`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`customSort?: SortFunction<T>`}),` — Hàm so sánh tùy chỉnh (không bắt buộc).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`T[]`}),` — Mảng các phần tử mới đã được sắp xếp (hoặc mảng ban đầu nếu `,(0,c.jsx)(n.code,{children:`sortColumns`}),` rỗng hoặc độ dài danh sách nhỏ hơn 2).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { sortList } from '@dxtmisha/functional-basic'

const users = [
  { id: 3, category: 'A', name: 'Charlie', age: 30 },
  { id: 1, category: 'B', name: 'Alice', age: 25 },
  { id: 4, category: 'A', name: 'Alice', age: 20 },
  { id: 2, category: 'B', name: 'Bob', age: 35 }
]

// Sắp xếp theo danh mục tăng dần, sau đó theo tuổi giảm dần
const sorted = sortList(users, [
  { column: 'category', dir: 'asc' },
  { column: 'age', dir: 'desc' }
])

console.log(sorted.map(user => user.id)) // [3, 4, 2, 1]
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};