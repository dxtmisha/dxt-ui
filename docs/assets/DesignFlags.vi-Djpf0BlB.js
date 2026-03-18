import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(i){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/scripts/Classes/DesignFlags - Trình tạo Sprite cờ"}),`
`,n.jsx(c.h1,{id:"lớp-designflags",children:"Lớp DesignFlags"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"DesignFlags"})," cung cấp một giải pháp tự động để tạo các sprite hình ảnh được tối ưu hóa từ một bộ sưu tập các biểu tượng cờ SVG. Nó xử lý việc hiển thị dựa trên canvas, tính toán bố cục lưới và tạo các tệp ánh xạ CSS để hiển thị biểu tượng hiệu quả bằng cách sử dụng định vị nền (background positioning)."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tự động đóng gói Sprite"})," — Kết hợp nhiều tệp SVG riêng lẻ thành một sprite ",n.jsx(c.code,{children:".webp"})," duy nhất được tối ưu hóa."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tạo CSS động"})," — Tự động tạo các lớp tiện ích với các giá trị ",n.jsx(c.code,{children:"background-position"})," chính xác cho mỗi lá cờ."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Bố cục lưới có thể cấu hình"})," — Cho phép tùy chỉnh kích thước cờ và số lượng cột trong hình ảnh kết quả."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Hiển thị bằng Canvas"})," — Sử dụng xử lý hình ảnh hiệu suất cao để chuyển đổi và thu phóng mượt mà."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Duy trì tỷ lệ khung hình"})," — Đảm bảo cờ được căn giữa trong các ô lưới của chúng trong khi vẫn duy trì tỷ lệ thiết kế ban đầu."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsx(c.p,{children:"Để khởi tạo trình tạo, hãy chỉ định thư mục nguồn và tỷ lệ đầu ra mong muốn."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"dir: string"})," — Đường dẫn thư mục nơi đặt các biểu tượng cờ ",n.jsx(c.code,{children:".svg"})," nguồn."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"width: number"})," — Chiều rộng mục tiêu của một lá cờ trong sprite được tạo (mặc định: 96)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"height: number"})," — Chiều cao mục tiêu của một lá cờ trong sprite được tạo (mặc định: 72)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"columns: number"})," — Số lượng cột biểu tượng cần sắp xếp trong lưới sprite (mặc định: 12)."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { DesignFlags } from '@dxtmisha/scripts'

const generator = new DesignFlags('assets/flags', 64, 48)
generator.make()
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(c.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"make(): Promise<void>"})," — Điều phối toàn bộ quy trình: đọc tệp, vẽ lên canvas, lưu hình ảnh và ghi tệp CSS."]}),`
`]}),`
`,n.jsx(c.h3,{id:"thông-tin",children:"Thông tin"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getLines(): number"})," — Tính toán tổng số hàng cần thiết trong lưới sprite dựa trên số lượng tệp và giới hạn cột."]}),`
`]}),`
`,n.jsx(c.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(c.h3,{id:"quy-trình-tạo",children:"Quy trình tạo"}),`
`,n.jsxs(c.p,{children:["Khi ",n.jsx(c.code,{children:"make()"})," được thực thi, lớp sẽ thực hiện các bước sau:"]}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Khám phá"}),": Quét thư mục nguồn để tìm các tệp ",n.jsx(c.code,{children:".svg"})," và khởi tạo kích thước lưới."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tính toán bố cục"}),": Xác định khoảng cách lát gạch (tiling) và lề căn giữa cho các kích thước cờ cụ thể."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Vẽ Canvas"}),": Tải từng hình ảnh theo chu kỳ và vẽ nó lên canvas sprite tại tọa độ lưới đã tính toán."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Thu thập dữ liệu"}),": Ghi lại tên và tọa độ của mỗi lá cờ để xây dựng dữ liệu ánh xạ."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Xuất tài nguyên"}),":",`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:["Lưu nội dung canvas dưới dạng hình ảnh ",n.jsx(c.code,{children:"webp"})," trong thư mục ",n.jsx(c.code,{children:"assets"}),"."]}),`
`,n.jsxs(c.li,{children:["Tạo tệp ",n.jsx(c.code,{children:"flags.css"})," với các định nghĩa biến gốc và các lớp sửa đổi ",n.jsx(c.code,{children:"--[name]"})," riêng lẻ."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(c.h3,{id:"triển-khai-kiểu-dáng-style-implementation",children:"Triển khai kiểu dáng (Style Implementation)"}),`
`,n.jsxs(c.p,{children:["CSS được tạo sử dụng một lớp tập trung ",n.jsx(c.code,{children:".ui-sys-flags"})," lưu trữ các biến kích thước và liên kết hình ảnh nền. Các bộ sửa đổi riêng lẻ (ví dụ: ",n.jsx(c.code,{children:".ui-sys-flags--vn"}),") sau đó cập nhật ",n.jsx(c.code,{children:"background-position"})," để tách biệt các biểu tượng cụ thể, giảm thiểu các lệnh vẽ lại của trình duyệt và các yêu cầu HTTP."]})]})}function x(i={}){const{wrapper:c}={...t(),...i.components};return c?n.jsx(c,{...i,children:n.jsx(h,{...i})}):h(i)}export{x as default};
