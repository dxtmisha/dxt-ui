import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/sortList - Sắp xếp mảng nhiều cột`}),`
`,(0,c.jsx)(t.h1,{id:`sortlist`,children:(0,c.jsx)(t.code,{children:`sortList`})}),`
`,(0,c.jsxs)(t.p,{children:[`Một tiện ích sắp xếp một mảng các đối tượng hoặc phần tử theo một hoặc nhiều đường dẫn thuộc tính cột, hướng sắp xếp (`,(0,c.jsx)(t.code,{children:`'asc'`}),` hoặc `,(0,c.jsx)(t.code,{children:`'desc'`}),`), hoặc một hàm so sánh tùy chỉnh. Tiện ích thực hiện so sánh chuỗi theo ngữ cảnh địa phương bằng `,(0,c.jsx)(t.code,{children:`Intl.Collator`}),` với tùy chọn so sánh số và không phân biệt chữ hoa chữ thường, đồng thời đưa các giá trị `,(0,c.jsx)(t.code,{children:`null`}),` hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),` về cuối danh sách đã sắp xếp.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: T[]`}),` — Mảng các phần tử đầu vào cần sắp xếp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`sortColumns: SortColumnItem[]`}),` — Mảng các chỉ định sắp xếp cột `,(0,c.jsx)(t.code,{children:`{ column: string, dir: SortDir }`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`customSort?: SortFunction<T>`}),` — Hàm so sánh tùy chỉnh (không bắt buộc).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`T[]`}),` — Mảng các phần tử mới đã được sắp xếp (hoặc mảng ban đầu nếu `,(0,c.jsx)(t.code,{children:`sortColumns`}),` rỗng hoặc độ dài danh sách nhỏ hơn 2).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { sortList } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};