import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(t){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/scripts/Classes/LibraryAiWikiItem - Trình xử lý thành phần AI Wiki"}),`
`,n.jsx(i.h1,{id:"lớp-libraryaiwikiitem",children:"Lớp LibraryAiWikiItem"}),`
`,n.jsxs(i.p,{children:["Lớp ",n.jsx(i.code,{children:"LibraryAiWikiItem"})," là một lớp bao bọc các dữ liệu của thành phần, được thiết kế đặc biệt để xử lý các hoạt động liên quan đến AI Wiki cho một thành phần duy nhất. Nó cung cấp các phương thức để kiểm tra sự tồn tại của các tệp AI Wiki, tạo mã thành phần và tạo các chuỗi nhập (import)."]}),`
`,n.jsx(i.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Kiểm tra trạng thái"}),": Xác định xem một thành phần có tệp triển khai AI Wiki tương ứng hay không."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Tạo lệnh nhập (import)"}),": Tạo các chuỗi nhập TypeScript chính xác cho thành phần AI Wiki."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Quản lý đường dẫn"}),": Xử lý việc giải quyết các đường dẫn đến tệp AI Wiki của thành phần."]}),`
`]}),`
`,n.jsx(i.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(i.p,{children:["Khởi tạo ",n.jsx(i.code,{children:"LibraryAiWikiItem"})," bằng cách cung cấp một đối tượng ",n.jsx(i.code,{children:"LibraryData"}),"."]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Tham số:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"item: LibraryData"})," — một đối tượng chứa siêu dữ liệu của thành phần (tên, thiết kế, thư mục, v.v.)."]}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { LibraryAiWikiItem } from '@dxtmisha/scripts'

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
`,n.jsx(i.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(i.h3,{id:"trạng-thái",children:"Trạng thái"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"isAiWiki(): boolean"})," — kiểm tra xem tệp ",n.jsx(i.code,{children:"*AiWiki.vue"})," tương ứng có tồn tại trong thư mục của thành phần hay không."]}),`
`]}),`
`,n.jsx(i.h3,{id:"truy-xuất-dữ-liệu",children:"Truy xuất dữ liệu"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getCode(): string"})," — trả về định danh mã đầy đủ của thành phần (ví dụ: ",n.jsx(i.code,{children:"DxtButton"}),")."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getComponentFileNameAiWiki(): string"})," — trả về tên tệp dự kiến cho bản triển khai AI Wiki (ví dụ: ",n.jsx(i.code,{children:"DxtButtonAiWiki.vue"}),")."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getImport(): string"})," — tạo chuỗi nhập TypeScript cho thành phần AI Wiki."]}),`
`]})]})}function x(t={}){const{wrapper:i}={...c(),...t.components};return i?n.jsx(i,{...t,children:n.jsx(h,{...t})}):h(t)}export{x as default};
