import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/DesignTypesDescription - Trình tạo mô tả gói cho AI`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-designtypesdescription`,children:`Lớp DesignTypesDescription`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`DesignTypesDescription`}),` chịu trách nhiệm tự động tạo, định dạng và lưu tệp mô tả gói (`,(0,c.jsx)(t.code,{children:`ai-description.md`}),`), bao gồm các khả năng cốt lõi, điều kiện kích hoạt việc nghiên cứu kiểu và các quy tắc dành cho trợ lý AI.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phân tích API tự động`}),` — Phân tích các tệp khai báo kiểu TypeScript và mã JavaScript để tạo bản tóm tắt gói có độ chính xác cao.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tích hợp prompt và quy tắc`}),` — Kết hợp mô tả kỹ thuật với danh sách các prompt chuyên biệt được quản lý bởi `,(0,c.jsx)(t.code,{children:`DesignTypesPrompts`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Định dạng đầu ra súc tích`}),` — Tạo cấu trúc nghiêm ngặt: mục đích cốt lõi, điều kiện kích hoạt đọc `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` và danh sách các khả năng chính (1–3 từ mỗi mục).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lưu trữ tệp cấu hình`}),` — Ghi kết quả vào tệp `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` ở thư mục gốc của gói.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số khởi tạo:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ai: DesignTypesAi`}),` — Đối tượng client AI để thực hiện các yêu cầu sinh mã.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`makeTypes: DesignTypesMake`}),` — Trình tạo kiểu để truy cập định nghĩa kiểu và mã nguồn JS.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`prompts: DesignTypesPrompts`}),` — Trình quản lý prompt để tích hợp quy tắc dự án.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import {
  DesignTypesAi,
  DesignTypesMake,
  DesignTypesPrompts,
  DesignTypesDescription
} from '@dxtmisha/scripts'

const ai = new DesignTypesAi('dist')
const makeTypes = new DesignTypesMake(ai)
const prompts = new DesignTypesPrompts('ai-resources', ai)
const desc = new DesignTypesDescription(ai, makeTypes, prompts)
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`is-boolean`,children:(0,c.jsx)(t.code,{children:`is(): boolean`})}),`
`,(0,c.jsxs)(t.p,{children:[`Kiểm tra xem tệp `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` có tồn tại trong dự án hay không.`]}),`
`,(0,c.jsx)(t.h3,{id:`getfulldescription-string`,children:(0,c.jsx)(t.code,{children:`getFullDescription(): string`})}),`
`,(0,c.jsx)(t.p,{children:`Trả về chuỗi nội dung mô tả đầy đủ đã được tạo.`}),`
`,(0,c.jsx)(t.h3,{id:`make-promisethis`,children:(0,c.jsx)(t.code,{children:`make(): Promise<this>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Thực thi quy trình tạo mô tả qua AI và lưu tệp `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const desc = new DesignTypesDescription(ai, makeTypes, prompts)
await desc.make()

console.log(desc.getFullDescription())
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};