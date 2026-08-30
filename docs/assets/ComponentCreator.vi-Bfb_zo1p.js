import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/ComponentCreator - Tự động tạo thành phần`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-componentcreator`,children:`Lớp ComponentCreator`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`ComponentCreator`}),` là một tiện ích tự động hóa để phát hiện các thư mục trống trong thư mục thành phần (`,(0,c.jsx)(t.code,{children:`src/components/`}),`) và tạo cấu trúc ban đầu (scaffolding) cho chúng. Lớp này quét các đường dẫn thành phần đã được định cấu hình và bắt đầu tạo toàn bộ bộ tệp mẫu thông qua `,(0,c.jsx)(t.code,{children:`ComponentItem`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động khám phá`}),`: Quét đệ quy thư mục `,(0,c.jsx)(t.code,{children:`src/components/`}),` bằng `,(0,c.jsx)(t.code,{children:`PropertiesFile.readDirOnlyRecursive`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lọc thư mục trống`}),`: Chọn các thư mục hoàn toàn không chứa bất kỳ tệp nào.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tạo hàng loạt`}),`: Khởi tạo `,(0,c.jsx)(t.code,{children:`ComponentItem`}),` cho mỗi thư mục trống được phát hiện để tạo bộ tệp thành phần hoàn chỉnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tính nhất quán của hệ thống thiết kế`}),`: Đảm bảo cấu trúc cơ sở thống nhất cho tất cả các thành phần mới được tạo.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Khởi tạo một phiên bản của `,(0,c.jsx)(t.code,{children:`ComponentCreator`}),`. Lớp này tự động nhắm mục tiêu vào thư mục thành phần tiêu chuẩn `,(0,c.jsx)(t.code,{children:`src/components/`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ComponentCreator } from '@dxtmisha/scripts'

const creator = new ComponentCreator()
creator.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — Phương thức điều phối chính:`,`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Gọi `,(0,c.jsx)(t.code,{children:`getDirs()`}),` để lấy danh sách các đường dẫn thư mục trống.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Đối với mỗi đường dẫn phát hiện được, tạo một phiên bản `,(0,c.jsx)(t.code,{children:`ComponentItem(path)`}),` và gọi `,(0,c.jsx)(t.code,{children:`.make()`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected getDirs(): string[]`}),` — Quét `,(0,c.jsx)(t.code,{children:`UI_DIRS_COMPONENTS`}),` (`,(0,c.jsx)(t.code,{children:`src/components/`}),`) qua `,(0,c.jsx)(t.code,{children:`PropertiesFile.readDirOnlyRecursive`}),` và trả về mảng các đường dẫn thư mục mà `,(0,c.jsx)(t.code,{children:`PropertiesFile.readDir(getComponentPaths(path)).length === 0`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ComponentCreator } from '@dxtmisha/scripts'

// Quét và tạo khung sườn cho tất cả các thư mục thành phần trống
new ComponentCreator().make()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};