import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/2. AI/4. Toàn bộ quy trình làm việc`}),`
`,(0,c.jsx)(t.h1,{id:`toàn-bộ-quy-trình-làm-việc-aidd-workflow`,children:`Toàn bộ quy trình làm việc (AIDD Workflow)`}),`
`,(0,c.jsxs)(t.p,{children:[`Để duy trì hệ sinh thái AI-Driven Development (AIDD) luôn đồng bộ và đạt hiệu quả cao nhất khi phát triển hoặc bảo trì các package trong thư viện `,(0,c.jsx)(t.code,{children:`dxt-ui`}),`, lập trình viên tuân theo chu trình kỹ thuật chuẩn hóa sau đây.`]}),`
`,(0,c.jsx)(t.h2,{id:`bước-1-phát-triển-mã-nguồn`,children:`Bước 1: Phát triển mã nguồn`}),`
`,(0,c.jsx)(t.p,{children:`Quá trình lập trình chuẩn về logic, component và tiện ích trong monorepo:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Xây dựng component Vue 3 bắt buộc dùng `,(0,c.jsx)(t.code,{children:`<script setup lang="ts">`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Tách biệt logic nghiệp vụ và quản lý trạng thái vào các Composable (`,(0,c.jsx)(t.code,{children:`executeUseGlobal`}),`, `,(0,c.jsx)(t.code,{children:`executeUseLocal`}),`, `,(0,c.jsx)(t.code,{children:`executeUseProvide`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Áp dụng các token và mixin SCSS từ `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),` mà không dùng inline style hoặc media query tùy tiện.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`bước-2-tài-liệu-hóa-mã-nguồn-tsdoc--jsdoc`,children:`Bước 2: Tài liệu hóa mã nguồn (TSDoc / JSDoc)`}),`
`,(0,c.jsx)(t.p,{children:`Chuẩn bị API công khai để phục vụ phân tích tự động và sinh metadata cho AI:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mô tả JSDoc`}),` — Viết tài liệu cho các class, phương thức, hàm, thuộc tính và interface theo tiêu chuẩn song ngữ (English / Russian).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thẻ đặc biệt`}),` — Sử dụng các thẻ được bộ sinh mã đảm bảo giữ lại trong `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`@example`}),` — Ví dụ mẫu chuẩn về cách gọi phương thức hoặc component.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`@note`}),` — Lưu ý kiến trúc, quy tắc khởi tạo và tác dụng phụ (side effects).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`@warning`}),` — Ràng buộc môi trường thực thi (ví dụ: an toàn SSR hoặc chỉ chạy trên DOM).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`@keywords`}),` — Từ khóa tìm kiếm liên kết giúp AI tra cứu nhanh trong tệp.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`/**
 * Executes a localized HTTP request with automatic session token binding and error center routing.
 *
 * Выполняет локализованный HTTP-запрос с автоматической привязкой токена сессии и маршрутизацией через центр ошибок.
 * @example
 * const data = await apiRequest.get('/user/profile')
 *
 * @note Automatically attaches Bearer authorization headers when session token is active.
 * @warning Do not call directly in component templates; use executeUseLocal service wrappers.
 * @keywords api request http fetch get post session auth
 * @param url request endpoint url / url адрес эндпоинта запроса
 * @param options request configuration / конфигурация запроса
 * @returns parsed response data / распарсенные данные ответа
 */
export async function fetchApi<T>(url: string, options?: RequestOptions): Promise<T> {
  // ...
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`bước-3-tạo-định-nghĩa-kiểu-và-mô-tả-package`,children:`Bước 3: Tạo định nghĩa kiểu và mô tả Package`}),`
`,(0,c.jsx)(t.p,{children:`Sau khi hoàn tất viết mã, chạy công cụ tạo định nghĩa kiểu và metadata trong thư mục package:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run types
`})}),`
`,(0,c.jsx)(t.p,{children:`Lệnh sẽ tự động:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Biên dịch các tệp khai báo `,(0,c.jsx)(t.code,{children:`.d.ts`}),` vào thư mục tạm thời.`]}),`
`,(0,c.jsx)(t.li,{children:`Lọc bỏ các thuộc tính private và protected.`}),`
`,(0,c.jsxs)(t.li,{children:[`Tạo tệp `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` gọn gàng với các chữ ký tối ưu hóa và thẻ `,(0,c.jsx)(t.code,{children:`@keywords`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Tạo tệp `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` chứa mục đích của package, trigger nghiên cứu và khối `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),` từ thư mục `,(0,c.jsx)(t.code,{children:`ai-resources/`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Cập nhật định nghĩa tài nguyên MCP trong `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`bước-4-chụp-ngữ-cảnh-trực-quan-tùy-chọn-cho-ui`,children:`Bước 4: Chụp ngữ cảnh trực quan (Tùy chọn cho UI)`}),`
`,(0,c.jsxs)(t.p,{children:[`Đối với các thư viện component giao diện (`,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`) hoặc module trực quan, tiến hành chụp trạng thái giao diện:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run screenshot
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Công cụ sẽ tự động khởi động máy chủ dev cục bộ, kết nối qua trình duyệt headless, chụp ảnh màn hình độ phân giải cao (`,(0,c.jsx)(t.code,{children:`ai-screenshot/*.webp`}),`), đồng thời xuất cây DOM (`,(0,c.jsx)(t.code,{children:`screenshot-code.html`}),`) và CSS đã tính toán (`,(0,c.jsx)(t.code,{children:`screenshot-styles.css`}),`).`]}),`
`,(0,c.jsx)(t.h2,{id:`bước-5-tổng-hợp-lời-nhắc-toàn-cục`,children:`Bước 5: Tổng hợp lời nhắc toàn cục`}),`
`,(0,c.jsx)(t.p,{children:`Để đồng bộ tất cả các thay đổi vào tệp lời nhắc gốc của hệ thống, chạy lệnh tại thư mục gốc monorepo:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run prompt
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Script `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),` sẽ tập hợp metadata từ tất cả các package và dependency đã cập nhật, ghi đè lại `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` và `,(0,c.jsx)(t.code,{children:`ai-mcp-all-resources.json`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`bước-6-giao-việc-cho-ai-và-lưu-giữ-kinh-nghiệm`,children:`Bước 6: Giao việc cho AI và lưu giữ kinh nghiệm`}),`
`,(0,c.jsx)(t.p,{children:`Khi tương tác với trợ lý AI:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`AI đọc `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` và `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` đã cập nhật để tạo ra mã nguồn chính xác, không bị ảo giác.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Nếu phát hiện các lưu ý hoặc bài học kiến trúc mới, sử dụng lệnh `,(0,c.jsx)(t.strong,{children:`«Запомни»`}),` / `,(0,c.jsx)(t.strong,{children:`«Remember»`}),` để AI ghi lại vào `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` của package cho các phiên làm việc sau.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};