import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/LibraryAiWikiItem - Trình xử lý thành phần AI Wiki`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-libraryaiwikiitem`,children:`Lớp LibraryAiWikiItem`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`LibraryAiWikiItem`}),` là một lớp bao bọc các dữ liệu của thành phần, được thiết kế đặc biệt để xử lý các hoạt động liên quan đến AI Wiki cho một thành phần duy nhất. Nó cung cấp các phương thức để kiểm tra sự tồn tại của các tệp AI Wiki, tạo mã thành phần và tạo các chuỗi nhập (import).`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kiểm tra trạng thái`}),`: Xác định xem một thành phần có tệp triển khai AI Wiki tương ứng hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo lệnh nhập (import)`}),`: Tạo các chuỗi nhập TypeScript chính xác cho thành phần AI Wiki.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý đường dẫn`}),`: Xử lý việc giải quyết các đường dẫn đến tệp AI Wiki của thành phần.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Khởi tạo `,(0,c.jsx)(n.code,{children:`LibraryAiWikiItem`}),` bằng cách cung cấp một đối tượng `,(0,c.jsx)(n.code,{children:`LibraryData`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: LibraryData`}),` — một đối tượng chứa siêu dữ liệu của thành phần (tên, thiết kế, thư mục, v.v.).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { LibraryAiWikiItem } from '@dxtmisha/scripts'

const componentData = {
  name: 'button',
  design: 'dxt',
  alias: 'dxt.button',
  codeFull: 'DxtButton',
  dir: 'DxtButton'
}

const aiItem = new LibraryAiWikiItem(componentData)

// Kiểm tra trạng thái
if (aiItem.isAiWiki()) {
  const importStr = aiItem.getImport()
  // "import DxtButton from '../../components/DxtButton/DxtButtonAiWiki.vue'"
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`trạng-thái`,children:`Trạng thái`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isAiWiki(): boolean`}),` — kiểm tra xem tệp `,(0,c.jsx)(n.code,{children:`*AiWiki.vue`}),` tương ứng có tồn tại trong thư mục của thành phần hay không.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`truy-xuất-dữ-liệu`,children:`Truy xuất dữ liệu`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCode(): string`}),` — trả về định danh mã đầy đủ của thành phần (ví dụ: `,(0,c.jsx)(n.code,{children:`DxtButton`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getComponentFileNameAiWiki(): string`}),` — trả về tên tệp dự kiến cho bản triển khai AI Wiki (ví dụ: `,(0,c.jsx)(n.code,{children:`DxtButtonAiWiki.vue`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getImport(): string`}),` — tạo chuỗi nhập TypeScript cho thành phần AI Wiki.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};