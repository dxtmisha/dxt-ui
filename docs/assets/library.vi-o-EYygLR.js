import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/2. AI/6. Tích hợp vào thư viện`}),`
`,(0,c.jsx)(t.h1,{id:`tích-hợp-aidd-vào-thư-viện-và-package`,children:`Tích hợp AIDD vào Thư viện và Package`}),`
`,(0,c.jsx)(t.p,{children:`Để một thư viện component, UI kit hoặc bộ tiện ích có thể tương tác hoàn hảo với các trợ lý AI theo mô hình AI-Driven Development (AIDD), package đó phải tự cung cấp siêu dữ liệu có cấu trúc mà máy có thể đọc được.`}),`
`,(0,c.jsxs)(t.p,{children:[`Khi thư viện này được cài đặt vào một dự án, trợ lý AI sẽ tự động truy cập được vào bản tóm tắt kiểu dữ liệu công khai (`,(0,c.jsx)(t.code,{children:`ai-types.md`}),`), hồ sơ kiến trúc package (`,(0,c.jsx)(t.code,{children:`ai-description.md`}),`), các quy tắc chuyên sâu (`,(0,c.jsx)(t.code,{children:`ai-resources/`}),`), ảnh chụp trực quan (`,(0,c.jsx)(t.code,{children:`ai-screenshot/`}),`) và tài nguyên MCP (`,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`). Điều này giúp AI sử dụng thư viện với độ chính xác tuyệt đối, không bị ảo giác và không đòi hỏi lập trình viên phải sao chép mã nguồn thủ công vào cửa sổ chat.`]}),`
`,(0,c.jsx)(t.h2,{id:`bước-1-cài-đặt-package-scripts`,children:`Bước 1: Cài đặt Package Scripts`}),`
`,(0,c.jsxs)(t.p,{children:[`Cài đặt package `,(0,c.jsx)(t.code,{children:`@dxtmisha/scripts`}),` vào `,(0,c.jsx)(t.code,{children:`devDependencies`}),` của thư viện:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm install @dxtmisha/scripts --save-dev
`})}),`
`,(0,c.jsx)(t.h2,{id:`bước-2-cấu-hình-tệp-designconfigjson`,children:`Bước 2: Cấu hình tệp design.config.json`}),`
`,(0,c.jsxs)(t.p,{children:[`Mọi quy trình tạo siêu dữ liệu AI được quản lý thông qua tệp cấu hình `,(0,c.jsx)(t.code,{children:`design.config.json`}),` ở thư mục gốc của thư viện (hoặc kế thừa qua cơ chế `,(0,c.jsx)(t.code,{children:`"extends"`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:`Cấu hình này chỉ tạo ở phía thư viện nhằm xác định tham số kết nối với nhà cung cấp AI để chuẩn hóa chữ ký và JSDoc:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "aiType": "gemini",
  "aiModel": "gemini-3.7-flash",
  "aiKey": "AIzaSy...",
  "aiConfig": {
    "temperature": 0.2
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:`Các thuộc tính cấu hình:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiType`})}),` — Nhà cung cấp AI được hỗ trợ: `,(0,c.jsx)(t.code,{children:`gemini`}),` (bao gồm `,(0,c.jsx)(t.code,{children:`gemini-cli`}),`), `,(0,c.jsx)(t.code,{children:`openai`}),`, `,(0,c.jsx)(t.code,{children:`claude`}),` (bao gồm `,(0,c.jsx)(t.code,{children:`claude-cli`}),` và `,(0,c.jsx)(t.code,{children:`claude-agent`}),`), và `,(0,c.jsx)(t.code,{children:`zai`}),` (Zhipu AI).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiModel`})}),` — Định danh mô hình sử dụng (ví dụ: `,(0,c.jsx)(t.code,{children:`gemini-3.7-flash`}),`, `,(0,c.jsx)(t.code,{children:`gpt-4o`}),`, `,(0,c.jsx)(t.code,{children:`claude-3-7-sonnet`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiKey`})}),` — API key của nhà cung cấp AI đã chọn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiConfig`})}),` — Các tùy chọn bổ sung khi tạo (ví dụ: nhiệt độ phản hồi `,(0,c.jsx)(t.code,{children:`temperature: 0.2`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`bước-3-cấu-hình-script-build-trong-packagejson`,children:`Bước 3: Cấu hình Script Build trong package.json`}),`
`,(0,c.jsxs)(t.p,{children:[`Thêm các lệnh tạo kiểu và ngữ cảnh trực quan vào phần `,(0,c.jsx)(t.code,{children:`scripts`}),` trong `,(0,c.jsx)(t.code,{children:`package.json`}),` của thư viện:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "scripts": {
    "build": "vite build && vue-tsc --emitDeclarationOnly",
    "types": "npm run build && dxt-types",
    "types:save": "dxt-types-save",
    "screenshot": "dxt-screenshot"
  }
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Quy tắc tối quan trọng: Build bundle trước khi tạo kiểu. Lệnh `,(0,c.jsx)(t.code,{children:`dxt-types`}),` phải luôn chạy sau lệnh build package (`,(0,c.jsx)(t.code,{children:`npm run build && dxt-types`}),`).`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Vì sao điều này bắt buộc:`}),` Trình tạo AI phân tích chính package đã biên dịch cuối cùng. Bundle đã biên dịch gọn gàng hơn nhiều so với mã nguồn thô: nó không chứa tệp nháp, hàm trợ giúp nội bộ private và các phần tử không được export. Việc phân tích bundle hoàn chỉnh đảm bảo tạo ra hợp đồng API công khai sạch và chính xác nhất cho AI.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Tóm tắt các lệnh:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`npm run types`})}),` — Biên dịch toàn bộ kiểu dữ liệu, lọc bỏ các trường private trong AST, gọi AI chuẩn hóa JSDoc và tạo các tệp `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`, `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`, `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`npm run types:save`})}),` — Cập nhật nhanh siêu dữ liệu và tài nguyên MCP từ cache kiểu có sẵn mà không cần gọi lại API mạng đến AI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`npm run screenshot`})}),` — Khởi chạy dev server trên trình duyệt headless, chụp ảnh màn hình component (`,(0,c.jsx)(t.code,{children:`ai-screenshot/*.webp`}),`), trích xuất DOM (`,(0,c.jsx)(t.code,{children:`screenshot-code.html`}),`) và CSS đã tính toán (`,(0,c.jsx)(t.code,{children:`screenshot-styles.css`}),`) cho các mô hình AI đa phương thức.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`bước-4-chuẩn-bị-siêu-dữ-liệu-mã-nguồn-và-hướng-dẫn-chuyên-đề`,children:`Bước 4: Chuẩn bị Siêu dữ liệu Mã nguồn và Hướng dẫn Chuyên đề`}),`
`,(0,c.jsx)(t.p,{children:`Hiệu quả tương tác của AI phụ thuộc trực tiếp vào cách chú thích mã nguồn và các tệp tài liệu đi kèm:`}),`
`,(0,c.jsx)(t.h3,{id:`1-chú-thích-jsdoc-thẻ-chuyên-biệt--tự-động-tạo-keywords`,children:`1. Chú thích JSDoc (Thẻ chuyên biệt & Tự động tạo @keywords)`}),`
`,(0,c.jsx)(t.p,{children:`Thêm chú thích JSDoc rõ ràng cho mọi phương thức, hàm, interface và component công khai:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`@example`})}),` — Các ví dụ thực tế về cách gọi phương thức hoặc mẫu template component.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`@note`})}),` — Các lưu ý kiến trúc, quy tắc vòng đời và tác dụng phụ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`@warning`})}),` — Giới hạn môi trường thực thi (ví dụ: chỉ chạy trên trình duyệt hoặc không gọi trong template render).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`@remarks`})}),` — Giải thích chi tiết cho logic kỹ thuật phức tạp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Tự động sinh `,(0,c.jsx)(t.code,{children:`@keywords`}),`:`]}),` Thẻ tìm kiếm và từ đồng nghĩa (`,(0,c.jsx)(t.code,{children:`@keywords`}),`) `,(0,c.jsx)(t.strong,{children:`do chính AI tự động tạo ra`}),` khi chạy lệnh `,(0,c.jsx)(t.code,{children:`npm run types`}),` (`,(0,c.jsx)(t.code,{children:`dxt-types`}),`). Lập trình viên không cần viết thủ công: mô hình ngôn ngữ sẽ phân tích ngữ nghĩa hàm và tự động bổ sung vào `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` các khóa tìm kiếm liên tưởng để AI tra cứu nhanh chóng.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`/**
 * Executes a localized HTTP request with automatic session token binding.
 *
 * Выполняет локализованный HTTP-запрос с автоматической привязкой токена сессии.
 * @example
 * const user = await fetchApi<UserProfile>('/api/user/me')
 *
 * @note Automatically attaches Bearer token from active session storage.
 * @warning Do not invoke directly in component template render cycle.
 * @param url request endpoint URL / URL адрес эндпоинта
 * @param options request options / параметры запроса
 * @returns parsed response data / распарсенные данные ответа
 */
export async function fetchApi<T>(url: string, options?: RequestOptions): Promise<T>;
`})}),`
`,(0,c.jsx)(t.h3,{id:`2-tuyên-ngôn-kiến-trúc-thư-viện-ai-docmd`,children:`2. Tuyên ngôn Kiến trúc Thư viện (ai-doc.md)`}),`
`,(0,c.jsxs)(t.p,{children:[`Tạo tệp `,(0,c.jsx)(t.code,{children:`ai-doc.md`}),` ở thư mục gốc của thư viện. Tệp này ghi lại các quy tắc cốt lõi khi viết mã với package:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Triết lý kiến trúc (ví dụ: "mọi component chỉ làm nhiệm vụ hiển thị; logic phải nằm trong composable").`}),`
`,(0,c.jsx)(t.li,{children:`Ràng buộc bắt buộc (ví dụ: "không dùng mã màu HEX trực tiếp; chỉ dùng design token từ package").`}),`
`,(0,c.jsxs)(t.li,{children:[`Trong quá trình tạo tài liệu, nội dung `,(0,c.jsx)(t.code,{children:`ai-doc.md`}),` sẽ tự động được nhúng vào `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` và tổng hợp vào `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`3-quy-chuẩn-chuyên-đề-ai-resources`,children:`3. Quy chuẩn Chuyên đề (ai-resources/)`}),`
`,(0,c.jsxs)(t.p,{children:[`Tạo các hướng dẫn chuyên sâu theo từng chủ đề trong thư mục `,(0,c.jsx)(t.code,{children:`ai-resources/`}),` của package (ví dụ: `,(0,c.jsx)(t.code,{children:`ai-resources/colors.md`}),`, `,(0,c.jsx)(t.code,{children:`ai-resources/skeleton.md`}),`, `,(0,c.jsx)(t.code,{children:`ai-resources/storage.md`}),`):`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Viết quy tắc theo cấu trúc "Phản mẫu (Anti-Pattern) vs Mẫu khuyến nghị (Recommended Pattern)".`}),`
`,(0,c.jsxs)(t.li,{children:[`Script `,(0,c.jsx)(t.code,{children:`dxt-types`}),` sẽ tự động phân tích các tệp này và điền vào khối `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),` trong `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`bước-5-cấu-hình-gitignore-cho-thư-viện`,children:`Bước 5: Cấu hình .gitignore cho Thư viện`}),`
`,(0,c.jsx)(t.p,{children:`Các tệp kiểu dữ liệu sinh tự động và thư mục biên dịch tạm thời cần được loại trừ khỏi Git:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-gitignore`,children:`ai-types.md
ai-description.md
ai-types-temp
ai-tmp
ai-mcp-resources.json
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Quy tắc quan trọng:`}),` Tuyệt đối `,(0,c.jsx)(t.strong,{children:`KHÔNG`}),` đưa `,(0,c.jsx)(t.code,{children:`ai-doc.md`}),` và thư mục `,(0,c.jsx)(t.code,{children:`ai-resources/`}),` vào `,(0,c.jsx)(t.code,{children:`.gitignore`}),`. Đây là các tệp nguồn được viết thủ công chứa tri thức kiến trúc quan trọng và bắt buộc phải được theo dõi trong Git.`]}),`
`,(0,c.jsx)(t.h2,{id:`bước-6-chạy-tạo-và-kiểm-tra-kết-quả`,children:`Bước 6: Chạy Tạo và Kiểm tra Kết quả`}),`
`,(0,c.jsx)(t.p,{children:`Chạy quy trình biên dịch kiểu:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run types
`})}),`
`,(0,c.jsx)(t.p,{children:`Sau khi hoàn tất, thư mục gốc của package sẽ có:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`ai-types.md`})}),` — Đặc tả TypeScript tối ưu hóa token với các thẻ `,(0,c.jsx)(t.code,{children:`@keywords`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`ai-description.md`})}),` — Tổng quan năng lực package kèm chỉ mục `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`})}),` — Danh mục tài nguyên cho giao thức Model Context Protocol.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Nếu thư viện có component giao diện UI, hãy chụp ngữ cảnh trực quan:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run screenshot
`})}),`
`,(0,c.jsx)(t.h2,{id:`bước-7-xuất-bản-và-phân-phối-package`,children:`Bước 7: Xuất bản và Phân phối Package`}),`
`,(0,c.jsx)(t.p,{children:`Để các dự án tiêu thụ thư viện của bạn nhận được đầy đủ cơ sở hạ tầng AI một cách tự động, hãy đảm bảo các tệp siêu dữ liệu được đưa vào package khi publish.`}),`
`,(0,c.jsxs)(t.p,{children:[`Kiểm tra trường `,(0,c.jsx)(t.code,{children:`files`}),` trong `,(0,c.jsx)(t.code,{children:`package.json`}),` của thư viện:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "files": [
    "dist",
    "ai-types.md",
    "ai-description.md",
    "ai-resources",
    "ai-screenshot",
    "ai-mcp-resources.json",
    "ai-doc.md"
  ]
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Khi ứng dụng client cài đặt package đã xuất bản, lệnh `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),` sẽ tự động tìm thấy `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` và tích hợp các hợp đồng của thư viện vào tệp `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` chung.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};