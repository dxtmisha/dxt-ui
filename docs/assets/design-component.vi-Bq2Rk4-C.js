import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/7. Lệnh/dxt-component - Tạo Cấu Trúc Thành Phần`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-component`,children:`dxt-component`}),`
`,(0,c.jsxs)(t.p,{children:[`Lệnh `,(0,c.jsx)(t.code,{children:`dxt-component`}),` cung cấp khả năng tự động tạo cấu trúc (scaffolding) cho các thành phần mới trong hệ thống thiết kế. Lệnh này sử dụng các lớp `,(0,c.jsx)(t.code,{children:`ComponentCreator`}),` và `,(0,c.jsx)(t.code,{children:`ComponentItem`}),` để tự động phát hiện các thư mục trống trong `,(0,c.jsx)(t.code,{children:`src/components/`}),` và tạo trọn bộ các tệp mẫu chuẩn cho mỗi thành phần mới.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động quét thư mục`}),`: Quét đệ quy `,(0,c.jsx)(t.code,{children:`src/components/`}),` để phát hiện tất cả các thư mục thành phần trống.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dàn dựng mẫu toàn diện`}),`: Tạo ra 8 tệp cần thiết cho thành phần, bao gồm mã nguồn Vue SFC, các định nghĩa TypeScript, điểm xuất nhập khẩu, Storybook MDX/Stories và các câu lệnh gợi ý (prompt) cho AI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thay thế động các trình giữ chỗ`}),`: Tự động thay thế tên thành phần (ở dạng PascalCase và kebab-case), tên dự án hiện tại từ `,(0,c.jsx)(t.code,{children:`package.json`}),` và đường dẫn tương đối.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Quản lý quyền truy cập tệp`}),`: Tự động cấp quyền truy cập chính xác cho các tệp đã tạo thông qua `,(0,c.jsx)(t.code,{children:`PropertiesFile.chmod`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`nó-hoạt-động-như-thế-nào`,children:`Nó hoạt động như thế nào?`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tìm kiếm thư mục trống`}),`: Lớp `,(0,c.jsx)(t.code,{children:`ComponentCreator`}),` quét thư mục `,(0,c.jsx)(t.code,{children:`src/components/`}),` bằng `,(0,c.jsx)(t.code,{children:`PropertiesFile.readDirOnlyRecursive`}),` và lọc ra các thư mục không chứa tệp nào.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Khởi tạo trình tạo thành phần`}),`: Với mỗi thư mục trống, lớp `,(0,c.jsx)(t.code,{children:`ComponentItem`}),` được khởi tạo và nạp tập hợp các mẫu dựng sẵn (`,(0,c.jsx)(t.code,{children:`componentDocTemplates`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thay thế dữ liệu ngữ cảnh`}),`: Thực hiện thay thế chuỗi trên các mẫu và tên tệp:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ComponentDoc`}),` -> Tên thành phần dạng PascalCase (ví dụ: `,(0,c.jsx)(t.code,{children:`Button`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`component-doc`}),` -> Tên thành phần dạng kebab-case (ví dụ: `,(0,c.jsx)(t.code,{children:`button`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[project]`}),` -> Tên gói từ `,(0,c.jsx)(t.code,{children:`package.json`}),` (ví dụ: `,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[path]`}),` -> Đường dẫn tương đối đến thành phần (ví dụ: `,(0,c.jsx)(t.code,{children:`src/components/Button`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`_.gitignore.txt`}),` -> `,(0,c.jsx)(t.code,{children:`.gitignore`})]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ghi tệp`}),`: Các tệp đã được xử lý sẽ được ghi trực tiếp vào thư mục thành phần mục tiêu với quyền truy cập phù hợp.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`sử-dụng`,children:`Sử dụng`}),`
`,(0,c.jsxs)(t.p,{children:[`Tạo một thư mục trống cho thành phần mới trong `,(0,c.jsx)(t.code,{children:`src/components/`}),` (ví dụ: `,(0,c.jsx)(t.code,{children:`src/components/Badge`}),`) và chạy:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-component
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Hoặc thêm cấu hình vào phần scripts trong `,(0,c.jsx)(t.code,{children:`package.json`}),` của gói:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "scripts": {
    "component": "dxt-component"
  }
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`cấu-trúc-tệp-được-tạo-sinh`,children:`Cấu trúc tệp được tạo sinh`}),`
`,(0,c.jsx)(t.p,{children:`Đối với mỗi thư mục thành phần được phát hiện, 8 tệp sau sẽ được tạo:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[ComponentName].vue`}),` — Thành phần Vue 3 SFC cơ bản với `,(0,c.jsx)(t.code,{children:`<script setup lang="ts">`}),`, nhập kiểu và phần khung `,(0,c.jsx)(t.code,{children:`<style lang="scss">`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index.ts`}),` — Điểm xuất của thành phần với xuất có tên (`,(0,c.jsx)(t.code,{children:`export const [ComponentName]`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`types.ts`}),` — Định nghĩa TypeScript cho `,(0,c.jsx)(t.code,{children:`Props`}),`, `,(0,c.jsx)(t.code,{children:`Emits`}),`, `,(0,c.jsx)(t.code,{children:`Slots`}),` và các giá trị mặc định.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`materials/prompt.md`}),` — Hướng dẫn gợi ý AI về tài liệu thiết kế của thành phần.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`subcomponents/.gitignore`}),` — Tệp gitignore cho thư mục chứa các thành phần con cục bộ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`wiki/[ComponentName].mdx`}),` — Tệp tài liệu Storybook định dạng MDX.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`wiki/[ComponentName].stories.ts`}),` — Định nghĩa câu chuyện Storybook Vue 3 để xem trước thành phần.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`wiki/prompt.md`}),` — Hướng dẫn gợi ý AI để viết tài liệu Wiki cho thành phần.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};