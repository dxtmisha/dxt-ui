import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/7. Lệnh/dxt-flags - Trình tạo Sprite cờ`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-flags`,children:`dxt-flags`}),`
`,(0,c.jsxs)(t.p,{children:[`Lệnh `,(0,c.jsx)(t.code,{children:`dxt-flags`}),` cung cấp một tiện ích tự động để biên dịch một thư mục chứa các biểu tượng cờ SVG thành một ảnh sprite WebP duy nhất được tối ưu hóa và tạo bảng kiểu dáng CSS ánh xạ vị trí tương ứng. Lệnh này sử dụng lớp `,(0,c.jsx)(t.code,{children:`DesignFlags`}),` để xử lý hiển thị dựa trên canvas và tính toán lưới.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Lưu ý`}),`: Tập lệnh này chỉ dành riêng cho việc sử dụng nội bộ bên trong kho lưu trữ dự án `,(0,c.jsx)(t.code,{children:`dxt-ui`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động Đóng gói Sprite`}),`: Kết hợp nhiều tệp SVG riêng lệ thành một tấm sprite WebP duy nhất có hiệu suất cao.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ánh xạ Vị trí Động`}),`: Tự động tính toán các tọa độ chính xác dựa trên phần trăm và tạo một bảng kiểu dáng CSS với các lớp định vị tiện ích.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thu phóng High-DPI`}),`: Hiển thị cờ bằng cách sử dụng các thư viện canvas hiệu suất cao với hệ số tỷ lệ 2x để đạt được độ sắc nét tối ưu.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`nó-hoạt-động-như-thế-nào`,children:`Nó hoạt động như thế nào?`}),`
`,(0,c.jsx)(t.p,{children:`Quy trình tạo sinh cờ tự động hóa việc lắp ráp sprite và các phong cách tiện ích:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Tập lệnh quét thư mục biểu tượng cờ mặc định để tìm tất cả các tệp `,(0,c.jsx)(t.code,{children:`.svg`}),`.`]}),`
`,(0,c.jsx)(t.li,{children:`Nó khởi tạo một canvas trống bằng các công cụ hiển thị hiệu suất cao, tính toán các cột và hàng lưới dựa trên số lượng cờ.`}),`
`,(0,c.jsx)(t.li,{children:`Nó lặp qua các tệp SVG được phát hiện, tải từng tệp vào bộ nhớ và vẽ chúng vào các vị trí lưới đã tính toán trong khi vẫn bảo toàn khoảng cách và tỷ lệ layout.`}),`
`,(0,c.jsx)(t.li,{children:`Nó ghi lại tọa độ và tên của mọi lá cờ để xây dựng các bản ghi ánh xạ vị trí.`}),`
`,(0,c.jsxs)(t.li,{children:[`Nó xuất bộ đệm canvas đã kết hợp thành một tệp hình ảnh sprite `,(0,c.jsx)(t.code,{children:`.webp`}),` và ghi tệp bảng kiểu dáng tiện ích chứa các ánh xạ vị trí nền CSS.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-thiết-lập-và-khởi-chạy`,children:`Cách thiết lập và khởi chạy`}),`
`,(0,c.jsxs)(t.p,{children:[`Không yêu cầu thiết lập phức tạp để chạy trình tạo sprite cờ. Chỉ cần đặt các biểu tượng cờ SVG của bạn vào thư mục tiêu chuẩn `,(0,c.jsx)(t.code,{children:`src/assets/flags`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`Để kích hoạt biên dịch sprite và bảng kiểu dáng, hãy thực thi:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-flags
`})}),`
`,(0,c.jsx)(t.h2,{id:`cấu-trúc-tệp-được-tạo-sinh`,children:`Cấu trúc tệp được tạo sinh`}),`
`,(0,c.jsx)(t.p,{children:`Sau khi thực thi thành công, công cụ sẽ xuất các tài nguyên đã biên dịch trực tiếp đến các đường dẫn không gian làm việc được cấu hình:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`src/assets/flags.webp`}),`: Hình ảnh sprite kết hợp High-DPI đã biên dịch chứa tất cả các biểu tượng cờ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`src/styles/flags.css`}),`: Bảng kiểu dáng CSS được tạo sinh ánh xạ từng lớp sửa đổi cờ riêng lẻ (ví dụ: `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--vn`}),`) tới phần trăm vị trí nền chính xác của nó.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};