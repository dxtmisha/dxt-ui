import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/figma-code/Functions/setupFrameSelection - Thiết lập vùng chọn hai chiều`}),`
`,(0,c.jsx)(t.h1,{id:`setupframeselection`,children:(0,c.jsx)(t.code,{children:`setupFrameSelection`})}),`
`,(0,c.jsx)(t.p,{children:`Thiết lập quản lý vùng chọn frame hai chiều giữa backend Figma và UI của plugin. Hàm duy nhất này xử lý cả việc tự động theo dõi những gì người dùng hiện đang xem và chọn các phần tử theo chương trình từ giao diện.`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Theo dõi vùng chọn`}),` — Tự động gọi `,(0,c.jsx)(t.code,{children:`makeFigmaFrameSelection()`}),`, bắt đầu quan sát các thay đổi vùng chọn của người dùng trong Figma và gửi dữ liệu chi tiết (tên, ID, ảnh chụp màn hình) đến UI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Điều khiển từ xa`}),` — Đăng ký trình lắng nghe cho tin nhắn `,(0,c.jsx)(t.code,{children:`UI_FIGMA_FRAME_SET_SELECTION`}),`. Khi UI gửi tin nhắn này kèm theo ID, backend sẽ tìm đối tượng, chọn nó và thu phóng viewport để tập trung vào nó.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { setupFrameSelection } from '@dxtmisha/figma-code'

// Gọi hàm này trong quá trình khởi tạo backend của plugin
setupFrameSelection()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};