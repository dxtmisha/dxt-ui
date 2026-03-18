import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(i){const h={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/scripts/Classes/DesignWikiStorm - Trình tạo siêu dữ liệu cho IDE"}),`
`,n.jsx(h.h1,{id:"lớp-designwikistorm",children:"Lớp DesignWikiStorm"}),`
`,n.jsxs(h.p,{children:["Lớp ",n.jsx(h.code,{children:"DesignWikiStorm"})," là một tiện ích chuyên dụng được thiết kế để thu hẹp khoảng cách giữa mã nguồn của hệ thống thiết kế và các công cụ hỗ trợ năng suất cho nhà phát triển. Nó tự động hóa việc tạo ",n.jsx(h.code,{children:"web-types.json"}),", một định dạng siêu dữ liệu chuẩn hóa được sử dụng bởi các IDE của JetBrains (WebStorm, IntelliJ IDEA) để cung cấp IntelliSense nâng cao, tự động hoàn thành và các mô tả tài liệu (tooltips) cho các thành phần Vue."]}),`
`,n.jsx(h.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tuân thủ tiêu chuẩn Web-Types"})," — Tạo siêu dữ liệu tuân thủ nghiêm ngặt giản đồ (schema) JSON chính thức của Web-Types."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tối ưu hóa IntelliSense"})," — Chuyển đổi các thuộc tính, sự kiện và slot của thành phần thành các định nghĩa thân thiện với IDE."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Khám phá thư mục tự động"})," — Quét đệ quy thư viện để xác định tất cả các thành phần và siêu dữ liệu tương ứng của chúng."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tự động cập nhật phiên bản"})," — Tự động đồng bộ hóa phiên bản siêu dữ liệu được tạo ra với phiên bản hiện tại trong ",n.jsx(h.code,{children:"package.json"}),"."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tích hợp Framework"})," — Được cấu hình đặc biệt cho Vue.js, đảm bảo rằng các thẻ và thuộc tính thành phần được nhận diện chính xác trong các tệp ",n.jsx(h.code,{children:".vue"}),"."]}),`
`]}),`
`,n.jsx(h.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(h.p,{children:["Khởi tạo trình tạo bằng cách chỉ định thư mục đích nơi tệp ",n.jsx(h.code,{children:"web-types.json"})," sẽ được lưu trữ."]}),`
`,n.jsx(h.p,{children:n.jsx(h.strong,{children:"Tham số:"})}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"dir: string"})," — Đường dẫn đến thư mục đầu ra (mặc định là ",n.jsx(h.code,{children:"'dist'"}),")."]}),`
`]}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-typescript",children:`import { DesignWikiStorm } from '@dxtmisha/scripts'

const generator = new DesignWikiStorm('dist')
await generator.make()
`})}),`
`,n.jsx(h.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(h.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"make(): Promise<void>"})," — Kích hoạt quy trình tạo chính."]}),`
`]}),`
`,n.jsx(h.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(h.h3,{id:"quy-trình-tạo-web-types-web-types-generation-workflow",children:"Quy trình tạo Web-Types (Web-Types Generation Workflow)"}),`
`,n.jsxs(h.p,{children:["Khi ",n.jsx(h.code,{children:"make()"})," được gọi, lớp sẽ điều phối một quy trình tổng hợp dữ liệu đa giai đoạn:"]}),`
`,n.jsxs(h.ol,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Thu thập ngữ cảnh"}),": Nó tải ",n.jsx(h.code,{children:"package.json"})," để lấy tên thư viện và phiên bản hiện tại."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Khởi tạo Giản đồ"}),": Nó khởi tạo một đối tượng dựa trên giản đồ Web-Types, đặt framework thành Vue và xác định định dạng tài liệu là Markdown."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Duyệt qua các thành phần"}),": Nó duyệt qua mọi thành phần được đăng ký trong ",n.jsx(h.code,{children:"LibraryItems"}),"."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Phân tích chi tiết"}),": Đối với mỗi thành phần, nó khởi tạo ",n.jsx(h.code,{children:"DesignWikiStormItem"}),", thực hiện phân tích sâu các tệp mã nguồn của thành phần để trích xuất:",`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tags"}),": Tên thành phần (ví dụ: ",n.jsx(h.code,{children:"d1-button"}),")."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Attributes"}),": Tên thuộc tính, kiểu dữ liệu và giá trị mặc định."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Events"}),": Tên các sự kiện được phát ra và dữ liệu kèm theo (payload)."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Slots"}),": Các điểm tùy chỉnh có sẵn và các biến phạm vi (scoped variables) của chúng."]}),`
`]}),`
`]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Lưu trữ"}),": Đối tượng siêu dữ liệu hợp nhất cuối cùng được ghi vào tệp ",n.jsx(h.code,{children:"web-types.json"})," trong thư mục đã chỉ định."]}),`
`]}),`
`,n.jsx(h.h3,{id:"tác-động-đến-trải-nghiệm-nhà-phát-triển",children:"Tác động đến trải nghiệm nhà phát triển"}),`
`,n.jsxs(h.p,{children:["Bằng cách tạo ",n.jsx(h.code,{children:"web-types.json"}),", hệ thống thiết kế đảm bảo rằng các nhà phát triển sử dụng công cụ của JetBrains nhận được mức độ hỗ trợ tương đương với khi làm việc với các phần tử HTML gốc. Các kiểu thuộc tính được xác thực theo thời gian thực ngay trong IDE và các chú thích tài liệu được hiển thị trực tiếp trong trình soạn thảo mã, giảm đáng kể nhu cầu tham khảo các trang wiki bên ngoài."]})]})}function p(i={}){const{wrapper:h}={...c(),...i.components};return h?n.jsx(h,{...i,children:n.jsx(t,{...i})}):t(i)}export{p as default};
