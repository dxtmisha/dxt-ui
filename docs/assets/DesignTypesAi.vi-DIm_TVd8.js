import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/DesignTypesAi - Client AI cấp thấp để tạo kiểu`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-designtypesai`,children:`Lớp DesignTypesAi`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`DesignTypesAi`}),` được thiết kế để tương tác cấp thấp với các mô hình AI trong quá trình tạo và tối ưu hóa kiểu TypeScript, quản lý đường dẫn thư mục và thực thi các prompt độc lập.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ngữ cảnh prompt độc lập`}),` — Thiết lập các chỉ thị nghiêm ngặt ngăn chặn lịch sử hội thoại trước đó làm ảnh hưởng đến kết quả sinh kiểu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hỗ trợ ngữ cảnh mã bổ sung`}),` — Cung cấp mã JavaScript nguồn làm tài liệu tham khảo mà không để lộ các thực thể không được export vào đầu ra.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phân tích cú pháp JSON`}),` — Phương thức `,(0,c.jsx)(t.code,{children:`toAiJson`}),` tự động làm sạch khối mã markdown và phân tích cú pháp phản hồi JSON có cấu trúc từ LLM.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Xác định ngữ cảnh dự án`}),` — Trích xuất và lưu trữ tên dự án từ `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số khởi tạo:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dir: string`}),` — `,(0,c.jsxs)(t.em,{children:[`(tùy chọn, mặc định `,(0,c.jsx)(t.code,{children:`'ai-types-temp'`}),`)`]}),` Đường dẫn thư mục chứa các tệp khai báo kiểu.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypesAi } from '@dxtmisha/scripts'

const ai = new DesignTypesAi('ai-types-temp')
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`isfilefile-string-boolean`,children:(0,c.jsx)(t.code,{children:`isFile(file: string): boolean`})}),`
`,(0,c.jsx)(t.p,{children:`Kiểm tra xem tệp có phải là tệp khai báo (.d.ts) hợp lệ hay không.`}),`
`,(0,c.jsx)(t.h3,{id:`isfilejsfile-string-boolean`,children:(0,c.jsx)(t.code,{children:`isFileJs(file: string): boolean`})}),`
`,(0,c.jsx)(t.p,{children:`Kiểm tra xem tệp có phải là tệp JavaScript (.js) hợp lệ hay không.`}),`
`,(0,c.jsx)(t.h3,{id:`getmd5content-string-string`,children:(0,c.jsx)(t.code,{children:`getMd5(content: string): string`})}),`
`,(0,c.jsx)(t.p,{children:`Tạo mã băm MD5 cho nội dung văn bản được cung cấp.`}),`
`,(0,c.jsx)(t.h3,{id:`getdirarray-string`,children:(0,c.jsx)(t.code,{children:`getDirArray(): string[]`})}),`
`,(0,c.jsx)(t.p,{children:`Trả về mảng các phân đoạn đường dẫn đến thư mục mục tiêu.`}),`
`,(0,c.jsx)(t.h3,{id:`getprojectname-string`,children:(0,c.jsx)(t.code,{children:`getProjectName(): string`})}),`
`,(0,c.jsxs)(t.p,{children:[`Trả về tên dự án hiện tại từ `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`toaicontent-string-prompt-string-code-string-promisestring--undefined`,children:(0,c.jsx)(t.code,{children:`toAi(content: string, prompt: string, code?: string): Promise<string | undefined>`})}),`
`,(0,c.jsx)(t.p,{children:`Gửi nội dung và prompt đến nhà cung cấp AI và trả về phản hồi chuỗi được tạo.`}),`
`,(0,c.jsx)(t.h3,{id:`toaijsontcontent-string-prompt-string-code-string-promiset--undefined`,children:(0,c.jsx)(t.code,{children:`toAiJson<T>(content: string, prompt: string, code?: string): Promise<T | undefined>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Gửi yêu cầu đến AI và phân tích phản hồi nhận được thành một đối tượng định kiểu `,(0,c.jsx)(t.code,{children:`T`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypesAi } from '@dxtmisha/scripts'

const ai = new DesignTypesAi('dist')
const prompt = 'Tối ưu hóa các kiểu bằng cách loại bỏ các interface nội bộ'
const result = await ai.toAi(dtsContent, prompt, jsCode)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};