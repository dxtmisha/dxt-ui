import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/isApiSuccess - Kiểm tra phản hồi API thành công`}),`
`,(0,c.jsx)(t.h1,{id:`isapisuccess`,children:(0,c.jsx)(t.code,{children:`isApiSuccess`})}),`
`,(0,c.jsx)(t.p,{children:`Kiểm tra xem phản hồi API có thành công hay không.`}),`
`,(0,c.jsx)(t.p,{children:`Việc kiểm tra được thực hiện theo các quy tắc sau:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Nếu dữ liệu là một mảng, nó được coi là thành công.`}),`
`,(0,c.jsxs)(t.li,{children:[`Nếu dữ liệu là một đối tượng, sự thành công được xác định bởi các trường `,(0,c.jsx)(t.code,{children:`status === 'success'`}),` hoặc `,(0,c.jsx)(t.code,{children:`success === true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Nếu trường `,(0,c.jsx)(t.code,{children:`statusObject`}),` có mặt, sự thành công được xác định bởi mã trạng thái HTTP (bắt đầu bằng 2).`]}),`
`,(0,c.jsx)(t.li,{children:`Nếu không có trường nào có mặt, sự thành công được xác định bởi trạng thái API toàn cục.`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: ApiData<T>`}),` — dữ liệu phản hồi API.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` nếu phản hồi thành công, ngược lại là `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isApiSuccess } from '@dxtmisha/functional-basic'

console.log(isApiSuccess({ status: 'success' })) // true
console.log(isApiSuccess({ success: true })) // true
console.log(isApiSuccess([])) // true
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};