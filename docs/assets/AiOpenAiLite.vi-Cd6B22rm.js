import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/AiOpenAiLite - Lớp OpenAI Rút gọn`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-aiopenailite`,children:`Lớp AiOpenAiLite`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`AiOpenAiLite`}),` là một triển khai gọn nhẹ của `,(0,c.jsx)(n.code,{children:`AiAbstract`}),` bao bọc OpenAI SDK. Nó cung cấp hỗ trợ toàn diện cho việc tích lũy ngữ cảnh lời nhắc, chuyển đổi hình ảnh đa phương thức base64 và hoàn thành cuộc hội thoại (chat completion) mạnh mẽ.`]}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ Hợp Đa Phương Thức`}),` — chuyển đổi hình ảnh tích lũy thành cấu trúc URL dữ liệu (`,(0,c.jsx)(n.code,{children:`data:mime;base64,data`}),`) theo yêu cầu của giao diện khối `,(0,c.jsx)(n.code,{children:`image_url`}),` của OpenAI.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xử lý Nội dung theo Cấu trúc`}),` — định dạng cả các văn bản thuần túy và khối hình ảnh thành một danh sách tải trọng người dùng thống nhất trước khi yêu cầu hoàn thành hội thoại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp SDK Tiêu chuẩn`}),` — gọi trực tiếp đến API endpoint `,(0,c.jsx)(n.code,{children:`chat.completions.create`}),` và xử lý kết quả trả về một cách an toàn.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`AiOpenAiLite`}),` yêu cầu truyền thông tin xác thực thủ công thông qua constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số khởi tạo:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`key: string`}),` — API key cho dịch vụ OpenAI.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`model: string`}),` — Định danh mô hình ban đầu (ví dụ: 'gpt-4o').`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiOpenAiLite } from '@dxtmisha/scripts'

const ai = new AiOpenAiLite(process.env.OPENAI_API_KEY, 'gpt-4o')
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`các-hook-triển-khai-nội-bộ`,children:`Các Hook Triển khai Nội bộ`}),`
`,(0,c.jsxs)(n.p,{children:[`Các phương thức protected này triển khai giao diện mở rộng được yêu cầu của `,(0,c.jsx)(n.code,{children:`AiAbstract`}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Khởi tạo thực thể client `,(0,c.jsx)(n.code,{children:`OpenAI`}),` bằng cách sử dụng key được cung cấp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toImages(): any`}),` — Chuyển đổi `,(0,c.jsx)(n.code,{children:`images`}),` đã tích lũy thành mảng cấu trúc `,(0,c.jsx)(n.code,{children:`{ type: 'image_url', image_url: { url: ... } }`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toContents(): any`}),` — Chuyển đổi nội dung `,(0,c.jsx)(n.code,{children:`contents`}),` bổ sung đã tích lũy thành mảng cấu trúc `,(0,c.jsx)(n.code,{children:`{ type: 'text', text: content }`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`response(model: string, contents: string): Promise<string>`}),` — Thực hiện lệnh gọi API chat completions và trích xuất nội dung văn bản một cách an toàn từ lựa chọn phản hồi đầu tiên.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};