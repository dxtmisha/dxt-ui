import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/2. AI/5. Tạo tài liệu`}),`
`,(0,c.jsx)(t.h1,{id:`tạo-tài-liệu-và-định-nghĩa-kiểu-dxt-types`,children:`Tạo tài liệu và định nghĩa kiểu (dxt-types)`}),`
`,(0,c.jsxs)(t.p,{children:[`Lệnh `,(0,c.jsx)(t.code,{children:`dxt-types`}),` cùng class cốt lõi `,(0,c.jsx)(t.code,{children:`DesignTypes`}),` chịu trách nhiệm biên dịch, làm sạch, nén token và tạo ra bộ đầy đủ các tệp tài liệu AI cho bất kỳ package nào trong monorepo.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Công cụ chuyển đổi các tệp khai báo TypeScript (`,(0,c.jsx)(t.code,{children:`.d.ts`}),`) đồ sộ thành tài liệu tra cứu kiểu `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` cực kỳ gọn nhẹ, tạo hồ sơ kiến trúc `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` và đăng ký tài nguyên cho giao thức MCP.`]}),`
`,(0,c.jsx)(t.h2,{id:`quy-trình-kỹ-thuật-tạo-tài-liệu`,children:`Quy trình kỹ thuật tạo tài liệu`}),`
`,(0,c.jsx)(t.p,{children:`Quá trình sinh tài liệu được chia thành các giai đoạn rõ ràng:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`1. Biên dịch khai báo (`,(0,c.jsx)(t.code,{children:`DesignTypesBuild`}),`)`]}),`
Script biên dịch dự án và xuất các tệp `,(0,c.jsx)(t.code,{children:`.d.ts`}),` vào một thư mục tạm thời riêng biệt (ví dụ: `,(0,c.jsx)(t.code,{children:`ai-types-temp/`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`2. Lọc và làm sạch cấu trúc (`,(0,c.jsx)(t.code,{children:`DesignTypesMake`}),`)`]}),`
Tự động loại bỏ toàn bộ phần thân hàm cài đặt, các thuộc tính và phương thức private (`,(0,c.jsx)(t.code,{children:`private`}),`) cũng như protected (`,(0,c.jsx)(t.code,{children:`protected`}),`), chỉ giữ lại giao diện công khai (API).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`3. Tối ưu hóa thông minh bằng AI (`,(0,c.jsx)(t.code,{children:`DesignTypesAi`}),`)`]}),`
Mô hình AI phân tích kiểu dữ liệu và mã JavaScript tương ứng, loại bỏ các chi tiết thừa và chuẩn hóa chú thích JSDoc ngắn gọn bằng tiếng Anh, tạo ra tệp `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`4. Xử lý tài nguyên cục bộ (`,(0,c.jsx)(t.code,{children:`DesignTypesPrompts`}),`)`]}),`
Script quét thư mục `,(0,c.jsx)(t.code,{children:`ai-resources/`}),` của package, tổng hợp tiêu đề và nội dung quy tắc của các tài liệu chuyên đề.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`5. Tạo hồ sơ Package (`,(0,c.jsx)(t.code,{children:`DesignTypesDescription`}),`)`]}),`
Hình thành tệp `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` chứa định nghĩa mục đích kỹ thuật, điều kiện trigger nghiên cứu và danh sách `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`6. Đăng ký tài nguyên MCP (`,(0,c.jsx)(t.code,{children:`DesignTypesMcp`}),`)`]}),`
Tạo tệp `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),` chứa khai báo URI của tất cả các kiểu, mô tả, ảnh chụp và lời nhắc của package cho các client MCP.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`7. Dọn dẹp tệp tạm thời`}),`
Thư mục tạm thời dùng trong quá trình biên dịch được tự động xóa bỏ sau khi hoàn thành.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`kiểm-soát-tạo-tài-liệu-thông-qua-thẻ-jsdoc`,children:`Kiểm soát tạo tài liệu thông qua thẻ JSDoc`}),`
`,(0,c.jsxs)(t.p,{children:[`Bộ lọc tự động loại bỏ các chú thích hiển nhiên, nhưng `,(0,c.jsx)(t.strong,{children:`đảm bảo giữ lại và chuyển giao`}),` các thẻ kiến trúc đặc biệt vào `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`@example`}),` (Ví dụ sử dụng)`]}),` — Minh họa cho AI cách thức chuẩn mực để gọi phương thức, dịch vụ hoặc component.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`@note`}),` (Ghi chú kiến trúc)`]}),` — Ghi lại tác dụng phụ, quy tắc khởi tạo và vòng đời hoạt động.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`@warning`}),` (Cảnh báo và giới hạn)`]}),` — Nhấn mạnh các giới hạn nghiêm ngặt (ví dụ: «chỉ chạy trên trình duyệt / DOM» hoặc «không gọi trong template»).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`@remarks`}),` (Chú thích mở rộng)`]}),` — Diễn giải chi tiết về mặt kỹ thuật cho các đoạn logic phức tạp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`@keywords`}),` (Thẻ tìm kiếm)`]}),` — Từ khóa và từ đồng nghĩa giúp AI tìm nhanh interface hoặc hàm cần thiết qua tính năng tìm kiếm văn bản mà không phải quét toàn bộ tệp.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`cấu-trúc-của-tệp-ai-descriptionmd`,children:`Cấu trúc của tệp ai-description.md`}),`
`,(0,c.jsxs)(t.p,{children:[`Tệp `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` đóng vai trò là bản tóm tắt của package cho lời nhắc toàn cục:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Package Description`}),` — 1-2 câu ngắn gọn nêu bật vai trò kỹ thuật của thư viện.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Triggers for Studying ai-types.md`}),` — Danh sách rõ ràng các tình huống mà AI bắt buộc phải đọc `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Key Capabilities`}),` — Danh sách các nhóm tính năng cốt lõi (mỗi mục từ 1-3 từ).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mandatory Rules`}),` — Danh mục quy tắc từ `,(0,c.jsx)(t.code,{children:`ai-resources/`}),` kèm trigger ngắn gọn.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-chế-độ-chạy`,children:`Các chế độ chạy`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tạo chuẩn có dùng AI:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-types
`})}),`
`,(0,c.jsx)(t.p,{children:`Thực hiện biên dịch đầy đủ và gọi API AI để nén văn bản và tạo mô tả tối ưu nhất.`}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Lưu nhanh ngoại tuyến không dùng AI (`,(0,c.jsx)(t.code,{children:`dxt-types-save`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-types-save
`})}),`
`,(0,c.jsx)(t.p,{children:`Chế độ nhanh ghép các kiểu đã lưu trong bộ nhớ đệm và cập nhật tài nguyên MCP mà không cần gọi API mạng ra ngoài.`}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};