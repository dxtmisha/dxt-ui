import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/AiGoogle - Google Gemini AI tự động cấu hình`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-aigoogle`,children:`Lớp AiGoogle`}),`
`,(0,c.jsxs)(t.p,{children:[`Một triển khai cấp cao về tích hợp Google Gemini AI. Lớp `,(0,c.jsx)(t.code,{children:`AiGoogle`}),` mở rộng từ `,(0,c.jsx)(t.code,{children:`AiGoogleLite`}),` và tự động khởi tạo với mã API và ID mô hình được chỉ định trong các tệp cấu hình của dự án.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Khởi tạo không cần cấu hình`}),` — tự động tải thông tin xác thực API và cài đặt mô hình từ môi trường dự án.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sức mạnh từ Gemini`}),` — cung cấp quyền truy cập vào các mô hình tạo nảy tiên tiến nhất của Google.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Độ tin cậy được kế thừa`}),` — bao gồm tất cả các tính năng của `,(0,c.jsx)(t.code,{children:`AiGoogleLite`}),`, chẳng hạn như hỗ trợ đa phương thức (văn bản + hình ảnh) và tích lũy các lời nhắc phức tạp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Quy trình đơn giản hóa`}),` — lý tưởng để sử dụng trong công cụ tài liệu của dự án khi không cần cấu hình thủ công.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Khác với `,(0,c.jsx)(t.code,{children:`AiGoogleLite`}),`, lớp `,(0,c.jsx)(t.code,{children:`AiGoogle`}),` không yêu cầu tham số hàm khởi tạo vì nó lấy các cài đặt từ `,(0,c.jsx)(t.code,{children:`getConfigAi()`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiGoogle } from '@dxtmisha/scripts'

const ai = new AiGoogle()

// Tùy chọn thay đổi mô hình nếu cần
ai.setModel('gemini-1.5-pro')

// Tạo phản hồi
const response = await ai.generate('Tạo một mô tả ngắn gọn về dự án.')
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`tạo-generation`,children:`Tạo (Generation)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`generate(contents: string): Promise<string>`}),` — (Kế thừa) Kết hợp ngữ cảnh đã tích lũy và thực hiện yêu cầu tạo AI.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setKey(key: string): this`}),` — (Kế thừa) Cập nhật mã API và khởi tạo lại ứng dụng khách nội bộ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setModel(model: string): this`}),` — (Kế thừa) Chuyển đổi mô hình hoạt động.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`xây-dựng-ngữ-cảnh`,children:`Xây dựng Ngữ cảnh`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addPrompt(prompt: string): void`}),` — (Kế thừa) Thêm tiền tố văn bản cố định.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addContent(content: string): this`}),` — (Kế thừa) Thêm một phần văn bản vào lời nhắc.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addImage(image: AiImageItem): this`}),` — (Kế thừa) Thêm một hình ảnh (base64) vào yêu cầu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetPrompt(): void`}),` — (Kế thừa) Xóa tiền tố cố định.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetContents(): this`}),` — (Kế thừa) Xóa các phần văn bản đã tích lũy.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetImages(): this`}),` — (Kế thừa) Xóa các hình ảnh đã tích lũy.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(t.h3,{id:`aiimageitem`,children:`AiImageItem`}),`
`,(0,c.jsx)(t.p,{children:`Đại diện cho một hình ảnh cho các yêu cầu đa phương thức.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mime: string`}),` — loại MIME của hình ảnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`base64: string`}),` — dữ liệu hình ảnh ở định dạng base64.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`aiimagelist`,children:`AiImageList`}),`
`,(0,c.jsxs)(t.p,{children:[`Một mảng các `,(0,c.jsx)(t.code,{children:`AiImageItem`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};