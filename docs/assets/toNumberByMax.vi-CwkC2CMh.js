import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/toNumberByMax - Chuyển đổi sang số với giới hạn tối đa`}),`
`,(0,c.jsx)(t.h1,{id:`tonumberbymax`,children:(0,c.jsx)(t.code,{children:`toNumberByMax`})}),`
`,(0,c.jsxs)(t.p,{children:[`Chuyển đổi giá trị đầu vào thành một số và nếu giá trị đó vượt quá mức tối đa được chỉ định, hàm sẽ trả về một chuỗi có ký hiệu `,(0,c.jsx)(t.code,{children:`+`}),` ở cuối. Hàm cũng hỗ trợ thực hiện định dạng cục bộ cho kết quả.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: string | number`}),` — Giá trị đầu vào.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`max?: string | number`}),` — Giá trị tối đa cho phép.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`formatting?: boolean`}),` — Cờ bật định dạng thông qua `,(0,c.jsx)(t.code,{children:`GeoIntl`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`language?: string`}),` — Mã ngôn ngữ để định dạng (ví dụ: `,(0,c.jsx)(t.code,{children:`'vi-VN'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string | number`}),` — Một chuỗi đã được định dạng (ví dụ: `,(0,c.jsx)(t.code,{children:`'99+'`}),`) hoặc một số.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { toNumberByMax } from '@dxtmisha/functional-basic'

console.log(toNumberByMax(150, 99)) // '99+'
console.log(toNumberByMax(50, 99)) // 50
console.log(toNumberByMax(1000, 500, true, 'vi-VN')) // '500+'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};