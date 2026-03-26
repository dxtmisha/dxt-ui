import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/PropertiesConvector - Bộ chuyển đổi Token ngữ nghĩa`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiesconvector`,children:`Lớp PropertiesConvector`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesConvector`}),` là một tiện ích tĩnh chuyên biệt được thiết kế để xử lý các phép biến đổi ngữ nghĩa phức tạp của các token thiết kế. Nó đóng vai trò như một bộ điều phối cho động cơ xử lý token, xác định các loại thuộc tính cụ thể (như màu sắc, bóng đổ hoặc kiểu chữ) và áp dụng logic chuyển đổi chuyên biệt để đảm bảo dữ liệu thô được chuẩn hóa thành các cấu trúc hệ thống thiết kế có thể sử dụng được.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Điều phối ngữ nghĩa`}),` — Tự động định tuyến các token đến các bộ chuyển đổi chuyên biệt dựa trên siêu dữ liệu `,(0,c.jsx)(n.code,{children:`type`}),` của chúng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Duyệt đệ quy`}),` — Duyệt sâu qua các đối tượng thuộc tính lồng nhau để đảm bảo tất cả các token con đều được xử lý.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bộ chuyển đổi chuyên biệt`}),` — Tích hợp logic dành riêng cho `,(0,c.jsx)(n.code,{children:`color`}),`, `,(0,c.jsx)(n.code,{children:`boxShadow`}),`, `,(0,c.jsx)(n.code,{children:`fontFamilies`}),` và `,(0,c.jsx)(n.code,{children:`typography`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Biến đổi tại chỗ (In-Place)`}),` — Sửa đổi trực tiếp các đối tượng thuộc tính để duy trì tính toàn vẹn của cấu trúc trong quá trình xây dựng.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Là một lớp tiện ích tĩnh, `,(0,c.jsx)(n.code,{children:`PropertiesConvector`}),` không yêu cầu khởi tạo instance. Chức năng chính của nó được truy cập trực tiếp.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesConvector } from '@dxtmisha/scripts'

// Biến đổi một tập hợp các thuộc tính thô
PropertiesConvector.to(rawProperties)
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`biến-đổi`,children:`Biến đổi`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`to(properties): void`}),` — Xử lý đệ quy danh sách thuộc tính, áp dụng các phép biến đổi cụ thể theo loại cho từng mục.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`luồng-điều-phối-chuyển-đổi-the-conversion-dispatch-flow`,children:`Luồng điều phối chuyển đổi (The Conversion Dispatch Flow)`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`PropertiesConvector`}),` quản lý vòng đời biến đổi thông qua chiến lược khớp đệ quy:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phát hiện loại`}),`: Đối với mỗi mục trong cụm thuộc tính được cung cấp, nó kiểm tra xem một bộ chuyển đổi tương ứng có tồn tại trong sổ đăng ký nội bộ hay không (ví dụ: khớp `,(0,c.jsx)(n.code,{children:`color`}),` với `,(0,c.jsx)(n.code,{children:`convectorColor`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thực thi chuyên biệt`}),`: Nếu tìm thấy kết quả khớp, logic bộ chuyển đổi cụ thể sẽ được thực thi trên mục đó, biến đổi các giá trị thô của nó thành các định dạng cuối cùng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân nhánh đệ quy`}),`:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Nếu mục có `,(0,c.jsx)(n.code,{children:`value`}),` là một đối tượng, nó sẽ gọi đệ quy `,(0,c.jsx)(n.code,{children:`to()`}),` trên đối tượng đó.`]}),`
`,(0,c.jsx)(n.li,{children:`Nếu bản thân mục đó là một đối tượng không có loại được công nhận, nó sẽ tiếp tục duyệt để tìm các token lồng nhau.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tính toàn vẹn dữ liệu`}),`: Quy trình đảm bảo rằng các cấu trúc phức tạp (như bản đồ kiểu chữ hoặc các lớp bóng đổ đa tầng) được phân giải hoàn toàn trước giai đoạn tiếp theo của quy trình.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};