import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/replaceRecursive - Hợp nhất đệ quy các đối tượng hoặc mảng`}),`
`,(0,c.jsx)(n.h1,{id:`replacerecursive`,children:(0,c.jsx)(n.code,{children:`replaceRecursive`})}),`
`,(0,c.jsxs)(n.p,{children:[`Thực hiện hợp nhất sâu (đệ quy) một đối tượng hoặc mảng đích với dữ liệu từ một đối tượng/mảng thay thế. Nếu tham số `,(0,c.jsx)(n.code,{children:`isMerge`}),` được bật, các mảng sẽ được nối lại với nhau và loại bỏ các phần tử trùng lặp; nếu không, các mảng từ đối tượng thay thế sẽ ghi đè lên các mảng ban đầu.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`array: ObjectItem<I>`}),` — Mảng hoặc đối tượng ban đầu mà các phần tử sẽ được thay thế/hợp nhất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replacement?: ObjectOrArray<I>`}),` — Mảng hoặc đối tượng chứa các phần tử được sử dụng để thay thế.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isMerge: boolean`}),` — Cờ để hợp nhất các mảng cùng tên (mặc định là `,(0,c.jsx)(n.code,{children:`true`}),`). Nếu là `,(0,c.jsx)(n.code,{children:`false`}),`, các phần tử đơn giản sẽ bị ghi đè.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`ObjectItem<I>`}),` — Một đối tượng hoặc mảng mới là kết quả của việc hợp nhất. Đối tượng ban đầu không bị biến đổi (mutate).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { replaceRecursive } from '@dxtmisha/functional-basic'

const target = { a: [1, 2], b: { x: 1 } }
const source = { a: [2, 3], b: { y: 2 } }

console.log(replaceRecursive(target, source)) 
// { a: [1, 2, 3], b: { x: 1, y: 2 } }

console.log(replaceRecursive(target, source, false)) 
// { a: [2, 3], b: { x: 1, y: 2 } }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};