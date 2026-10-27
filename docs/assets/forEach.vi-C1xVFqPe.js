import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/forEach - Lặp qua tập hợp (Array, Object, Map, Set)`}),`
`,(0,c.jsx)(t.h1,{id:`foreach`,children:(0,c.jsx)(t.code,{children:`forEach`})}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm thực hiện chức năng được chỉ định một lần cho mỗi phần tử trong tập hợp (`,(0,c.jsx)(t.code,{children:`Array`}),`, `,(0,c.jsx)(t.code,{children:`Object`}),`, `,(0,c.jsx)(t.code,{children:`Map`}),`, `,(0,c.jsx)(t.code,{children:`Set`}),`) và trả về một mảng chứa kết quả thực thi hàm (bỏ qua các giá trị `,(0,c.jsx)(t.code,{children:`undefined`}),` trừ khi `,(0,c.jsx)(t.code,{children:`saveUndefined`}),` là `,(0,c.jsx)(t.code,{children:`true`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: D`}),` — Đối tượng hoặc tập hợp để lặp (`,(0,c.jsx)(t.code,{children:`D extends ForEachData<T> = readonly T[] | Record<string, T> | Map<unknown, T> | Set<T>`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: (item: T, key: K, collection: D) => R`}),` — Một hàm callback được thực thi cho mỗi phần tử (`,(0,c.jsx)(t.code,{children:`key`}),` có kiểu `,(0,c.jsx)(t.code,{children:`number`}),` cho mảng, `,(0,c.jsx)(t.code,{children:`string`}),` cho đối tượng, `,(0,c.jsx)(t.code,{children:`K`}),` cho `,(0,c.jsx)(t.code,{children:`Map`}),`, và `,(0,c.jsx)(t.code,{children:`S`}),` cho `,(0,c.jsx)(t.code,{children:`Set`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`saveUndefined?: S`}),` — Nếu `,(0,c.jsx)(t.code,{children:`true`}),`, hàm sẽ giữ lại các giá trị `,(0,c.jsx)(t.code,{children:`undefined`}),` trong mảng kết quả (mặc định sẽ bị lọc bỏ).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`ForEachReturn<R, S>`}),` (`,(0,c.jsx)(t.code,{children:`(S extends true ? R : Exclude<R, undefined>)[]`}),`) — một mảng với kết quả thực thi hàm. Khi `,(0,c.jsx)(t.code,{children:`saveUndefined: false`}),` (hoặc mặc định), kiểu dữ liệu tự động loại trừ `,(0,c.jsx)(t.code,{children:`undefined`}),` (`,(0,c.jsx)(t.code,{children:`Exclude<R, undefined>[]`}),`). Khi `,(0,c.jsx)(t.code,{children:`saveUndefined: true`}),`, kiểu trả về giữ lại `,(0,c.jsx)(t.code,{children:`undefined`}),` (`,(0,c.jsx)(t.code,{children:`(R | undefined)[]`}),`).`]}),`
`,(0,c.jsx)(t.h2,{id:`cơ-chế-hoạt-động`,children:`Cơ chế hoạt động`}),`
`,(0,c.jsx)(t.p,{children:`Hàm này là một công cụ vạn năng để lặp, biến đổi và lọc nhiều cấu trúc dữ liệu khác nhau cùng một lúc trong một lượt duyệt duy nhất O(N).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tính năng:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hỗ trợ tập hợp đa dạng`}),` — hoạt động trực tiếp với `,(0,c.jsx)(t.code,{children:`Array`}),`, `,(0,c.jsx)(t.code,{children:`Map`}),`, `,(0,c.jsx)(t.code,{children:`Set`}),` và các đối tượng từ điển (`,(0,c.jsx)(t.code,{children:`Record<string, T>`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thu thập kết quả (filterMap / compactMap)`}),` — khác với `,(0,c.jsx)(t.code,{children:`Array.prototype.forEach`}),` tiêu chuẩn, hàm này thu thập các giá trị trả về vào một mảng mới tương tự `,(0,c.jsx)(t.code,{children:`map`}),`, nhưng không tạo các mảng phân bổ trung gian.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lọc thông minh undefined`}),` — theo mặc định, tất cả các giá trị `,(0,c.jsx)(t.code,{children:`undefined`}),` (ví dụ: nếu callback không trả về gì hoặc trả về `,(0,c.jsx)(t.code,{children:`undefined`}),`) sẽ bị lọc bỏ khỏi mảng kết quả, và kiểu dữ liệu trả về được thu hẹp về `,(0,c.jsx)(t.code,{children:`Exclude<R, undefined>[]`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tham số saveUndefined`}),` — nếu truyền `,(0,c.jsx)(t.code,{children:`true`}),` làm đối số thứ ba, mảng sẽ giữ lại tất cả các kết quả, bao gồm cả `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hợp đồng đối số thống nhất`}),` — tất cả các hàm callback đều nhận `,(0,c.jsx)(t.code,{children:`(item, key, collection)`}),`. Đối với `,(0,c.jsx)(t.code,{children:`Set`}),`, phần tử chính nó được truyền làm khóa (`,(0,c.jsx)(t.code,{children:`item`}),`), hoàn toàn ăn khớp với tiêu chuẩn ECMAScript.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bảo vệ chống biến đổi độ dài`}),` — đối với mảng, độ dài được lưu vào biến trước vòng lặp, ngăn ngừa việc lặp vô hạn nếu các phần tử được thêm vào trong quá trình lặp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`An toàn đối tượng`}),` — duyệt qua các thuộc tính đối tượng bằng `,(0,c.jsx)(t.code,{children:`for...in`}),` kết hợp kiểm tra `,(0,c.jsx)(t.code,{children:`Object.hasOwn`}),`, loại bỏ các thuộc tính kế thừa từ prototype và tránh tạo mảng khóa tạm thời.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { forEach } from '@dxtmisha/functional-basic'

// 1. Mảng (Array)
const numbers = [1, 2, 3, 4]
const evens = forEach(numbers, item => (item % 2 === 0 ? item * 10 : undefined))
// [20, 40]

// 2. Đối tượng (Object / Record)
const user = { name: 'Alice', role: 'admin', age: 25 }
const pairs = forEach(user, (value, key) => \`\${key}=\${value}\`)
// ['name=Alice', 'role=admin', 'age=25']

// 3. Bản đồ (Map)
const map = new Map([['first', 10], ['second', 20]])
const mapResults = forEach(map, (value, key) => \`\${key}:\${value}\`)
// ['first:10', 'second:20']

// 4. Tập hợp (Set)
const set = new Set(['apple', 'banana'])
const setUpper = forEach(set, item => item.toUpperCase())
// ['APPLE', 'BANANA']

// 5. Giữ lại undefined (saveUndefined: true)
const withUndefined = forEach([1, 2, 3], item => (item % 2 === 0 ? item : undefined), true)
// [undefined, 2, undefined]
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};