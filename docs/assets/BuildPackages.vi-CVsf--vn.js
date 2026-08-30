import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/BuildPackages - Bộ xây dựng gói Monorepo`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-buildpackages`,children:`Lớp BuildPackages`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`BuildPackages`}),` là một bộ điều phối (orchestrator) chịu trách nhiệm quét, lọc, sắp xếp theo thứ tự ưu tiên và xây dựng tăng dần các gói npm trong monorepo. Lớp này theo dõi các thay đổi phiên bản bằng tệp nhật ký bộ nhớ đệm cục bộ (`,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),`) và chỉ biên dịch các mô-đun có phiên bản đã thay đổi hoặc chưa từng được xây dựng.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động quét Monorepo`}),`: Quét thư mục gói (`,(0,c.jsx)(t.code,{children:`packages/`}),`) và phát hiện tất cả các gói hoạt động có chứa tệp `,(0,c.jsx)(t.code,{children:`package.json`}),` hợp lệ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Sắp xếp theo thứ tự ưu tiên (`,(0,c.jsx)(t.code,{children:`ui-priority`}),`)`]}),`: Sắp xếp các gói theo `,(0,c.jsx)(t.code,{children:`ui-priority`}),` (mặc định là `,(0,c.jsx)(t.code,{children:`500`}),`, thứ tự tăng dần), đảm bảo các gói tiện ích và thiết kế cấp thấp được xây dựng trước các thành phần giao diện phụ thuộc.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bộ nhớ đệm tăng dần theo phiên bản`}),`: So sánh phiên bản gói với dữ liệu trong `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),` để ngăn việc xây dựng lại mã chưa thay đổi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Giải quyết tập lệnh thông minh`}),`: Tự động chọn lệnh xây dựng đầu tiên có sẵn trong `,(0,c.jsx)(t.code,{children:`package.json`}),` theo thứ tự ưu tiên nghiêm ngặt:`,`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`prepublishOnly`}),` (Ưu tiên 1)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`build-recovery`}),` (Ưu tiên 2)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`build`}),` (Ưu tiên 3)`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lọc gói thử nghiệm`}),`: Bỏ qua các gói được đánh dấu bằng thuộc tính `,(0,c.jsx)(t.code,{children:`"ui-test": true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động lưu trữ nhật ký`}),`: Ghi lại các phiên bản cập nhật vào `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),` chỉ khi có ít nhất một gói được biên dịch thành công (`,(0,c.jsx)(t.code,{children:`changed > 0`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`hàm-dựng-constructor`,children:`Hàm dựng (Constructor)`}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm dựng chấp nhận đường dẫn thư mục gói tùy chỉnh (mặc định là hằng số `,(0,c.jsx)(t.code,{children:`UI_DIR_PACKAGES`}),` = `,(0,c.jsx)(t.code,{children:`'packages'`}),`) và tải nhật ký bộ nhớ đệm hiện có từ `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { BuildPackages } from '@dxtmisha/scripts'

// Khởi tạo với thư mục mặc định ('packages')
const builder = new BuildPackages()

// Hoặc chỉ định đường dẫn gói tùy chỉnh
const customBuilder = new BuildPackages('custom-packages')
await customBuilder.make()
`})}),`
`,(0,c.jsx)(t.h3,{id:`các-thuộc-tính-của-lớp`,children:`Các thuộc tính của lớp`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected readonly path: string`}),` — Đường dẫn thư mục gốc chứa các gói monorepo (mặc định là `,(0,c.jsx)(t.code,{children:`'packages'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected readonly log: Record<string, string>`}),` — Bản đồ lưu trữ tạm thời các phiên bản gói đã lưu `,(0,c.jsx)(t.code,{children:`{ [packageName]: version }`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): Promise<void>`}),` — Quy trình điều phối chính:`,`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Lấy danh sách các gói hợp lệ đã được sắp xếp qua `,(0,c.jsx)(t.code,{children:`getList()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Ghi nhật ký tổng số gói tìm thấy (`,(0,c.jsx)(t.code,{children:`Build packages(N)...`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Đối với mỗi gói, kiểm tra xem có cần cập nhật hay không (`,(0,c.jsx)(t.code,{children:`isUpdate`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Kích hoạt biên dịch gói nếu cần (`,(0,c.jsx)(t.code,{children:`build`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Khi xây dựng thành công, cập nhật phiên bản trong bộ nhớ tạm (`,(0,c.jsx)(t.code,{children:`updateLog`}),`) và tăng số đếm `,(0,c.jsx)(t.code,{children:`changed`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Nếu `,(0,c.jsx)(t.code,{children:`changed > 0`}),`, lưu tệp nhật ký cập nhật vào đĩa (`,(0,c.jsx)(t.code,{children:`saveLog`}),`) và ghi nhật ký `,(0,c.jsx)(t.code,{children:`Build packages changed: N`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Nếu không có gói nào cần biên dịch, ghi nhật ký `,(0,c.jsx)(t.code,{children:`Build packages - no changes`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected build(packageFile: PackageFile): Promise<boolean>`}),` — Thực thi lệnh xây dựng cho một gói:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Xác định tập lệnh qua `,(0,c.jsx)(t.code,{children:`packageFile.getCodeBuildOrRecovery()`}),` (`,(0,c.jsx)(t.code,{children:`prepublishOnly`}),` -> `,(0,c.jsx)(t.code,{children:`build-recovery`}),` -> `,(0,c.jsx)(t.code,{children:`build`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Chạy `,(0,c.jsx)(t.code,{children:`npm run <script>`}),` bên trong thư mục gói bằng hàm tiện ích `,(0,c.jsx)(t.code,{children:`run`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Trả về `,(0,c.jsx)(t.code,{children:`true`}),` khi hoàn thành thành công, hoặc `,(0,c.jsx)(t.code,{children:`false`}),` nếu thực thi thất bại / không tìm thấy tập lệnh xây dựng.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected isUpdate(packageFile: PackageFile): boolean`}),` — Kiểm tra xem gói có cần xây dựng lại hay không thông qua `,(0,c.jsx)(t.code,{children:`!packageFile.isVersionConsistency(this.getVersionLog(packageFile.getName()))`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected getVersionLog(name: string): string`}),` — Lấy phiên bản gói được lưu trong bộ nhớ đệm từ nhật ký (trả về `,(0,c.jsx)(t.code,{children:`'0.0.0'`}),` nếu gói chưa từng được ghi nhật ký).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected updateLog(packageFile: PackageFile): void`}),` — Cập nhật mục phiên bản trong bộ nhớ `,(0,c.jsx)(t.code,{children:`this.log[packageFile.getName()] = packageFile.getVersion()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected saveLog(): void`}),` — Lưu bản đồ nhật ký hiện tại `,(0,c.jsx)(t.code,{children:`this.log`}),` vào `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),` thông qua `,(0,c.jsx)(t.code,{children:`PropertiesFile.writeByPath`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`private getList(): PackageFile[]`}),` — Quét `,(0,c.jsx)(t.code,{children:`this.path`}),`, lọc các thư mục (đảm bảo tồn tại `,(0,c.jsx)(t.code,{children:`package.json`}),` và không có `,(0,c.jsx)(t.code,{children:`"ui-test": true`}),`), và sắp xếp các gói theo thứ tự tăng dần dựa trên `,(0,c.jsx)(t.code,{children:`ui-priority`}),` (mặc định là `,(0,c.jsx)(t.code,{children:`500`}),`).`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};