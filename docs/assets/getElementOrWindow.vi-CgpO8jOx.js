import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getElementOrWindow - Truy xuất Element hoặc Window`}),`
`,(0,c.jsx)(t.h1,{id:`getelementorwindow`,children:(0,c.jsx)(t.code,{children:`getElementOrWindow`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tiện ích này tương tự như `,(0,c.jsx)(t.code,{children:`getElement`}),`, nhưng có một điểm khác biệt đáng kể: nếu đối tượng toàn cục `,(0,c.jsx)(t.code,{children:`window`}),` được truyền vào dưới dạng một tham số, hàm sẽ trả về chính xác đối tượng đó. (Trái ngược với `,(0,c.jsx)(t.code,{children:`getElement`}),`, khi `,(0,c.jsx)(t.code,{children:`getElement`}),` sẽ trả về `,(0,c.jsx)(t.code,{children:`document.body`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Nếu truyền vào một chuỗi hoặc một phần tử khác, hàm sẽ hoạt động giống hệt như tiện ích `,(0,c.jsx)(t.code,{children:`getElement`}),` tiêu chuẩn.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element?: ElementOrString<E>`}),` — Một bộ chọn để tìm kiếm, một nút `,(0,c.jsx)(t.code,{children:`Element`}),`, hoặc đối tượng `,(0,c.jsx)(t.code,{children:`Window`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`E | undefined`}),` — Phần tử được tìm thấy, phần tử được truyền vào ban đầu, bản thân đối tượng `,(0,c.jsx)(t.code,{children:`window`}),` (nếu đối tượng này được truyền vào), hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),` nếu không có phần tử nào khớp.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getElementOrWindow } from '@dxtmisha/functional-basic'

// Việc truyền vào Window sẽ trả về Window (ngược lại, getElement sẽ trả về document.body)
const win = getElementOrWindow(window)

// Tìm kiếm bình thường bằng bộ chọn
const btn = getElementOrWindow('.submit-btn')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};