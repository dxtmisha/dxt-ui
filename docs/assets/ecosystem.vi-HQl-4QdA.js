import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/2. AI/2. Hệ sinh thái tệp`}),`
`,(0,c.jsx)(t.h1,{id:`hệ-sinh-thái-tệp-tài-liệu-ai`,children:`Hệ sinh thái tệp tài liệu AI`}),`
`,(0,c.jsxs)(t.p,{children:[`Trong hệ sinh thái `,(0,c.jsx)(t.code,{children:`dxt-ui`}),`, một cấu trúc tệp máy có thể đọc được nhiều tầng được triển khai để kiểm soát hành vi của các trợ lý AI. Cơ chế trung tâm dựa trên việc duy trì tài liệu phân tán tại từng package, sau đó tự động tổng hợp thành một ngữ cảnh toàn cục duy nhất.`]}),`
`,(0,c.jsx)(t.p,{children:`Dưới đây là danh mục đầy đủ các tệp trong hệ sinh thái và phạm vi trách nhiệm của chúng.`}),`
`,(0,c.jsx)(t.h2,{id:`tệp-hệ-thống-toàn-cục`,children:`Tệp hệ thống toàn cục`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` (Lời nhắc hệ thống hợp nhất chính)`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Vị trí:`}),` Thư mục gốc monorepo.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mục đích:`}),` Được tạo tự động bởi công cụ `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),`. Tổng hợp các tiêu chuẩn phát triển cốt lõi (AI Code Promise, Vue Style Guide) và quét tất cả các package (bao gồm cả dependency trong `,(0,c.jsx)(t.code,{children:`node_modules`}),`), trích xuất phần mô tả (`,(0,c.jsx)(t.code,{children:`ai-description.md`}),`), hướng dẫn (`,(0,c.jsx)(t.code,{children:`ai-doc.md`}),`), liên kết kiểu (`,(0,c.jsx)(t.code,{children:`ai-types.md`}),`), ảnh chụp màn hình (`,(0,c.jsx)(t.code,{children:`ai-screenshot/`}),`) và hướng dẫn lập trình viên (`,(0,c.jsx)(t.code,{children:`ai-developer.md`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sử dụng:`}),` Được AI đọc ở đầu mỗi phiên làm việc; là nguồn chân lý chính của dự án.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ai-instruction.md`}),` (Chỉ thị toàn cục ưu tiên cao)`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Vị trí:`}),` Thư mục gốc monorepo.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mục đích:`}),` Được lập trình viên viết thủ công khi cần áp dụng các quy tắc khẩn cấp hoặc mang tính dự án. Khi chạy `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),`, nội dung tệp được nhúng vào cuối `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` trong phần `,(0,c.jsx)(t.code,{children:`High-Priority Directives`}),`, ghi đè lên mọi quy tắc mặc định.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ai-mcp-all-resources.json`}),` (Danh mục tài nguyên MCP hợp nhất)`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Vị trí:`}),` Thư mục gốc monorepo.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mục đích:`}),` Danh sách tổng hợp tất cả tài nguyên (tài liệu, kiểu, ảnh chụp, lời nhắc) để kết nối với máy chủ MCP (Model Context Protocol).`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`phát-triển-nội-bộ-package`,children:`Phát triển nội bộ Package`}),`
`,(0,c.jsx)(t.p,{children:`Các tệp quy định cách làm việc với mã nguồn bên trong của một package cụ thể. AI chỉ truy cập các tệp này khi được yêu cầu sửa đổi hoặc mở rộng mã bên trong package đó.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ai-developer.md`}),` (Tiêu chuẩn và mẫu phát triển nội bộ)`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Vị trí:`}),` Thư mục gốc package (ví dụ: `,(0,c.jsx)(t.code,{children:`packages/d1/ai-developer.md`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mục đích:`}),` Quy tắc nền tảng về cách mở rộng chức năng hoặc tạo component mới trong thư viện.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bảo trì:`}),` Được lập trình viên duy trì thủ công. Đường dẫn tệp được nhúng vào `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` yêu cầu AI phải đọc trước khi thay đổi mã.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ai-memory.md`}),` (Bộ nhớ cục bộ của package / Workspace Memory)`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Vị trí:`}),` Thư mục gốc package (ví dụ: `,(0,c.jsx)(t.code,{children:`packages/scripts/ai-memory.md`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mục đích:`}),` Các ràng buộc kiến trúc động, quy định cấm và quy ước đã thống nhất của package.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bảo trì:`}),` Được AI tự động cập nhật trong quá trình đối thoại thông qua lệnh `,(0,c.jsx)(t.strong,{children:`«Запомни»`}),` / `,(0,c.jsx)(t.strong,{children:`«Remember»`}),`. Có mức ưu tiên cao nhất khi đưa ra quyết định bên trong package.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`materials/`}),` (Thư mục tài liệu làm việc và yêu cầu)`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Vị trí:`}),` Thư mục gốc của package hoặc component.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mục đích:`}),` Nơi lưu trữ tài liệu thô, bản thiết kế giao diện, đặc tả kỹ thuật và yêu cầu nhiệm vụ lớn.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`giao-diện-thư-viện-công-khai`,children:`Giao diện thư viện công khai`}),`
`,(0,c.jsx)(t.p,{children:`Bề mặt công khai của package được công cụ tổng hợp và các ứng dụng tiêu thụ sử dụng.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ai-description.md`}),` (Mô tả kỹ thuật và Trigger quy tắc)`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Vị trí:`}),` Thư mục gốc package.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mục đích:`}),` Được tạo tự động khi build tài liệu (`,(0,c.jsx)(t.code,{children:`npm run types`}),` / `,(0,c.jsx)(t.code,{children:`dxt-types`}),`). Chứa các phần `,(0,c.jsx)(t.code,{children:`Core Purpose`}),`, `,(0,c.jsx)(t.code,{children:`Key Capabilities`}),`, `,(0,c.jsx)(t.code,{children:`Triggers for Studying ai-types.md`}),` và khối `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),` liên kết với các quy tắc chuyên biệt trong `,(0,c.jsx)(t.code,{children:`ai-resources/`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ai-doc.md`}),` (Hướng dẫn chuyên biệt của lập trình viên)`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Vị trí:`}),` Thư mục gốc package.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mục đích:`}),` Được tạo thủ công để mô tả các chi tiết đặc thù về logic nghiệp vụ, tích hợp hoặc phong cách. Được nhúng hoàn toàn vào `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ai-resources/`}),` (Thư mục quy tắc và tiêu chuẩn chuyên sâu)`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Vị trí:`}),` Thư mục gốc package (ví dụ: `,(0,c.jsx)(t.code,{children:`packages/d1/ai-resources/`}),`, `,(0,c.jsx)(t.code,{children:`packages/styles/ai-resources/`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mục đích:`}),` Chứa các quy định theo chủ đề (ví dụ: `,(0,c.jsx)(t.code,{children:`colors-and-palettes.md`}),`, `,(0,c.jsx)(t.code,{children:`border.md`}),`, `,(0,c.jsx)(t.code,{children:`elevation.md`}),`, `,(0,c.jsx)(t.code,{children:`spacing.md`}),`, `,(0,c.jsx)(t.code,{children:`skeleton.md`}),`, `,(0,c.jsx)(t.code,{children:`api-reference.md`}),`, `,(0,c.jsx)(t.code,{children:`storage-state.md`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sử dụng:`}),` Được phân tích khi tạo tài liệu để hình thành các trigger trong khối `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),` của `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ai-types.md`}),` (Đặc tả TypeScript API tối ưu hóa)`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Vị trí:`}),` Thư mục gốc package.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mục đích:`}),` Được tạo tự động bởi lệnh `,(0,c.jsx)(t.code,{children:`dxt-types`}),`. Chứa các khai báo kiểu, interface, class và hàm đã được lọc sạch kèm chú thích JSDoc và thẻ tìm kiếm (`,(0,c.jsx)(t.code,{children:`@keywords`}),`), loại bỏ hoàn toàn các thuộc tính private và chi tiết cài đặt.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ai-screenshot/`}),` (Ngữ cảnh trực quan của package)`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Vị trí:`}),` Thư mục gốc package.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mục đích:`}),` Chứa ảnh chụp giao diện (`,(0,c.jsx)(t.code,{children:`.webp`}),`), cây DOM kết xuất (`,(0,c.jsx)(t.code,{children:`screenshot-code.html`}),`) và CSS áp dụng (`,(0,c.jsx)(t.code,{children:`screenshot-styles.css`}),`) do `,(0,c.jsx)(t.code,{children:`dxt-screenshot`}),` tạo ra.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),` (Định nghĩa tài nguyên MCP của package)`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Vị trí:`}),` Thư mục gốc package.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mục đích:`}),` Bản đồ URI tài nguyên của package để xuất sang giao thức Model Context Protocol.`]}),`
`]}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};