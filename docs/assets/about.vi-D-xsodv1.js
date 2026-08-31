import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/styles/color/# Về Hệ thống Màu sắc`}),`
`,(0,c.jsx)(t.h1,{id:`về-hệ-thống-màu-sắc-color-system`,children:`Về Hệ thống Màu sắc (Color System)`}),`
`,(0,c.jsxs)(t.p,{children:[`Thư viện `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),` cung cấp một cơ chế mạnh mẽ và linh hoạt để quản lý màu sắc trong các ứng dụng. Không giống như cách tiếp cận tiêu chuẩn là mã hóa cứng các màu HEX, hệ thống này được xây dựng hoàn toàn dựa trên các biến CSS động. Điều này đảm bảo việc chuyển đổi chủ đề (sáng/tối) tức thì và hiệu ứng chuyển tiếp mượt mà mà không bị trùng lặp mã CSS.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Nó giải quyết vấn đề cốt lõi của việc tạo kiểu dáng phức tạp: `,(0,c.jsx)(t.strong,{children:`làm thế nào để áp dụng độ mờ cho các màu sắc từ các biến mà không làm hỏng hiệu ứng CSS (animations)?`})]}),`
`,(0,c.jsx)(t.h2,{id:`khái-niệm-cốt-lõi-tách-biệt-rgb-và-độ-mờ`,children:`Khái niệm Cốt lõi: Tách biệt RGB và Độ mờ`}),`
`,(0,c.jsxs)(t.p,{children:[`Nếu bạn lưu giá trị màu dưới dạng biến thông thường (ví dụ: `,(0,c.jsx)(t.code,{children:`--primary: #ff0000;`}),`), bạn không thể áp dụng tính trong suốt cho nó "ngay lập tức" bằng các công cụ CSS (mà không sử dụng các hàm mới chưa được hỗ trợ hoàn toàn như `,(0,c.jsx)(t.code,{children:`color-mix`}),`). Cố gắng dùng `,(0,c.jsx)(t.code,{children:`rgba(var(--primary), 0.5)`}),` đơn giản là không hoạt động với các giá trị HEX.`]}),`
`,(0,c.jsx)(t.p,{children:`Để giải quyết vấn đề này, hệ thống thiết kế tự động chuyển đổi tất cả các màu cơ bản thành danh sách các kênh RGB:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`// Quá trình thực thi ngầm:
--sys-primary: 255, 0, 0; // Thay vì #ff0000
`})}),`
`,(0,c.jsx)(t.p,{children:`Điều này cho phép chúng ta "xây dựng" động màu sắc ngay khi nó được áp dụng:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`color: rgba(var(--sys-primary), 1);
background-color: rgba(var(--sys-primary), 0.5);
`})}),`
`,(0,c.jsx)(t.h3,{id:`độ-mờ-độc-lập`,children:`Độ mờ Độc lập`}),`
`,(0,c.jsxs)(t.p,{children:[`Để cho phép kiểm soát tốt hơn và cung cấp các `,(0,c.jsx)(t.strong,{children:`hiệu ứng chuyển tiếp phản hồi`}),` cho độ mờ (khi chỉ mức độ mờ thay đổi chứ không thay đổi màu gốc), một biến độ mờ hệ thống (System) cụ thể sẽ được tạo cho từng thuộc tính:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`--sys-color: 255, 0, 0;
--sys-color-opacity: 1;

--sys-background: 0, 255, 0;
--sys-background-opacity: 0.5;
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Khi hiển thị trên trình duyệt sẽ có dạng:
`,(0,c.jsx)(t.code,{children:`color: rgba(var(--sys-color), var(--sys-color-opacity));`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Bạn `,(0,c.jsx)(t.strong,{children:`không cần`}),` phải viết điều này theo cách thủ công — thư viện cung cấp các mixin tiện lợi để tự tạo mã cho bạn.`]}),`
`,(0,c.jsx)(t.h2,{id:`cấu-trúc-thư-viện`,children:`Cấu trúc Thư viện`}),`
`,(0,c.jsxs)(t.p,{children:[`Về mặt khái niệm, thư viện `,(0,c.jsx)(t.code,{children:`color.scss`}),` được chia thành ba lớp trừu tượng:`]}),`
`,(0,c.jsx)(t.h3,{id:`1-các-hàm-hệ-thống-tiện-ích`,children:`1. Các Hàm Hệ thống (Tiện ích)`}),`
`,(0,c.jsxs)(t.p,{children:[`Các hàm như `,(0,c.jsx)(t.code,{children:`getColor`}),`, `,(0,c.jsx)(t.code,{children:`toColorRbg`}),`, hoặc `,(0,c.jsx)(t.code,{children:`toCustomVarRgb`}),`. Chúng hoạt động như một công cụ cấp thấp dịch các màu HEX thông thường thành định dạng RGB chuỗi và ngược lại. Bạn hiếm khi gọi chúng trực tiếp trong quá trình phát triển thông thường, nhưng chúng cần thiết để đăng ký màu mới ở cấp độ token thiết kế (`,(0,c.jsx)(t.code,{children:`@dxtmisha/theme`}),`).`]}),`
`,(0,c.jsx)(t.h3,{id:`2-các-mixin-thuộc-tính-cơ-bản`,children:`2. Các Mixin Thuộc tính Cơ bản`}),`
`,(0,c.jsxs)(t.p,{children:[`Đây là các công cụ chính để áp dụng màu cho các thành phần UI: `,(0,c.jsx)(t.code,{children:`@include color(...)`}),`, `,(0,c.jsx)(t.code,{children:`@include backgroundColor(...)`}),`, `,(0,c.jsx)(t.code,{children:`@include borderColor(...)`}),`, `,(0,c.jsx)(t.code,{children:`@include stroke(...)`}),`, v.v.
Chúng nhận màu đầu vào, cập nhật biến hệ thống của thành phần và tự áp dụng thuộc tính CSS. Đây là công cụ tạo kiểu cho thành phần hàng ngày của bạn.`]}),`
`,(0,c.jsx)(t.h3,{id:`3-mixin-bảng-màu-và-chủ-đề-palette-mixins`,children:`3. Mixin Bảng màu và Chủ đề (Palette Mixins)`}),`
`,(0,c.jsxs)(t.p,{children:[`Mức độ tạo kiểu nâng cao dành cho các thành phần cần nhanh chóng thích ứng với bối cảnh địa phương (ví dụ: nút sẽ chuyển sang màu đỏ nếu nằm trong khối "nguy hiểm"). Sử dụng các mixin như `,(0,c.jsx)(t.code,{children:`@include paletteColor()`}),` và hàm `,(0,c.jsx)(t.code,{children:`getPaletteItem()`}),`. Chúng xây dựng một "chuỗi tìm kiếm" các biến (tìm `,(0,c.jsx)(t.code,{children:`--theme-primary`}),`, nếu không có — tìm `,(0,c.jsx)(t.code,{children:`--sys-primary`}),`, nếu vẫn không có — dùng hệ thống màu HEX dự phòng).`]}),`
`,(0,c.jsxs)(t.h2,{id:`tại-sao-không-đơn-giản-dùng-color-ff0000`,children:[`Tại sao không đơn giản dùng `,(0,c.jsx)(t.code,{children:`color: #ff0000;`}),`?`]}),`
`,(0,c.jsx)(t.p,{children:`Bạn có thể làm vậy, nhưng điều đó sẽ phá vỡ tính toàn vẹn của hệ thống thiết kế:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ràng buộc cứng:`}),` Khi chuyển đổi chủ đề (ví dụ: sang chế độ tối), màu quy định cứng của bạn sẽ vẫn như vậy.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thiếu tính linh hoạt:`}),` Nếu bạn muốn văn bản trở nên trong suốt nhẹ khi di chuột, bạn sẽ phải định nghĩa lại `,(0,c.jsx)(t.code,{children:`color: rgba(...)`}),` một lần nữa thay vì chỉ thay đổi biến độ mờ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lỗi Animation:`}),` Việc chuyển đổi từ màu đặc sang nửa trong suốt sẽ mượt mà hơn nếu trình duyệt tạo hiệu ứng cho biến độc lập `,(0,c.jsx)(t.code,{children:`--sys-color-opacity`}),`, thay vì cố gắng nội suy các giá trị `,(0,c.jsx)(t.code,{children:`rgba`}),` hoặc HEX phức tạp.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Sử dụng các mixin được mô tả trong phần `,(0,c.jsx)(t.strong,{children:`Sử dụng Thuộc tính Cơ bản`}),` và `,(0,c.jsx)(t.strong,{children:`Làm việc với Bảng màu`}),` để giữ cho giao diện luôn có khả năng mở rộng và dễ duy trì.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};