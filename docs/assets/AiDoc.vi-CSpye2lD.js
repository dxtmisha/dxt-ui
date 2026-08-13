import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/AiDoc - Công cụ Tài liệu hóa bằng AI`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-aidoc`,children:`Lớp AiDoc`}),`
`,(0,c.jsx)(t.p,{children:`Công cụ trung tâm để điều phối việc tạo tài liệu bằng AI trong toàn bộ dự án. Nó chịu trách nhiệm đọc cấu hình, quét các thư mục và phân phối các nhiệm vụ tài liệu cho các trình xử lý AI chuyên biệt.`}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Xử lý Hàng loạt`}),` — tự động lặp qua các thư mục đã cấu hình để tạo tài liệu cho nhiều tệp cùng lúc.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tích hợp Toàn diện`}),` — đọc các thiết lập dự án thông qua `,(0,c.jsx)(t.code,{children:`PropertiesConfig`}),` để xác định các đường dẫn và phạm vi mục tiêu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tích hợp Git`}),` — sử dụng `,(0,c.jsx)(t.code,{children:`GitRead`}),` để nhận diện các tệp liên quan và lọc chúng dựa trên trạng thái của kho lưu trữ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Khả năng Chịu lỗi`}),` — xử lý lỗi mạnh mẽ trong quá trình tạo tài liệu để đảm bảo hệ thống hoạt động ổn định hoặc báo cáo sự cố một cách rõ ràng.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`AiDoc`}),` thường được khởi tạo như một trình điều phối chính để bắt đầu quá trình tạo tài liệu.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiDoc } from '@dxtmisha/scripts'

const engine = new AiDoc()

// Bắt đầu xử lý tất cả các thư mục đã cấu hình
await engine.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): Promise<void>`}),` — điểm bắt đầu chính. Đọc cấu hình và bắt đầu xử lý tất cả các thư mục tài liệu đã được xác định.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`makeDirectory(dir: string): Promise<void>`}),` — xử lý tất cả các tệp liên quan trong một thư mục cụ thể bằng cách ủy quyền cho các trình xử lý AI chuyên biệt.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Một trình điều phối cấp cao không công khai các thuộc tính cấu hình hoặc trạng thái phức tạp.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};