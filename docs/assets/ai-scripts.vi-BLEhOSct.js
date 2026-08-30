import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/2. Tạo định nghĩa kiểu và lời nhắc AI`}),`
`,(0,c.jsx)(t.h1,{id:`tạo-định-nghĩa-kiểu-và-lời-nhắc-ai`,children:`Tạo định nghĩa kiểu và lời nhắc AI`}),`
`,(0,c.jsxs)(t.p,{children:[`Trong hệ sinh thái `,(0,c.jsx)(t.strong,{children:`DXT UI`}),`, quá trình chuẩn bị ngữ cảnh máy có thể đọc được và đào tạo các trợ lý AI lập trình được tự động hóa hoàn toàn thông qua hai lệnh CLI bổ trợ lẫn nhau: `,(0,c.jsx)(t.code,{children:`dxt-types`}),` (`,(0,c.jsx)(t.code,{children:`design-types.ts`}),`) và `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),` (`,(0,c.jsx)(t.code,{children:`design-prompt.ts`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:`Các công cụ này giúp giải phóng lập trình viên khỏi gánh nặng sao chép tài liệu thủ công, tạo ra các hợp đồng mã nguồn có kiểu chặt chẽ, tối ưu hóa token và hợp nhất các quy tắc hệ thống.`}),`
`,(0,c.jsx)(t.h2,{id:`ưu-điểm-vượt-trội-của-tự-động-hóa`,children:`Ưu điểm vượt trội của tự động hóa`}),`
`,(0,c.jsx)(t.h3,{id:`1-không-ảo-giác-nhờ-hợp-đồng-kiểu-chuẩn-xác-zero-hallucinations`,children:`1. Không ảo giác nhờ hợp đồng kiểu chuẩn xác (Zero Hallucinations)`}),`
`,(0,c.jsxs)(t.p,{children:[`Lệnh `,(0,c.jsx)(t.code,{children:`dxt-types`}),` trích xuất các tệp khai báo TypeScript (`,(0,c.jsx)(t.code,{children:`.d.ts`}),`), loại bỏ hoàn toàn các thuộc tính private và chi tiết cài đặt bên trong, chỉ giữ lại API công khai. Trợ lý AI chỉ dựa vào các export thực tế của thư viện.`]}),`
`,(0,c.jsx)(t.h3,{id:`2-nguồn-chân-lý-duy-nhất-single-source-of-truth`,children:`2. Nguồn chân lý duy nhất (Single Source of Truth)`}),`
`,(0,c.jsxs)(t.p,{children:[`Lệnh `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),` quét đệ quy các package nội bộ và dependency trong `,(0,c.jsx)(t.code,{children:`node_modules`}),`, tổng hợp metadata và tạo tệp `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` tại thư mục gốc monorepo, tự động khởi tạo ngữ cảnh ngay khi bắt đầu bất kỳ phiên làm việc AI nào.`]}),`
`,(0,c.jsx)(t.h3,{id:`3-hỗ-trợ-gốc-giao-thức-model-context-protocol-mcp`,children:`3. Hỗ trợ gốc giao thức Model Context Protocol (MCP)`}),`
`,(0,c.jsxs)(t.p,{children:[`Cả hai script đều tự động tạo các bản kê tài nguyên `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),` và `,(0,c.jsx)(t.code,{children:`ai-mcp-all-resources.json`}),`, cho phép các trợ lý AI hiện đại kết nối trực tiếp qua giao thức MCP.`]}),`
`,(0,c.jsx)(t.h2,{id:`hướng-dẫn-từng-bước-những-việc-cần-làm`,children:`Hướng dẫn từng bước (Những việc cần làm)`}),`
`,(0,c.jsxs)(t.h3,{id:`phần-1-tạo-kiểu-dữ-liệu-và-hồ-sơ-package-dxt-types`,children:[`Phần 1. Tạo kiểu dữ liệu và hồ sơ Package (`,(0,c.jsx)(t.code,{children:`dxt-types`}),`)`]}),`
`,(0,c.jsx)(t.h4,{id:`bước-11-chạy-lệnh-tạo-kiểu-trong-thư-mục-package`,children:`Bước 1.1. Chạy lệnh tạo kiểu trong thư mục Package`}),`
`,(0,c.jsx)(t.p,{children:`Sau khi thêm hoặc chỉnh sửa hàm, component hoặc interface, hãy thực hiện trong thư mục package:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-types
`})}),`
`,(0,c.jsx)(t.p,{children:`Script sẽ tự động thực hiện các thao tác sau:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Biên dịch các khai báo TypeScript vào một thư mục tạm thời riêng biệt.`}),`
`,(0,c.jsxs)(t.li,{children:[`Loại bỏ chi tiết cài đặt, các thuộc tính `,(0,c.jsx)(t.code,{children:`private`}),` và `,(0,c.jsx)(t.code,{children:`protected`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Tối ưu hóa chú thích JSDoc bằng AI, giữ lại các thẻ kiến trúc quan trọng (`,(0,c.jsx)(t.code,{children:`@example`}),`, `,(0,c.jsx)(t.code,{children:`@note`}),`, `,(0,c.jsx)(t.code,{children:`@warning`}),`, `,(0,c.jsx)(t.code,{children:`@remarks`}),`, `,(0,c.jsx)(t.code,{children:`@keywords`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Tạo tệp `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` chứa đặc tả kiểu đã nén gọn.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Tạo hồ sơ thư viện `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` kèm khối `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),` từ thư mục `,(0,c.jsx)(t.code,{children:`ai-resources/`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Ghi tệp tài nguyên `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`DesignTypes: making AI types...
DesignTypes: AI types saved.
`})}),`
`,(0,c.jsxs)(t.h4,{id:`bước-12-lưu-nhanh-ngoại-tuyến-không-dùng-ai-dxt-types-save`,children:[`Bước 1.2. Lưu nhanh ngoại tuyến không dùng AI (`,(0,c.jsx)(t.code,{children:`dxt-types-save`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Nếu cần tạo lại tệp kiểu từ bộ nhớ đệm có sẵn mà không cần gọi API AI:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-types-save
`})}),`
`,(0,c.jsxs)(t.h4,{id:`các-tùy-chọn-của-lệnh-dxt-types`,children:[`Các tùy chọn của lệnh `,(0,c.jsx)(t.code,{children:`dxt-types`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-types [--prompts DIR] [--dir DIR] [--dist DIR]
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`--prompts`}),` (`,(0,c.jsx)(t.code,{children:`-p`}),`)`]}),`: Đường dẫn tới thư mục quy tắc cục bộ (mặc định là `,(0,c.jsx)(t.code,{children:`ai-resources`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`--dir`}),` (`,(0,c.jsx)(t.code,{children:`-d`}),`)`]}),`: Thư mục tạm thời chứa các khai báo trung gian (mặc định là `,(0,c.jsx)(t.code,{children:`ai-types-temp`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`--dist`})}),`: Thư mục chứa các tệp JS/DTS đã biên dịch (mặc định là `,(0,c.jsx)(t.code,{children:`dist`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.h3,{id:`phần-2-hợp-nhất-lời-nhắc-toàn-cục-dxt-prompt`,children:[`Phần 2. Hợp nhất lời nhắc toàn cục (`,(0,c.jsx)(t.code,{children:`dxt-prompt`}),`)`]}),`
`,(0,c.jsx)(t.h4,{id:`bước-21-chạy-lệnh-tạo-lời-nhắc-hệ-thống`,children:`Bước 2.1. Chạy lệnh tạo lời nhắc hệ thống`}),`
`,(0,c.jsxs)(t.p,{children:[`Tại thư mục gốc monorepo, hãy chạy `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-prompt
`})}),`
`,(0,c.jsx)(t.p,{children:`Script sẽ tiến hành xây dựng ngữ cảnh toàn cục:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Quét đệ quy các thư mục module đã cấu hình (`,(0,c.jsx)(t.code,{children:`packages/*`}),`, `,(0,c.jsx)(t.code,{children:`node_modules/@dxtmisha/*`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Thu thập mô tả package (`,(0,c.jsx)(t.code,{children:`ai-description.md`}),`), hướng dẫn (`,(0,c.jsx)(t.code,{children:`ai-doc.md`}),`), liên kết kiểu (`,(0,c.jsx)(t.code,{children:`ai-types.md`}),`) và ảnh chụp (`,(0,c.jsx)(t.code,{children:`ai-screenshot/`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Kết hợp vai trò hệ thống, nguyên tắc AI Code Promise (`,(0,c.jsx)(t.code,{children:`aiCodeGlobalPrompt`}),`) và tiêu chuẩn Vue Style Guide (`,(0,c.jsx)(t.code,{children:`aiCodeVuePrompt`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Nhúng các chỉ thị ưu tiên cao từ `,(0,c.jsx)(t.code,{children:`ai-instruction.md`}),` (nếu có).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Thêm danh sách kiểm tra tự đánh giá bắt buộc (`,(0,c.jsx)(t.code,{children:`Self-Audit`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Lưu tệp kết quả `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` tại thư mục gốc dự án.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`Generating AI prompt...
end
`})}),`
`,(0,c.jsx)(t.h4,{id:`bước-22-tạo-kèm-danh-mục-tài-nguyên-mcp-hợp-nhất`,children:`Bước 2.2. Tạo kèm danh mục tài nguyên MCP hợp nhất`}),`
`,(0,c.jsxs)(t.p,{children:[`Để tự động tạo bản kê tài nguyên `,(0,c.jsx)(t.code,{children:`ai-mcp-all-resources.json`}),`, thêm tùy chọn `,(0,c.jsx)(t.code,{children:`--mcp`}),` (`,(0,c.jsx)(t.code,{children:`-m`}),`):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-prompt --mcp
`})}),`
`,(0,c.jsx)(t.h2,{id:`cấu-trúc-bên-trong-của-các-công-cụ`,children:`Cấu trúc bên trong của các công cụ`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[`Bộ sinh kiểu dữ liệu (`,(0,c.jsx)(t.code,{children:`DesignTypes`}),`)`]}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`DesignTypesBuild`}),` — Quản lý biên dịch tạm thời các khai báo TypeScript.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`DesignTypesMake`}),` — Làm sạch AST khai báo và loại bỏ thực thể private.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`DesignTypesAi`}),` — Tương tác với mô hình ngôn ngữ để chuẩn hóa JSDoc.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`DesignTypesPrompts`}),` — Lưu bộ nhớ đệm và phân tích quy tắc từ `,(0,c.jsx)(t.code,{children:`ai-resources/`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`DesignTypesDescription`}),` — Tổng hợp mô tả kỹ thuật trong `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`DesignTypesMcp`}),` — Đăng ký tài nguyên có kiểu MIME trong `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[`Bộ tổng hợp lời nhắc (`,(0,c.jsx)(t.code,{children:`LibraryAiPrompt`}),`)`]}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`LibraryAiPromptItem`}),` — Quét từng package riêng lẻ và thu thập metadata.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`LibraryAiMcp`}),` — Tổng hợp danh mục tài nguyên toàn cục `,(0,c.jsx)(t.code,{children:`ai-mcp-all-resources.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`LibraryAiWiki`}),` — Đồng bộ hóa cấu trúc tài liệu MDX.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ưu-điểm-so-với-quản-lý-ngữ-cảnh-thủ-công`,children:`Ưu điểm so với quản lý ngữ cảnh thủ công`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đồng bộ tự động`}),`: Ngữ cảnh AI luôn khớp chính xác 100% với mã nguồn thực tế.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tiết kiệm tới 80% token`}),`: Việc làm sạch kiểu và tải lười theo trigger ngăn ngừa tràn bộ nhớ ngữ cảnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Độc lập với công cụ`}),`: Tệp `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` hoạt động đồng nhất trên Antigravity, Cursor, Windsurf, Claude Code và GitHub Copilot.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};