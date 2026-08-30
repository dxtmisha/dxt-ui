import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/BuildPublishPackages - Bộ công bố gói Monorepo`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-buildpublishpackages`,children:`Lớp BuildPublishPackages`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`BuildPublishPackages`}),` là một bộ điều phối (orchestrator) chịu trách nhiệm quét, lọc và tự động công bố các gói npm đã thay đổi trong monorepo lên sổ đăng ký npm. Lớp này theo dõi các phiên bản gói thông qua tệp nhật ký bộ nhớ đệm cục bộ (`,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),`), tự động đăng ký các gói mới và công bố mô-đun khi có phiên bản nâng cấp.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động quét Monorepo`}),`: Quét thư mục gói (`,(0,c.jsx)(t.code,{children:`packages/`}),`) và phát hiện tất cả các gói hoạt động có chứa tệp `,(0,c.jsx)(t.code,{children:`package.json`}),` hợp lệ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bộ nhớ đệm tăng dần theo phiên bản`}),`: Ngăn chặn việc công bố lại các phiên bản đã phát hành trước đó bằng cách duy trì sổ đăng ký phiên bản cục bộ trong `,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Giải quyết lệnh công bố thông minh`}),`: Tự động thực thi tập lệnh tùy chỉnh `,(0,c.jsx)(t.code,{children:`"publish-to-npm"`}),` nếu được định nghĩa trong `,(0,c.jsx)(t.code,{children:`package.json`}),`, hoặc chuyển về lệnh mặc định `,(0,c.jsx)(t.code,{children:`npm publish --access public`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động đồng bộ hóa cơ sở cho gói mới`}),`: Tự động ghi lại các phiên bản hiện tại của các gói chưa từng được theo dõi mà không kích hoạt công bố lại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Loại trừ công bố`}),`: Tự động bỏ qua các gói được đánh dấu bằng thuộc tính `,(0,c.jsx)(t.code,{children:`"private": true`}),` hoặc `,(0,c.jsx)(t.code,{children:`"ui-no-publish": true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ghi nhật ký luồng theo thời gian thực`}),`: Chuyển tiếp toàn bộ luồng stdout và stderr của lệnh công bố trực tiếp ra bảng điều khiển (console).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động lưu trữ nhật ký`}),`: Ghi lại các phiên bản đã cập nhật vào `,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),` chỉ khi có các thay đổi (`,(0,c.jsx)(t.code,{children:`changed > 0`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`hàm-dựng-constructor`,children:`Hàm dựng (Constructor)`}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm dựng chấp nhận đường dẫn thư mục gói tùy chỉnh (mặc định là hằng số `,(0,c.jsx)(t.code,{children:`UI_DIR_PACKAGES`}),` = `,(0,c.jsx)(t.code,{children:`'packages'`}),`) và tải nhật ký bộ nhớ đệm công bố hiện có từ `,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { BuildPublishPackages } from '@dxtmisha/scripts'

// Khởi tạo với thư mục mặc định ('packages')
const publisher = new BuildPublishPackages()

// Hoặc chỉ định đường dẫn gói tùy chỉnh
const customPublisher = new BuildPublishPackages('custom-packages')
await customPublisher.make()
`})}),`
`,(0,c.jsx)(t.h3,{id:`các-thuộc-tính-của-lớp`,children:`Các thuộc tính của lớp`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected readonly path: string`}),` — Đường dẫn thư mục gốc chứa các gói monorepo (mặc định là `,(0,c.jsx)(t.code,{children:`'packages'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected readonly log: Record<string, string>`}),` — Bản đồ lưu trữ tạm thời các phiên bản gói đã công bố `,(0,c.jsx)(t.code,{children:`{ [packageName]: version }`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): Promise<void>`}),` — Quy trình điều phối chính:`,`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Quét `,(0,c.jsx)(t.code,{children:`this.path`}),` và lấy danh sách thư mục thông qua `,(0,c.jsx)(t.code,{children:`PropertiesFile.readDir`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Ghi nhật ký tổng số gói tìm thấy (`,(0,c.jsx)(t.code,{children:`Publish packages(N)...`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Đối với mỗi thư mục, tạo một phiên bản `,(0,c.jsx)(t.code,{children:`PackageFile`}),`, xác minh tệp `,(0,c.jsx)(t.code,{children:`package.json`}),` và kiểm tra `,(0,c.jsx)(t.code,{children:`!packageFile.isNoPublish()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Nếu gói chưa được đăng ký trong nhật ký (`,(0,c.jsx)(t.code,{children:`this.log[name] === undefined`}),`), ghi nhận phiên bản hiện tại vào bộ nhớ đệm và tăng số đếm `,(0,c.jsx)(t.code,{children:`changed`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Nếu gói đã có trong nhật ký và phiên bản được cập nhật (`,(0,c.jsx)(t.code,{children:`isUpdate`}),`), thực thi lệnh công bố qua `,(0,c.jsx)(t.code,{children:`packageFile.getCodePublish()`}),` với đầu ra stdout/stderr thời gian thực. Khi thành công, cập nhật bộ nhớ đệm (`,(0,c.jsx)(t.code,{children:`updateLog`}),`) và tăng số đếm `,(0,c.jsx)(t.code,{children:`changed`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Nếu `,(0,c.jsx)(t.code,{children:`changed > 0`}),`, lưu tệp nhật ký cập nhật vào đĩa (`,(0,c.jsx)(t.code,{children:`saveLog`}),`) và ghi nhật ký `,(0,c.jsx)(t.code,{children:`Publish packages changed: N`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Nếu không có gói nào cần công bố hoặc đăng ký, ghi nhật ký `,(0,c.jsx)(t.code,{children:`Publish packages - no changes`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected isUpdate(packageFile: PackageFile): boolean`}),` — Kiểm tra xem gói có cần công bố hay không qua `,(0,c.jsx)(t.code,{children:`!packageFile.isVersionConsistency(this.getVersionLog(packageFile.getName()))`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected getVersionLog(name: string): string`}),` — Lấy phiên bản gói được lưu trong bộ nhớ đệm từ nhật ký (trả về `,(0,c.jsx)(t.code,{children:`'0.0.0'`}),` nếu gói chưa từng được ghi nhật ký).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected updateLog(packageFile: PackageFile): void`}),` — Cập nhật mục phiên bản trong bộ nhớ `,(0,c.jsx)(t.code,{children:`this.log[packageFile.getName()] = packageFile.getVersion()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected saveLog(): void`}),` — Lưu bản đồ nhật ký hiện tại `,(0,c.jsx)(t.code,{children:`this.log`}),` vào `,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),` thông qua `,(0,c.jsx)(t.code,{children:`PropertiesFile.writeByPath`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};