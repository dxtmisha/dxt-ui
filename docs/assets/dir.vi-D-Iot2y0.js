import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/styles/dir - Hướng văn bản LTR và RTL`}),`
`,(0,c.jsx)(t.h1,{id:`hệ-thống-hướng-văn-bản`,children:`Hệ thống hướng văn bản`}),`
`,(0,c.jsxs)(t.p,{children:[`Thư viện `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),` cung cấp một hệ thống tinh tế để hỗ trợ văn bản và bố cục đa hướng (LTR và RTL) sử dụng CSS Custom Properties (biến CSS). Thay vì sao chép các quy tắc CSS hoặc chỉ dựa vào các thuộc tính tĩnh, tiện ích này tự động quản lý căn lề, khoảng cách (margin, padding), vị trí (position) và các hiệu ứng dịch chuyển (transform) một cách linh hoạt ngay trong trình duyệt.`]}),`
`,(0,c.jsx)(t.p,{children:`Cách tiếp cận RTL truyền thống yêu cầu viết các thuộc tính ghi đè thủ công (ví dụ như hoán đổi margin-left và margin-right). Tiện ích này giải quyết vấn đề bằng cách ánh xạ các hướng vật lý sang các biến CSS để tự động cập nhật khi hướng văn bản thay đổi.`}),`
`,(0,c.jsx)(t.h2,{id:`cách-hoạt-động`,children:`Cách hoạt động`}),`
`,(0,c.jsx)(t.p,{children:`Hệ thống hướng văn bản được xây dựng trên việc hoán đổi biến động:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ánh xạ biến gốc`}),`: Mặc định (chế độ LTR), thư viện thiết lập các biến ở cấp độ `,(0,c.jsx)(t.code,{children:`html`}),` để xác định các giá trị như `,(0,c.jsx)(t.code,{children:`--d-dir: 1`}),` (hệ số nhân dịch chuyển), các từ khóa căn lề (`,(0,c.jsx)(t.code,{children:`--d-dir-start: flex-start`}),`) và cờ hoạt động (`,(0,c.jsx)(t.code,{children:`--d-dir-left: 1`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động hoán đổi`}),`: Đối với phần tử con, các khoảng cách vật lý được ánh xạ với các biến CSS động (ví dụ: `,(0,c.jsx)(t.code,{children:`--d-dir-margin-left`}),` nhận giá trị của `,(0,c.jsx)(t.code,{children:`var(--sys-margin-left)`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hoán đổi khi RTL`}),`: Khi chế độ RTL được kích hoạt (qua `,(0,c.jsx)(t.code,{children:`html[dir="rtl"]`}),` hoặc class `,(0,c.jsx)(t.code,{children:`.dir-rtl`}),`), hệ thống thay đổi cờ hướng (`,(0,c.jsx)(t.code,{children:`--d-dir`}),` thành `,(0,c.jsx)(t.code,{children:`-1`}),`, `,(0,c.jsx)(t.code,{children:`--d-dir-start`}),` thành `,(0,c.jsx)(t.code,{children:`flex-end`}),`) và hoán đổi các biến trên phần tử con (ví dụ: `,(0,c.jsx)(t.code,{children:`--d-dir-margin-left`}),` nhận giá trị của `,(0,c.jsx)(t.code,{children:`var(--sys-margin-right)`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.h2,{id:`khởi-tạo-hệ-thống-initdir`,children:[`Khởi tạo hệ thống (`,(0,c.jsx)(t.code,{children:`initDir`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Để khởi chạy hệ thống hướng văn bản, mixin `,(0,c.jsx)(t.code,{children:`initDir`}),` cần được gọi ở cấp độ toàn cục (thường là trong tệp khởi tạo CSS/SCSS toàn cục):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

@include styles.initDir;
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Mixin này định nghĩa các biến LTR trên phần tử `,(0,c.jsx)(t.code,{children:`html`}),` theo mặc định, thiết lập các thuộc tính hướng hoạt động trên tất cả phần tử con (`,(0,c.jsx)(t.code,{children:`*`}),`, `,(0,c.jsx)(t.code,{children:`*::before`}),`, `,(0,c.jsx)(t.code,{children:`*::after`}),`), và cấu hình bộ lắng nghe tự động áp dụng mixin `,(0,c.jsx)(t.code,{children:`dirToRtl`}),` khi thuộc tính `,(0,c.jsx)(t.code,{children:`[dir="rtl"]`}),` hoặc class `,(0,c.jsx)(t.code,{children:`.dir-rtl`}),` được thêm vào tài liệu.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-function`,children:`Các Function`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isDir(): String`}),` — Trả về hệ số nhân hướng (`,(0,c.jsx)(t.code,{children:`1`}),` trong LTR, `,(0,c.jsx)(t.code,{children:`-1`}),` trong RTL).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isDirLeft(): String`}),` — Trả về `,(0,c.jsx)(t.code,{children:`1`}),` trong LTR, `,(0,c.jsx)(t.code,{children:`0`}),` trong RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isDirRight(): String`}),` — Trả về `,(0,c.jsx)(t.code,{children:`0`}),` trong LTR, `,(0,c.jsx)(t.code,{children:`1`}),` trong RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirLeft(): String`}),` — Trả về `,(0,c.jsx)(t.code,{children:`left`}),` trong LTR, `,(0,c.jsx)(t.code,{children:`right`}),` trong RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirRight(): String`}),` — Trả về `,(0,c.jsx)(t.code,{children:`right`}),` trong LTR, `,(0,c.jsx)(t.code,{children:`left`}),` trong RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirLeftAuto(): String`}),` — Trả về `,(0,c.jsx)(t.code,{children:`auto`}),` trong LTR, `,(0,c.jsx)(t.code,{children:`unset`}),` trong RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirRightAuto(): String`}),` — Trả về `,(0,c.jsx)(t.code,{children:`unset`}),` trong LTR, `,(0,c.jsx)(t.code,{children:`auto`}),` trong RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirFlexLeft(): String`}),` — Trả về `,(0,c.jsx)(t.code,{children:`flex-start`}),` trong LTR, `,(0,c.jsx)(t.code,{children:`flex-end`}),` trong RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirFlexRight(): String`}),` — Trả về `,(0,c.jsx)(t.code,{children:`flex-end`}),` trong LTR, `,(0,c.jsx)(t.code,{children:`flex-start`}),` trong RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirToLeft($left, $right): String`}),` — Trả về giá trị chuyển tiếp từ thuộc tính bên trái LTR sang bên phải RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirToRight($left, $right): String`}),` — Trả về giá trị chuyển tiếp từ thuộc tính bên phải LTR sang bên trái RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirOrder($value): String`}),` — Tính toán giá trị order động dựa trên hướng hiển thị.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-mixin`,children:`Các Mixin`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initDir()`}),` — Khởi tạo các biến hướng văn bản cho chế độ LTR và RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirToRtl()`}),` — Áp dụng các quy tắc, giá trị biến và hoán đổi thuộc tính cho RTL.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};