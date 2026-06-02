import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/bin/dxt-figma-layout - Tích hợp Layout Figma`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-figma-layout`,children:`dxt-figma-layout`}),`
`,(0,c.jsxs)(n.p,{children:[`Lệnh `,(0,c.jsx)(n.code,{children:`dxt-figma-layout`}),` cung cấp giao diện dòng lệnh (CLI) để truy xuất cấu trúc layout và hình ảnh thành phần trực tiếp từ Figma. Lệnh này sử dụng bộ điều phối `,(0,c.jsx)(n.code,{children:`DesignFigma`}),` và ứng dụng khách `,(0,c.jsx)(n.code,{children:`FigmaApi`}),` ở bên dưới để trích xuất các tài nguyên ảnh vector SVG dựa trên khóa tệp và ID nút Figma mục tiêu.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Lưu ý`}),`: Yêu cầu bắt buộc phải có gói đăng ký Figma doanh nghiệp (Figma Enterprise hoặc Organization) để thực thi lệnh này và truy xuất các tài nguyên layout.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động Truy xuất Hình ảnh`}),`: Thu thập các layout vector và raster mục tiêu từ tệp Figma dưới định dạng SVG sạch.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xác thực dựa trên Cấu hình`}),`: Tự động trích xuất mã thông báo (token) truy cập Figma API từ cấu hình hệ thống.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ Đối số Linh hoạt`}),`: Cho phép nhắm mục tiêu động vào các tệp cụ thể và nút cụ thể thông qua tham số dòng lệnh.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`nó-hoạt-động-như-thế-nào`,children:`Nó hoạt động như thế nào?`}),`
`,(0,c.jsx)(n.p,{children:`Quy trình tích hợp layout tự động hóa việc truy xuất tài nguyên:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsx)(n.li,{children:`Tập lệnh đọc khóa tệp Figma mục tiêu và mã định danh nút tùy chọn được truyền trực tiếp từ các đối số dòng lệnh.`}),`
`,(0,c.jsxs)(n.li,{children:[`Nó khởi tạo bộ điều khiển `,(0,c.jsx)(n.code,{children:`DesignFigma`}),`, truyền các tham số mục tiêu cùng với mã thông báo Figma hệ thống được tự động phân giải.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Ứng dụng khách `,(0,c.jsx)(n.code,{children:`FigmaApi`}),` gửi một yêu cầu HTTP an toàn đến điểm cuối `,(0,c.jsx)(n.code,{children:`fileImages`}),` của Figma, yêu cầu các nút ở định dạng SVG với các tham số bảo toàn ID cụ thể.`]}),`
`,(0,c.jsx)(n.li,{children:`Nó nhận về bản đồ hình ảnh chứa các URL cho tài nguyên đã biên dịch và in kết quả bản đồ JSON trực tiếp ra bảng điều khiển (console).`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cách-thiết-lập-và-khởi-chạy`,children:`Cách thiết lập và khởi chạy`}),`
`,(0,c.jsx)(n.p,{children:`Không yêu cầu thiết lập phức tạp để chạy bộ tích hợp layout. Hãy đảm bảo rằng mã thông báo Figma API của bạn được cấu hình trong môi trường hoặc cấu hình thuộc tính trước khi thực thi.`}),`
`,(0,c.jsx)(n.p,{children:`Để truy xuất hình ảnh layout, hãy chạy lệnh truyền vào khóa tệp Figma và ID nút cụ thể:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-figma-layout [fileKey] [nodeId]
`})}),`
`,(0,c.jsx)(n.p,{children:`Ví dụ:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-figma-layout abc123xyz456 1-24
`})}),`
`,(0,c.jsx)(n.h2,{id:`đối-số-cli`,children:`Đối số CLI`}),`
`,(0,c.jsx)(n.p,{children:`Lệnh chấp nhận hai tham số vị trí:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`fileKey`}),`: Mã định danh duy nhất của tệp Figma (thường tìm thấy trong URL tệp Figma).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nodeId`}),`: ID nút cụ thể bên trong tệp (ví dụ: `,(0,c.jsx)(n.code,{children:`1-24`}),` hoặc `,(0,c.jsx)(n.code,{children:`1:24`}),`) cần truy xuất.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};