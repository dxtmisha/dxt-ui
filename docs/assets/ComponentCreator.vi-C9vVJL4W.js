import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(c){const h={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/vi/scripts/Classes/ComponentCreator - Tự động tạo thành phần"}),`
`,n.jsx(h.h1,{id:"lớp-componentcreator",children:"Lớp ComponentCreator"}),`
`,n.jsx(h.p,{children:"Một lớp tiện ích để tự động hóa việc tạo khung sườn (skeleton) của thành phần trong các thư mục trống. Nó chủ động xác định các thư mục trong thư mục thành phần còn thiếu tệp và khởi tạo chúng bằng các mẫu tiêu chuẩn của dự án."}),`
`,n.jsx(h.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tự động khám phá"})," — quét thư mục thành phần theo cách đệ quy để tìm các thư mục trống."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tạo khung sườn thông minh"})," — tự động kích hoạt quá trình tạo cho mỗi thư mục được xác định."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tính nhất quán của dự án"})," — đảm bảo tất cả các thành phần mới đều bắt đầu với cùng một cấu trúc cơ bản và các tệp giống nhau."]}),`
`]}),`
`,n.jsx(h.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(h.p,{children:["Khởi tạo một phiên bản mới của ",n.jsx(h.code,{children:"ComponentCreator"}),". Nó tự động nhắm mục tiêu vào thư mục thành phần tiêu chuẩn được xác định trong cấu hình dự án."]}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-typescript",children:`import { ComponentCreator } from '@dxtmisha/scripts'

const creator = new ComponentCreator()
`})}),`
`,n.jsx(h.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(h.h3,{id:"make",children:n.jsx(h.code,{children:"make"})}),`
`,n.jsxs(h.p,{children:["Phương thức điều phối chính thực hiện quét đệ quy thư mục thành phần, xác định các thư mục không có tệp và kích hoạt quá trình tạo khung sườn ",n.jsx(h.code,{children:"ComponentItem"})," cho mỗi thư mục đó."]}),`
`,n.jsxs(h.p,{children:[n.jsx(h.strong,{children:"Trả về:"})," ",n.jsx(h.code,{children:"void"})]}),`
`,n.jsx(h.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(h.h3,{id:"quy-trình-tạo-khung-sườn-hoàn-chỉnh",children:"Quy trình tạo khung sườn hoàn chỉnh"}),`
`,n.jsxs(h.p,{children:["Chạy creator như một phần của kịch bản xây dựng hoặc chuẩn bị để đảm bảo rằng ngay cả các thư mục trống được tạo thủ công cũng được khởi tạo đúng cách với các tệp cần thiết (",n.jsx(h.code,{children:"index.ts"}),", ",n.jsx(h.code,{children:"types.ts"}),", v.v.)."]}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-javascript",children:`const creator = new ComponentCreator()
creator.make()
`})})]})}function l(c={}){const{wrapper:h}={...e(),...c.components};return h?n.jsx(h,{...c,children:n.jsx(t,{...c})}):t(c)}export{l as default};
