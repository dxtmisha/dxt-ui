import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/2. AI/8. Tương tác với AI`}),`
`,(0,c.jsx)(t.h1,{id:`tương-tác-với-ai-và-thứ-bậc-ưu-tiên`,children:`Tương tác với AI và Thứ bậc ưu tiên`}),`
`,(0,c.jsxs)(t.p,{children:[`Kiến trúc AIDD trong `,(0,c.jsx)(t.code,{children:`dxt-ui`}),` được thiết kế để đạt độ minh bạch, khả năng dự đoán và tiết kiệm token ngữ cảnh tối đa khi tương tác với các trợ lý AI.`]}),`
`,(0,c.jsx)(t.p,{children:`Thay vì tải toàn bộ cơ sở mã khổng lồ của monorepo vào cửa sổ ngữ cảnh, hệ thống áp dụng chiến lược tải lười (lazy loading) nhiều tầng kết hợp với thứ bậc ưu tiên quy tắc nghiêm ngặt.`}),`
`,(0,c.jsx)(t.h2,{id:`chiến-lược-tải-ngữ-cảnh-nhiều-tầng`,children:`Chiến lược tải ngữ cảnh nhiều tầng`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tầng 1: Ngữ cảnh tổng quan (Khi bắt đầu phiên)`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Chỉ tệp `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` được tải ban đầu.`]}),`
`,(0,c.jsxs)(t.li,{children:[`AI tiếp nhận các quy tắc kỹ thuật chung (AI Code Promise, Vue Style Guide) và hồ sơ tóm tắt của tất cả các thư viện (`,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/constructor`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),`, v.v.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.em,{children:`Mục đích:`}),` AI hiểu toàn bộ khả năng của hệ sinh thái mà không làm quá tải bộ nhớ ngữ cảnh bằng chi tiết cài đặt.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tầng 2: Ngữ cảnh chuyên sâu theo yêu cầu (On-Demand)`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`ai-types.md`})}),` — Đặc tả TypeScript chi tiết (chỉ tải khi cần gọi phương thức hoặc kiểm tra chữ ký hàm).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`ai-developer.md`})}),` — Tiêu chuẩn nội bộ của package (chỉ tải khi trực tiếp chỉnh sửa mã nguồn của thư viện đó).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`ai-resources/*.md`})}),` — Quy định theo chủ đề (tải khi điều kiện trong khối `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),` được kích hoạt).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`ai-screenshot/`})}),` — Ảnh chụp trực quan và DOM/CSS (tải khi căn chỉnh giao diện và style).`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tầng 3: Bộ nhớ cục bộ của Package`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`ai-memory.md`})}),` — Các ràng buộc, quy tắc và kinh nghiệm được lưu giữ riêng cho package hiện tại.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`thứ-bậc-ưu-tiên-priority-chain`,children:`Thứ bậc ưu tiên (Priority Chain)`}),`
`,(0,c.jsx)(t.p,{children:`Khi xảy ra bất kỳ mâu thuẫn nào giữa các tệp tài liệu, AI tuân theo thứ tự ưu tiên nghiêm ngặt sau:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`1. `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` (Ưu tiên cục bộ cao nhất)`]}),` — Kinh nghiệm cục bộ và chỉ dẫn trực tiếp của lập trình viên cho package cụ thể có quyền ghi đè mọi quy tắc khác.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`2. `,(0,c.jsx)(t.code,{children:`ai-instruction.md`}),` (Ưu tiên toàn cục cao nhất)`]}),` — Chỉ thị cấp dự án tại thư mục gốc monorepo ghi đè lên các quy ước hệ thống mặc định.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`3. `,(0,c.jsx)(t.code,{children:`ai-developer.md`})]}),` — Tiêu chuẩn kỹ thuật và danh sách kiểm tra đã phê duyệt của package.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`4. `,(0,c.jsx)(t.code,{children:`ai-resources/*.md`})]}),` — Tiêu chuẩn kỹ thuật theo chủ đề chuyên sâu (ví dụ: màu sắc, đường viền, đổ bóng, gọi API).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`5. `,(0,c.jsx)(t.code,{children:`ai-prompt.md`})]}),` — Quy tắc toàn cục nền tảng (AI Code Promise, Vue Guide) và thẻ tổng quan thư viện.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`6. `,(0,c.jsx)(t.code,{children:`ai-types.md`})]}),` — Chữ ký và hợp đồng kiểu TypeScript.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`kịch-bản-tương-tác-thực-tế`,children:`Kịch bản tương tác thực tế`}),`
`,(0,c.jsx)(t.h3,{id:`kịch-bản-1-phát-triển-component-trong-dxtmishad1`,children:`Kịch bản 1: Phát triển Component trong @dxtmisha/d1`}),`
`,(0,c.jsxs)(t.p,{children:[`Lập trình viên giao nhiệm vụ: `,(0,c.jsx)(t.em,{children:`«Tạo component D1Badge trong package @dxtmisha/d1»`}),`.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`1. Bắt đầu:`}),` AI đọc `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` và tìm thấy mục của package `,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`2. Nghiên cứu tiêu chuẩn:`}),` AI mở `,(0,c.jsx)(t.code,{children:`packages/d1/ai-developer.md`}),` để xem cấu trúc tệp component và quy tắc tích hợp với `,(0,c.jsx)(t.code,{children:`@dxtmisha/constructor`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`3. Kiểm tra bộ nhớ:`}),` AI mở `,(0,c.jsx)(t.code,{children:`packages/d1/ai-memory.md`}),` để xem các quy ước đã lưu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`4. Kiểm tra Mandatory Rules:`}),` AI xem khối `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),` trong `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`, mở `,(0,c.jsx)(t.code,{children:`ai-resources/colors-and-palettes.md`}),` và `,(0,c.jsx)(t.code,{children:`ai-resources/rounded.md`}),` để sử dụng đúng token bo góc và bảng màu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`5. Viết mã:`}),` Component được tạo ra hoàn toàn tuân thủ các quy định từ cả bốn tài liệu trên.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`kịch-bản-2-sử-dụng-thư-viện-trong-ứng-dụng`,children:`Kịch bản 2: Sử dụng thư viện trong ứng dụng`}),`
`,(0,c.jsxs)(t.p,{children:[`Lập trình viên giao nhiệm vụ: `,(0,c.jsx)(t.em,{children:`«Triển khai HTTP client có bộ đệm và xử lý lỗi qua ErrorCenter»`}),`.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`1. Bắt đầu:`}),` AI đọc `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` ở thư mục gốc ứng dụng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`2. Phát hiện dependency:`}),` Trong bảng tổng quan, AI tìm thấy `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional-basic`}),` (`,(0,c.jsx)(t.em,{children:`«HTTP client, state storage, i18n localization, ErrorCenter»`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`3. Kích hoạt Trigger:`}),` Mô tả có trigger: `,(0,c.jsx)(t.em,{children:`«Study when working with HTTP requests, API caching, or ErrorCenter»`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`4. Tải kiểu:`}),` AI mở tệp `,(0,c.jsx)(t.code,{children:`node_modules/@dxtmisha/functional-basic/ai-types.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`5. Sinh mã chính xác:`}),` AI nhìn thấy class `,(0,c.jsx)(t.code,{children:`ApiFetch`}),`, phương thức `,(0,c.jsx)(t.code,{children:`get()`}),` / `,(0,c.jsx)(t.code,{children:`post()`}),` và `,(0,c.jsx)(t.code,{children:`ErrorCenter`}),`, tạo ra các lời gọi hàm chính xác 100% không ảo giác.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`kịch-bản-3-áp-dụng-chỉ-thị-toàn-dự-án-qua-ai-instructionmd`,children:`Kịch bản 3: Áp dụng chỉ thị toàn dự án qua ai-instruction.md`}),`
`,(0,c.jsx)(t.p,{children:`Trưởng nhóm muốn áp dụng một quy định khẩn cấp cho tất cả các package:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Tạo tệp `,(0,c.jsx)(t.code,{children:`ai-instruction.md`}),` tại thư mục gốc monorepo với nội dung chỉ thị.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Chạy lệnh `,(0,c.jsx)(t.code,{children:`npm run prompt`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Script nhúng chỉ thị vào phần `,(0,c.jsx)(t.code,{children:`High-Priority Directives`}),` của `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Kể từ thời điểm đó, mọi trợ lý AI khi đọc `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` sẽ lập tức thực thi quy định này trên toàn bộ monorepo.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ma-trận-tương-tác`,children:`Ma trận tương tác`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Khi thêm phương thức hoặc export mới`}),` ➔ Chạy `,(0,c.jsx)(t.code,{children:`npm run types`}),` ➔ Cập nhật `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` và `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` ➔ Chạy `,(0,c.jsx)(t.code,{children:`npm run prompt`}),` ➔ Cập nhật `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` toàn cục.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Khi tạo quy định chuyên đề mới`}),` ➔ Tạo tệp trong `,(0,c.jsx)(t.code,{children:`ai-resources/`}),` ➔ Chạy `,(0,c.jsx)(t.code,{children:`npm run types`}),` ➔ Chạy `,(0,c.jsx)(t.code,{children:`npm run prompt`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Khi điều chỉnh hành vi AI trong phiên chat`}),` ➔ Dùng lệnh «Запомни» / «Remember» ➔ AI ghi thêm quy tắc vào `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` mà không cần build lại dự án.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};