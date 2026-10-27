import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/isPrototypeKey - Kiểm tra khóa gây ô nhiễm prototype`}),`
`,(0,c.jsx)(t.h1,{id:`isprototypekey`,children:(0,c.jsx)(t.code,{children:`isPrototypeKey`})}),`
`,(0,c.jsxs)(t.p,{children:[`Kiểm tra xem khóa thuộc tính có thuộc các khóa gây nguy hiểm `,(0,c.jsx)(t.strong,{children:`Prototype Pollution`}),` hay không (`,(0,c.jsx)(t.code,{children:`__proto__`}),`, `,(0,c.jsx)(t.code,{children:`constructor`}),`, `,(0,c.jsx)(t.code,{children:`prototype`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:`Được sử dụng để bảo vệ các đối tượng JavaScript khỏi việc thay đổi chuỗi prototype khi gộp đệ quy, gán động thuộc tính phần tử DOM hoặc phân tích cú pháp dữ liệu bên ngoài.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: unknown`}),` — khóa thuộc tính cần kiểm tra.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` nếu khóa là `,(0,c.jsx)(t.code,{children:`'__proto__'`}),`, `,(0,c.jsx)(t.code,{children:`'constructor'`}),`, hoặc `,(0,c.jsx)(t.code,{children:`'prototype'`}),`, ngược lại trả về `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isPrototypeKey } from '@dxtmisha/functional-basic'

isPrototypeKey('__proto__') // true
isPrototypeKey('constructor') // true
isPrototypeKey('prototype') // true

isPrototypeKey('id') // false
isPrototypeKey('toString') // false
isPrototypeKey(123) // false

// Mẫu thiết lập thuộc tính an toàn:
function safeSet(target: Record<string, unknown>, key: string, value: unknown) {
  if (isPrototypeKey(key)) {
    return
  }

  target[key] = value
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};