import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getLength - Độ dài hoặc kích thước của giá trị`}),`
`,(0,c.jsx)(t.h1,{id:`getlength`,children:(0,c.jsx)(t.code,{children:`getLength`})}),`
`,(0,c.jsxs)(t.p,{children:[`Trả về độ dài hoặc kích thước của các kiểu dữ liệu khác nhau bao gồm Mảng, Đối tượng (Object), Map, Set và Chuỗi. Nếu giá trị là null, undefined hoặc kiểu không được hỗ trợ (như số hoặc boolean), hàm trả về `,(0,c.jsx)(t.code,{children:`0`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: any`}),` — Giá trị đầu vào cần đo độ dài/kích thước.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`number`}),` — Độ dài hoặc kích thước của giá trị.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getLength } from '@dxtmisha/functional-basic'

console.log(getLength('xin chào')) // 8
console.log(getLength([1, 2, 3])) // 3
console.log(getLength({ a: 1, b: 2 })) // 2

const map = new Map([['key', 'value']])
console.log(getLength(map)) // 1

const set = new Set([1, 2, 2])
console.log(getLength(set)) // 2

console.log(getLength(null)) // 0
console.log(getLength(123)) // 0
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};