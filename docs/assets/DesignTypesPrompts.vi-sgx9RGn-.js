import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/DesignTypesPrompts - Trình quản lý prompt và quy tắc cho AI`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-designtypesprompts`,children:`Lớp DesignTypesPrompts`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`DesignTypesPrompts`}),` quản lý việc đọc các tệp prompt từ thư mục `,(0,c.jsx)(t.code,{children:`ai-resources/`}),`, lưu bộ nhớ đệm siêu dữ liệu prompt dưới dạng JSON và tạo các hướng dẫn cũng như điều kiện kích hoạt sử dụng cho trợ lý AI.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Theo dõi prompt theo MD5`}),` — Nhận diện thay đổi trong các tệp Markdown prompt nguồn và lưu siêu dữ liệu do AI tạo vào bộ nhớ đệm `,(0,c.jsx)(t.code,{children:`.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tóm tắt thông minh`}),` — Sử dụng AI để tạo mô tả ngắn gọn về mục đích và điều kiện kích hoạt cho từng tệp prompt.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tích hợp quy tắc hệ thống`}),` — Trích xuất và định dạng các quy tắc dự án và điều kiện gọi prompt để đưa vào `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hỗ trợ đường dẫn động`}),` — Quét thư mục `,(0,c.jsx)(t.code,{children:`ai-resources/`}),` bên trong gói và node_modules.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số khởi tạo:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`promptsDir: string`}),` — `,(0,c.jsxs)(t.em,{children:[`(tùy chọn, mặc định `,(0,c.jsx)(t.code,{children:`'ai-resources'`}),`)`]}),` Đường dẫn đến thư mục chứa tệp prompt.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ai: DesignTypesAi`}),` — Đối tượng client AI để tạo siêu dữ liệu.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypesAi, DesignTypesPrompts } from '@dxtmisha/scripts'

const ai = new DesignTypesAi('dist')
const prompts = new DesignTypesPrompts('ai-resources', ai)
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`getcachelist-designtypespromptcachelist`,children:(0,c.jsx)(t.code,{children:`getCacheList(): DesignTypesPromptCacheList`})}),`
`,(0,c.jsx)(t.p,{children:`Truy xuất danh sách siêu dữ liệu prompt trong bộ nhớ đệm.`}),`
`,(0,c.jsx)(t.h3,{id:`getlistprompts-designtypeslist`,children:(0,c.jsx)(t.code,{children:`getListPrompts(): DesignTypesList`})}),`
`,(0,c.jsx)(t.p,{children:`Truy xuất danh sách tất cả các tệp prompt kèm nội dung và mã băm MD5.`}),`
`,(0,c.jsx)(t.h3,{id:`init-promisestring`,children:(0,c.jsx)(t.code,{children:`init(): Promise<string[]>`})}),`
`,(0,c.jsx)(t.p,{children:`Khởi tạo các quy tắc prompt và trả về mảng các chuỗi chỉ thị được định dạng.
Trả về danh sách siêu dữ liệu prompt đã được lưu trong bộ nhớ đệm.`}),`
`,(0,c.jsx)(t.h3,{id:`toaiprompts-promisestring`,children:(0,c.jsx)(t.code,{children:`toAiPrompts(): Promise<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Tạo khối định dạng chứa quy tắc dự án và các điều kiện kích hoạt prompt cho trợ lý AI.`}),`
`,(0,c.jsx)(t.h3,{id:`make-promisethis`,children:(0,c.jsx)(t.code,{children:`make(): Promise<this>`})}),`
`,(0,c.jsx)(t.p,{children:`Thực hiện quét prompt, cập nhật bộ nhớ đệm siêu dữ liệu và chuẩn bị để xuất bản.`}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypesAi, DesignTypesPrompts } from '@dxtmisha/scripts'

const ai = new DesignTypesAi('dist')
const prompts = new DesignTypesPrompts('ai-resources', ai)

await prompts.make()
const rules = await prompts.toAiPrompts()
console.log(rules)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};