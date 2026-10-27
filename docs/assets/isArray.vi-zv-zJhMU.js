import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/isArray - Kiểm tra xem giá trị có phải là mảng không`}),`
`,(0,c.jsx)(t.h1,{id:`isarray`,children:(0,c.jsx)(t.code,{children:`isArray`})}),`
`,(0,c.jsx)(t.p,{children:`Kiểm tra xem các giá trị có phải là mảng hay không.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: unknown`}),` — giá trị đầu vào cần kiểm tra thuộc bất kỳ kiểu nào.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`<T = unknown>`}),` — generic tùy chọn để chỉ định kiểu của phần tử trong mảng kết quả `,(0,c.jsx)(t.code,{children:`T[]`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`value is T[]`}),` (`,(0,c.jsx)(t.code,{children:`boolean`}),`) — `,(0,c.jsx)(t.code,{children:`true`}),` nếu giá trị là mảng (`,(0,c.jsx)(t.code,{children:`Array.isArray(value)`}),`), ngược lại là `,(0,c.jsx)(t.code,{children:`false`}),`. Đóng vai trò là type guard trong TypeScript giúp thu hẹp kiểu của giá trị về `,(0,c.jsx)(t.code,{children:`T[]`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isArray } from '@dxtmisha/functional-basic'

console.log(isArray([1, 2, 3])) // true
console.log(isArray({})) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};