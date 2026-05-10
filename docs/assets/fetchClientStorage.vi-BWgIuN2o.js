import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{c as r,f as i,s as a}from"./blocks-PB3deeuo.js";import{t as o}from"./mdx-react-shim-7_6RcfEr.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/vi/figma/Functions/fetchClientStorage - Lấy dữ liệu từ bộ nhớ client`}),`
`,(0,l.jsx)(n.h1,{id:`fetchclientstorage`,children:(0,l.jsx)(n.code,{children:`fetchClientStorage`})}),`
`,(0,l.jsxs)(n.p,{children:[`Một tiện ích để lấy dữ liệu từ bộ nhớ client (`,(0,l.jsx)(n.code,{children:`clientStorage`}),`) của Figma. Nó tạo điều kiện giao tiếp giữa giao diện người dùng (UI) và phần plugin để truy xuất các giá trị đã lưu trữ.`]}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`name: string`}),` — Tên khóa trong bộ nhớ client.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`callback: (value: T) => void`}),` — Hàm được thực thi sau khi dữ liệu được truy xuất.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`defaultValue?: T`}),` — (Tùy chọn) Giá trị mặc định được trả về nếu khóa bộ nhớ không tồn tại.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`isOnce: boolean = true`}),` — Nếu `,(0,l.jsx)(n.code,{children:`true`}),`, hàm callback sẽ chỉ được thực thi một lần.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { fetchClientStorage } from '@dxtmisha/figma'

// 1. Cách sử dụng cơ bản với giá trị chuỗi
fetchClientStorage<string>('user-theme', (theme) => {
console.log('Giao diện hiện tại:', theme)
}, 'light')

// 2. Lấy một đối tượng (object)
interface UserSettings {
notifications: boolean
zoom: number
}

fetchClientStorage<UserSettings>('settings', (settings) => {
console.log('Cài đặt người dùng:', settings)
}, { notifications: true, zoom: 100 })

// 3. Đăng ký nhận cập nhật liên tục (isOnce = false)
fetchClientStorage<number>('counter', (count) => {
console.log('Bộ đếm đã cập nhật:', count)
}, 0, false)
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};