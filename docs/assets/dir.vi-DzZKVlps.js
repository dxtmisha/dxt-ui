import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/styles/dir - Hướng văn bản LTR và RTL`}),`
`,(0,c.jsx)(n.h1,{id:`hệ-thống-hướng-văn-bản`,children:`Hệ thống hướng văn bản`}),`
`,(0,c.jsxs)(n.p,{children:[`Thư viện `,(0,c.jsx)(n.code,{children:`@dxtmisha/styles`}),` cung cấp một hệ thống tinh tế để hỗ trợ văn bản và bố cục đa hướng (LTR và RTL) sử dụng CSS Custom Properties (biến CSS). Thay vì sao chép các quy tắc CSS hoặc chỉ dựa vào các thuộc tính tĩnh, tiện ích này tự động quản lý căn lề, khoảng cách (margin, padding), vị trí (position) và các hiệu ứng dịch chuyển (transform) một cách linh hoạt ngay trong trình duyệt.`]}),`
`,(0,c.jsx)(n.p,{children:`Cách tiếp cận RTL truyền thống yêu cầu viết các thuộc tính ghi đè thủ công (ví dụ như hoán đổi margin-left và margin-right). Tiện ích này giải quyết vấn đề bằng cách ánh xạ các hướng vật lý sang các biến CSS để tự động cập nhật khi hướng văn bản thay đổi.`}),`
`,(0,c.jsx)(n.h2,{id:`cách-hoạt-động`,children:`Cách hoạt động`}),`
`,(0,c.jsx)(n.p,{children:`Hệ thống hướng văn bản được xây dựng trên việc hoán đổi biến động:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ánh xạ biến gốc`}),`: Mặc định (chế độ LTR), thư viện thiết lập các biến ở cấp độ `,(0,c.jsx)(n.code,{children:`html`}),` để xác định các giá trị như `,(0,c.jsx)(n.code,{children:`--d-dir: 1`}),` (hệ số nhân dịch chuyển), các từ khóa căn lề (`,(0,c.jsx)(n.code,{children:`--d-dir-start: flex-start`}),`) và cờ hoạt động (`,(0,c.jsx)(n.code,{children:`--d-dir-left: 1`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động hoán đổi`}),`: Đối với phần tử con, các khoảng cách vật lý được ánh xạ với các biến CSS động (ví dụ: `,(0,c.jsx)(n.code,{children:`--d-dir-margin-left`}),` nhận giá trị của `,(0,c.jsx)(n.code,{children:`var(--sys-margin-left)`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hoán đổi khi RTL`}),`: Khi chế độ RTL được kích hoạt (qua `,(0,c.jsx)(n.code,{children:`html[dir="rtl"]`}),` hoặc class `,(0,c.jsx)(n.code,{children:`.dir-rtl`}),`), hệ thống thay đổi cờ hướng (`,(0,c.jsx)(n.code,{children:`--d-dir`}),` thành `,(0,c.jsx)(n.code,{children:`-1`}),`, `,(0,c.jsx)(n.code,{children:`--d-dir-start`}),` thành `,(0,c.jsx)(n.code,{children:`flex-end`}),`) và hoán đổi các biến trên phần tử con (ví dụ: `,(0,c.jsx)(n.code,{children:`--d-dir-margin-left`}),` nhận giá trị của `,(0,c.jsx)(n.code,{children:`var(--sys-margin-right)`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.h2,{id:`khởi-tạo-hệ-thống-initdir`,children:[`Khởi tạo hệ thống (`,(0,c.jsx)(n.code,{children:`initDir`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi chạy hệ thống hướng văn bản, mixin `,(0,c.jsx)(n.code,{children:`initDir`}),` cần được gọi ở cấp độ toàn cục (thường là trong tệp khởi tạo CSS/SCSS toàn cục):`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

@include styles.initDir;
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Mixin này định nghĩa các biến LTR trên phần tử `,(0,c.jsx)(n.code,{children:`html`}),` theo mặc định, thiết lập các thuộc tính hướng hoạt động trên tất cả phần tử con (`,(0,c.jsx)(n.code,{children:`*`}),`, `,(0,c.jsx)(n.code,{children:`*::before`}),`, `,(0,c.jsx)(n.code,{children:`*::after`}),`), và cấu hình bộ lắng nghe tự động áp dụng mixin `,(0,c.jsx)(n.code,{children:`dirToRtl`}),` khi thuộc tính `,(0,c.jsx)(n.code,{children:`[dir="rtl"]`}),` hoặc class `,(0,c.jsx)(n.code,{children:`.dir-rtl`}),` được thêm vào tài liệu.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-function`,children:`Các Function`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isDir(): String`}),` — Trả về hệ số nhân hướng (`,(0,c.jsx)(n.code,{children:`1`}),` trong LTR, `,(0,c.jsx)(n.code,{children:`-1`}),` trong RTL).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isDirLeft(): String`}),` — Trả về `,(0,c.jsx)(n.code,{children:`1`}),` trong LTR, `,(0,c.jsx)(n.code,{children:`0`}),` trong RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isDirRight(): String`}),` — Trả về `,(0,c.jsx)(n.code,{children:`0`}),` trong LTR, `,(0,c.jsx)(n.code,{children:`1`}),` trong RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirLeft(): String`}),` — Trả về `,(0,c.jsx)(n.code,{children:`left`}),` trong LTR, `,(0,c.jsx)(n.code,{children:`right`}),` trong RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirRight(): String`}),` — Trả về `,(0,c.jsx)(n.code,{children:`right`}),` trong LTR, `,(0,c.jsx)(n.code,{children:`left`}),` trong RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirLeftAuto(): String`}),` — Trả về `,(0,c.jsx)(n.code,{children:`auto`}),` trong LTR, `,(0,c.jsx)(n.code,{children:`unset`}),` trong RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirRightAuto(): String`}),` — Trả về `,(0,c.jsx)(n.code,{children:`unset`}),` trong LTR, `,(0,c.jsx)(n.code,{children:`auto`}),` trong RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirFlexLeft(): String`}),` — Trả về `,(0,c.jsx)(n.code,{children:`flex-start`}),` trong LTR, `,(0,c.jsx)(n.code,{children:`flex-end`}),` trong RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirFlexRight(): String`}),` — Trả về `,(0,c.jsx)(n.code,{children:`flex-end`}),` trong LTR, `,(0,c.jsx)(n.code,{children:`flex-start`}),` trong RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirToLeft($left, $right): String`}),` — Trả về giá trị chuyển tiếp từ thuộc tính bên trái LTR sang bên phải RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirToRight($left, $right): String`}),` — Trả về giá trị chuyển tiếp từ thuộc tính bên phải LTR sang bên trái RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirOrder($value): String`}),` — Tính toán giá trị order động dựa trên hướng hiển thị.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-mixin`,children:`Các Mixin`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initDir()`}),` — Khởi tạo các biến hướng văn bản cho chế độ LTR và RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirToRtl()`}),` — Áp dụng các quy tắc, giá trị biến và hoán đổi thuộc tính cho RTL.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};