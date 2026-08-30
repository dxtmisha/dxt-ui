import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/figma-code/Functions/makeFigmaFrameSelection - Theo dõi vùng chọn`}),`
`,(0,c.jsx)(t.h1,{id:`makefigmaframeselection`,children:(0,c.jsx)(t.code,{children:`makeFigmaFrameSelection`})}),`
`,(0,c.jsxs)(t.p,{children:[`Kích hoạt một trình lắng nghe toàn cục cho sự kiện `,(0,c.jsx)(t.code,{children:`selectionchange`}),` trong Figma. Được sử dụng để đồng bộ hóa trạng thái của các phần tử được chọn giữa sandbox Figma (Backend) và giao diện của plugin (Frontend).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm này được thiết kế để sử dụng trong mã code (Backend) của plugin Figma. Nó tự động đăng ký các thay đổi về vùng chọn của người dùng. Mỗi khi vùng chọn thay đổi, dữ liệu về các phần tử được chọn (bao gồm tên, ID và ảnh chụp màn hình JPG) sẽ được thu thập và gửi đến Giao diện Người dùng (UI) thông qua `,(0,c.jsx)(t.code,{children:`FigmaPluginMessenger`}),`. Điều này giúp loại bỏ việc phải thiết lập các trình lắng nghe sự kiện thủ công và xử lý xuất hình ảnh cho từng đối tượng được chọn.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { makeFigmaFrameSelection } from '@dxtmisha/figma-code'

// Khởi tạo trong mã plugin (Backend)
makeFigmaFrameSelection()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};