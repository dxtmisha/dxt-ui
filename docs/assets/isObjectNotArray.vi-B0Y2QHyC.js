import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/isObjectNotArray - Phân định đối tượng loại trừ mảng`}),`
`,(0,c.jsx)(t.h1,{id:`isobjectnotarray`,children:(0,c.jsx)(t.code,{children:`isObjectNotArray`})}),`
`,(0,c.jsxs)(t.p,{children:[`Kiểm tra xem giá trị được cung cấp có phải là một đối tượng (Record) và `,(0,c.jsx)(t.strong,{children:`không phải là mảng`}),` hay không.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Vì tiện ích cơ bản `,(0,c.jsx)(t.code,{children:`isObject`}),` trả về `,(0,c.jsx)(t.code,{children:`true`}),` cho cả mảng (theo đặc tả `,(0,c.jsx)(t.code,{children:`typeof`}),` của JavaScript), `,(0,c.jsx)(t.code,{children:`isObjectNotArray`}),` kết hợp `,(0,c.jsx)(t.code,{children:`isObject(value)`}),` với `,(0,c.jsx)(t.code,{children:`!isArray(value)`}),` để loại trừ hoàn toàn các mảng.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — Giá trị cần kiểm tra.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`value is Exclude<Extract<T, ObjectItem>, unknown[] | undefined | null>`}),` (`,(0,c.jsx)(t.code,{children:`boolean`}),`) — Chỉ trả về `,(0,c.jsx)(t.code,{children:`true`}),` đối với các đối tượng khác `,(0,c.jsx)(t.code,{children:`null`}),` và không phải mảng (như `,(0,c.jsx)(t.code,{children:`{ key: 'value' }`}),`), và trả về `,(0,c.jsx)(t.code,{children:`false`}),` đối với mảng `,(0,c.jsx)(t.code,{children:`[]`}),`, `,(0,c.jsx)(t.code,{children:`null`}),`, `,(0,c.jsx)(t.code,{children:`undefined`}),`, hàm và các kiểu nguyên thủy. Đóng vai trò là bộ bảo vệ kiểu (type guard) trong TypeScript, thu hẹp `,(0,c.jsx)(t.code,{children:`T`}),` thành `,(0,c.jsx)(t.code,{children:`ObjectItem`}),` đồng thời loại trừ mảng, `,(0,c.jsx)(t.code,{children:`undefined`}),` và `,(0,c.jsx)(t.code,{children:`null`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isObjectNotArray } from '@dxtmisha/functional-basic'

// Đối tượng hợp lệ
console.log(isObjectNotArray({ id: 1, name: 'Test' })) // true

// Các giá trị bị loại trừ
console.log(isObjectNotArray([1, 2, 3])) // false (mảng bị loại trừ)
console.log(isObjectNotArray(null)) // false
console.log(isObjectNotArray('string')) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};