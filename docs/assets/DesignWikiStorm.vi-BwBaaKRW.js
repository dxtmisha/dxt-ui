import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/DesignWikiStorm - Trình tạo siêu dữ liệu cho IDE`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-designwikistorm`,children:`Lớp DesignWikiStorm`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`DesignWikiStorm`}),` là một tiện ích chuyên dụng được thiết kế để thu hẹp khoảng cách giữa mã nguồn của hệ thống thiết kế và các công cụ hỗ trợ năng suất cho nhà phát triển. Nó tự động hóa việc tạo `,(0,c.jsx)(n.code,{children:`web-types.json`}),`, một định dạng siêu dữ liệu chuẩn hóa được sử dụng bởi các IDE của JetBrains (WebStorm, IntelliJ IDEA) để cung cấp IntelliSense nâng cao, tự động hoàn thành và các mô tả tài liệu (tooltips) cho các thành phần Vue.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tuân thủ tiêu chuẩn Web-Types`}),` — Tạo siêu dữ liệu tuân thủ nghiêm ngặt giản đồ (schema) JSON chính thức của Web-Types.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tối ưu hóa IntelliSense`}),` — Chuyển đổi các thuộc tính, sự kiện và slot của thành phần thành các định nghĩa thân thiện với IDE.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khám phá thư mục tự động`}),` — Quét đệ quy thư viện để xác định tất cả các thành phần và siêu dữ liệu tương ứng của chúng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động cập nhật phiên bản`}),` — Tự động đồng bộ hóa phiên bản siêu dữ liệu được tạo ra với phiên bản hiện tại trong `,(0,c.jsx)(n.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp Framework`}),` — Được cấu hình đặc biệt cho Vue.js, đảm bảo rằng các thẻ và thuộc tính thành phần được nhận diện chính xác trong các tệp `,(0,c.jsx)(n.code,{children:`.vue`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Khởi tạo trình tạo bằng cách chỉ định thư mục đích nơi tệp `,(0,c.jsx)(n.code,{children:`web-types.json`}),` sẽ được lưu trữ.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dir: string`}),` — Đường dẫn đến thư mục đầu ra (mặc định là `,(0,c.jsx)(n.code,{children:`'dist'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignWikiStorm } from '@dxtmisha/scripts'

const generator = new DesignWikiStorm('dist')
await generator.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): Promise<void>`}),` — Kích hoạt quy trình tạo chính.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`quy-trình-tạo-web-types-web-types-generation-workflow`,children:`Quy trình tạo Web-Types (Web-Types Generation Workflow)`}),`
`,(0,c.jsxs)(n.p,{children:[`Khi `,(0,c.jsx)(n.code,{children:`make()`}),` được gọi, lớp sẽ điều phối một quy trình tổng hợp dữ liệu đa giai đoạn:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thu thập ngữ cảnh`}),`: Nó tải `,(0,c.jsx)(n.code,{children:`package.json`}),` để lấy tên thư viện và phiên bản hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khởi tạo Giản đồ`}),`: Nó khởi tạo một đối tượng dựa trên giản đồ Web-Types, đặt framework thành Vue và xác định định dạng tài liệu là Markdown.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Duyệt qua các thành phần`}),`: Nó duyệt qua mọi thành phần được đăng ký trong `,(0,c.jsx)(n.code,{children:`LibraryItems`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân tích chi tiết`}),`: Đối với mỗi thành phần, nó khởi tạo `,(0,c.jsx)(n.code,{children:`DesignWikiStormItem`}),`, thực hiện phân tích sâu các tệp mã nguồn của thành phần để trích xuất:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tags`}),`: Tên thành phần (ví dụ: `,(0,c.jsx)(n.code,{children:`d1-button`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Attributes`}),`: Tên thuộc tính, kiểu dữ liệu và giá trị mặc định.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Events`}),`: Tên các sự kiện được phát ra và dữ liệu kèm theo (payload).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Slots`}),`: Các điểm tùy chỉnh có sẵn và các biến phạm vi (scoped variables) của chúng.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu trữ`}),`: Đối tượng siêu dữ liệu hợp nhất cuối cùng được ghi vào tệp `,(0,c.jsx)(n.code,{children:`web-types.json`}),` trong thư mục đã chỉ định.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`tác-động-đến-trải-nghiệm-nhà-phát-triển`,children:`Tác động đến trải nghiệm nhà phát triển`}),`
`,(0,c.jsxs)(n.p,{children:[`Bằng cách tạo `,(0,c.jsx)(n.code,{children:`web-types.json`}),`, hệ thống thiết kế đảm bảo rằng các nhà phát triển sử dụng công cụ của JetBrains nhận được mức độ hỗ trợ tương đương với khi làm việc với các phần tử HTML gốc. Các kiểu thuộc tính được xác thực theo thời gian thực ngay trong IDE và các chú thích tài liệu được hiển thị trực tiếp trong trình soạn thảo mã, giảm đáng kể nhu cầu tham khảo các trang wiki bên ngoài.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};