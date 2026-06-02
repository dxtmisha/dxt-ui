import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/bin/dxt-constructor - Tạo Khung Bộ Dựng Thành Phần`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-constructor`,children:`dxt-constructor`}),`
`,(0,c.jsxs)(n.p,{children:[`Lệnh `,(0,c.jsx)(n.code,{children:`dxt-constructor`}),` cung cấp khả năng tự động tạo sinh các tệp cốt lõi của bộ dựng thành phần (constructor), kiểu dữ liệu (types), cấu hình thuộc tính (properties) và các điểm xuất thư viện cho các thành phần trong hệ thống thiết kế. Lệnh này sử dụng `,(0,c.jsx)(n.code,{children:`DesignConstructors`}),` và `,(0,c.jsx)(n.code,{children:`DesignConstructor`}),` làm nền tảng để điều phối quá trình khởi tạo hàng loạt hoặc khởi tạo riêng biệt cho một thành phần.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo sinh Mục tiêu hoặc Hàng loạt`}),`: Có khả năng khởi tạo tất cả các thành phần bên trong thư mục chứa bộ dựng hoặc tập trung khởi tạo duy nhất cho một thành phần được truyền dưới dạng đối số.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hợp nhất Phong cách`}),`: Tự động tạo sinh và tổng hợp các xuất SCSS của thành phần vào tệp tập trung `,(0,c.jsx)(n.code,{children:`packages/library/style.scss`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo sinh Mã nguồn & Kiểu dữ liệu Đầy đủ`}),`: Tự động tạo các cấu hình thuộc tính (`,(0,c.jsx)(n.code,{children:`properties.json`}),`), kiểu dữ liệu (`,(0,c.jsx)(n.code,{children:`types.ts`}),`, `,(0,c.jsx)(n.code,{children:`basicTypes.ts`}),`), tệp phong cách thành phần (`,(0,c.jsx)(n.code,{children:`style.scss`}),`), các tệp mã nguồn (`,(0,c.jsx)(n.code,{children:`Constructors.ts`}),`, `,(0,c.jsx)(n.code,{children:`ConstructorsDesign.tsx`}),`) và cấu trúc tệp xuất (`,(0,c.jsx)(n.code,{children:`index.ts`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`nó-hoạt-động-như-thế-nào`,children:`Nó hoạt động như thế nào?`}),`
`,(0,c.jsx)(n.p,{children:`Quy trình tạo khung bộ dựng tự động hóa quá trình tích hợp các thành phần:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsx)(n.li,{children:`Tập lệnh nhận dạng tên thành phần mục tiêu được truyền làm đối số hoặc tự động quét thư mục hệ thống đã được cấu hình để thu thập tất cả tên thành phần.`}),`
`,(0,c.jsxs)(n.li,{children:[`Tiến hành xóa bộ nhớ đệm thuộc tính dùng chung `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),` để đảm bảo quá trình tạo sinh sử dụng các trạng thái cấu hình hoàn toàn cập nhật mới nhất.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Đối với mỗi thành phần, nó triệu gọi trình tạo `,(0,c.jsx)(n.code,{children:`DesignConstructor`}),` để xây dựng cấu trúc thuộc tính JSON, các kiểu dữ liệu TypeScript cho thuộc tính, kiểu dữ liệu cơ bản, phong cách, các tệp mã và cấu trúc tệp chỉ mục.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Lặp qua tất cả thư mục thành phần để thu thập phong cách riêng biệt của từng thành phần và biên dịch chúng thành một bộ quy tắc `,(0,c.jsx)(n.code,{children:`@forward`}),` tập trung.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Cập nhật các xuất của `,(0,c.jsx)(n.code,{children:`package.json`}),` để hiển thị các điểm xuất của thành phần và viết các tệp ánh xạ thư viện tương ứng.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cách-thiết-lập-và-khởi-chạy`,children:`Cách thiết lập và khởi chạy`}),`
`,(0,c.jsx)(n.p,{children:`Toàn bộ quy trình sẽ không thiết lập ràng buộc với những cấu hình phức tạp. Công cụ này chủ động quét các thư mục bộ dựng và tích hợp chúng vào không gian làm việc một cách liền mạch.`}),`
`,(0,c.jsx)(n.p,{children:`Để thiết lập cấu trúc khung cho tất cả các bộ dựng thành phần trong vùng làm việc, hãy chạy:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-constructor
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Để nhắm mục tiêu vào một thành phần cụ thể (ví dụ: `,(0,c.jsx)(n.code,{children:`Button`}),`), hãy truyền tên thành phần đó làm đối số:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-constructor Button
`})}),`
`,(0,c.jsx)(n.h2,{id:`cấu-trúc-tệp-được-tạo-sinh`,children:`Cấu trúc tệp được tạo sinh`}),`
`,(0,c.jsx)(n.p,{children:`Khi một bộ dựng thành phần được khởi tạo hoặc cập nhật, công cụ sẽ tự động thiết lập cấu trúc khung gồm các tệp sau bên trong thư mục của nó:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`properties.json`}),`: Lưu giữ cấu hình thuộc tính thô của thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props.ts`}),`: Định nghĩa cấu trúc prop cho React/Vue dựa trên cấu hình thuộc tính.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`types.ts`}),` & `,(0,c.jsx)(n.code,{children:`basicTypes.ts`}),`: Chứa các định dạng kiểu dữ liệu TypeScript chuẩn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`style.scss`}),`: Quản lý phong cách SCSS cơ bản của thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Constructors.ts`}),` & `,(0,c.jsx)(n.code,{children:`ConstructorsDesign.tsx`}),`: Chứa mã nguồn hành vi cốt lõi của bộ dựng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index.ts`}),`: Hiển thị các giao diện và xuất công khai.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};