import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/goScroll - Thay đổi cuộn nhanh`}),`
`,(0,c.jsx)(t.h1,{id:`goscroll`,children:(0,c.jsx)(t.code,{children:`goScroll`})}),`
`,(0,c.jsx)(t.p,{children:`Nhanh chóng cuộn vùng chứa đến phần tử mục tiêu nếu phần tử nằm ngoài vùng nhìn thấy (scroll-into-view), hoặc căn giữa phần tử mục tiêu so với một phần tử tham chiếu. Thao tác cuộn được cô lập trong phạm vi vùng chứa và không ảnh hưởng đến cuộn trang của cửa sổ bên ngoài.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`target: string | HTMLElement`}),` — Bộ chọn CSS để tìm phần tử vùng chứa tổ tiên gần nhất qua `,(0,c.jsx)(t.code,{children:`closest`}),` hoặc trực tiếp phần tử vùng chứa có thanh cuộn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`elementTo?: HTMLElement | null`}),` — Phần tử mục tiêu cần cuộn đến để hiển thị.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`elementCenter?: HTMLElement | null`}),` — (Tùy chọn) Phần tử tham chiếu để căn giữa phần tử mục tiêu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`indent?: number`}),` — (Tùy chọn) Khoảng đệm bổ sung tính bằng pixel từ đường biên. Mặc định là `,(0,c.jsx)(t.code,{children:`0`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`void`}),` — Thực hiện hành động cuộn và không trả về giá trị.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { goScroll } from '@dxtmisha/functional-basic'

const container = document.querySelector<HTMLElement>('.container')
const target = document.querySelector<HTMLElement>('.target')

// Cách 1: Tìm vùng chứa qua bộ chọn CSS bằng closest
goScroll('.container', target)

// Cách 2: Truyền trực tiếp phần tử vùng chứa cùng với khoảng đệm
if (container && target) {
  goScroll(container, target, null, 16)
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};