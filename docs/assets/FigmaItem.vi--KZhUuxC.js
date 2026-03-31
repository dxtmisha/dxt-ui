import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/figma-code/Classes/FigmaItem - Node Wrapper`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-figmaitem`,children:`Lớp FigmaItem`}),`
`,(0,c.jsxs)(n.p,{children:[`Một lớp wrapper cho các node Figma (`,(0,c.jsx)(n.code,{children:`UiFigmaNode`}),`) cung cấp giao diện được định nghĩa kiểu dữ liệu đơn giản cho các thao tác phổ biến như kiểm tra loại node, điều hướng cây node và xuất dữ liệu không đồng bộ.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Truy cập có định kiểu`}),` — Cung cấp các phương thức type guard cho các node `,(0,c.jsx)(n.code,{children:`DOCUMENT`}),`, `,(0,c.jsx)(n.code,{children:`FRAME`}),`, `,(0,c.jsx)(n.code,{children:`SECTION`}),`, và `,(0,c.jsx)(n.code,{children:`TEXT`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Điều hướng đơn giản`}),` — Dễ dàng truy cập các node cha hoặc con được bọc trong các thực thể `,(0,c.jsx)(n.code,{children:`FigmaItem`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ Export`}),` — Các phương thức cấp cao để xuất các node sang định dạng JPG hoặc JSON.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân tích nội dung`}),` — Logic chuyên biệt để trích xuất và xác thực nội dung văn bản.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm dựng `,(0,c.jsx)(n.code,{children:`FigmaItem(item)`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`ràng-buộc-generics`,children:`Ràng buộc Generics`}),`
`,(0,c.jsx)(n.p,{children:`Lớp hỗ trợ một tham số generic để định kiểu nghiêm ngặt:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`T extends UiFigmaNode`}),` — Loại cụ thể của node Figma được bọc.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: T`}),` — Node Figma gốc (ví dụ: `,(0,c.jsx)(n.code,{children:`SceneNode`}),`, `,(0,c.jsx)(n.code,{children:`FrameNode`}),`, `,(0,c.jsx)(n.code,{children:`TextNode`}),`) cần được bọc.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaItem } from '@dxtmisha/figma-code'

// 1. Bọc một node đang được chọn
const item = new FigmaItem(figma.currentPage.selection[0])

// 2. Sử dụng generics cho các loại node cụ thể
const frameItem = new FigmaItem<FrameNode>(someFrameNode)
`})}),`
`,(0,c.jsx)(n.h2,{id:`định-danh-node`,children:`Định danh Node`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isDocument(): boolean`}),` — Kiểm tra xem node được bọc có phải là DOCUMENT hay không. Ví dụ: `,(0,c.jsx)(n.code,{children:`item.isDocument()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isFrame(): boolean`}),` — Kiểm tra xem node có phải là FRAME hay không. Ví dụ: `,(0,c.jsx)(n.code,{children:`item.isFrame()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSection(): boolean`}),` — Kiểm tra xem node có phải là SECTION hay không. Ví dụ: `,(0,c.jsx)(n.code,{children:`item.isSection()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isText(): boolean`}),` — Kiểm tra xem node có phải là TEXT hay không. Ví dụ: `,(0,c.jsx)(n.code,{children:`item.isText()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isTextNoValue(): boolean`}),` — Lọc các node văn bản có nội dung ý nghĩa. Ví dụ: `,(0,c.jsx)(n.code,{children:`item.isTextNoValue()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getType(): string | undefined`}),` — Trả về hằng số chuỗi loại của node. Ví dụ: `,(0,c.jsx)(n.code,{children:`const type = item.getType()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getId(): string`}),` — Trả về ID duy nhất của node. Ví dụ: `,(0,c.jsx)(n.code,{children:`const id = item.getId()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(): string`}),` — Trả về tên hiển thị của node. Ví dụ: `,(0,c.jsx)(n.code,{children:`const name = item.getName()`})]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`điều-hướng`,children:`Điều hướng`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParent(): UiFigmaNode | undefined`}),` — Trả về node cha gốc. Ví dụ: `,(0,c.jsx)(n.code,{children:`const parent = item.getParent()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParentItem(): FigmaItem | undefined`}),` — Trả về node cha được bọc. Ví dụ: `,(0,c.jsx)(n.code,{children:`const parentItem = item.getParentItem()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getChildren(): UiFigmaNode[]`}),` — Trả về một mảng các node con gốc. Ví dụ: `,(0,c.jsx)(n.code,{children:`const children = item.getChildren()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getChildrenItems(): FigmaItem[]`}),` — Trả về một mảng các node con đã bọc. Ví dụ: `,(0,c.jsx)(n.code,{children:`const items = item.getChildrenItems()`})]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`dữ-liệu--xuất-bản`,children:`Dữ liệu & Xuất bản`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): T`}),` — Trả về node Figma gốc bên dưới. Ví dụ: `,(0,c.jsx)(n.code,{children:`const raw = item.get()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`exportJpg(): Promise<Uint8Array | string>`}),` — Xuất node sang định dạng JPG. Ví dụ: `,(0,c.jsx)(n.code,{children:`const bytes = await item.exportJpg()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`exportJson(): Promise<Uint8Array | string>`}),` — Xuất node sang định dạng JSON. Ví dụ: `,(0,c.jsx)(n.code,{children:`const json = await item.exportJson()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getText(): string`}),` — Lấy nội dung văn bản đã làm sạch. Ví dụ: `,(0,c.jsx)(n.code,{children:`const content = item.getText()`})]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-loại-dữ-liệu-types`,children:`Các loại dữ liệu (Types)`}),`
`,(0,c.jsx)(n.h3,{id:`uifigmanode`,children:(0,c.jsx)(n.code,{children:`UiFigmaNode`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một kiểu union đại diện cho bất kỳ node Figma nào có liên quan có thể được bọc bởi `,(0,c.jsx)(n.code,{children:`FigmaItem`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Bao gồm: `,(0,c.jsx)(n.code,{children:`DocumentNode`}),`, `,(0,c.jsx)(n.code,{children:`PageNode`}),`, `,(0,c.jsx)(n.code,{children:`FrameNode`}),`, `,(0,c.jsx)(n.code,{children:`SectionNode`}),`, `,(0,c.jsx)(n.code,{children:`TextNode`}),`, và các biến thể `,(0,c.jsx)(n.code,{children:`SceneNode`}),` khác.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`uifigmaexportformat`,children:(0,c.jsx)(n.code,{children:`UiFigmaExportFormat`})}),`
`,(0,c.jsx)(n.p,{children:`Các định dạng được hỗ trợ cho các thao tác xuất (export) node.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Các giá trị: `,(0,c.jsx)(n.code,{children:`'PNG'`}),`, `,(0,c.jsx)(n.code,{children:`'JPG'`}),`, `,(0,c.jsx)(n.code,{children:`'SVG'`}),`, `,(0,c.jsx)(n.code,{children:`'PDF'`}),`, `,(0,c.jsx)(n.code,{children:`'JSON_REST_V1'`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};