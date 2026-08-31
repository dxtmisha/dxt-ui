import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-8NMpF0hx.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/vi/figma/Functions/fetchStorage - Lấy dữ liệu từ bộ nhớ chung`}),`
`,(0,l.jsx)(t.h1,{id:`fetchstorage`,children:(0,l.jsx)(t.code,{children:`fetchStorage`})}),`
`,(0,l.jsx)(t.p,{children:`Một tiện ích để lấy dữ liệu từ bộ nhớ chung của Figma. Khác với bộ nhớ client, dữ liệu này có thể được chia sẻ và liên kết với các định danh cụ thể (ví dụ: ID của node).`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`name: string`}),` — Tên của bộ nhớ.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`callback: (value: T) => void`}),` — Hàm được thực thi sau khi dữ liệu được truy xuất.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`id?: string`}),` — (Tùy chọn) Định danh để phân biệt dữ liệu trong cùng một tên bộ nhớ.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`defaultValue?: T`}),` — (Tùy chọn) Giá trị mặc định được trả về nếu khóa bộ nhớ không tồn tại.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`isOnce: boolean = true`}),` — Nếu `,(0,l.jsx)(t.code,{children:`true`}),`, hàm callback sẽ chỉ được thực thi một lần.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
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
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};