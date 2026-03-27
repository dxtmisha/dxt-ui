import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/goScrollSmooth - Cuộn mượt đến phần tử`}),`
`,(0,c.jsx)(n.h1,{id:`goscrollsmooth`,children:(0,c.jsx)(n.code,{children:`goScrollSmooth`})}),`
`,(0,c.jsx)(n.p,{children:`Cung cấp trải nghiệm cuộn mượt mà (smooth scrolling) đưa vùng nhìn của cửa sổ trình duyệt hoặc vùng chứa (container) đến vị trí của một phần tử được chỉ định.`}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm trước tiên sẽ xác minh khả năng hỗ trợ phương thức `,(0,c.jsx)(n.code,{children:`scrollIntoView`}),` mặc định của phần tử muốn nhắm tới. Nếu được hỗ trợ và không có tham số khoảng bù định vị `,(0,c.jsx)(n.code,{children:`shift`}),`, hàm sử dụng phương thức native đó. Mặt khác, khi yêu cầu `,(0,c.jsx)(n.code,{children:`shift`}),` (ví dụ, để trừ đi chiều cao của một thanh menu cố định (fixed header) bị đè lên element), hàm sẽ tự động đo lường độ dời bằng `,(0,c.jsx)(n.code,{children:`getBoundingClientRect`}),` và điều khiển thanh cuộn bằng `,(0,c.jsx)(n.code,{children:`window.scrollTo`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element: E`}),` — Phần tử (`,(0,c.jsx)(n.code,{children:`HTMLElement`}),`) cần cuộn tới.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: ScrollIntoViewOptions`}),` — (Tùy chọn) Các tham số định cấu hình chuyển tiếp cho `,(0,c.jsx)(n.code,{children:`scrollIntoView`}),` (ví dụ: `,(0,c.jsx)(n.code,{children:`behavior`}),`, `,(0,c.jsx)(n.code,{children:`block`}),`, `,(0,c.jsx)(n.code,{children:`inline`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`shift: number`}),` — (Tùy chọn) Giá trị điểm bù lề trên (theo pixel) giúp phần tử tránh bị che khuất bởi các thanh điều hướng được cố định. Mặc định là `,(0,c.jsx)(n.code,{children:`0`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
Hàm này không có giá trị trả về (`,(0,c.jsx)(n.code,{children:`void`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { goScrollSmooth } from '@dxtmisha/functional-basic'

const section = document.getElementById('contact-us')

// Tiến hành cuộn mượt mặc định tới phần tử
goScrollSmooth(section)

// Cuộn có bổ sung khoảng dãn vùng bù đắp 60px (trừ đi thanh header fixed ở trên)
goScrollSmooth(section, { behavior: 'smooth' }, 60)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};