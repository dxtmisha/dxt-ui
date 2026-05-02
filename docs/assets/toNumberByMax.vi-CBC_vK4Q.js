import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/toNumberByMax - Chuyển đổi sang số với giới hạn tối đa`}),`
`,(0,c.jsx)(n.h1,{id:`tonumberbymax`,children:(0,c.jsx)(n.code,{children:`toNumberByMax`})}),`
`,(0,c.jsxs)(n.p,{children:[`Chuyển đổi giá trị đầu vào thành một số và nếu giá trị đó vượt quá mức tối đa được chỉ định, hàm sẽ trả về một chuỗi có ký hiệu `,(0,c.jsx)(n.code,{children:`+`}),` ở cuối. Hàm cũng hỗ trợ thực hiện định dạng cục bộ cho kết quả.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string | number`}),` — Giá trị đầu vào.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`max?: string | number`}),` — Giá trị tối đa cho phép.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`formatting?: boolean`}),` — Cờ bật định dạng thông qua `,(0,c.jsx)(n.code,{children:`GeoIntl`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`language?: string`}),` — Mã ngôn ngữ để định dạng (ví dụ: `,(0,c.jsx)(n.code,{children:`'vi-VN'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`string | number`}),` — Một chuỗi đã được định dạng (ví dụ: `,(0,c.jsx)(n.code,{children:`'99+'`}),`) hoặc một số.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { toNumberByMax } from '@dxtmisha/functional-basic'

console.log(toNumberByMax(150, 99)) // '99+'
console.log(toNumberByMax(50, 99)) // 50
console.log(toNumberByMax(1000, 500, true, 'vi-VN')) // '500+'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};