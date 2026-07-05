import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/styles/# Chuẩn bị dự án`}),`
`,(0,c.jsx)(n.h1,{id:`chuẩn-bị-dự-án`,children:`Chuẩn bị dự án`}),`
`,(0,c.jsxs)(n.p,{children:[`Thư viện `,(0,c.jsx)(n.code,{children:`@dxtmisha/styles`}),` cung cấp một mixin thiết lập tập trung (`,(0,c.jsx)(n.code,{children:`initGlobal`}),`) để cài đặt các cấu hình thiết lập lại cơ bản (resets), hệ thống hướng hiển thị, khoảng cách đoạn văn, biến đổi hình học và bảng màu.`]}),`
`,(0,c.jsx)(n.h2,{id:`cơ-chế-hoạt-động`,children:`Cơ chế Hoạt động`}),`
`,(0,c.jsxs)(n.p,{children:[`Mixin `,(0,c.jsx)(n.code,{children:`initGlobal`}),` hoạt động như một điểm truy cập duy nhất để thiết lập toàn bộ hệ thống styles cho dự án. Nó tuần tự bao gồm và cấu hình các tiện ích cấp thấp cốt lõi sau:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Reset Box Sizing & Border`}),`: Đối với tất cả phần tử (`,(0,c.jsx)(n.code,{children:`*`}),`, `,(0,c.jsx)(n.code,{children:`*::after`}),`, `,(0,c.jsx)(n.code,{children:`*::before`}),`), nó thiết lập `,(0,c.jsx)(n.code,{children:`box-sizing: border-box`}),`, reset độ rộng viền về `,(0,c.jsx)(n.code,{children:`0`}),`, đặt kiểu viền thành `,(0,c.jsx)(n.code,{children:`solid`}),` và đặt màu viền mặc định là trong suốt (`,(0,c.jsx)(n.code,{children:`transparent`}),`). Điều này giúp ngăn chặn các vấn đề thay đổi bố cục ngoài ý muốn và lỗi render đường viền.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Khởi tạo Hệ thống Hướng hiển thị (`,(0,c.jsx)(n.code,{children:`initDir`}),`)`]}),`: Tích hợp hỗ trợ LTR và RTL. Nó khởi tạo các biến CSS Custom Properties tự động thay đổi theo hướng văn bản trên thẻ `,(0,c.jsx)(n.code,{children:`html`}),` và toàn bộ các phần tử con, đảm bảo giao diện tự động lật đối xứng khi chuyển đổi ngôn ngữ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Khoảng cách Đoạn văn (`,(0,c.jsx)(n.code,{children:`initParagraphSpacing`}),`)`]}),`: Cấu hình các ràng buộc khoảng cách lề cho các đoạn văn liên tiếp (các phần tử `,(0,c.jsx)(n.code,{children:`p`}),` liền kề) để duy trì tính nhất quán về mặt trình bày văn bản.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Bảng màu (`,(0,c.jsx)(n.code,{children:`initPalette`}),`)`]}),`: Thiết lập các biến CSS toàn cục cho màu sắc, chủ đề giao diện và các trạng thái.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Cấu hình Biến đổi (`,(0,c.jsx)(n.code,{children:`initTransform`}),`)`]}),`: Đăng ký các thuộc tính tùy chỉnh và giá trị cơ sở cho các phép biến đổi hình học 2D/3D (CSS transforms).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Reset Lề (Margin Reset)`}),`: Thiết lập lề mặc định (margin) về 0 cho phần thân trang (body), tất cả các tiêu đề (`,(0,c.jsx)(n.code,{children:`h1`}),` đến `,(0,c.jsx)(n.code,{children:`h6`}),`) và đoạn văn (`,(0,c.jsx)(n.code,{children:`p`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`hướng-dẫn-tích-hợp`,children:`Hướng dẫn Tích hợp`}),`
`,(0,c.jsx)(n.h3,{id:`1-tạo-file-styles-chính`,children:`1. Tạo File Styles Chính`}),`
`,(0,c.jsxs)(n.p,{children:[`Tạo một tệp styles chính (ví dụ: `,(0,c.jsx)(n.code,{children:`src/styles/main.scss`}),`) để làm điểm truy cập cho tất cả styles của ứng dụng.`]}),`
`,(0,c.jsx)(n.h3,{id:`2-import-thư-viện-styles`,children:`2. Import Thư viện Styles`}),`
`,(0,c.jsxs)(n.p,{children:[`Import thư viện `,(0,c.jsx)(n.code,{children:`@dxtmisha/styles`}),` ở đầu tệp styles của bạn:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';
`})}),`
`,(0,c.jsx)(n.h3,{id:`3-thiết-lập-styles-toàn-cục`,children:`3. Thiết lập Styles Toàn cục`}),`
`,(0,c.jsxs)(n.p,{children:[`Gọi mixin `,(0,c.jsx)(n.code,{children:`initGlobal`}),` ở cấp độ ngoài cùng trong tệp styles chính của bạn:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@include styles.initGlobal;
`})}),`
`,(0,c.jsx)(n.h3,{id:`4-import-tệp-styles-vào-entry-point-ứng-dụng`,children:`4. Import Tệp Styles vào Entry Point Ứng dụng`}),`
`,(0,c.jsxs)(n.p,{children:[`Import tệp styles chính của bạn vào điểm chạy JavaScript hoặc TypeScript của ứng dụng (ví dụ: `,(0,c.jsx)(n.code,{children:`src/main.ts`}),` hoặc `,(0,c.jsx)(n.code,{children:`src/entry-client.ts`}),`):`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import './styles/main.scss'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};