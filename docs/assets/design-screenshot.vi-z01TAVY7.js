import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/# Lệnh/dxt-screenshot - Chụp Ảnh Màn Hình Máy Chủ Phát Triển`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-screenshot`,children:`dxt-screenshot`}),`
`,(0,c.jsxs)(n.p,{children:[`Lệnh `,(0,c.jsx)(n.code,{children:`dxt-screenshot`}),` tự động hóa việc chụp ảnh giao diện người dùng. Nó khởi chạy máy chủ phát triển (dev server) của dự án, mở một trình duyệt ẩn danh (headless browser), chụp ảnh màn hình trang ở độ phân giải cao, và trích xuất mã HTML cũng như CSS tĩnh của nó.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động Quản lý Máy chủ`}),`: Tự động khởi động máy chủ phát triển cục bộ (`,(0,c.jsx)(n.code,{children:`npm run dev`}),`) và tắt nó một cách sạch sẽ sau khi hoàn tất chụp ảnh.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chụp ảnh Trình duyệt Ẩn danh`}),`: Sử dụng Puppeteer thông qua một lớp bọc `,(0,c.jsx)(n.code,{children:`BrowserItem`}),` tùy chỉnh để hiển thị các trang ở độ phân giải cao (chiều cao mặc định 12000px) và chụp ảnh chụp nhanh `,(0,c.jsx)(n.code,{children:`.webp`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Trích xuất Tài nguyên`}),`: Lưu cấu trúc trang thô của ảnh chụp nhanh vào tệp `,(0,c.jsx)(n.code,{children:`screenshot-code.html`}),` và mã CSS đã tính toán vào tệp `,(0,c.jsx)(n.code,{children:`screenshot-styles.css`}),` để phục vụ công tác kiểm tra giao diện.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`nó-hoạt-động-như-thế-nào`,children:`Nó hoạt động như thế nào?`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khởi chạy Dev Server`}),`: Tập lệnh chạy lệnh `,(0,c.jsx)(n.code,{children:`npm run dev`}),` dưới dạng một tiến trình con chạy ngầm.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xác định URL`}),`: Nó lắng nghe luồng đầu ra stdout để phát hiện địa chỉ máy chủ cục bộ (ví dụ: `,(0,c.jsx)(n.code,{children:`http://localhost:5173`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chụp trang`}),`: Khi URL được xác định, nó sẽ mở một phiên bản trình duyệt Puppeteer và điều hướng đến URL đó.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xuất Kết quả`}),`:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Chụp ảnh toàn bộ trang và lưu tệp.`}),`
`,(0,c.jsxs)(n.li,{children:[`Trích xuất phần thân DOM của trang và ghi vào tệp `,(0,c.jsx)(n.code,{children:`[path]-code.html`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Trích xuất các bảng kiểu (stylesheets) của trang và ghi vào tệp `,(0,c.jsx)(n.code,{children:`[path]-styles.css`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dọn dẹp`}),`: Tắt tiến trình con của dev server một cách an toàn.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cách-sử-dụng`,children:`Cách sử dụng`}),`
`,(0,c.jsxs)(n.p,{children:[`Chạy công cụ chụp ảnh màn hình thông qua `,(0,c.jsx)(n.code,{children:`npx`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-screenshot
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Các tệp kết quả chụp sẽ được lưu trong thư mục `,(0,c.jsx)(n.code,{children:`./ai-screenshot/`}),`.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};