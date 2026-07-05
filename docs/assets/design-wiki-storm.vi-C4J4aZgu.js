import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/# Lệnh/dxt-wiki-storm - Trình Tạo Siêu Dữ Liệu Cho WebStorm IDE`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-wiki-storm`,children:`dxt-wiki-storm`}),`
`,(0,c.jsxs)(n.p,{children:[`Lệnh `,(0,c.jsx)(n.code,{children:`dxt-wiki-storm`}),` tạo tệp siêu dữ liệu `,(0,c.jsx)(n.code,{children:`web-types.json`}),` trong thư mục biên dịch. Tệp này chứa thông tin chi tiết về thẻ component, thuộc tính, sự kiện cho JetBrains IDEs (như WebStorm và IntelliJ IDEA) để kích hoạt tính năng tự động hoàn thành (IntelliSense) và chú giải công cụ.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp JetBrains`}),`: Cung cấp trực tiếp siêu dữ liệu cho trình soạn thảo, giúp WebStorm nhận dạng các thành phần Vue tùy chỉnh và cấu hình của chúng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động Trích xuất Siêu dữ liệu`}),`: Duyệt qua tất cả các thành phần hoạt động trong thư viện để kiểm tra và phân tích cú pháp các thuộc tính, sự kiện và khe cắm (slots).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lược đồ Chuẩn`}),`: Xuất dữ liệu tuân thủ nghiêm ngặt định dạng lược đồ Web-Types tiêu chuẩn.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`nó-hoạt-động-như-thế-nào`,children:`Nó hoạt động như thế nào?`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xác nhận Ngữ cảnh`}),`: Tập lệnh đọc tệp `,(0,c.jsx)(n.code,{children:`package.json`}),` của không gian làm việc để trích xuất tên và phiên bản của gói.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thu thập Thành phần`}),`: Lặp qua tất cả các thành phần hệ thống thiết kế đã đăng ký thông qua một trình trợ giúp thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân tích API Thành phần`}),`: Khởi tạo một trình quét cho mỗi thành phần để đọc và định dạng các thuộc tính (props), sự kiện (emits) và các tùy chọn của nó.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo JSON`}),`: Kết hợp thông tin đã quét vào một đối tượng đóng góp `,(0,c.jsx)(n.code,{children:`web-types.json`}),` duy nhất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu trữ`}),`: Lưu tệp vào trong thư mục bản dựng (mặc định là `,(0,c.jsx)(n.code,{children:`dist/web-types.json`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cách-sử-dụng`,children:`Cách sử dụng`}),`
`,(0,c.jsxs)(n.p,{children:[`Chạy trình biên dịch siêu dữ liệu thông qua `,(0,c.jsx)(n.code,{children:`npx`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-wiki-storm [output_dir]
`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`output_dir`}),` (Tùy chọn): Thư mục để lưu tệp. Mặc định là `,(0,c.jsx)(n.code,{children:`dist`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};