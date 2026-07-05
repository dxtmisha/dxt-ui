import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{c as r,f as i,s as a}from"./blocks-BWgdf4pj.js";import{t as o}from"./mdx-react-shim-B1U8VZv0.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/vi/figma-code/Functions/getFigmaItemByIdOrRoot - Lấy node Figma hoặc gốc tài liệu`}),`
`,(0,l.jsx)(n.h1,{id:`getfigmaitembyidorroot`,children:(0,l.jsx)(n.code,{children:`getFigmaItemByIdOrRoot`})}),`
`,(0,l.jsxs)(n.p,{children:[`Một tiện ích bất đồng bộ lấy một node Figma bằng ID của nó. Nếu ID không được cung cấp hoặc không tìm thấy node, nó sẽ trả về gốc của tài liệu (`,(0,l.jsx)(n.code,{children:`figma.root`}),`). Điều này hữu ích cho các hoạt động có thể nhắm vào một phần tử cụ thể hoặc toàn bộ tài liệu.`]}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`id?: string`}),` — (Tùy chọn) Định danh (ID) của node Figma.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(n.code,{children:`Promise<T>`}),` — Node Figma được truy xuất hoặc `,(0,l.jsx)(n.code,{children:`figma.root`}),`.`]}),`
`,(0,l.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { getFigmaItemByIdOrRoot } from '@dxtmisha/figma-code'

async function getStorageNode(id?: string) {
// Nếu id được cung cấp, cố gắng lấy node đó.
// Ngược lại, trả về figma.root.
const node = await getFigmaItemByIdOrRoot(id)

console.log('Tên node đích:', node.name)
}
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};