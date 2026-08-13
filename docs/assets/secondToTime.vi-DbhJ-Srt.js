import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/secondToTime - Chuyển đổi giây sang chuỗi thời gian`}),`
`,(0,c.jsx)(t.h1,{id:`secondtotime`,children:(0,c.jsx)(t.code,{children:`secondToTime`})}),`
`,(0,c.jsxs)(t.p,{children:[`Chuyển đổi số giây được cung cấp thành chuỗi định dạng thời gian `,(0,c.jsx)(t.code,{children:`MM:SS`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Nếu giá trị số giây nhỏ hơn hoặc bằng 0, hoặc không được cung cấp, hàm sẽ trả về giá trị mặc định là `,(0,c.jsx)(t.code,{children:`00:00`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`second: number | string | undefined`}),` — Tổng số giây (hỗ trợ cả kiểu số nguyên và kiểu chuỗi biểu diễn số).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Một chuỗi được định dạng với số phút và số giây tương ứng (ví dụ: `,(0,c.jsx)(t.code,{children:`12:34`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { secondToTime } from '@dxtmisha/functional-basic'

console.log(secondToTime(125)) // '02:05'
console.log(secondToTime('65')) // '01:05'
console.log(secondToTime()) // '00:00'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};