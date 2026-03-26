import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/DesignUi - Bộ điều phối cơ sở hạ tầng UI`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-designui`,children:`Lớp DesignUi`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`DesignUi`}),` là bộ điều phối trung tâm chịu trách nhiệm khởi tạo và đồng bộ hóa toàn bộ cơ sở hạ tầng của thư viện UI. Nó điều phối các tác vụ cấp cao như xây dựng lại kiểu dáng, tạo tài liệu, cập nhật kiến trúc thành phần và cấu hình siêu dữ liệu phân phối gói.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Điều phối tập trung`}),` — Quản lý luồng thực thi của nhiều trình tạo chuyên biệt (Styles, Wiki, Components).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khởi tạo tăng dần`}),` — Hỗ trợ khởi tạo một thành phần cụ thể hoặc toàn bộ bộ thư viện.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý bộ nhớ đệm`}),` — Tự động xóa bộ nhớ đệm thuộc tính để đảm bảo tất cả các tài sản được tạo ra đều sử dụng các token hệ thống thiết kế mới nhất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động cấu hình gói`}),` — Cập nhật động bản đồ xuất (export maps) trong `,(0,c.jsx)(n.code,{children:`package.json`}),` để phản ánh trạng thái xây dựng hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tổng hợp cấp thư viện`}),` — Kích hoạt các bản cập nhật toàn cục cho các plugin, tài sản truyền thông và định nghĩa kiểu trên toàn bộ không gian làm việc.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.p,{children:`Khởi tạo bộ điều phối bằng cách tùy chọn cung cấp tên thành phần. Nếu không có tên nào được cung cấp, lớp sẽ hoạt động trên tất cả các thành phần được tìm thấy trong thư viện.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Mã định danh của một thành phần cụ thể cần xử lý (tùy chọn, mặc định là `,(0,c.jsx)(n.code,{children:`''`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignUi } from '@dxtmisha/scripts'

// Để cập nhật mọi thứ:
const ui = new DesignUi()
ui.make()

// Để cập nhật một thành phần cụ thể:
const buttonUi = new DesignUi('button')
buttonUi.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — Thực hiện quy trình khởi tạo đầy đủ, kích hoạt tuần tự tất cả các bản cập nhật cơ sở hạ tầng.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`quy-trình-khởi-tạo-ui-the-ui-initialization-pipeline`,children:`Quy trình khởi tạo UI (The UI Initialization Pipeline)`}),`
`,(0,c.jsxs)(n.p,{children:[`Khi `,(0,c.jsx)(n.code,{children:`make()`}),` được gọi, `,(0,c.jsx)(n.code,{children:`DesignUi`}),` điều phối một bản cập nhật đa giai đoạn toàn diện:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đặt lại môi trường`}),`: Xóa `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),` để ngăn các token cũ ảnh hưởng đến bản xây dựng mới.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo cơ sở hạ tầng`}),`: Kích hoạt việc tạo `,(0,c.jsx)(n.code,{children:`Styles`}),` và `,(0,c.jsx)(n.code,{children:`DesignWiki`}),` toàn cục để chuẩn bị nền tảng hình ảnh và tài liệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đồng bộ hóa thành phần`}),`: Thực thi `,(0,c.jsx)(n.code,{children:`DesignComponent`}),` cho (các) thành phần mục tiêu, phân giải siêu dữ liệu cấu trúc và tạo các tệp nguồn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuẩn bị phân phối`}),`: Cập nhật `,(0,c.jsx)(n.code,{children:`package.json`}),` với các ánh xạ xuất mới nhất cho CSS, SCSS và các mô-đun tập lệnh.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tổng hợp thư viện`}),`: Kích hoạt tuần tự các trình tạo chuyên dụng cấp thư viện:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`LibraryMedia`}),`: Đồng bộ hóa các tài sản biểu tượng và cờ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`LibraryList`}),`: Biên soạn danh mục thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`LibraryPlugin`}),`: Xây dựng lại các plugin tích hợp Vue/framework.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`LibraryAiWiki`}),`: Tạo các cấu phần tài liệu được tối ưu hóa cho AI.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`LibraryTypes`}),`: Biên soạn các định nghĩa kiểu toàn cục.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`vai-trò-trong-hệ-sinh-thái`,children:`Vai trò trong hệ sinh thái`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`DesignUi`}),` đóng vai trò là điểm nhập chính cho các nhà phát triển và các công cụ xây dựng tự động. Bằng cách trừu tượng hóa sự phức tạp của hàng chục lớp chuyên biệt, nó cung cấp một giao diện "một cú nhấp chuột" ổn định để giữ cho thư viện UI luôn đồng bộ với các thông số kỹ thuật đang phát triển của hệ thống thiết kế.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};