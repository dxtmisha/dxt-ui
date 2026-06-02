import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/getLength - Độ dài hoặc kích thước của giá trị`}),`
`,(0,c.jsx)(n.h1,{id:`getlength`,children:(0,c.jsx)(n.code,{children:`getLength`})}),`
`,(0,c.jsxs)(n.p,{children:[`Trả về độ dài hoặc kích thước của các kiểu dữ liệu khác nhau bao gồm Mảng, Đối tượng (Object), Map, Set và Chuỗi. Nếu giá trị là null, undefined hoặc kiểu không được hỗ trợ (như số hoặc boolean), hàm trả về `,(0,c.jsx)(n.code,{children:`0`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: any`}),` — Giá trị đầu vào cần đo độ dài/kích thước.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`number`}),` — Độ dài hoặc kích thước của giá trị.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getLength } from '@dxtmisha/functional-basic'

console.log(getLength('xin chào')) // 8
console.log(getLength([1, 2, 3])) // 3
console.log(getLength({ a: 1, b: 2 })) // 2

const map = new Map([['key', 'value']])
console.log(getLength(map)) // 1

const set = new Set([1, 2, 2])
console.log(getLength(set)) // 2

console.log(getLength(null)) // 0
console.log(getLength(123)) // 0
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};