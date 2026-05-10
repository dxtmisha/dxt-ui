import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{f as r,s as i}from"./blocks-PB3deeuo.js";import{t as a}from"./mdx-react-shim-7_6RcfEr.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/figma-ref/Composables/useFigmaFrameSelection - Quan sát lựa chọn frame (thông tin đầy đủ)`}),`
`,(0,c.jsx)(n.h1,{id:`usefigmaframeselection`,children:(0,c.jsx)(n.code,{children:`useFigmaFrameSelection`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một composable để truy xuất và quan sát danh sách chi tiết các frame hiện đang được chọn trong Figma. Không giống như `,(0,c.jsx)(n.code,{children:`useFigmaUiSelected`}),` (chỉ quản lý ID trong giao diện), composable này cung cấp thông tin đầy đủ về vùng chọn, bao gồm tên và ảnh chụp màn hình, bằng cách lắng nghe các sự kiện `,(0,c.jsx)(n.code,{children:`selectionchange`}),` trong Figma.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selection: ComputedRef<UiFigmaFramesList>`}),` — Một tham chiếu được tính toán đến danh sách các frame được chọn (tên, ID và ảnh chụp màn hình).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setSelection(id: string): void`}),` — Một phương thức để thay đổi vùng chọn trong Figma sang một phần tử cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: ComputedRef<boolean>`}),` — Một cờ phản hồi cho biết liệu dữ liệu vùng chọn có đang được lấy hay không.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaFrameSelection } from '@dxtmisha/figma-ref'

const { selection, setSelection, loading } = useFigmaFrameSelection()

// 'selection' cập nhật bất cứ khi nào người dùng thay đổi vùng chọn của họ trong Figma
// 'setSelection' có thể được sử dụng để thay đổi vùng chọn theo chương trình:
setSelection('12:34')
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframesitem`,children:(0,c.jsx)(n.code,{children:`UiFigmaFramesItem`})}),`
`,(0,c.jsx)(n.p,{children:`Đại diện cho một phần tử frame được đơn giản hóa cho UI.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Tên của frame.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string`}),` — Định danh duy nhất của phần tử.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`image: Uint8Array | string`}),` — Hình ảnh của frame (tùy chọn).`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframeslist`,children:(0,c.jsx)(n.code,{children:`UiFigmaFramesList`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một danh sách các đối tượng `,(0,c.jsx)(n.code,{children:`UiFigmaFramesItem`}),`.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};