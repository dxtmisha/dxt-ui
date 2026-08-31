import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-8NMpF0hx.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/vi/figma-code/Functions/makeFigmaTexts - Theo dõi các phần tử văn bản`}),`
`,(0,l.jsx)(t.h1,{id:`makefigmatexts`,children:(0,l.jsx)(t.code,{children:`makeFigmaTexts`})}),`
`,(0,l.jsxs)(t.p,{children:[`Một tiện ích để tự động hóa quá trình theo dõi các thay đổi lựa chọn trong Figma. Nó thiết lập một trình lắng nghe sự kiện `,(0,l.jsx)(t.code,{children:`selectionchange`}),` toàn cục, mỗi khi được kích hoạt sẽ thu thập dữ liệu về các phần tử văn bản và ảnh chụp màn hình của trang hiện tại, sau đó gửi thông tin này đến giao diện người dùng (UI) của plugin.`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Tham số:`}),`
Không có.`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { makeFigmaTexts } from '@dxtmisha/figma-code'

// Khởi tạo trong phần chính của plugin (thường là code.ts)
makeFigmaTexts()

// Giờ đây, mỗi khi người dùng thay đổi lựa chọn, 
// UI sẽ nhận được dữ liệu văn bản và ảnh chụp màn hình cập nhật.
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};