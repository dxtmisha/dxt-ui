import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/forEach - Lặp qua đối tượng hoặc mảng`}),`
`,(0,c.jsx)(n.h1,{id:`foreach`,children:(0,c.jsx)(n.code,{children:`forEach`})}),`
`,(0,c.jsx)(n.p,{children:`Hàm thực hiện chức năng được chỉ định một lần cho mỗi phần tử trong đối tượng. Và trả về một mảng với kết quả thực thi hàm.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: D`}),` — đối tượng để lặp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: (item: T, key: K, dataMain: typeof data) => R`}),` — một hàm để thực thi cho mỗi phần tử trong mảng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`saveUndefined?: boolean`}),` — nếu `,(0,c.jsx)(n.code,{children:`true`}),`, hàm sẽ trả về một mảng bao gồm cả các giá trị `,(0,c.jsx)(n.code,{children:`undefined`}),` (mặc định sẽ bị lọc bỏ).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`R[]`}),` — một mảng với kết quả thực thi hàm.`]}),`
`,(0,c.jsx)(n.h2,{id:`cơ-chế-hoạt-động`,children:`Cơ chế hoạt động`}),`
`,(0,c.jsx)(n.p,{children:`Hàm này là một công cụ vạn năng để lặp qua các cấu trúc dữ liệu khác nhau và thu thập kết quả vào một mảng.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tính năng:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ kiểu dữ liệu`}),` — hoạt động với `,(0,c.jsx)(n.code,{children:`Array`}),`, `,(0,c.jsx)(n.code,{children:`Map`}),`, `,(0,c.jsx)(n.code,{children:`Set`}),` và các đối tượng thông thường (`,(0,c.jsx)(n.code,{children:`Object`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thu thập kết quả`}),` — khác với `,(0,c.jsx)(n.code,{children:`forEach`}),` tiêu chuẩn, hàm này thu thập các giá trị được trả về từ `,(0,c.jsx)(n.code,{children:`callback`}),` vào một mảng mới.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lọc undefined`}),` — theo mặc định, tất cả các giá trị `,(0,c.jsx)(n.code,{children:`undefined`}),` (ví dụ: nếu callback không trả về gì cho một phần tử) sẽ bị lọc bỏ khỏi mảng kết quả.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tham số saveUndefined`}),` — nếu truyền `,(0,c.jsx)(n.code,{children:`true`}),` làm đối số thứ ba, mảng sẽ giữ lại tất cả các kết quả, bao gồm cả `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { forEach } from '@dxtmisha/functional-basic'

const data = [1, 2, 3]

// Giá trị undefined bị lọc bỏ theo mặc định
forEach(data, (item) => item % 2 === 0 ? item : undefined) // [2]

// Với saveUndefined: true
forEach(data, (item) => item % 2 === 0 ? item : undefined, true) // [undefined, 2, undefined]
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};