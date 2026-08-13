import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/# Lệnh/dxt-screenshot - Chụp Ảnh Màn Hình Máy Chủ Phát Triển`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-screenshot`,children:`dxt-screenshot`}),`
`,(0,c.jsxs)(t.p,{children:[`Lệnh `,(0,c.jsx)(t.code,{children:`dxt-screenshot`}),` tự động hóa việc chụp ảnh giao diện người dùng. Nó khởi chạy máy chủ phát triển (dev server) của dự án, mở một trình duyệt ẩn danh (headless browser), chụp ảnh màn hình trang ở độ phân giải cao, và trích xuất mã HTML cũng như CSS tĩnh của nó.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động Quản lý Máy chủ`}),`: Tự động khởi động máy chủ phát triển cục bộ (`,(0,c.jsx)(t.code,{children:`npm run dev`}),`) và tắt nó một cách sạch sẽ sau khi hoàn tất chụp ảnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chụp ảnh Trình duyệt Ẩn danh`}),`: Sử dụng Puppeteer thông qua một lớp bọc `,(0,c.jsx)(t.code,{children:`BrowserItem`}),` tùy chỉnh để hiển thị các trang ở độ phân giải cao (chiều cao mặc định 12000px) và chụp ảnh chụp nhanh `,(0,c.jsx)(t.code,{children:`.webp`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Trích xuất Tài nguyên`}),`: Lưu cấu trúc trang thô của ảnh chụp nhanh vào tệp `,(0,c.jsx)(t.code,{children:`screenshot-code.html`}),` và mã CSS đã tính toán vào tệp `,(0,c.jsx)(t.code,{children:`screenshot-styles.css`}),` để phục vụ công tác kiểm tra giao diện.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`nó-hoạt-động-như-thế-nào`,children:`Nó hoạt động như thế nào?`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Khởi chạy Dev Server`}),`: Tập lệnh chạy lệnh `,(0,c.jsx)(t.code,{children:`npm run dev`}),` dưới dạng một tiến trình con chạy ngầm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Xác định URL`}),`: Nó lắng nghe luồng đầu ra stdout để phát hiện địa chỉ máy chủ cục bộ (ví dụ: `,(0,c.jsx)(t.code,{children:`http://localhost:5173`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chụp trang`}),`: Khi URL được xác định, nó sẽ mở một phiên bản trình duyệt Puppeteer và điều hướng đến URL đó.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Xuất Kết quả`}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Chụp ảnh toàn bộ trang và lưu tệp.`}),`
`,(0,c.jsxs)(t.li,{children:[`Trích xuất phần thân DOM của trang và ghi vào tệp `,(0,c.jsx)(t.code,{children:`[path]-code.html`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Trích xuất các bảng kiểu (stylesheets) của trang và ghi vào tệp `,(0,c.jsx)(t.code,{children:`[path]-styles.css`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dọn dẹp`}),`: Tắt tiến trình con của dev server một cách an toàn.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-sử-dụng`,children:`Cách sử dụng`}),`
`,(0,c.jsxs)(t.p,{children:[`Chạy công cụ chụp ảnh màn hình thông qua `,(0,c.jsx)(t.code,{children:`npx`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-screenshot
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Các tệp kết quả chụp sẽ được lưu trong thư mục `,(0,c.jsx)(t.code,{children:`./ai-screenshot/`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};