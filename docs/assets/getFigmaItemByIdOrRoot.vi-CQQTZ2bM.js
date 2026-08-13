import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-WIGGT2yz.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/vi/figma-code/Functions/getFigmaItemByIdOrRoot - Lấy node Figma hoặc gốc tài liệu`}),`
`,(0,l.jsx)(t.h1,{id:`getfigmaitembyidorroot`,children:(0,l.jsx)(t.code,{children:`getFigmaItemByIdOrRoot`})}),`
`,(0,l.jsxs)(t.p,{children:[`Một tiện ích bất đồng bộ lấy một node Figma bằng ID của nó. Nếu ID không được cung cấp hoặc không tìm thấy node, nó sẽ trả về gốc của tài liệu (`,(0,l.jsx)(t.code,{children:`figma.root`}),`). Điều này hữu ích cho các hoạt động có thể nhắm vào một phần tử cụ thể hoặc toàn bộ tài liệu.`]}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`id?: string`}),` — (Tùy chọn) Định danh (ID) của node Figma.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(t.code,{children:`Promise<T>`}),` — Node Figma được truy xuất hoặc `,(0,l.jsx)(t.code,{children:`figma.root`}),`.`]}),`
`,(0,l.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { getFigmaItemByIdOrRoot } from '@dxtmisha/figma-code'

async function getStorageNode(id?: string) {
// Nếu id được cung cấp, cố gắng lấy node đó.
// Ngược lại, trả về figma.root.
const node = await getFigmaItemByIdOrRoot(id)

console.log('Tên node đích:', node.name)
}
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};