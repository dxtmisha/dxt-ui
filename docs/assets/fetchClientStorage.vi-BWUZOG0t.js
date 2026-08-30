import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-LSqYfV8h.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/vi/figma/Functions/fetchClientStorage - Lấy dữ liệu từ bộ nhớ client`}),`
`,(0,l.jsx)(t.h1,{id:`fetchclientstorage`,children:(0,l.jsx)(t.code,{children:`fetchClientStorage`})}),`
`,(0,l.jsxs)(t.p,{children:[`Một tiện ích để lấy dữ liệu từ bộ nhớ client (`,(0,l.jsx)(t.code,{children:`clientStorage`}),`) của Figma. Nó tạo điều kiện giao tiếp giữa giao diện người dùng (UI) và phần plugin để truy xuất các giá trị đã lưu trữ.`]}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`name: string`}),` — Tên khóa trong bộ nhớ client.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`callback: (value: T) => void`}),` — Hàm được thực thi sau khi dữ liệu được truy xuất.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`defaultValue?: T`}),` — (Tùy chọn) Giá trị mặc định được trả về nếu khóa bộ nhớ không tồn tại.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`isOnce: boolean = true`}),` — Nếu `,(0,l.jsx)(t.code,{children:`true`}),`, hàm callback sẽ chỉ được thực thi một lần.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
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
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};