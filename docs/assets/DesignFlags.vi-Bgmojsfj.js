import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/DesignFlags - Trình tạo Sprite cờ`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-designflags`,children:`Lớp DesignFlags`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`DesignFlags`}),` cung cấp một giải pháp tự động để tạo các sprite hình ảnh được tối ưu hóa từ một bộ sưu tập các biểu tượng cờ SVG. Nó xử lý việc hiển thị dựa trên canvas, tính toán bố cục lưới và tạo các tệp ánh xạ CSS để hiển thị biểu tượng hiệu quả bằng cách sử dụng định vị nền (background positioning).`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động đóng gói Sprite`}),` — Kết hợp nhiều tệp SVG riêng lẻ thành một sprite `,(0,c.jsx)(n.code,{children:`.webp`}),` duy nhất được tối ưu hóa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo CSS động`}),` — Tự động tạo các lớp tiện ích với các giá trị `,(0,c.jsx)(n.code,{children:`background-position`}),` chính xác cho mỗi lá cờ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bố cục lưới có thể cấu hình`}),` — Cho phép tùy chỉnh kích thước cờ và số lượng cột trong hình ảnh kết quả.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hiển thị bằng Canvas`}),` — Sử dụng xử lý hình ảnh hiệu suất cao để chuyển đổi và thu phóng mượt mà.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Duy trì tỷ lệ khung hình`}),` — Đảm bảo cờ được căn giữa trong các ô lưới của chúng trong khi vẫn duy trì tỷ lệ thiết kế ban đầu.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.p,{children:`Để khởi tạo trình tạo, hãy chỉ định thư mục nguồn và tỷ lệ đầu ra mong muốn.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dir: string`}),` — Đường dẫn thư mục nơi đặt các biểu tượng cờ `,(0,c.jsx)(n.code,{children:`.svg`}),` nguồn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`width: number`}),` — Chiều rộng mục tiêu của một lá cờ trong sprite được tạo (mặc định: 96).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`height: number`}),` — Chiều cao mục tiêu của một lá cờ trong sprite được tạo (mặc định: 72).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`columns: number`}),` — Số lượng cột biểu tượng cần sắp xếp trong lưới sprite (mặc định: 12).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignFlags } from '@dxtmisha/scripts'

const generator = new DesignFlags('assets/flags', 64, 48)
generator.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): Promise<void>`}),` — Điều phối toàn bộ quy trình: đọc tệp, vẽ lên canvas, lưu hình ảnh và ghi tệp CSS.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`thông-tin`,children:`Thông tin`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLines(): number`}),` — Tính toán tổng số hàng cần thiết trong lưới sprite dựa trên số lượng tệp và giới hạn cột.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`quy-trình-tạo`,children:`Quy trình tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Khi `,(0,c.jsx)(n.code,{children:`make()`}),` được thực thi, lớp sẽ thực hiện các bước sau:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khám phá`}),`: Quét thư mục nguồn để tìm các tệp `,(0,c.jsx)(n.code,{children:`.svg`}),` và khởi tạo kích thước lưới.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tính toán bố cục`}),`: Xác định khoảng cách lát gạch (tiling) và lề căn giữa cho các kích thước cờ cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Vẽ Canvas`}),`: Tải từng hình ảnh theo chu kỳ và vẽ nó lên canvas sprite tại tọa độ lưới đã tính toán.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thu thập dữ liệu`}),`: Ghi lại tên và tọa độ của mỗi lá cờ để xây dựng dữ liệu ánh xạ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xuất tài nguyên`}),`:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Lưu nội dung canvas dưới dạng hình ảnh `,(0,c.jsx)(n.code,{children:`webp`}),` trong thư mục `,(0,c.jsx)(n.code,{children:`assets`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Tạo tệp `,(0,c.jsx)(n.code,{children:`flags.css`}),` với các định nghĩa biến gốc và các lớp sửa đổi `,(0,c.jsx)(n.code,{children:`--[name]`}),` riêng lẻ.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`triển-khai-kiểu-dáng-style-implementation`,children:`Triển khai kiểu dáng (Style Implementation)`}),`
`,(0,c.jsxs)(n.p,{children:[`CSS được tạo sử dụng một lớp tập trung `,(0,c.jsx)(n.code,{children:`.ui-sys-flags`}),` lưu trữ các biến kích thước và liên kết hình ảnh nền. Các bộ sửa đổi riêng lẻ (ví dụ: `,(0,c.jsx)(n.code,{children:`.ui-sys-flags--vn`}),`) sau đó cập nhật `,(0,c.jsx)(n.code,{children:`background-position`}),` để tách biệt các biểu tượng cụ thể, giảm thiểu các lệnh vẽ lại của trình duyệt và các yêu cầu HTTP.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};