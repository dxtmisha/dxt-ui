import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/7. Lệnh/dxt-figma-layout - Tích hợp Layout Figma`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-figma-layout`,children:`dxt-figma-layout`}),`
`,(0,c.jsxs)(t.p,{children:[`Lệnh `,(0,c.jsx)(t.code,{children:`dxt-figma-layout`}),` cung cấp giao diện dòng lệnh (CLI) để truy xuất cấu trúc layout và hình ảnh thành phần trực tiếp từ Figma. Lệnh này sử dụng bộ điều phối `,(0,c.jsx)(t.code,{children:`DesignFigma`}),` và ứng dụng khách `,(0,c.jsx)(t.code,{children:`FigmaApi`}),` ở bên dưới để trích xuất các tài nguyên ảnh vector SVG dựa trên khóa tệp và ID nút Figma mục tiêu.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Lưu ý`}),`: Yêu cầu bắt buộc phải có gói đăng ký Figma doanh nghiệp (Figma Enterprise hoặc Organization) để thực thi lệnh này và truy xuất các tài nguyên layout.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động Truy xuất Hình ảnh`}),`: Thu thập các layout vector và raster mục tiêu từ tệp Figma dưới định dạng SVG sạch.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Xác thực dựa trên Cấu hình`}),`: Tự động trích xuất mã thông báo (token) truy cập Figma API từ cấu hình hệ thống.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hỗ trợ Tùy chọn Linh hoạt`}),`: Cho phép nhắm mục tiêu động vào các tệp cụ thể và nút cụ thể thông qua các tùy chọn dòng lệnh.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`nó-hoạt-động-như-thế-nào`,children:`Nó hoạt động như thế nào?`}),`
`,(0,c.jsx)(t.p,{children:`Quy trình tích hợp layout tự động hóa việc truy xuất tài nguyên:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsx)(t.li,{children:`Tập lệnh đọc khóa tệp Figma mục tiêu và mã định danh nút tùy chọn được truyền qua các tùy chọn dòng lệnh.`}),`
`,(0,c.jsxs)(t.li,{children:[`Nó khởi tạo bộ điều khiển `,(0,c.jsx)(t.code,{children:`DesignFigma`}),`, truyền các tham số mục tiêu cùng với mã thông báo Figma hệ thống được tự động phân giải.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Ứng dụng khách `,(0,c.jsx)(t.code,{children:`FigmaApi`}),` gửi một yêu cầu HTTP an toàn đến điểm cuối `,(0,c.jsx)(t.code,{children:`fileImages`}),` của Figma, yêu cầu các nút ở định dạng SVG với các tham số bảo toàn ID cụ thể.`]}),`
`,(0,c.jsx)(t.li,{children:`Nó nhận về bản đồ hình ảnh chứa các URL cho tài nguyên đã biên dịch và in kết quả bản đồ JSON trực tiếp ra bảng điều khiển (console).`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-thiết-lập-và-khởi-chạy`,children:`Cách thiết lập và khởi chạy`}),`
`,(0,c.jsx)(t.p,{children:`Không yêu cầu thiết lập phức tạp để chạy bộ tích hợp layout. Hãy đảm bảo rằng mã thông báo Figma API của bạn được cấu hình trong môi trường hoặc cấu hình thuộc tính trước khi thực thi.`}),`
`,(0,c.jsx)(t.p,{children:`Để truy xuất hình ảnh layout, hãy chạy lệnh truyền vào khóa tệp Figma và ID nút cụ thể qua các tùy chọn:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-figma-layout --file abc123xyz456 --node 1-24
`})}),`
`,(0,c.jsx)(t.h2,{id:`tùy-chọn-cli`,children:`Tùy chọn CLI`}),`
`,(0,c.jsx)(t.p,{children:`Lệnh chấp nhận hai tùy chọn có tên:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--file`}),` (`,(0,c.jsx)(t.code,{children:`-f`}),`): Mã định danh duy nhất của tệp Figma (thường tìm thấy trong URL tệp Figma).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--node`}),` (`,(0,c.jsx)(t.code,{children:`-n`}),`): ID nút cụ thể bên trong tệp (ví dụ: `,(0,c.jsx)(t.code,{children:`1-24`}),` hoặc `,(0,c.jsx)(t.code,{children:`1:24`}),`) cần truy xuất.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Chạy `,(0,c.jsx)(t.code,{children:`npx dxt-figma-layout --help`}),` để in ra danh sách đầy đủ các tùy chọn khả dụng.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};