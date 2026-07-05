import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/AiClaudeCliLite - Lớp Claude CLI Rút gọn`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-aiclaudeclilite`,children:`Lớp AiClaudeCliLite`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`AiClaudeCliLite`}),` là một triển khai gọn nhẹ của `,(0,c.jsx)(n.code,{children:`AiAbstract`}),` tương tác với công cụ Claude CLI chính thức thông qua các lệnh terminal shell của hệ thống. Nó quản lý các tệp lời nhắc tạm thời bằng cách sử dụng `,(0,c.jsx)(n.code,{children:`ApiTmp`}),` nhằm vượt qua giới hạn độ dài đối số của terminal.`]}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thực thi Shell CLI`}),` — tận dụng shell hệ thống (`,(0,c.jsx)(n.code,{children:`node:child_process`}),`) để gọi các lệnh CLI `,(0,c.jsx)(n.code,{children:`claude`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Định tuyến Tệp Tạm thời`}),` — sử dụng `,(0,c.jsx)(n.code,{children:`ApiTmp`}),` để ghi các lời nhắc/nội dung dài vào các tệp `,(0,c.jsx)(n.code,{children:`.txt`}),` cục bộ, định dạng tham chiếu tới chúng bằng ký tự `,(0,c.jsx)(n.code,{children:`@`}),` để đảm bảo thực thi đáng tin cậy.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`An toàn Lời nhắc`}),` — tự động thoát các dấu ngoặc kép và thực thi định dạng phản hồi nghiêm ngặt (ví dụ: `,(0,c.jsx)(n.code,{children:`Output strictly the code/answer. No preamble, no chatter, no reasoning`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dọn dẹp Tài nguyên`}),` — tự động xóa tất cả các thư mục và tệp tạm thời khi hoàn thành phản hồi hoặc xảy ra lỗi.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`AiClaudeCliLite`}),` yêu cầu truyền thông tin xác thực thủ công thông qua constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số khởi tạo:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`key: string`}),` — API key cho dịch vụ Anthropic.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`model: string`}),` — Định danh mô hình ban đầu.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiClaudeCliLite } from '@dxtmisha/scripts'

const ai = new AiClaudeCliLite(process.env.ANTHROPIC_API_KEY, 'claude-3-5-sonnet-20241022')
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`các-hook-triển-khai-nội-bộ`,children:`Các Hook Triển khai Nội bộ`}),`
`,(0,c.jsxs)(n.p,{children:[`Các phương thức protected này triển khai giao diện mở rộng được yêu cầu của `,(0,c.jsx)(n.code,{children:`AiAbstract`}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Thiết lập `,(0,c.jsx)(n.code,{children:`this.ai`}),` thành một đối tượng trống.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toImages(): any`}),` — Trả về một mảng trống `,(0,c.jsx)(n.code,{children:`[]`}),` (xử lý hình ảnh bị bỏ qua đối với thực thi CLI).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toContents(): any`}),` — Chuyển đổi nội dung `,(0,c.jsx)(n.code,{children:`contents`}),` đã tích lũy thành các tệp tạm thời bằng cách sử dụng `,(0,c.jsx)(n.code,{children:`ApiTmp.createFile`}),` và trả về các đường dẫn định dạng của chúng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`response(model: string, contents: string): Promise<string>`}),` — Liên kết tất cả các tệp tạm thời, xử lý ký tự ngoặc kép, xây dựng câu lệnh thực thi shell, chạy nó và dọn dẹp tài nguyên.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};