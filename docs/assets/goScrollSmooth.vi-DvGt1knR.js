import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/goScrollSmooth - Cuộn mượt đến phần tử`}),`
`,(0,c.jsx)(t.h1,{id:`goscrollsmooth`,children:(0,c.jsx)(t.code,{children:`goScrollSmooth`})}),`
`,(0,c.jsx)(t.p,{children:`Cung cấp trải nghiệm cuộn mượt mà (smooth scrolling) đưa vùng nhìn của cửa sổ trình duyệt hoặc vùng chứa (container) đến vị trí của một phần tử được chỉ định.`}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm trước tiên sẽ xác minh khả năng hỗ trợ phương thức `,(0,c.jsx)(t.code,{children:`scrollIntoView`}),` mặc định của phần tử muốn nhắm tới. Nếu được hỗ trợ và không có tham số khoảng bù định vị `,(0,c.jsx)(t.code,{children:`shift`}),`, hàm sử dụng phương thức native đó. Mặt khác, khi yêu cầu `,(0,c.jsx)(t.code,{children:`shift`}),` (ví dụ, để trừ đi chiều cao của một thanh menu cố định (fixed header) bị đè lên element), hàm sẽ tự động đo lường độ dời bằng `,(0,c.jsx)(t.code,{children:`getBoundingClientRect`}),` và điều khiển thanh cuộn bằng `,(0,c.jsx)(t.code,{children:`window.scrollTo`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: E`}),` — Phần tử (`,(0,c.jsx)(t.code,{children:`HTMLElement`}),`) cần cuộn tới.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: ScrollIntoViewOptions`}),` — (Tùy chọn) Các tham số định cấu hình chuyển tiếp cho `,(0,c.jsx)(t.code,{children:`scrollIntoView`}),` (ví dụ: `,(0,c.jsx)(t.code,{children:`behavior`}),`, `,(0,c.jsx)(t.code,{children:`block`}),`, `,(0,c.jsx)(t.code,{children:`inline`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`shift: number`}),` — (Tùy chọn) Giá trị điểm bù lề trên (theo pixel) giúp phần tử tránh bị che khuất bởi các thanh điều hướng được cố định. Mặc định là `,(0,c.jsx)(t.code,{children:`0`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
Hàm này không có giá trị trả về (`,(0,c.jsx)(t.code,{children:`void`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { goScrollSmooth } from '@dxtmisha/functional-basic'

const section = document.getElementById('contact-us')

// Tiến hành cuộn mượt mặc định tới phần tử
goScrollSmooth(section)

// Cuộn có bổ sung khoảng dãn vùng bù đắp 60px (trừ đi thanh header fixed ở trên)
goScrollSmooth(section, { behavior: 'smooth' }, 60)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};