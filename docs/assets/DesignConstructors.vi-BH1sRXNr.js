import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/DesignConstructors - Trình quản lý các hàm khởi tạo thiết kế`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-designconstructors`,children:`Lớp DesignConstructors`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`DesignConstructors`}),` đóng vai trò là trình điều phối cấp cao để quản lý tất cả các constructor của thành phần trong hệ thống thiết kế. Nó xử lý các hoạt động hàng loạt, chẳng hạn như cập nhật tất cả các constructor hiện có cùng một lúc và quản lý việc hợp nhất các kiểu dáng thành phần vào các xuất bản thư viện toàn cầu.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý vòng đời hàng loạt`}),` — Có thể kích hoạt cập nhật cho tất cả các thành phần trong thư mục `,(0,c.jsx)(n.code,{children:`constructors`}),` hoặc nhắm mục tiêu vào một thành phần cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý bộ nhớ đệm (Cache)`}),` — Tự động xóa bộ nhớ đệm thuộc tính trước khi bắt đầu quá trình tạo để đảm bảo dữ liệu luôn mới.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hợp nhất kiểu dáng tự động`}),` — Quét tất cả các thành phần và tạo một điểm nhập SCSS tập trung cho thư viện toàn cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khám phá danh mục`}),` — Tự động xác định tất cả các constructor thành phần nằm trong đường dẫn nguồn của hệ thống.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.p,{children:`Để khởi tạo trình quản lý, hãy sử dụng hàm khởi tạo. Nếu một tên được cung cấp, các hoạt động sẽ bị giới hạn ở thành phần cụ thể đó.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name?: string`}),` — Mã định danh duy nhất tùy chọn của một thành phần cần xử lý.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignConstructors } from '@dxtmisha/scripts'

// Trình quản lý cho tất cả các constructor
const manager = new DesignConstructors()
manager.make()

// Trình quản lý cho một thành phần cụ thể
const buttonManager = new DesignConstructors('button')
buttonManager.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — Bắt đầu quá trình tạo hoặc cập nhật cho một hoặc tất cả các constructor được xác định và làm mới các kiểu dáng toàn cục.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`thông-tin`,children:`Thông tin`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getComponents(): string[]`}),` — Trả về danh sách tất cả các mã định danh thành phần được tìm thấy trong thư mục constructors.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getComponentsStyle(): string[]`}),` — Trả về một mảng các câu lệnh SCSS `,(0,c.jsx)(n.code,{children:`@forward`}),` cho tất cả các thành phần đã đăng ký.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`tạo-kiểu-dáng-toàn-cục-global-style-generation`,children:`Tạo kiểu dáng toàn cục (Global Style Generation)`}),`
`,(0,c.jsxs)(n.p,{children:[`Một trong những trách nhiệm chính của lớp này là duy trì tệp `,(0,c.jsx)(n.code,{children:`style.scss`}),` trong thư mục gốc của thư viện. Phương thức `,(0,c.jsx)(n.code,{children:`makeStyle()`}),` thực hiện các công việc sau:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quét`}),`: Lấy danh sách tất cả các thành phần thông qua `,(0,c.jsx)(n.code,{children:`getComponents()`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ánh xạ đường dẫn`}),`: Xây dựng các quy tắc `,(0,c.jsx)(n.code,{children:`@forward`}),` trỏ đến tệp kiểu dáng riêng lẻ của mỗi thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ghi tệp`}),`: Ghi các quy tắc này vào tệp `,(0,c.jsx)(n.code,{children:`packages/library/style.scss`}),` tập trung, đảm bảo rằng các kiểu dáng của toàn bộ hệ thống thiết kế có thể truy cập được thông qua một lần nhập (import) duy nhất.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`quy-trình-thực-thi`,children:`Quy trình thực thi`}),`
`,(0,c.jsxs)(n.p,{children:[`Khi `,(0,c.jsx)(n.code,{children:`make()`}),` được gọi, lớp sẽ tuân theo trình tự sau:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dọn dẹp`}),`: Xóa `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),` để ngăn dữ liệu cũ ảnh hưởng đến kết quả đầu ra.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ủy quyền`}),`:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Nếu `,(0,c.jsx)(n.code,{children:`name`}),` được cung cấp trong quá trình khởi tạo, nó sẽ tạo một `,(0,c.jsx)(n.code,{children:`DesignConstructor`}),` mới cho thành phần đó và gọi phương thức `,(0,c.jsx)(n.code,{children:`make()`}),` của nó.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Nếu không có `,(0,c.jsx)(n.code,{children:`name`}),` nào được cung cấp, nó sẽ lặp qua tất cả các thành phần được phát hiện, tạo một `,(0,c.jsx)(n.code,{children:`DesignConstructor`}),` cho mỗi thành phần và kích hoạt các bản cập nhật của chúng.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hợp nhất`}),`: Cuối cùng, nó gọi `,(0,c.jsx)(n.code,{children:`makeStyle()`}),` để đồng bộ hóa các xuất bản kiểu dáng toàn cục với danh sách thành phần hiện tại.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};