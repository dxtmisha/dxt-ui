import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/# Tài liệu AI (AI Docs)`}),`
`,(0,c.jsx)(t.h1,{id:`hình-thành-tài-liệu-ai`,children:`Hình thành Tài liệu AI`}),`
`,(0,c.jsx)(t.p,{children:`Quá trình phát triển hiện đại ngày càng phụ thuộc vào các công cụ trí tuệ nhân tạo (GitHub Copilot, Cursor, các tác nhân LLM tùy chỉnh). Tuy nhiên, kiến trúc phức tạp, việc lồng ghép file sâu và các bình luận dư thừa thường làm AI nhầm lẫn hoặc làm tràn cửa sổ ngữ cảnh (context window) của chúng.`}),`
`,(0,c.jsxs)(t.p,{children:[`Package `,(0,c.jsx)(t.code,{children:`@dxtmisha/scripts`}),` giải quyết vấn đề này bằng cách tự động tạo ra các hướng dẫn, kiểu dữ liệu (types) và siêu dữ liệu (metadata) được tối ưu hóa và nén đặc biệt để các mạng nơ-ron có thể dễ dàng hiểu được.`]}),`
`,(0,c.jsx)(t.h2,{id:`tối-ưu-hóa-kiểu-dữ-liệu-designtypes`,children:`Tối ưu hóa Kiểu dữ liệu (DesignTypes)`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`DesignTypes`}),` là một trình "đóng gói" kiểu dữ liệu thông minh, chuẩn bị các kiểu của dự án để đưa vào ngữ cảnh của AI.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Cách thức hoạt động:`})}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Quét bản dựng (Build Scanning):`}),` Script phân tích thư mục `,(0,c.jsx)(t.code,{children:`dist/`}),`, tìm kiếm tất cả các file khai báo (`,(0,c.jsx)(t.code,{children:`.d.ts`}),`), loại trừ các file tiện ích (wiki, basic types).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Gộp file:`}),` Các file được tìm thấy sẽ được kết hợp lại thành một mảng văn bản duy nhất.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Nén bằng AI (AI Edit):`}),` Script gửi mã kết quả đến AI nội bộ (thông qua `,(0,c.jsx)(t.code,{children:`useAi`}),`) với một câu lệnh (prompt) nghiêm ngặt:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Xóa tất cả các bình luận tiếng Nga (để tiết kiệm token và đảm bảo tính phổ quát).`}),`
`,(0,c.jsx)(t.li,{children:`Rút gọn các bình luận tiếng Anh ở mức tối thiểu mà không làm mất ý nghĩa.`}),`
`,(0,c.jsxs)(t.li,{children:[`Xóa tất cả các phương thức `,(0,c.jsx)(t.code,{children:`private`}),` và `,(0,c.jsx)(t.code,{children:`protected`}),`, chỉ giữ lại API công khai.`]}),`
`,(0,c.jsx)(t.li,{children:`Xóa các import và các enums lớn không mang lại giá trị thực tế.`}),`
`,(0,c.jsxs)(t.li,{children:[`Giữ lại tất cả các thẻ JSDoc quan trọng (`,(0,c.jsx)(t.code,{children:`@example`}),`, `,(0,c.jsx)(t.code,{children:`@remarks`}),`).`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kết quả:`}),` File `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` được tạo ra, chứa một thư viện kiểu dữ liệu được nén cực nhỏ nhưng cực kỳ toàn diện. Các trợ lý AI có thể đọc file này trong tích tắc để hiểu kiến trúc package và viết mã nguồn hoàn hảo.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`tạo-mô-tả-ai-description`,children:`Tạo Mô tả (AI Description)`}),`
`,(0,c.jsxs)(t.p,{children:[`Ngoài các kiểu dữ liệu, script còn phân tích mã và tự động tạo ra file `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`. Đây là một bản tóm tắt dự án mang tính kỹ thuật cao nhằm:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Giải thích mục đích chính của thư viện cho một trợ lý AI khác.`}),`
`,(0,c.jsx)(t.li,{children:`Liệt kê các lớp (classes), hooks, và tiện ích cốt lõi.`}),`
`,(0,c.jsxs)(t.li,{children:[`Cung cấp các trình kích hoạt (triggers) nghiêm ngặt — chỉ rõ chính xác khi nào AI bắt buộc phải đọc file `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` trước khi viết mã.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`tạo-hướng-dẫn-ai-aidoc`,children:`Tạo Hướng dẫn AI (AiDoc)`}),`
`,(0,c.jsxs)(t.p,{children:[`Hệ thống bao gồm mô-đun `,(0,c.jsx)(t.code,{children:`AiDoc`}),` đệ quy duyệt qua các thư mục component và sử dụng AI để tạo hoặc cập nhật các hướng dẫn markdown cho nhà phát triển (ví dụ: `,(0,c.jsx)(t.code,{children:`ai-developer.md`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`AiDocType`}),` phân tích mã nguồn của các thư mục cụ thể và định dạng các quy tắc hành vi: cách mở rộng constructor đúng cách, sử dụng các lớp `,(0,c.jsx)(t.code,{children:`Include`}),` nào, và các mô hình thiết kế (patterns) nào bị cấm.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-lệnh-chính`,children:`Các lệnh chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-types`})}),` — chạy quá trình tạo và nén các kiểu dữ liệu TypeScript (`,(0,c.jsx)(t.code,{children:`ai-types.md`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-ai-doc`})}),` — chạy quá trình tạo tài liệu AI trên toàn bộ các thư mục của dự án.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};