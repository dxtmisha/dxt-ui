import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{c as r,f as i,s as a}from"./blocks-CQEzKDSL.js";import{t as o}from"./mdx-react-shim-CpDaEZL9.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/vi/figma-code/Functions/makeFigmaTexts - Theo dõi các phần tử văn bản`}),`
`,(0,l.jsx)(n.h1,{id:`makefigmatexts`,children:(0,l.jsx)(n.code,{children:`makeFigmaTexts`})}),`
`,(0,l.jsxs)(n.p,{children:[`Một tiện ích để tự động hóa quá trình theo dõi các thay đổi lựa chọn trong Figma. Nó thiết lập một trình lắng nghe sự kiện `,(0,l.jsx)(n.code,{children:`selectionchange`}),` toàn cục, mỗi khi được kích hoạt sẽ thu thập dữ liệu về các phần tử văn bản và ảnh chụp màn hình của trang hiện tại, sau đó gửi thông tin này đến giao diện người dùng (UI) của plugin.`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Tham số:`}),`
Không có.`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { makeFigmaTexts } from '@dxtmisha/figma-code'

// Khởi tạo trong phần chính của plugin (thường là code.ts)
makeFigmaTexts()

// Giờ đây, mỗi khi người dùng thay đổi lựa chọn, 
// UI sẽ nhận được dữ liệu văn bản và ảnh chụp màn hình cập nhật.
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};