import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/AiClaudeLite - Lớp Claude AI Cơ bản Rút gọn`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-aiclaudelite`,children:`Lớp AiClaudeLite`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`AiClaudeLite`}),` là một triển khai gọn nhẹ của `,(0,c.jsx)(t.code,{children:`AiAbstract`}),` bao bọc Anthropic SDK. Nó cung cấp hỗ trợ cho việc tích lũy ngữ cảnh lời nhắc, đầu vào đa phương thức (hình ảnh) và tạo văn bản mạnh mẽ bằng các mô hình Claude.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hỗ trợ Đa phương thức`}),` — chuyển đổi hình ảnh tích lũy sang định dạng base64 được yêu cầu bởi Anthropic cho các khối nội dung hình ảnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Xử lý Nội dung theo Cấu trúc`}),` — định dạng cả văn bản thường và hình ảnh base64 thành nội dung tin nhắn có cấu trúc trước khi thực hiện cuộc gọi yêu cầu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Trích xuất Văn bản`}),` — phân tích mảng khối nội dung trong phản hồi của Anthropic và nối các khối văn bản để trả về kết quả là một chuỗi văn bản sạch.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`AiClaudeLite`}),` yêu cầu truyền thông tin xác thực thủ công thông qua constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số khởi tạo:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: string`}),` — API key cho dịch vụ Anthropic.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`model: string`}),` — Định danh mô hình ban đầu (ví dụ: 'claude-3-5-sonnet-20241022').`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiClaudeLite } from '@dxtmisha/scripts'

const ai = new AiClaudeLite(process.env.ANTHROPIC_API_KEY, 'claude-3-5-sonnet-20241022')
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`các-hook-triển-khai-nội-bộ`,children:`Các Hook Triển khai Nội bộ`}),`
`,(0,c.jsxs)(t.p,{children:[`Các phương thức protected này triển khai giao diện mở rộng được yêu cầu của `,(0,c.jsx)(t.code,{children:`AiAbstract`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Khởi tạo thực thể client `,(0,c.jsx)(t.code,{children:`Anthropic`}),` bằng cách sử dụng key được cung cấp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toImages(): any`}),` — Chuyển đổi `,(0,c.jsx)(t.code,{children:`images`}),` đã tích lũy thành mảng cấu trúc `,(0,c.jsx)(t.code,{children:`{ type: 'image', source: { ... } }`}),` dành cho Claude.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toContents(): any`}),` — Chuyển đổi nội dung văn bản `,(0,c.jsx)(t.code,{children:`contents`}),` bổ sung đã tích lũy thành mảng cấu trúc `,(0,c.jsx)(t.code,{children:`{ type: 'text', text: content }`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`response(model: string, contents: string): Promise<string>`}),` — Thực hiện lệnh gọi API `,(0,c.jsx)(t.code,{children:`messages.create`}),`, truyền tất cả các khối đã định dạng và phân tích cú pháp phản hồi văn bản.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};