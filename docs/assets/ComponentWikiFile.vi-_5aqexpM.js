import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(t){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/ComponentWikiFile - Tiện ích tệp Wiki"}),`
`,n.jsx(i.h1,{id:"lớp-componentwikifile",children:"Lớp ComponentWikiFile"}),`
`,n.jsx(i.p,{children:"Một lớp tiện ích chuyên dụng được thiết kế để xử lý các tệp riêng lẻ trong quá trình tạo wiki. Nó cung cấp các phương pháp mạnh mẽ để đọc, ghi và quản lý siêu dữ liệu như ngày cập nhật và phiên bản tệp."}),`
`,n.jsx(i.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Quản lý siêu dữ liệu"}),' — tự động trích xuất và cập nhật dấu "',n.jsx(i.strong,{children:"Date: ..."}),'" trong nội dung tệp.']}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Ghi thông minh"})," — tự động loại bỏ các hàng rào mã markdown khi lưu và chỉ ghi nếu nội dung đã thay đổi."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Hỗ trợ lập phiên bản"})," — tùy chọn bảo tồn phiên bản trước của tệp bằng cách đổi tên tệp với hậu tố ",n.jsx(i.code,{children:"__old.txt"}),"."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Trừu tượng hóa đường dẫn"})," — tích hợp với ",n.jsx(i.code,{children:"PropertiesFile"})," để xử lý các hoạt động tệp bằng các phân đoạn đường dẫn nhất quán."]}),`
`]}),`
`,n.jsx(i.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsx(i.p,{children:"Khởi tạo với các phân đoạn đường dẫn và cấu hình để xử lý ngày tháng và lập phiên bản."}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Tham số:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"paths: string[]"})," — các phân đoạn của đường dẫn tệp."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"isDate: boolean = false"})," — nếu ",n.jsx(i.code,{children:"true"}),", tự động quản lý dấu ngày tháng trong nội dung."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"isOld: boolean = true"})," — nếu ",n.jsx(i.code,{children:"true"}),", lưu phiên bản trước đó trước khi ghi đè."]}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { ComponentWikiFile } from '@dxtmisha/scripts'

const file = new ComponentWikiFile(['docs', 'Guide.mdx'], true, true)
`})}),`
`,n.jsx(i.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(i.h3,{id:"thông-tin",children:"Thông tin"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getPath(): string"})," — Trả về đường dẫn tuyệt đối đầy đủ đến tệp."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getDate(): Datetime"})," — Trích xuất và trả về ngày từ nội dung tệp."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"read(): string"})," — Đọc và trả về toàn bộ nội dung tệp."]}),`
`]}),`
`,n.jsx(i.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"write(content: string): void"})," — Ghi nội dung đã xử lý vào tệp, xử lý việc lập phiên bản và cập nhật ngày tháng nếu được cấu hình."]}),`
`]}),`
`,n.jsx(i.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(i.h3,{id:"quản-lý-cập-nhật-tài-liệu",children:"Quản lý cập nhật tài liệu"}),`
`,n.jsx(i.p,{children:"Tự động cập nhật tài liệu trong khi giữ bản sao lưu của phiên bản trước."}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`const docFile = new ComponentWikiFile(['wiki', 'MyComponent.mdx'], true, true)
docFile.write('# Nội dung mới')
`})})]})}function x(t={}){const{wrapper:i}={...h(),...t.components};return i?n.jsx(i,{...t,children:n.jsx(c,{...t})}):c(t)}export{x as default};
