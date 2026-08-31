import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/AiClaudeCliLite - Lớp Claude CLI Rút gọn`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-aiclaudeclilite`,children:`Lớp AiClaudeCliLite`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`AiClaudeCliLite`}),` là một triển khai gọn nhẹ của `,(0,c.jsx)(t.code,{children:`AiAbstract`}),` tương tác với công cụ Claude CLI chính thức bằng cách thực thi trực tiếp mà không qua shell hệ thống. Nó quản lý các tệp lời nhắc tạm thời bằng cách sử dụng `,(0,c.jsx)(t.code,{children:`ApiTmp`}),` nhằm vượt qua giới hạn độ dài đối số của terminal.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thực thi CLI Trực tiếp`}),` — tận dụng `,(0,c.jsx)(t.code,{children:`execFile`}),` (`,(0,c.jsx)(t.code,{children:`node:child_process`}),`) để gọi trực tiếp CLI `,(0,c.jsx)(t.code,{children:`claude`}),` mà không qua shell hệ thống.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Định tuyến Tệp Tạm thời`}),` — sử dụng `,(0,c.jsx)(t.code,{children:`ApiTmp`}),` để ghi các lời nhắc/nội dung dài vào các tệp `,(0,c.jsx)(t.code,{children:`.txt`}),` cục bộ, định dạng tham chiếu tới chúng bằng ký tự `,(0,c.jsx)(t.code,{children:`@`}),` để đảm bảo thực thi đáng tin cậy.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`An toàn Lời nhắc`}),` — truyền lời nhắc dưới dạng mảng đối số không qua shell interpolation, loại bỏ rủi ro tiêm lệnh, và thực thi định dạng phản hồi nghiêm ngặt (ví dụ: `,(0,c.jsx)(t.code,{children:`Output strictly the code/answer. No preamble, no chatter, no reasoning`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dọn dẹp Tài nguyên`}),` — tự động xóa tất cả các thư mục và tệp tạm thời khi hoàn thành phản hồi hoặc xảy ra lỗi.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`AiClaudeCliLite`}),` yêu cầu truyền thông tin xác thực thủ công thông qua constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số khởi tạo:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: string`}),` — API key cho dịch vụ Anthropic.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`model: string`}),` — Định danh mô hình ban đầu.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiClaudeCliLite } from '@dxtmisha/scripts'

const ai = new AiClaudeCliLite(process.env.ANTHROPIC_API_KEY, 'claude-3-5-sonnet-20241022')
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`các-hook-triển-khai-nội-bộ`,children:`Các Hook Triển khai Nội bộ`}),`
`,(0,c.jsxs)(t.p,{children:[`Các phương thức protected này triển khai giao diện mở rộng được yêu cầu của `,(0,c.jsx)(t.code,{children:`AiAbstract`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Thiết lập `,(0,c.jsx)(t.code,{children:`this.ai`}),` thành một đối tượng trống.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toImages(): any`}),` — Trả về một mảng trống `,(0,c.jsx)(t.code,{children:`[]`}),` (xử lý hình ảnh bị bỏ qua đối với thực thi CLI).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toContents(): any`}),` — Chuyển đổi nội dung `,(0,c.jsx)(t.code,{children:`contents`}),` đã tích lũy thành các tệp tạm thời bằng cách sử dụng `,(0,c.jsx)(t.code,{children:`ApiTmp.createFile`}),` và trả về các đường dẫn định dạng của chúng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`response(model: string, contents: string): Promise<string>`}),` — Liên kết tất cả các tệp tạm thời, xây dựng danh sách đối số, chạy CLI trực tiếp không qua shell và dọn dẹp tài nguyên.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};