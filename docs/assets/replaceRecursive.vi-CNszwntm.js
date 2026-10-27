import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/replaceRecursive - Hợp nhất đệ quy các đối tượng hoặc mảng`}),`
`,(0,c.jsx)(t.h1,{id:`replacerecursive`,children:(0,c.jsx)(t.code,{children:`replaceRecursive`})}),`
`,(0,c.jsxs)(t.p,{children:[`Thực hiện hợp nhất sâu (đệ quy) đối tượng đích với dữ liệu từ một đối tượng hoặc mảng thay thế. Khi bật tham số `,(0,c.jsx)(t.code,{children:`isMerge`}),` (mặc định là `,(0,c.jsx)(t.code,{children:`true`}),`), các mảng ở cùng khóa sẽ được nối lại và loại bỏ phần tử trùng lặp qua `,(0,c.jsx)(t.code,{children:`uniqueArray`}),`; ngược lại, mảng từ `,(0,c.jsx)(t.code,{children:`replacement`}),` sẽ ghi đè mảng ban đầu.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Tích hợp sẵn cơ chế bảo vệ chống `,(0,c.jsx)(t.strong,{children:`Prototype Pollution`}),` thông qua `,(0,c.jsx)(t.code,{children:`isPrototypeKey`}),`, tự động bỏ qua các khóa nguy hiểm (`,(0,c.jsx)(t.code,{children:`__proto__`}),`, `,(0,c.jsx)(t.code,{children:`constructor`}),`, `,(0,c.jsx)(t.code,{children:`prototype`}),`) trong quá trình duyệt.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`target: ObjectItem<I>`}),` — Đối tượng đích mà các phần tử sẽ được thay thế hoặc hợp nhất.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`replacement?: ObjectOrArray<I>`}),` — Đối tượng hoặc mảng chứa các phần tử được sử dụng để thay thế.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isMerge?: boolean = true`}),` — Cờ hợp nhất các mảng cùng tên (mặc định là `,(0,c.jsx)(t.code,{children:`true`}),`). Nếu là `,(0,c.jsx)(t.code,{children:`false`}),`, các mảng từ `,(0,c.jsx)(t.code,{children:`replacement`}),` sẽ ghi đè hoàn toàn.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`ObjectItem<I>`}),` — Một đối tượng mới là kết quả hợp nhất mà không làm biến đổi (mutate) `,(0,c.jsx)(t.code,{children:`target`}),`. Nếu `,(0,c.jsx)(t.code,{children:`target`}),` không phải là đối tượng, trả về bản sao của `,(0,c.jsx)(t.code,{children:`replacement`}),` (nếu là đối tượng) hoặc `,(0,c.jsx)(t.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { replaceRecursive } from '@dxtmisha/functional-basic'

const target = { a: [1, 2], b: { x: 1 } }
const source = { a: [2, 3], b: { y: 2 } }

console.log(replaceRecursive(target, source)) 
// { a: [1, 2, 3], b: { x: 1, y: 2 } }

console.log(replaceRecursive(target, source, false)) 
// { a: [2, 3], b: { x: 1, y: 2 } }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};