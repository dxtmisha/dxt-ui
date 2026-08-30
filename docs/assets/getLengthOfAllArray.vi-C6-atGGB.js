import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getLengthOfAllArray - Độ dài của tất cả phần tử trong mảng`}),`
`,(0,c.jsx)(t.h1,{id:`getlengthofallarray`,children:(0,c.jsx)(t.code,{children:`getLengthOfAllArray`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tạo và trả về một mảng mới chỉ bao gồm độ dài (thuộc tính `,(0,c.jsx)(t.code,{children:`.length`}),`) của tất cả các phần tử trong mảng chuỗi được cung cấp.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: ObjectOrArray<string>`}),` — Mảng chuỗi đầu vào. Nếu truyền vào một chuỗi đơn, hàm sẽ xử lý nó như một mảng chứa một phần tử.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`number[]`}),` — Một mảng các số, trong đó mỗi số tương ứng với độ dài của chuỗi trong mảng nguồn ở cùng vị trí đó.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getLengthOfAllArray } from '@dxtmisha/functional-basic'

const data = ['đỏ', 'xanh dương', 'xanh lá']
const lengths = getLengthOfAllArray(data)

console.log(lengths) // [2, 10, 7]
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};