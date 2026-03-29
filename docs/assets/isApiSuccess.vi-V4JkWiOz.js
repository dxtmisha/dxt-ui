import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/isApiSuccess - Kiểm tra phản hồi API thành công`}),`
`,(0,c.jsx)(n.h1,{id:`isapisuccess`,children:(0,c.jsx)(n.code,{children:`isApiSuccess`})}),`
`,(0,c.jsx)(n.p,{children:`Kiểm tra xem phản hồi API có thành công hay không.`}),`
`,(0,c.jsx)(n.p,{children:`Việc kiểm tra được thực hiện theo các quy tắc sau:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Nếu dữ liệu là một mảng, nó được coi là thành công.`}),`
`,(0,c.jsxs)(n.li,{children:[`Nếu dữ liệu là một đối tượng, sự thành công được xác định bởi các trường `,(0,c.jsx)(n.code,{children:`status === 'success'`}),` hoặc `,(0,c.jsx)(n.code,{children:`success === true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Nếu trường `,(0,c.jsx)(n.code,{children:`statusObject`}),` có mặt, sự thành công được xác định bởi mã trạng thái HTTP (bắt đầu bằng 2).`]}),`
`,(0,c.jsx)(n.li,{children:`Nếu không có trường nào có mặt, sự thành công được xác định bởi trạng thái API toàn cục.`}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: ApiData<T>`}),` — dữ liệu phản hồi API.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` nếu phản hồi thành công, ngược lại là `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isApiSuccess } from '@dxtmisha/functional-basic'

console.log(isApiSuccess({ status: 'success' })) // true
console.log(isApiSuccess({ success: true })) // true
console.log(isApiSuccess([])) // true
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};