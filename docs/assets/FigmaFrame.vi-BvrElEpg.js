import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/figma-code/Classes/FigmaFrame - Quản lý Frame`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-figmaframe`,children:`Lớp FigmaFrame`}),`
`,(0,c.jsx)(n.p,{children:`Một tiện ích toàn diện để điều hướng và trích xuất dữ liệu từ các frame và section trong Figma. Lớp này hỗ trợ phân tích và nhóm các node theo cách đệ quy cho cả toàn bộ trang hoặc vùng chọn hiện tại.`}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xử lý theo ngữ cảnh`}),` — Tự động xử lý sự khác biệt logic giữa phân tích toàn bộ trang và phân tích theo vùng chọn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lọc Node`}),` — Các phương thức chuyên biệt để lấy riêng các frame, section hoặc text node từ hệ thống phân cấp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tổng hợp văn bản`}),` — Nhóm các node văn bản theo nội dung để dễ dàng dịch và phân tích.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xuất hàng loạt`}),` — Tự động hóa việc chụp ảnh màn hình (screenshot) cho tất cả các phần tử chính trong ngữ cảnh hiện tại.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm dựng `,(0,c.jsx)(n.code,{children:`FigmaFrame(page, selection)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`page: UiFigmaNode`}),` — Node gốc (thường là `,(0,c.jsx)(n.code,{children:`figma.currentPage`}),` hoặc một `,(0,c.jsx)(n.code,{children:`PageNode`}),`) để phân tích.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selection: boolean = false`}),` — Nếu `,(0,c.jsx)(n.code,{children:`true`}),`, thực thể sẽ chỉ xử lý các node trong vùng chọn hiện tại thay vì toàn bộ trang.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaFrame } from '@dxtmisha/figma-code'

// 1. Khởi tạo cho toàn bộ trang
const pageManager = new FigmaFrame(figma.currentPage)

// 2. Khởi tạo cụ thể cho vùng chọn đang hoạt động
const selectionManager = new FigmaFrame(figma.currentPage, true)
`})}),`
`,(0,c.jsx)(n.h2,{id:`ngữ-cảnh--phân-tích`,children:`Ngữ cảnh & Phân tích`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSelection(): boolean`}),` — Kiểm tra xem có đang làm việc với vùng chọn hay không. Ví dụ: `,(0,c.jsx)(n.code,{children:`frameManager.isSelection()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMainFrames(): FigmaItem[]`}),` — Trả về các frame/section chính từ node gốc. Ví dụ: `,(0,c.jsx)(n.code,{children:`const roots = frameManager.getMainFrames()`})]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`lọc-hệ-thống-phân-cấp`,children:`Lọc hệ thống phân cấp`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemsFrame(): FigmaItem<FrameNode>[]`}),` — Lọc các node FRAME từ hệ thống phân cấp. Ví dụ: `,(0,c.jsx)(n.code,{children:`const frames = frameManager.getItemsFrame()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemsSection(): FigmaItem<SectionNode>[]`}),` — Lọc các node SECTION từ hệ thống phân cấp. Ví dụ: `,(0,c.jsx)(n.code,{children:`const sections = frameManager.getItemsSection()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemsText(): FigmaItem<TextNode>[]`}),` — Lọc các node TEXT từ hệ thống phân cấp. Ví dụ: `,(0,c.jsx)(n.code,{children:`const textNodes = frameManager.getItemsText()`})]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`dữ-liệu--chụp-ảnh-capture`,children:`Dữ liệu & Chụp ảnh (Capture)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTexts(): UiFigmaItemText[]`}),` — Tổng hợp các node văn bản được nhóm theo nội dung. Ví dụ: `,(0,c.jsx)(n.code,{children:`const groups = frameManager.getTexts()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`screenshot(): Promise<Uint8Array[]>`}),` — Chụp ảnh JPG cho các phần tử chính. Ví dụ: `,(0,c.jsx)(n.code,{children:`const images = await frameManager.screenshot()`})]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-loại-dữ-liệu-types`,children:`Các loại dữ liệu (Types)`}),`
`,(0,c.jsx)(n.h3,{id:`uifigmanode`,children:(0,c.jsx)(n.code,{children:`UiFigmaNode`})}),`
`,(0,c.jsx)(n.p,{children:`Một kiểu union đại diện cho bất kỳ node Figma nào có liên quan, có thể chứa các node con hoặc được xử lý bởi trình quản lý.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Bao gồm: `,(0,c.jsx)(n.code,{children:`DocumentNode`}),`, `,(0,c.jsx)(n.code,{children:`PageNode`}),`, `,(0,c.jsx)(n.code,{children:`FrameNode`}),`, `,(0,c.jsx)(n.code,{children:`SectionNode`}),`, `,(0,c.jsx)(n.code,{children:`TextNode`}),`, và các biến thể `,(0,c.jsx)(n.code,{children:`SceneNode`}),` khác.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`uifigmaitemtext`,children:(0,c.jsx)(n.code,{children:`UiFigmaItemText`})}),`
`,(0,c.jsx)(n.p,{children:`Cấu trúc đối tượng được sử dụng để nhóm nội dung văn bản trong tài liệu.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string[]`}),` — Danh sách các ID node Figma duy nhất mà tại đó nội dung văn bản này được tìm thấy.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`text: string`}),` — Nội dung văn bản thực tế đã được cắt bỏ khoảng trắng thừa.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};