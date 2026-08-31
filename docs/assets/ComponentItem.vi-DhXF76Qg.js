import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/ComponentItem - Trình tạo tệp thành phần`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-componentitem`,children:`Lớp ComponentItem`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`ComponentItem`}),` chịu trách nhiệm tạo và ghi toàn bộ các tệp khung sườn (boilerplate) cho một thành phần cụ thể. Lớp này nạp các mẫu tích hợp sẵn (`,(0,c.jsx)(t.code,{children:`componentDocTemplates`}),`), thực hiện thay thế động các trình giữ chỗ và lưu tệp với quyền truy cập hệ thống chính xác.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tạo 8 tệp mẫu chuẩn`}),`: Tạo Vue 3 SFC (`,(0,c.jsx)(t.code,{children:`.vue`}),`), điểm xuất `,(0,c.jsx)(t.code,{children:`index.ts`}),`, định nghĩa kiểu `,(0,c.jsx)(t.code,{children:`types.ts`}),`, gợi ý AI cho tài liệu thiết kế (`,(0,c.jsx)(t.code,{children:`materials/prompt.md`}),`), thành phần con (`,(0,c.jsx)(t.code,{children:`subcomponents/.gitignore`}),`) và tài liệu Storybook (`,(0,c.jsx)(t.code,{children:`wiki/ComponentDoc.mdx`}),`, `,(0,c.jsx)(t.code,{children:`wiki/ComponentDoc.stories.ts`}),`, `,(0,c.jsx)(t.code,{children:`wiki/prompt.md`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thay thế động các trình giữ chỗ`}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ComponentDoc`}),` -> Tên thành phần dạng PascalCase (`,(0,c.jsx)(t.code,{children:`this.getName()`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`component-doc`}),` -> Tên thành phần dạng kebab-case (`,(0,c.jsx)(t.code,{children:`toKebabCase(this.getName())`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[project]`}),` -> Tên gói từ `,(0,c.jsx)(t.code,{children:`package.json`}),` (`,(0,c.jsx)(t.code,{children:`this.getProjectName()`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[path]`}),` -> Đường dẫn tương đối đến thành phần (`,(0,c.jsx)(t.code,{children:`src/components/ComponentName`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`_.gitignore.txt`}),` -> `,(0,c.jsx)(t.code,{children:`.gitignore`})]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Quản lý quyền truy cập tệp`}),`: Tự động gọi `,(0,c.jsx)(t.code,{children:`PropertiesFile.chmod`}),` cho tất cả các tệp đã ghi.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`hàm-dựng-constructor`,children:`Hàm dựng (Constructor)`}),`
`,(0,c.jsx)(t.p,{children:`Chấp nhận đường dẫn thư mục thành phần:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ComponentItem } from '@dxtmisha/scripts'

const component = new ComponentItem('Button')
component.make()
`})}),`
`,(0,c.jsx)(t.h3,{id:`các-thuộc-tính-của-lớp`,children:`Các thuộc tính của lớp`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected readonly path: string`}),` — Đường dẫn thư mục thành phần tương đối.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected sample: Record<string, string>`}),` — Bản đồ các khóa tệp mẫu và nội dung thô (`,(0,c.jsx)(t.code,{children:`componentDocTemplates`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — Phương thức tạo chính:`,`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Ghi nhật ký tên thành phần và đường dẫn (`,(0,c.jsx)(t.code,{children:`Component create: <Name>`}),`, `,(0,c.jsx)(t.code,{children:`path: <path>`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Lặp qua tất cả các khóa mẫu từ `,(0,c.jsx)(t.code,{children:`getFilesSample()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Đọc nội dung mẫu thô (`,(0,c.jsx)(t.code,{children:`readSample`}),`), thực hiện thay thế dữ liệu (`,(0,c.jsx)(t.code,{children:`replacement`}),`) và ghi tệp đầu ra (`,(0,c.jsx)(t.code,{children:`writeFile`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Ghi nhật ký `,(0,c.jsx)(t.code,{children:`end`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected getFilePath(path: string): string[]`}),` — Xây dựng các phân đoạn đường dẫn tệp đích bằng cách sử dụng `,(0,c.jsx)(t.code,{children:`getComponentPaths(this.path)`}),` kèm theo thay thế tên tệp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected getFilesSample(): string[]`}),` — Trả về danh sách tất cả các khóa tệp mẫu (`,(0,c.jsx)(t.code,{children:`Object.keys(this.sample)`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected getName(): string`}),` — Trích xuất tên thành phần từ phân đoạn cuối cùng của `,(0,c.jsx)(t.code,{children:`this.path`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected getProjectName(): string`}),` — Lấy tên gói dự án từ `,(0,c.jsx)(t.code,{children:`package.json`}),` hoặc mặc định là `,(0,c.jsx)(t.code,{children:`'Project'`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected readPackage(): Record<string, any>`}),` — Đọc `,(0,c.jsx)(t.code,{children:`package.json`}),` từ không gian làm việc hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected readSample(path: string): string`}),` — Đọc nội dung tệp mẫu từ bộ nhớ đệm mẫu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected replacement(contentOrPath: string): string`}),` — Thực hiện thay thế chuỗi trên đường dẫn tệp và nội dung mẫu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected writeFile(path: string, content: string): void`}),` — Ghi tệp đã tạo vào đĩa qua `,(0,c.jsx)(t.code,{children:`PropertiesFile.writeByPath`}),` và áp dụng `,(0,c.jsx)(t.code,{children:`PropertiesFile.chmod`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};