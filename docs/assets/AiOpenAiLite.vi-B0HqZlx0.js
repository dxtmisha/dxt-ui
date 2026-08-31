import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/AiOpenAiLite - Lớp OpenAI Rút gọn`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-aiopenailite`,children:`Lớp AiOpenAiLite`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`AiOpenAiLite`}),` là một triển khai gọn nhẹ của `,(0,c.jsx)(t.code,{children:`AiAbstract`}),` bao bọc OpenAI SDK. Nó cung cấp hỗ trợ toàn diện cho việc tích lũy ngữ cảnh lời nhắc, chuyển đổi hình ảnh đa phương thức base64 và hoàn thành cuộc hội thoại (chat completion) mạnh mẽ.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hỗ Hợp Đa Phương Thức`}),` — chuyển đổi hình ảnh tích lũy thành cấu trúc URL dữ liệu (`,(0,c.jsx)(t.code,{children:`data:mime;base64,data`}),`) theo yêu cầu của giao diện khối `,(0,c.jsx)(t.code,{children:`image_url`}),` của OpenAI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Xử lý Nội dung theo Cấu trúc`}),` — định dạng cả các văn bản thuần túy và khối hình ảnh thành một danh sách tải trọng người dùng thống nhất trước khi yêu cầu hoàn thành hội thoại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tích hợp SDK Tiêu chuẩn`}),` — gọi trực tiếp đến API endpoint `,(0,c.jsx)(t.code,{children:`chat.completions.create`}),` và xử lý kết quả trả về một cách an toàn.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`AiOpenAiLite`}),` yêu cầu truyền thông tin xác thực thủ công thông qua constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số khởi tạo:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: string`}),` — API key cho dịch vụ OpenAI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`model: string`}),` — Định danh mô hình ban đầu (ví dụ: 'gpt-4o').`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiOpenAiLite } from '@dxtmisha/scripts'

const ai = new AiOpenAiLite(process.env.OPENAI_API_KEY, 'gpt-4o')
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`các-hook-triển-khai-nội-bộ`,children:`Các Hook Triển khai Nội bộ`}),`
`,(0,c.jsxs)(t.p,{children:[`Các phương thức protected này triển khai giao diện mở rộng được yêu cầu của `,(0,c.jsx)(t.code,{children:`AiAbstract`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Khởi tạo thực thể client `,(0,c.jsx)(t.code,{children:`OpenAI`}),` bằng cách sử dụng key được cung cấp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toImages(): any`}),` — Chuyển đổi `,(0,c.jsx)(t.code,{children:`images`}),` đã tích lũy thành mảng cấu trúc `,(0,c.jsx)(t.code,{children:`{ type: 'image_url', image_url: { url: ... } }`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toContents(): any`}),` — Chuyển đổi nội dung `,(0,c.jsx)(t.code,{children:`contents`}),` bổ sung đã tích lũy thành mảng cấu trúc `,(0,c.jsx)(t.code,{children:`{ type: 'text', text: content }`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`response(model: string, contents: string): Promise<string>`}),` — Thực hiện lệnh gọi API chat completions và trích xuất nội dung văn bản một cách an toàn từ lựa chọn phản hồi đầu tiên.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};