import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/# Lệnh/dxt-ui - Trình Điều Phối Thiết Kế Hệ Thống UI`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-ui`,children:`dxt-ui`}),`
`,(0,c.jsxs)(n.p,{children:[`Lệnh `,(0,c.jsx)(n.code,{children:`dxt-ui`}),` là trình điều phối trung tâm để xây dựng và khởi tạo thư viện thành phần giao diện người dùng (UI Design System). Nó điều phối việc tạo kiểu dáng (styles), xây dựng tài liệu, cấu trúc thành phần, xuất bản gói và các tệp kiểu TypeScript (typings).`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khởi tạo và Cập nhật Thành phần`}),`: Khởi tạo các thành phần mới hoặc cập nhật hàng loạt cấu trúc thành phần hiện có và tài nguyên SCSS.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý Xuất bản Gói`}),`: Tự động cấu hình tệp `,(0,c.jsx)(n.code,{children:`package.json`}),` của thư viện với các ánh xạ xuất bản chính xác cho các kiểu SASS, plugin, tài nguyên đa phương tiện và kiểu TypeScript.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quy trình Xây dựng Thống nhất`}),`: Kích hoạt tuần tự các quá trình biên dịch kiểu dáng (`,(0,c.jsx)(n.code,{children:`Styles`}),`), xây dựng tài liệu (`,(0,c.jsx)(n.code,{children:`DesignWiki`}),`), trình bao bọc kiểu web và trình tạo danh sách đa phương tiện.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`nó-hoạt-động-như-thế-nào`,children:`Nó hoạt động như thế nào?`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xóa Bộ Nhớ Đệm`}),`: Tập lệnh đặt lại các bộ nhớ đệm xây dựng thuộc tính cục bộ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Biên dịch SASS & Wiki`}),`: Giải quyết các ánh xạ biến SCSS toàn cục và biên dịch tài liệu thành phần Markdown cốt lõi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khởi tạo Thành phần`}),`:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Nếu cung cấp tham số tên thành phần `,(0,c.jsx)(n.code,{children:`name`}),`, nó sẽ tạo khung cấu trúc thành phần đó (HTML, thiết lập kịch bản, bảng kiểu SCSS).`]}),`
`,(0,c.jsx)(n.li,{children:`Nếu bỏ trống tên thành phần, nó sẽ cập nhật hàng loạt tất cả các thành phần đã đăng ký.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cập nhật package.json`}),`: Thiết lập các mục nhập ánh xạ xuất bản gói cho các tệp CSS, SASS, Vue Plugins và các tệp Kiểu dữ liệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Biên dịch Tài nguyên Thư viện`}),`: Chạy các tác vụ để xuất các thư viện cho tài sản đa phương tiện, plugin, kiểu web và danh sách thành phần.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cách-sử-dụng`,children:`Cách sử dụng`}),`
`,(0,c.jsxs)(n.p,{children:[`Chạy trình điều phối thông qua `,(0,c.jsx)(n.code,{children:`npx`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-ui [component-name]
`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`component-name`}),` (Tùy chọn): Tên của một thành phần cụ thể để khởi tạo hoặc cập nhật. Nếu bỏ qua, tất cả các thành phần sẽ được cập nhật.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};