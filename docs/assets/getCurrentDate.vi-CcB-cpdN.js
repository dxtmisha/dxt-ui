import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/getCurrentDate - Lấy ngày hiện tại`}),`
`,(0,c.jsx)(n.h1,{id:`getcurrentdate`,children:(0,c.jsx)(n.code,{children:`getCurrentDate`})}),`
`,(0,c.jsxs)(n.p,{children:[`Trả về ngày hiện tại theo định dạng được chỉ định. Hàm này là một wrapper bao quanh lớp `,(0,c.jsx)(n.code,{children:`Datetime`}),` và cho phép bạn nhanh chóng lấy chuỗi thời gian hiện tại đã được định dạng.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`format: GeoDate`}),` — loại định dạng ngày đầu ra (mặc định là `,(0,c.jsx)(n.code,{children:`'datetime'`}),`). Hỗ trợ các giá trị: `,(0,c.jsx)(n.code,{children:`'date'`}),`, `,(0,c.jsx)(n.code,{children:`'time'`}),`, `,(0,c.jsx)(n.code,{children:`'datetime'`}),`, `,(0,c.jsx)(n.code,{children:`'full'`}),` và các giá trị khác.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
Ngày hiện tại dưới dạng chuỗi.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getCurrentDate } from '@dxtmisha/functional-basic'

// Định dạng chuẩn (datetime)
const now = getCurrentDate()
// Kết quả: "2024-03-15 14:30"

// Chỉ ngày
const date = getCurrentDate('date')
// Kết quả: "2024-03-15"
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};