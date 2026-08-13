import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/PackageFile - Quản lý package.json`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-packagefile`,children:`Lớp PackageFile`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`PackageFile`}),` là một `,(0,c.jsx)(t.strong,{children:`lớp bọc cấu hình gói`}),` được thiết kế để đọc và phân tích các tập tin `,(0,c.jsx)(t.code,{children:`package.json`}),` trong không gian làm việc. Lớp này phân tích siêu dữ liệu, kịch bản lệnh (scripts), phiên bản và các cờ xác minh của gói, hỗ trợ tự động hóa luồng xây dựng (build) và phát hành (publish) trong các không gian làm việc mono-repo.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Giải quyết siêu dữ liệu`}),` — Trích xuất các chi tiết tiêu chuẩn như tên, phiên bản và các cờ tùy chỉnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kiểm tra xác minh`}),` — Kiểm tra tính nhất quán của phiên bản và trạng thái gói kiểm thử hoặc gói không phát hành.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tổng hợp lệnh`}),` — Xác định các lệnh xây dựng và phát hành dựa trên các kịch bản lệnh có sẵn trong `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tích hợp đường dẫn`}),` — Tương tác với `,(0,c.jsx)(t.code,{children:`PropertiesFile`}),` để tải nội dung tập tin một cách đồng bộ.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Khởi tạo bằng cách truyền đường dẫn của thư mục chứa tập tin `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PackageFile } from '@dxtmisha/scripts'

// Khởi tạo đối tượng cho một thư mục gói cụ thể
const pkg = new PackageFile('packages/constructor')

if (pkg.is()) {
  console.log(pkg.getName()) // "@dxtmisha/constructor"
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`xác-minh`,children:`Xác minh`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`is(): boolean`}),` — Kiểm tra xem thư mục có chứa tập tin `,(0,c.jsx)(t.code,{children:`package.json`}),` hợp lệ hay không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isVersionConsistency(version?: string): boolean`}),` — Kiểm tra xem phiên bản của gói có khớp với phiên bản đích đã chỉ định hay không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isTest(): boolean`}),` — Kiểm tra xem gói có được đánh dấu là gói kiểm thử hay không (cờ `,(0,c.jsx)(t.code,{children:`ui-test`}),` là true).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isNoPublish(): boolean`}),` — Kiểm tra xem gói có bị cấm phát hành hay không (cờ `,(0,c.jsx)(t.code,{children:`ui-no-publish`}),` hoặc `,(0,c.jsx)(t.code,{children:`private`}),` là true).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`dữ-liệu--đường-dẫn`,children:`Dữ liệu & Đường dẫn`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): Record<string, any>`}),` — Trả về nội dung JSON đã được phân tích của gói.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName(): string`}),` — Trả về tên gói, hoặc mặc định là đường dẫn thư mục được liên kết nếu không được xác định.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getVersion(): string`}),` — Trả về phiên bản của gói (mặc định là `,(0,c.jsx)(t.code,{children:`'0.0.0'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getScripts(): Record<string, string>`}),` — Trả về các kịch bản lệnh được định nghĩa trong `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDir(): string[]`}),` — Trả về các phân đoạn đường dẫn thư mục của gói.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getPath(): string[]`}),` — Trả về các phân đoạn đường dẫn tuyệt đối trỏ đến tập tin `,(0,c.jsx)(t.code,{children:`package.json`}),` của gói.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`giải-quyết-lệnh`,children:`Giải quyết lệnh`}),`
`,(0,c.jsx)(t.h3,{id:`getcodebuildorrecovery`,children:(0,c.jsx)(t.code,{children:`getCodeBuildOrRecovery`})}),`
`,(0,c.jsxs)(t.p,{children:[`Xác định tên kịch bản lệnh cần thực thi để xây dựng gói, ưu tiên kịch bản lệnh phục hồi (`,(0,c.jsx)(t.code,{children:`build-recovery`}),`) hơn kịch bản lệnh xây dựng tiêu chuẩn (`,(0,c.jsx)(t.code,{children:`build`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const pkg = new PackageFile('packages/core')
const buildCmd = pkg.getCodeBuildOrRecovery()
// Trả về: "build-recovery" (nếu có) hoặc "build" (nếu có) hoặc undefined
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`string | undefined`})]}),`
`,(0,c.jsx)(t.h3,{id:`getcodepublish`,children:(0,c.jsx)(t.code,{children:`getCodePublish`})}),`
`,(0,c.jsx)(t.p,{children:`Tổng hợp lệnh dòng lệnh cần thiết để phát hành gói lên kho đăng ký npm.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const pkg = new PackageFile('packages/core')
const publishCmd = pkg.getCodePublish()
// Trả về: "npm run publish-to-npm" (nếu kịch bản tồn tại) hoặc "npm publish --access public"
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`string`})]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};