import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/figma-code/Functions/makeFigmaFrameSelection - Theo dõi vùng chọn`}),`
`,(0,c.jsx)(n.h1,{id:`makefigmaframeselection`,children:(0,c.jsx)(n.code,{children:`makeFigmaFrameSelection`})}),`
`,(0,c.jsxs)(n.p,{children:[`Kích hoạt một trình lắng nghe toàn cục cho sự kiện `,(0,c.jsx)(n.code,{children:`selectionchange`}),` trong Figma. Được sử dụng để đồng bộ hóa trạng thái của các phần tử được chọn giữa sandbox Figma (Backend) và giao diện của plugin (Frontend).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm này được thiết kế để sử dụng trong mã code (Backend) của plugin Figma. Nó tự động đăng ký các thay đổi về vùng chọn của người dùng. Mỗi khi vùng chọn thay đổi, dữ liệu về các phần tử được chọn (bao gồm tên, ID và ảnh chụp màn hình JPG) sẽ được thu thập và gửi đến Giao diện Người dùng (UI) thông qua `,(0,c.jsx)(n.code,{children:`FigmaPluginMessenger`}),`. Điều này giúp loại bỏ việc phải thiết lập các trình lắng nghe sự kiện thủ công và xử lý xuất hình ảnh cho từng đối tượng được chọn.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { makeFigmaFrameSelection } from '@dxtmisha/figma-code'

// Khởi tạo trong mã plugin (Backend)
makeFigmaFrameSelection()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};