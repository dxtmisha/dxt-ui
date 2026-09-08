import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DTffVoCm.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/GitIgnore - Quản lý .gitignore`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-gitignore`,children:`Lớp GitIgnore`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp tiện ích để quản lý và cập nhật các mục trong tệp `,(0,c.jsx)(t.code,{children:`.gitignore`}),`. Cho phép cấu hình linh hoạt các đường dẫn và tiêu đề nhận xét thông qua chuỗi phương thức và ghi dữ liệu an toàn thông qua việc gọi `,(0,c.jsx)(t.code,{children:`make()`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chuẩn hóa đường dẫn`}),` — tự động cắt khoảng trắng, loại bỏ chuỗi rỗng và loại bỏ các đường dẫn trùng lặp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chèn an toàn`}),` — kiểm tra các mục hiện có dựa trên đường dẫn mới mà bỏ qua sự khác biệt về dấu gạch chéo để ngăn chặn trùng lặp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tiêu đề bình luận`}),` — tùy chọn thêm tiêu đề bình luận `,(0,c.jsx)(t.code,{children:`# <comment>`}),` phía trên các mục mới mà không làm trùng lặp tiêu đề đã tồn tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`API biến đổi trạng thái`}),` — quản lý đường dẫn (`,(0,c.jsx)(t.code,{children:`addPaths`}),`, `,(0,c.jsx)(t.code,{children:`setPaths`}),`), nhận xét (`,(0,c.jsx)(t.code,{children:`setComment`}),`), và đường dẫn tệp đích (`,(0,c.jsx)(t.code,{children:`setGitignorePath`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức-chính`,children:`Phương thức chính`}),`
`,(0,c.jsx)(t.h3,{id:`make`,children:(0,c.jsx)(t.code,{children:`make`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tạo và ghi các đường dẫn vào tệp `,(0,c.jsx)(t.code,{children:`.gitignore`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` nếu các mục mới đã được ghi vào tệp, ngược lại là `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { GitIgnore } from '@dxtmisha/scripts'

new GitIgnore([
  'ai-prompt.md',
  'ai-packages-types'
], 'AI Resources').make()
`})}),`
`,(0,c.jsx)(t.h3,{id:`các-phương-thức-thay-đổi-trạng-thái`,children:`Các phương thức thay đổi trạng thái`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addPaths(paths: string | string[]): this`}),` — thêm đường dẫn vào danh sách hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setPaths(paths: string | string[]): this`}),` — thay thế danh sách đường dẫn hiện tại bằng tập hợp mới.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getPaths(): string[]`}),` — trả về mảng đường dẫn hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setComment(comment?: string): this`}),` — đặt tiêu đề bình luận cho phần được thêm vào.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getComment(): string | undefined`}),` — trả về tiêu đề bình luận hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setGitignorePath(path: PropertiesFilePath): this`}),` — đặt đường dẫn tệp `,(0,c.jsx)(t.code,{children:`.gitignore`}),` đích.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getGitignorePath(): PropertiesFilePath`}),` — trả về đường dẫn tệp `,(0,c.jsx)(t.code,{children:`.gitignore`}),` hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getContent(): string`}),` — đọc và lưu vào bộ nhớ cache nội dung tệp `,(0,c.jsx)(t.code,{children:`.gitignore`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetContent(): this`}),` — đặt lại nội dung đã lưu trong bộ nhớ cache.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ví dụ chuỗi phương thức:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { GitIgnore } from '@dxtmisha/scripts'

new GitIgnore()
  .addPaths(['dist', 'temp'])
  .addPaths('coverage')
  .setComment('Build Outputs')
  .make()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};