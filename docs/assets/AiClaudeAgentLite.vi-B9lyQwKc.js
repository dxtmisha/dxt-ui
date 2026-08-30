import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/AiClaudeAgentLite - Lớp Claude Agent SDK Rút gọn`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-aiclaudeagentlite`,children:`Lớp AiClaudeAgentLite`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`AiClaudeAgentLite`}),` là một triển khai gọn nhẹ của `,(0,c.jsx)(t.code,{children:`AiAbstract`}),` sử dụng `,(0,c.jsx)(t.code,{children:`@anthropic-ai/claude-agent-sdk`}),` để tương tác với Claude trong `,(0,c.jsx)(t.strong,{children:`Chế độ Tác nhân`}),` (Agent Mode). Trong chế độ tác nhân, Claude có thể chạy các tác vụ bằng cách sử dụng vòng lặp gọi công cụ tương tác, quản lý môi trường cục bộ và thực hiện các chỉnh sửa tệp tin phức tạp.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Vòng lặp Tác nhân`}),` — sử dụng vòng lặp tạo `,(0,c.jsx)(t.code,{children:`query`}),` tương tác từ Agent SDK.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động Chấp nhận Chỉnh sửa`}),` — được cấu hình mặc định với `,(0,c.jsx)(t.code,{children:`permissionMode: 'acceptEdits'`}),` và `,(0,c.jsx)(t.code,{children:`allowDangerouslySkipPermissions: true`}),` để cho phép thao tác trực tiếp, tự động trên các tệp tin cục bộ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Xử lý Lỗi Tốt`}),` — bao bọc các vòng lặp thực thi trong các khối try-catch và báo cáo lỗi qua `,(0,c.jsx)(t.code,{children:`console.error`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`AiClaudeAgentLite`}),` yêu cầu truyền thông tin xác thực thủ công thông qua constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số khởi tạo:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: string`}),` — API key cho dịch vụ Anthropic.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`model: string`}),` — Định danh mô hình ban đầu.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiClaudeAgentLite } from '@dxtmisha/scripts'

const agent = new AiClaudeAgentLite(process.env.ANTHROPIC_API_KEY, 'claude-3-5-sonnet-20241022')
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`các-hook-triển-khai-nội-bộ`,children:`Các Hook Triển khai Nội bộ`}),`
`,(0,c.jsxs)(t.p,{children:[`Các phương thức protected này triển khai giao diện mở rộng được yêu cầu của `,(0,c.jsx)(t.code,{children:`AiAbstract`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Thiết lập `,(0,c.jsx)(t.code,{children:`this.ai`}),` thành một đối tượng trống để đáp ứng hợp đồng khởi tạo cơ sở.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toImages(): any`}),` — Trả về một mảng trống `,(0,c.jsx)(t.code,{children:`[]`}),` (xử lý hình ảnh hiện đang bị bỏ qua hoặc ủy quyền trong chế độ tác nhân).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toContents(): any`}),` — Định dạng và nối các hướng dẫn văn bản `,(0,c.jsx)(t.code,{children:`contents`}),` đã tích lũy bằng cách sử dụng dòng trống đôi `,(0,c.jsx)(t.code,{children:`\\n\\n`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`response(model: string, contents: string): Promise<string>`}),` — Điều phối trình tạo `,(0,c.jsx)(t.code,{children:`query`}),` của Agent SDK, lắng nghe các tin nhắn truyền trực tuyến, nắm bắt kết quả `,(0,c.jsx)(t.code,{children:`result`}),` thành công và trả về dưới dạng chuỗi văn bản.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};