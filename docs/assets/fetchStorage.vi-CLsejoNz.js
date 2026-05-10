import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{c as r,f as i,s as a}from"./blocks-PB3deeuo.js";import{t as o}from"./mdx-react-shim-7_6RcfEr.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/vi/figma/Functions/fetchStorage - Lấy dữ liệu từ bộ nhớ chung`}),`
`,(0,l.jsx)(n.h1,{id:`fetchstorage`,children:(0,l.jsx)(n.code,{children:`fetchStorage`})}),`
`,(0,l.jsx)(n.p,{children:`Một tiện ích để lấy dữ liệu từ bộ nhớ chung của Figma. Khác với bộ nhớ client, dữ liệu này có thể được chia sẻ và liên kết với các định danh cụ thể (ví dụ: ID của node).`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`name: string`}),` — Tên của bộ nhớ.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`callback: (value: T) => void`}),` — Hàm được thực thi sau khi dữ liệu được truy xuất.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`id?: string`}),` — (Tùy chọn) Định danh để phân biệt dữ liệu trong cùng một tên bộ nhớ.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`defaultValue?: T`}),` — (Tùy chọn) Giá trị mặc định được trả về nếu khóa bộ nhớ không tồn tại.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`isOnce: boolean = true`}),` — Nếu `,(0,l.jsx)(n.code,{children:`true`}),`, hàm callback sẽ chỉ được thực thi một lần.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { fetchStorage } from '@dxtmisha/figma'

// 1. Cách sử dụng cơ bản
fetchStorage<string>('project-status', (status) => {
console.log('Trạng thái:', status)
}, undefined, 'active')

// 2. Lấy dữ liệu cho một node cụ thể
const nodeId = '12:34'
fetchStorage<object>('node-metadata', (data) => {
console.log('Metadata của node:', data)
}, nodeId)

// 3. Đăng ký nhận cập nhật liên tục
fetchStorage<number>('global-counter', (count) => {
console.log('Cập nhật bộ đếm:', count)
}, undefined, 0, false)
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};