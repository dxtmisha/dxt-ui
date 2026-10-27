import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/isApiSuccess - Kiểm tra phản hồi API thành công`}),`
`,(0,c.jsx)(t.h1,{id:`isapisuccess`,children:(0,c.jsx)(t.code,{children:`isApiSuccess`})}),`
`,(0,c.jsx)(t.p,{children:`Kiểm tra xem phản hồi API có thành công hay không.`}),`
`,(0,c.jsx)(t.p,{children:`Việc kiểm tra được thực hiện theo các quy tắc ưu tiên nghiêm ngặt sau:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Nếu dữ liệu là một mảng, nó được coi là thành công (`,(0,c.jsx)(t.code,{children:`true`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Nếu dữ liệu là null, undefined, hoặc không phải là đối tượng, hàm trả về `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ưu tiên lỗi rõ ràng:`}),` Nếu có các cờ báo lỗi (`,(0,c.jsx)(t.code,{children:`success === false`}),`, `,(0,c.jsx)(t.code,{children:`status === 'error'`}),`, `,(0,c.jsx)(t.code,{children:`status === 'warning'`}),` hoặc đối tượng `,(0,c.jsx)(t.code,{children:`errorObject`}),`), hàm sẽ trả về `,(0,c.jsx)(t.code,{children:`false`}),` (ngay cả khi mã trạng thái HTTP là 200).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Nếu có các cờ thành công rõ ràng (`,(0,c.jsx)(t.code,{children:`status === 'success'`}),` hoặc `,(0,c.jsx)(t.code,{children:`success === true`}),`), hàm trả về `,(0,c.jsx)(t.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Nếu trường `,(0,c.jsx)(t.code,{children:`statusObject`}),` có mặt, sự thành công được xác định bởi mã trạng thái HTTP (phạm vi 2xx: từ 200 đến 299).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Nếu không có trường trạng thái nào có mặt, sự thành công được xác định bởi trạng thái API toàn cục (`,(0,c.jsx)(t.code,{children:`Api.getStatus().getStatus()`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data?: ApiData<T>`}),` — dữ liệu phản hồi API (đối tượng hoặc mảng).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` nếu phản hồi thành công, ngược lại là `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isApiSuccess } from '@dxtmisha/functional-basic'

// Mảng và thành công rõ ràng
console.log(isApiSuccess([])) // true
console.log(isApiSuccess({ status: 'success' })) // true
console.log(isApiSuccess({ success: true })) // true

// Mã trạng thái HTTP 2xx thành công trong statusObject
console.log(isApiSuccess({ statusObject: { status: 200 } })) // true

// Ưu tiên cờ lỗi hơn mã HTTP 200
console.log(isApiSuccess({ success: false, statusObject: { status: 200 } })) // false
console.log(isApiSuccess({ status: 'error', statusObject: { status: 200 } })) // false

// Giá trị không hợp lệ / rỗng
console.log(isApiSuccess(null)) // false
console.log(isApiSuccess(undefined)) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};