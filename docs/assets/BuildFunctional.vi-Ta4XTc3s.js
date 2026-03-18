import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(c){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/BuildFunctional - Bộ xây dựng thư viện chức năng"}),`
`,n.jsx(t.h1,{id:"lớp-buildfunctional",children:"Lớp BuildFunctional"}),`
`,n.jsxs(t.p,{children:["Lớp ",n.jsx(t.code,{children:"BuildFunctional"})," là một tiện ích chịu trách nhiệm tạo tệp xuất trung tâm cho thư viện chức năng. Nó quét gói ",n.jsx(t.code,{children:"@dxtmisha/functional"})," và tạo tệp ",n.jsx(t.code,{children:"functional.ts"})," trong thư mục thư viện, xuất lại tất cả các thành viên được tìm thấy."]}),`
`,n.jsx(t.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Tự động xuất lại"})," — Tự động phát hiện và xuất lại tất cả các thành viên từ gói chức năng."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Hỗ trợ Type"})," — Bao gồm ",n.jsx(t.code,{children:"export type *"})," để đảm bảo tính khả dụng đầy đủ của kiểu TypeScript."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Tích hợp thư viện"})," — Tích hợp với cấu trúc thư viện của dự án bằng cách ghi vào thư mục thư viện đã định cấu hình."]}),`
`]}),`
`,n.jsx(t.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(t.p,{children:["Bạn có thể tạo một phiên bản của ",n.jsx(t.code,{children:"BuildFunctional"})," mà không cần bất kỳ tham số nào."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { BuildFunctional } from './BuildFunctional'

const builder = new BuildFunctional()
builder.make()
`})}),`
`,n.jsx(t.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(t.h3,{id:"make",children:"make"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"make(): void"})," — Kích hoạt quá trình xây dựng. Nó lấy danh sách các thành viên, định dạng mã xuất và ghi nó vào ",n.jsx(t.code,{children:"src/library/functional.ts"}),"."]}),`
`]}),`
`,n.jsx(t.h3,{id:"getlist",children:"getList"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"getList(): string[]"})," — Trả về một mảng các khóa (thành viên được xuất) từ gói ",n.jsx(t.code,{children:"@dxtmisha/functional"}),"."]}),`
`]})]})}function u(c={}){const{wrapper:t}={...h(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(i,{...c})}):i(c)}export{u as default};
