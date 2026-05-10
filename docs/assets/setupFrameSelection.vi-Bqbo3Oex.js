import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{f as r,s as i}from"./blocks-PB3deeuo.js";import{t as a}from"./mdx-react-shim-7_6RcfEr.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/figma-code/Functions/setupFrameSelection - Thiết lập vùng chọn hai chiều`}),`
`,(0,c.jsx)(n.h1,{id:`setupframeselection`,children:(0,c.jsx)(n.code,{children:`setupFrameSelection`})}),`
`,(0,c.jsx)(n.p,{children:`Thiết lập quản lý vùng chọn frame hai chiều giữa backend Figma và UI của plugin. Hàm duy nhất này xử lý cả việc tự động theo dõi những gì người dùng hiện đang xem và chọn các phần tử theo chương trình từ giao diện.`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Theo dõi vùng chọn`}),` — Tự động gọi `,(0,c.jsx)(n.code,{children:`makeFigmaFrameSelection()`}),`, bắt đầu quan sát các thay đổi vùng chọn của người dùng trong Figma và gửi dữ liệu chi tiết (tên, ID, ảnh chụp màn hình) đến UI.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Điều khiển từ xa`}),` — Đăng ký trình lắng nghe cho tin nhắn `,(0,c.jsx)(n.code,{children:`UI_FIGMA_FRAME_SET_SELECTION`}),`. Khi UI gửi tin nhắn này kèm theo ID, backend sẽ tìm đối tượng, chọn nó và thu phóng viewport để tập trung vào nó.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { setupFrameSelection } from '@dxtmisha/figma-code'

// Gọi hàm này trong quá trình khởi tạo backend của plugin
setupFrameSelection()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};