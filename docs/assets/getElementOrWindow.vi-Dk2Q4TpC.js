import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/getElementOrWindow - Truy xuất Element hoặc Window`}),`
`,(0,c.jsx)(n.h1,{id:`getelementorwindow`,children:(0,c.jsx)(n.code,{children:`getElementOrWindow`})}),`
`,(0,c.jsxs)(n.p,{children:[`Tiện ích này tương tự như `,(0,c.jsx)(n.code,{children:`getElement`}),`, nhưng có một điểm khác biệt đáng kể: nếu đối tượng toàn cục `,(0,c.jsx)(n.code,{children:`window`}),` được truyền vào dưới dạng một tham số, hàm sẽ trả về chính xác đối tượng đó. (Trái ngược với `,(0,c.jsx)(n.code,{children:`getElement`}),`, khi `,(0,c.jsx)(n.code,{children:`getElement`}),` sẽ trả về `,(0,c.jsx)(n.code,{children:`document.body`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Nếu truyền vào một chuỗi hoặc một phần tử khác, hàm sẽ hoạt động giống hệt như tiện ích `,(0,c.jsx)(n.code,{children:`getElement`}),` tiêu chuẩn.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element?: ElementOrString<E>`}),` — Một bộ chọn để tìm kiếm, một nút `,(0,c.jsx)(n.code,{children:`Element`}),`, hoặc đối tượng `,(0,c.jsx)(n.code,{children:`Window`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`E | undefined`}),` — Phần tử được tìm thấy, phần tử được truyền vào ban đầu, bản thân đối tượng `,(0,c.jsx)(n.code,{children:`window`}),` (nếu đối tượng này được truyền vào), hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),` nếu không có phần tử nào khớp.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getElementOrWindow } from '@dxtmisha/functional-basic'

// Việc truyền vào Window sẽ trả về Window (ngược lại, getElement sẽ trả về document.body)
const win = getElementOrWindow(window)

// Tìm kiếm bình thường bằng bộ chọn
const btn = getElementOrWindow('.submit-btn')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};