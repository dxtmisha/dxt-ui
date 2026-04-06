import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/AiGoogleLite - Tích hợp Google Gemini AI`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-aigooglelite`,children:`Lớp AiGoogleLite`}),`
`,(0,c.jsxs)(n.p,{children:[`Một triển khai cụ thể của lớp `,(0,c.jsx)(n.code,{children:`AiAbstract`}),` cho Google Gemini AI (thông qua ứng dụng khách `,(0,c.jsx)(n.code,{children:`GoogleGenAI`}),`). Lớp này cung cấp một cách tinh gọn để tương tác với các mô hình Gemini, xử lý xác thực, tích lũy ngữ cảnh và tạo nội dung.`]}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp Google Gemini`}),` — kết nối liền mạch với các mô hình AI tạo nảy của Google.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ Đa phương thức`}),` — hỗ trợ cả đầu vào văn bản và hình ảnh cho các yêu cầu tạo.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích lũy Ngữ cảnh`}),` — kế thừa cơ chế mạnh mẽ để xây dựng các lời nhắc phức tạp, bao gồm hình ảnh và văn bản nhiều phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quy trình Thống nhất`}),` — cung cấp một giao diện nhất quán để lựa chọn mô hình và tạo, trừu tượng hóa các chi tiết cấp thấp của ứng dụng khách.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Khởi tạo `,(0,c.jsx)(n.code,{children:`AiGoogleLite`}),` bằng cách cung cấp mã API của bạn và ID mô hình mục tiêu.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`key: string`}),` — mã API Google AI của bạn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`model: string`}),` — ID của mô hình Gemini sẽ sử dụng (ví dụ: `,(0,c.jsx)(n.code,{children:`'gemini-1.5-flash'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiGoogleLite } from '@dxtmisha/scripts'

const ai = new AiGoogleLite('YOUR_API_KEY', 'gemini-1.5-flash')

// Thiết lập tiền tố lời nhắc hệ thống tùy chọn
ai.addPrompt('Bạn là một người viết tài liệu kỹ thuật.')

// Tạo phản hồi
const response = await ai.generate('Giải thích về lớp AiGoogleLite.')
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`tạo-generation`,children:`Tạo (Generation)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`generate(contents: string): Promise<string>`}),` — điểm khởi đầu chính để tương tác với AI. Nó kết hợp tất cả ngữ cảnh đã tích lũy (tiền tố, hình ảnh, các phần văn bản) và thực hiện yêu cầu.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setKey(key: string): this`}),` — cập nhật mã API và khởi tạo lại ứng dụng khách nội bộ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setModel(model: string): this`}),` — chuyển đổi mô hình hoạt động cho các yêu cầu tiếp theo.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`xây-dựng-ngữ-cảnh`,children:`Xây dựng Ngữ cảnh`}),`
`,(0,c.jsxs)(n.p,{children:[`Các phương thức này cho phép bạn tích lũy dữ liệu trước khi gọi `,(0,c.jsx)(n.code,{children:`generate()`}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addPrompt(prompt: string): void`}),` — thêm tiền tố văn bản cố định (hữu ích cho các hướng dẫn hệ thống).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addContent(content: string): this`}),` — thêm một phần văn bản vào lời nhắc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addImage(image: AiImageItem): this`}),` — thêm một hình ảnh (base64) vào yêu cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`resetPrompt(): void`}),` — xóa tiền tố cố định.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`resetContents(): this`}),` — xóa tất cả các phần văn bản đã tích lũy.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`resetImages(): this`}),` — xóa tất cả các hình ảnh đã tích lũy.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`thông-tin`,children:`Thông tin`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getContents(): string[]`}),` — trả về danh sách các phần văn bản đã tích lũy.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getImages(): AiImageList`}),` — trả về danh sách các hình ảnh đã tích lũy.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(n.h3,{id:`aiimageitem`,children:`AiImageItem`}),`
`,(0,c.jsx)(n.p,{children:`Đại diện cho một hình ảnh cho các yêu cầu đa phương thức.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`mime: string`}),` — loại MIME của hình ảnh (ví dụ: `,(0,c.jsx)(n.code,{children:`'image/png'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`base64: string`}),` — dữ liệu hình ảnh ở định dạng base64.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`aiimagelist`,children:`AiImageList`}),`
`,(0,c.jsxs)(n.p,{children:[`Một mảng các `,(0,c.jsx)(n.code,{children:`AiImageItem`}),`.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};