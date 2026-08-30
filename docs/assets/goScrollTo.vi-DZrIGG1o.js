import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/goScrollTo - Cuộn vùng chứa đến phần tử`}),`
`,(0,c.jsx)(t.h1,{id:`goscrollto`,children:(0,c.jsx)(t.code,{children:`goScrollTo`})}),`
`,(0,c.jsxs)(t.p,{children:[`Thực thi hiệu ứng cuộn bên trong một phần tử vùng chứa (container) để đảm bảo rằng mục tiêu bên trong rơi vào vùng dễ nhìn. Hàm thực hiện trích xuất `,(0,c.jsx)(t.code,{children:`getBoundingClientRect`}),` từ cả hai thành phần và kích hoạt phương thức `,(0,c.jsx)(t.code,{children:`scrollBy`}),` để di chuyển khoảng bù trục toạ độ cho phù hợp.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Khác với `,(0,c.jsx)(t.code,{children:`goScrollSmooth`}),` (cuộn cửa sổ màn hình hoặc uỷ thác cho `,(0,c.jsx)(t.code,{children:`scrollIntoView`}),`), `,(0,c.jsx)(t.code,{children:`goScrollTo`}),` chủ động canh chỉnh lề thao tác trong không gian đo lường tĩnh của hộp chứa rõ ràng được cấp vào.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: HTMLElement | undefined`}),` — Phần tử vùng chứa đóng cuộn với con lăn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`elementTo: HTMLElement | undefined`}),` — Mục tiêu nằm phía trong (đích nhắm) cần quan sát được.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`behavior: ScrollBehavior`}),` — (Tùy chọn) Chỉnh sửa loại chuỗi ảnh chuyển động, mặc định cho hiệu ứng mượt `,(0,c.jsx)(t.code,{children:`'smooth'`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
Tuỳ biến việc thay đổi thanh cuộn ngay trong trang hiện tại với giá trị đầu ra rỗng (`,(0,c.jsx)(t.code,{children:`void`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { goScrollTo } from '@dxtmisha/functional-basic'

const list = document.getElementById('item-list')
const targetItem = document.getElementById('item-42')

// Cuộn êm ái qua bảng danh sách cho đến item 42
goScrollTo(list, targetItem)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};