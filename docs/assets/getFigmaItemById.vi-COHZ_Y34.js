import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{c as r,f as i,s as a}from"./blocks-CQEzKDSL.js";import{t as o}from"./mdx-react-shim-CpDaEZL9.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/vi/figma-code/Functions/getFigmaItemById - Lấy phần tử Figma bằng ID`}),`
`,(0,l.jsx)(n.h1,{id:`getfigmaitembyid`,children:(0,l.jsx)(n.code,{children:`getFigmaItemById`})}),`
`,(0,l.jsxs)(n.p,{children:[`Một tiện ích bất đồng bộ để lấy một node Figma bằng ID của nó và bọc nó trong một thực thể lớp `,(0,l.jsx)(n.code,{children:`FigmaItem`}),`. Điều này giúp đơn giản hóa các tương tác tiếp theo với node, chẳng hạn như kiểm tra kiểu, quản lý lựa chọn hoặc xuất dữ liệu.`]}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`id: string`}),` — Định danh (ID) của node Figma.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(n.code,{children:`Promise<FigmaItem | undefined>`}),` — Một thực thể `,(0,l.jsx)(n.code,{children:`FigmaItem`}),` bọc node, hoặc `,(0,l.jsx)(n.code,{children:`undefined`}),` nếu không tìm thấy node.`]}),`
`,(0,l.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,l.jsx)(n.h3,{id:`figmaitem`,children:`FigmaItem`}),`
`,(0,l.jsx)(n.p,{children:`Một lớp bọc cho các node Figma cung cấp các phương thức cấp cao để:`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[`Kiểm tra kiểu node (`,(0,l.jsx)(n.code,{children:`isFrame()`}),`, `,(0,l.jsx)(n.code,{children:`isText()`}),`, v.v.).`]}),`
`,(0,l.jsx)(n.li,{children:`Truy cập các node cha và con.`}),`
`,(0,l.jsx)(n.li,{children:`Xuất dữ liệu sang nhiều định dạng khác nhau.`}),`
`,(0,l.jsx)(n.li,{children:`Quản lý lựa chọn và tiêu điểm khung nhìn (viewport).`}),`
`]}),`
`,(0,l.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
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
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};