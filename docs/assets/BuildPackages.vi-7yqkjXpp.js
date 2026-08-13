import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/BuildPackages - Bộ xây dựng gói Monorepo`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-buildpackages`,children:`Lớp BuildPackages`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`BuildPackages`}),` là một tiện ích chịu trách nhiệm xây dựng lại các gói npm đã thay đổi trong không gian làm việc monorepo. Nó quét thư mục `,(0,c.jsx)(t.code,{children:`packages`}),`, xác định các thay đổi phiên bản so với bộ nhớ đệm nhật ký cục bộ và thực hiện biên dịch tăng dần chỉ cho các gói có phiên bản được cập nhật.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động quét thư mục`}),` — Quét thư mục gói (`,(0,c.jsx)(t.code,{children:`packages/`}),`) để tìm các thư mục chứa tệp `,(0,c.jsx)(t.code,{children:`package.json`}),` hợp lệ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bộ nhớ đệm tăng dần theo phiên bản`}),` — So sánh phiên bản gói với dữ liệu trong `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),` để ngăn việc xây dựng lại mã chưa thay đổi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Giải quyết tập lệnh thông minh`}),` — Chạy `,(0,c.jsx)(t.code,{children:`build-recovery`}),` nếu được định nghĩa trong tập lệnh `,(0,c.jsx)(t.code,{children:`package.json`}),`, ngược lại sẽ chuyển sang xây dựng mặc định `,(0,c.jsx)(t.code,{children:`build`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lọc gói thử nghiệm`}),` — Bỏ qua các gói được đánh dấu bằng thuộc tính `,(0,c.jsx)(t.code,{children:`"ui-test": true`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Bạn có thể tạo một phiên bản của `,(0,c.jsx)(t.code,{children:`BuildPackages`}),` bằng cách truyền tùy chọn đường dẫn thư mục gói tùy chỉnh.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { BuildPackages } from './BuildPackages'

const builder = new BuildPackages()
await builder.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): Promise<void>`}),` — Khởi tạo quá trình quét và kích hoạt quy trình xây dựng tăng dần cho từng gói được phát hiện.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`build(packageFile: PackageFile): Promise<boolean>`}),` — Thực thi lệnh xây dựng thực tế (`,(0,c.jsx)(t.code,{children:`npm run build-recovery`}),` hoặc `,(0,c.jsx)(t.code,{children:`npm run build`}),`) cho gói được chỉ định.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isUpdate(packageFile: PackageFile): boolean`}),` — Kiểm tra xem phiên bản hiện tại của gói trong `,(0,c.jsx)(t.code,{children:`package.json`}),` có khác với phiên bản được lưu trữ trong tệp nhật ký hay không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getVersionLog(name: string): string`}),` — Lấy phiên bản được lưu trong bộ nhớ đệm của gói từ nhật ký xây dựng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`updateLog(packageFile: PackageFile): void`}),` — Cập nhật bản ghi nhật ký xây dựng trong bộ nhớ với phiên bản gói hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`saveLog(): void`}),` — Lưu nhật ký xây dựng từ bộ nhớ tạm vào tệp `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};