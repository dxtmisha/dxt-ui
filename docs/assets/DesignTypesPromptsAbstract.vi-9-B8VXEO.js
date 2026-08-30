import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/DesignTypesPromptsAbstract - Lớp trừu tượng quản lý prompt và quy tắc cho AI`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-designtypespromptsabstract`,children:`Lớp DesignTypesPromptsAbstract`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp trừu tượng `,(0,c.jsx)(t.code,{children:`DesignTypesPromptsAbstract`}),` cung cấp kiến trúc cơ sở để quét, phân tích, lưu cache và biên dịch các tệp prompt và quy tắc (`,(0,c.jsx)(t.code,{children:`ai-resources/`}),`) thành các chỉ thị bắt buộc cho trợ lý AI.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tìm kiếm prompt`}),`: Quét đệ quy các tệp prompt và hướng dẫn markdown.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cache MD5 tăng dần`}),`: Tạo và duy trì các tệp JSON metadata riêng biệt trong `,(0,c.jsx)(t.code,{children:`ai-types-list/ai-resources/`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tóm tắt quy tắc bằng AI`}),`: Sử dụng LLM để trích xuất tên ngắn gọn và mô tả tài liệu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Biên dịch chỉ thị bắt buộc`}),`: Tạo các chỉ thị được định dạng để đưa vào `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`tham-số-khởi-tạo`,children:`Tham số khởi tạo`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`promptsDir: string`}),` — đường dẫn tương đối đến thư mục prompt (mặc định `,(0,c.jsx)(t.code,{children:`'ai-resources'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ai: DesignTypesAi`}),` — đối tượng `,(0,c.jsx)(t.code,{children:`DesignTypesAi`}),` để tương tác với AI và phân giải tên dự án.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-getcachelist-designtypespromptcachelist`,children:(0,c.jsx)(t.code,{children:`abstract getCacheList(): DesignTypesPromptCacheList`})}),`
`,(0,c.jsx)(t.p,{children:`Truy xuất danh sách siêu dữ liệu prompt từ bộ nhớ đệm.`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-make-promisethis`,children:(0,c.jsx)(t.code,{children:`abstract make(): Promise<this>`})}),`
`,(0,c.jsx)(t.p,{children:`xử lý các tệp prompt và cập nhật bộ nhớ đệm siêu dữ liệu.`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-toaiprompts-promisestring`,children:(0,c.jsx)(t.code,{children:`abstract toAiPrompts(): Promise<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Tổng hợp các chỉ thị quy tắc AI bắt buộc từ các prompt.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};