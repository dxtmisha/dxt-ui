import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/replaceRecursive - Hợp nhất đệ quy các đối tượng hoặc mảng`}),`
`,(0,c.jsx)(t.h1,{id:`replacerecursive`,children:(0,c.jsx)(t.code,{children:`replaceRecursive`})}),`
`,(0,c.jsxs)(t.p,{children:[`Thực hiện hợp nhất sâu (đệ quy) một đối tượng hoặc mảng đích với dữ liệu từ một đối tượng/mảng thay thế. Nếu tham số `,(0,c.jsx)(t.code,{children:`isMerge`}),` được bật, các mảng sẽ được nối lại với nhau và loại bỏ các phần tử trùng lặp; nếu không, các mảng từ đối tượng thay thế sẽ ghi đè lên các mảng ban đầu.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`array: ObjectItem<I>`}),` — Mảng hoặc đối tượng ban đầu mà các phần tử sẽ được thay thế/hợp nhất.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`replacement?: ObjectOrArray<I>`}),` — Mảng hoặc đối tượng chứa các phần tử được sử dụng để thay thế.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isMerge: boolean`}),` — Cờ để hợp nhất các mảng cùng tên (mặc định là `,(0,c.jsx)(t.code,{children:`true`}),`). Nếu là `,(0,c.jsx)(t.code,{children:`false`}),`, các phần tử đơn giản sẽ bị ghi đè.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`ObjectItem<I>`}),` — Một đối tượng hoặc mảng mới là kết quả của việc hợp nhất. Đối tượng ban đầu không bị biến đổi (mutate).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { replaceRecursive } from '@dxtmisha/functional-basic'

const target = { a: [1, 2], b: { x: 1 } }
const source = { a: [2, 3], b: { y: 2 } }

console.log(replaceRecursive(target, source)) 
// { a: [1, 2, 3], b: { x: 1, y: 2 } }

console.log(replaceRecursive(target, source, false)) 
// { a: [2, 3], b: { x: 1, y: 2 } }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};