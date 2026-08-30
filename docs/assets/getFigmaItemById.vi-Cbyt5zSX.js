import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-LSqYfV8h.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/vi/figma-code/Functions/getFigmaItemById - Lấy phần tử Figma bằng ID`}),`
`,(0,l.jsx)(t.h1,{id:`getfigmaitembyid`,children:(0,l.jsx)(t.code,{children:`getFigmaItemById`})}),`
`,(0,l.jsxs)(t.p,{children:[`Một tiện ích bất đồng bộ để lấy một node Figma bằng ID của nó và bọc nó trong một thực thể lớp `,(0,l.jsx)(t.code,{children:`FigmaItem`}),`. Điều này giúp đơn giản hóa các tương tác tiếp theo với node, chẳng hạn như kiểm tra kiểu, quản lý lựa chọn hoặc xuất dữ liệu.`]}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`id: string`}),` — Định danh (ID) của node Figma.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(t.code,{children:`Promise<FigmaItem | undefined>`}),` — Một thực thể `,(0,l.jsx)(t.code,{children:`FigmaItem`}),` bọc node, hoặc `,(0,l.jsx)(t.code,{children:`undefined`}),` nếu không tìm thấy node.`]}),`
`,(0,l.jsx)(t.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,l.jsx)(t.h3,{id:`figmaitem`,children:`FigmaItem`}),`
`,(0,l.jsx)(t.p,{children:`Một lớp bọc cho các node Figma cung cấp các phương thức cấp cao để:`}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[`Kiểm tra kiểu node (`,(0,l.jsx)(t.code,{children:`isFrame()`}),`, `,(0,l.jsx)(t.code,{children:`isText()`}),`, v.v.).`]}),`
`,(0,l.jsx)(t.li,{children:`Truy cập các node cha và con.`}),`
`,(0,l.jsx)(t.li,{children:`Xuất dữ liệu sang nhiều định dạng khác nhau.`}),`
`,(0,l.jsx)(t.li,{children:`Quản lý lựa chọn và tiêu điểm khung nhìn (viewport).`}),`
`]}),`
`,(0,l.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { getFigmaItemById } from '@dxtmisha/figma-code'

async function highlightFrame(frameId: string) {
const item = await getFigmaItemById(frameId)

if (item && item.isFrame()) {
  item.toSelection()
  console.log('Đã chọn frame:', item.getName())
} else {
  console.log('Không tìm thấy frame hoặc node không phải là frame')
}
}
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};