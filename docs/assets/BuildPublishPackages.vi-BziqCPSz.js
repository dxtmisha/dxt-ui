import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/BuildPublishPackages - Bộ công bố gói Monorepo`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-buildpublishpackages`,children:`Lớp BuildPublishPackages`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`BuildPublishPackages`}),` là một tiện ích chịu trách nhiệm công bố tự động các gói npm trong không gian làm việc monorepo. Nó quét thư mục `,(0,c.jsx)(n.code,{children:`packages`}),`, xác định các thay đổi phiên bản so với bộ nhớ đệm nhật ký cục bộ và công bố các gói đã cập nhật lên npm.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động quét thư mục`}),` — Quét thư mục gói (`,(0,c.jsx)(n.code,{children:`packages/`}),`) để tìm các thư mục chứa tệp `,(0,c.jsx)(n.code,{children:`package.json`}),` hợp lệ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bộ nhớ đệm tăng dần theo phiên bản`}),` — So sánh phiên bản gói với dữ liệu trong `,(0,c.jsx)(n.code,{children:`./logs/ui-publish.log.json`}),` để ngăn việc công bố lại mã chưa thay đổi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giải quyết tập lệnh thông minh`}),` — Chạy `,(0,c.jsx)(n.code,{children:`publish-to-npm`}),` nếu được định nghĩa trong tập lệnh `,(0,c.jsx)(n.code,{children:`package.json`}),`, ngược lại sẽ chuyển sang công bố mặc định `,(0,c.jsx)(n.code,{children:`npm publish --access public`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Loại trừ công bố`}),` — Bỏ qua các gói được đánh dấu bằng thuộc tính `,(0,c.jsx)(n.code,{children:`"private": true`}),` hoặc `,(0,c.jsx)(n.code,{children:`"ui-no-publish": true`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Bạn có thể tạo một phiên bản của `,(0,c.jsx)(n.code,{children:`BuildPublishPackages`}),` bằng cách truyền tùy chọn đường dẫn thư mục gói tùy chỉnh.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { BuildPublishPackages } from './BuildPublishPackages'

const publisher = new BuildPublishPackages()
await publisher.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): Promise<void>`}),` — Khởi tạo quá trình quét và kích hoạt quy trình công bố cho từng gói được phát hiện.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isUpdate(packageFile: PackageFile): boolean`}),` — Kiểm tra xem phiên bản hiện tại của gói trong `,(0,c.jsx)(n.code,{children:`package.json`}),` có khác với phiên bản được lưu trữ trong tệp nhật ký hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getVersionLog(name: string): string`}),` — Lấy phiên bản được lưu trong bộ nhớ đệm của gói từ nhật ký công bố.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`updateLog(packageFile: PackageFile): void`}),` — Cập nhật bản ghi nhật ký công bố trong bộ nhớ với phiên bản gói hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`saveLog(): void`}),` — Lưu nhật ký công bố từ bộ nhớ tạm vào tệp `,(0,c.jsx)(n.code,{children:`./logs/ui-publish.log.json`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};