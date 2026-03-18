import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(h){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/vi/scripts/Classes/ComponentWiki - Trình tạo Wiki hỗ trợ AI"}),`
`,n.jsx(i.h1,{id:"lớp-componentwiki",children:"Lớp ComponentWiki"}),`
`,n.jsx(i.p,{children:"Một lớp điều phối nâng cao tự động hóa việc tạo tài liệu, câu chuyện (stories) và định nghĩa kiểu cho các thành phần bằng AI. Nó điều phối các bản dựng tạm thời, trích xuất mã và xử lý AI để tạo ra các tạo tác wiki toàn diện."}),`
`,n.jsx(i.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Tài liệu do AI điều khiển"})," — tận dụng AI để phân tích mã thành phần và tạo các mô tả MDX có ý nghĩa."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Tạo câu chuyện tự động"})," — tạo các câu chuyện Storybook ban đầu dựa trên việc triển khai thành phần."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Trích xuất kiểu"})," — xác định và trích xuất các định nghĩa kiểu để đưa vào tài liệu."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Điều phối quy trình"})," — xử lý vòng đời kỹ thuật bao gồm xây dựng các mục, trích xuất ảnh chụp nhanh mã và dọn dẹp."]}),`
`]}),`
`,n.jsx(i.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsx(i.p,{children:"Khởi tạo lớp với đường dẫn thành phần mục tiêu và các hướng dẫn nhắc tùy chọn."}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Tham số:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"path: string"})," — đường dẫn tương đối đến thư mục thành phần."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"prompt: string = ''"})," — văn bản bổ sung tùy chọn để thêm vào lời nhắc AI cho các yêu cầu tài liệu cụ thể."]}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { ComponentWiki } from '@dxtmisha/scripts'

const wiki = new ComponentWiki('src/components/MyComponent', 'Tập trung vào chi tiết khả năng truy cập.')

// Bắt đầu quá trình tạo
wiki.make()
`})}),`
`,n.jsx(i.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(i.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"make(): void"})," — Phương thức chính khởi tạo việc xây dựng mã, chuẩn bị ngữ cảnh AI và tạo các tạo tác wiki."]}),`
`]}),`
`,n.jsx(i.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(i.h3,{id:"tạo-hàng-loạt",children:"Tạo hàng loạt"}),`
`,n.jsx(i.p,{children:"Thường được sử dụng trong các tập lệnh để tạo lại tài liệu cho nhiều thành phần sau các thay đổi API."}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`const wiki = new ComponentWiki('src/components/BaseButton')
wiki.make()
`})})]})}function u(h={}){const{wrapper:i}={...t(),...h.components};return i?n.jsx(i,{...h,children:n.jsx(c,{...h})}):c(h)}export{u as default};
