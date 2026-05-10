import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{f as r,s as i}from"./blocks-PB3deeuo.js";import{t as a}from"./mdx-react-shim-7_6RcfEr.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/figma-code/Classes/FigmaItem - Lớp bọc node Figma`}),`
`,(0,c.jsxs)(n.h1,{id:`lớp-figmaitem`,children:[`Lớp `,(0,c.jsx)(n.code,{children:`FigmaItem`})]}),`
`,(0,c.jsx)(n.p,{children:`Một lớp bọc đa năng để tương tác với bất kỳ loại node Figma nào. Nó cung cấp các phương thức được định kiểu để kiểm tra kiểu, điều hướng cây node và các hoạt động phổ biến như xuất dữ liệu và quản lý khung nhìn (viewport).`}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`An toàn kiểu dữ liệu`}),` — Sử dụng Type Guards (`,(0,c.jsx)(n.code,{children:`isFrame`}),`, `,(0,c.jsx)(n.code,{children:`isText`}),`, v.v.) để truy cập an toàn vào các thuộc tính cụ thể của một số loại node.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Điều hướng linh hoạt`}),` — Các phương thức thuận tiện để truy xuất các phần tử cha hoặc các node con đã được bọc trong các thực thể `,(0,c.jsx)(n.code,{children:`FigmaItem`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hành động tích hợp`}),` — Hỗ trợ tích hợp để xuất các node sang JPG/JSON và điều khiển khung nhìn Figma (lựa chọn và thu phóng).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Bọc bất kỳ node Figma nào trong một thực thể `,(0,c.jsx)(n.code,{children:`FigmaItem`}),` để truy cập các phương thức hỗ trợ của nó.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaItem } from '@dxtmisha/figma-code'

// Bọc một node (ví dụ: từ vùng lựa chọn)
const item = new FigmaItem(figma.currentPage.selection[0])

if (item.isFrame()) {
  console.log('Node là một frame:', item.getName())
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`kiểm-tra-kiểu-type-guards`,children:`Kiểm tra kiểu (Type Guards)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isDocument(): boolean`}),` — Kiểm tra xem node là Document.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isFrame(): boolean`}),` — Kiểm tra xem node là Frame.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSection(): boolean`}),` — Kiểm tra xem node là Section.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isText(): boolean`}),` — Kiểm tra xem node là Text node.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isTextNoValue(): boolean`}),` — Kiểm tra xem node có nội dung ý nghĩa hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`inCurrentPage(): boolean`}),` — Kiểm tra xem node có thuộc trang đang hoạt động hay không.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`hệ-thống-cấp-bậc-và-điều-hướng`,children:`Hệ thống cấp bậc và Điều hướng`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): T`}),` — Trả về node Figma gốc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParent(): UiFigmaNode | undefined`}),` — Trả về node cha gốc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParentItem(): FigmaItem | undefined`}),` — Trả về node cha được bọc trong `,(0,c.jsx)(n.code,{children:`FigmaItem`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParentPage(): PageNode | undefined`}),` — Trả về trang cha của node.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParentPageItem(): FigmaItem | undefined`}),` — Trả về trang cha được bọc trong `,(0,c.jsx)(n.code,{children:`FigmaItem`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getChildren(): UiFigmaNode[]`}),` — Trả về danh sách các node con ở định dạng gốc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getChildrenItems(): FigmaItem[]`}),` — Trả về tất cả các node con được bọc trong `,(0,c.jsx)(n.code,{children:`FigmaItem`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`nội-dung-và-thông-tin`,children:`Nội dung và Thông tin`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getId(): string`}),` — Trả về mã định danh duy nhất của node.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(): string`}),` — Trả về tên của node.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getType(): string`}),` — Trả về chuỗi kiểu node.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getText(): string`}),` — Trả về nội dung văn bản (chỉ dành cho text node).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getInfo(): Promise<UiFigmaFramesItem>`}),` — Thu thập thông tin cơ bản về node (tên, ID, ảnh chụp màn hình) một cách không đồng bộ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCss(): Promise<Record<string, string>>`}),` — Trích xuất các style CSS của node một cách không đồng bộ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStyles(): Promise<UiFigmaFrameStylesItem>`}),` — Trích xuất thông tin style mở rộng (CSS, văn bản, JSON) một cách không đồng bộ.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`xuất-và-hành-động`,children:`Xuất và Hành động`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`exportJpg(): Promise<Uint8Array>`}),` — Xuất node dưới dạng hình ảnh JPG.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`exportJson(): Promise<any>`}),` — Xuất dữ liệu node đầy đủ ở định dạng JSON.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`exportJsonCompact(): Promise<UiFigmaFrameStylesData | undefined>`}),` — Xuất dữ liệu node ở định dạng JSON thu gọn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toSelection(): void`}),` — Chọn node và tập trung khung nhìn vào nó.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toPageAndSelection(): Promise<void>`}),` — Chuyển đến trang của node và chọn nó.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframesitem`,children:(0,c.jsx)(n.code,{children:`UiFigmaFramesItem`})}),`
`,(0,c.jsx)(n.p,{children:`Thông tin đơn giản hóa về một phần tử để hiển thị trong giao diện.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Tên của phần tử trong Figma.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string`}),` — Định danh duy nhất của node.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`image?: Uint8Array | string`}),` — Ảnh chụp màn hình của phần tử (dữ liệu nhị phân hoặc base64).`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframestylesitem`,children:(0,c.jsx)(n.code,{children:`UiFigmaFrameStylesItem`})}),`
`,(0,c.jsxs)(n.p,{children:[`Thông tin mở rộng về một phần tử, bao gồm style của nó. Kế thừa tất cả các trường từ `,(0,c.jsx)(n.code,{children:`UiFigmaFramesItem`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`json?: UiFigmaFrameStylesData`}),` — Cấu trúc dữ liệu node và style dưới định dạng JSON.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`text?: string`}),` — Nội dung văn bản (nếu node là một node văn bản).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styles?: Record<string, string>`}),` — Một đối tượng chứa các thuộc tính CSS của chính phần tử đó.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`childrenStyles?: Record<string, Record<string, string>>`}),` — Bản đồ các style CSS cho tất cả các phần tử con, được lập chỉ mục theo ID của chúng.`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframestylesdata`,children:(0,c.jsx)(n.code,{children:`UiFigmaFrameStylesData`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`document: UiFigmaFrameStylesJson`}),` — Cây node dưới định dạng nén.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styles: Record<string, any>`}),` — Một từ điển các định nghĩa style của tài liệu.`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframestylesjson`,children:(0,c.jsx)(n.code,{children:`UiFigmaFrameStylesJson`})}),`
`,(0,c.jsx)(n.p,{children:`Biểu diễn thu gọn của một node Figma để xuất JSON.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string`}),` — Định danh duy nhất của node.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Tên node.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — Kiểu node.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`characters?: string`}),` — Văn bản (cho text node).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`children?: UiFigmaFrameStylesJson[]`}),` — Danh sách các phần tử con đệ quy.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`style?: Record<string, any>`}),` — Các tham số ngoại hình.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styles?: Record<string, any>`}),` — Các style liên quan.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};