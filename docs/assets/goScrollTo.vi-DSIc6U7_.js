import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/goScrollTo - Cuộn vùng chứa đến phần tử`}),`
`,(0,c.jsx)(n.h1,{id:`goscrollto`,children:(0,c.jsx)(n.code,{children:`goScrollTo`})}),`
`,(0,c.jsxs)(n.p,{children:[`Thực thi hiệu ứng cuộn bên trong một phần tử vùng chứa (container) để đảm bảo rằng mục tiêu bên trong rơi vào vùng dễ nhìn. Hàm thực hiện trích xuất `,(0,c.jsx)(n.code,{children:`getBoundingClientRect`}),` từ cả hai thành phần và kích hoạt phương thức `,(0,c.jsx)(n.code,{children:`scrollBy`}),` để di chuyển khoảng bù trục toạ độ cho phù hợp.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Khác với `,(0,c.jsx)(n.code,{children:`goScrollSmooth`}),` (cuộn cửa sổ màn hình hoặc uỷ thác cho `,(0,c.jsx)(n.code,{children:`scrollIntoView`}),`), `,(0,c.jsx)(n.code,{children:`goScrollTo`}),` chủ động canh chỉnh lề thao tác trong không gian đo lường tĩnh của hộp chứa rõ ràng được cấp vào.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element: HTMLElement | undefined`}),` — Phần tử vùng chứa đóng cuộn với con lăn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`elementTo: HTMLElement | undefined`}),` — Mục tiêu nằm phía trong (đích nhắm) cần quan sát được.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`behavior: ScrollBehavior`}),` — (Tùy chọn) Chỉnh sửa loại chuỗi ảnh chuyển động, mặc định cho hiệu ứng mượt `,(0,c.jsx)(n.code,{children:`'smooth'`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
Tuỳ biến việc thay đổi thanh cuộn ngay trong trang hiện tại với giá trị đầu ra rỗng (`,(0,c.jsx)(n.code,{children:`void`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { goScrollTo } from '@dxtmisha/functional-basic'

const list = document.getElementById('item-list')
const targetItem = document.getElementById('item-42')

// Cuộn êm ái qua bảng danh sách cho đến item 42
goScrollTo(list, targetItem)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};