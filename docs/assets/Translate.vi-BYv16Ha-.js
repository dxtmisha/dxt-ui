import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/Translate - Quản lý Bản dịch và Văn bản`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-translate`,children:`Lớp Translate`}),`
`,(0,c.jsx)(n.p,{children:`Một lớp tiện ích tĩnh (static class) để quản lý bản dịch và văn bản đa ngôn ngữ. Lớp này cung cấp các công cụ mạnh mẽ để truy xuất, lưu trữ bộ nhớ đệm (cache) và hiển thị nội dung với hỗ trợ mẫu (template), tự động phát hiện ngôn ngữ và tải yêu cầu theo lô (batch) để tối ưu hóa hiệu suất.`}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tải theo lô (Batch Loading)`}),` — Tự động gom nhóm các yêu cầu dịch thuật và gửi đi trong một gói duy nhất sau 160ms kể từ khi đưa vào hàng đợi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Mẫu văn bản linh hoạt`}),` — Hỗ trợ thay thế tham số trong văn bản thông qua chỉ số (`,(0,c.jsx)(n.code,{children:`[0]`}),`) hoặc khóa định danh (`,(0,c.jsx)(n.code,{children:`{key}`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Truy cập Đồng bộ và Bất đồng bộ`}),` — Cung cấp các phương thức lấy văn bản tức thì từ cache (`,(0,c.jsx)(n.code,{children:`getSync`}),`) hoặc đảm bảo tải từ máy chủ (`,(0,c.jsx)(n.code,{children:`get`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bộ nhớ đệm thông minh`}),` — Lưu trữ bản dịch theo phạm vi ngôn ngữ hiện tại và hỗ trợ cơ chế dự phòng (ngôn ngữ-quốc gia → ngôn ngữ → toàn cầu).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Nguồn dữ liệu linh hoạt`}),` — Hỗ trợ tải bản dịch từ cả máy chủ (API) và tệp cục bộ (thông qua `,(0,c.jsx)(n.code,{children:`TranslateFile`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phát triển cục bộ`}),` — Chế độ `,(0,c.jsx)(n.code,{children:`addNormalOrSync`}),` tự động chuyển đổi giữa dữ liệu giả (mock) và yêu cầu thực tế tùy theo môi trường.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.p,{children:`Lớp này là tĩnh và không yêu cầu khởi tạo đối tượng. Cấu hình chính bao gồm việc thiết lập URL của API.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Translate } from '@dxtmisha/functional-basic'

// Cấu hình URL API cho các yêu cầu
Translate.setUrl('/api/v1/translate')

// Tải trước các văn bản cần thiết
await Translate.add(['welcome', 'auth.login', 'errors.required'])
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`truy-xuất-bản-dịch`,children:`Truy xuất bản dịch`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async get(name: string, replacement?: any): Promise<string>`}),` — Lấy văn bản bất đồng bộ. Nếu không có trong cache và không phải môi trường localhost, hệ thống sẽ cố gắng tải từ máy chủ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSync(name: string, first?: boolean, replacement?: any): string`}),` — Trả về văn bản từ cache. Nếu `,(0,c.jsx)(n.code,{children:`first`}),` là `,(0,c.jsx)(n.code,{children:`true`}),`, trả về một khoảng trắng `,(0,c.jsx)(n.code,{children:` `}),` nếu thiếu văn bản; nếu không, trả về chính mã `,(0,c.jsx)(n.code,{children:`name`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async getList(names: TranslateCode[]): Promise<TranslateList>`}),` — Lấy một đối tượng chứa nhóm các bản dịch (bất đồng bộ).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getListSync(names: TranslateCode[], first?: boolean): TranslateList`}),` — Lấy một đối tượng chứa nhóm các bản dịch từ cache (đồng bộ).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`quản-lý-dữ-liệu`,children:`Quản lý dữ liệu`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async add(names: string | string[]): Promise<void>`}),` — Thêm các mã vào hàng đợi tải. Các yêu cầu được gom nhóm để giảm tải cho mạng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addSync(data: Record<string, string>): void`}),` — Thêm trực tiếp các chuỗi đã dịch vào bộ nhớ đệm.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async addNormalOrSync(data: Record<string, string>): Promise<void>`}),` — Thêm dữ liệu thông minh: hoạt động như `,(0,c.jsx)(n.code,{children:`addSync`}),` trên localhost, và như `,(0,c.jsx)(n.code,{children:`add`}),` trong các môi trường khác.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addSyncByLocation(data: Record<string, Record<string, string>>): void`}),` — Thêm hàng loạt văn bản gắn liền với các ngôn ngữ/khu vực cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addSyncByFile(data: TranslateDataFile): void`}),` — Đăng ký trình tải tệp bản dịch để tải chậm (xem `,(0,c.jsx)(n.code,{children:`TranslateFile`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setUrl(url: string): typeof Translate`}),` — Thiết lập đường dẫn API để tải bản dịch.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setPropsName(name: string): typeof Translate`}),` — Thiết lập tên thuộc tính trong thân yêu cầu (mặc định là `,(0,c.jsx)(n.code,{children:`list`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setReadApi(read: boolean): typeof Translate`}),` — Bật hoặc tắt các yêu cầu API cho bản dịch (mặc định là `,(0,c.jsx)(n.code,{children:`true`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`kiểu-dữ-liệu-types`,children:`Kiểu dữ liệu (Types)`}),`
`,(0,c.jsx)(n.h3,{id:`translatecode`,children:(0,c.jsx)(n.code,{children:`TranslateCode`})}),`
`,(0,c.jsx)(n.p,{children:`Một chuỗi (mã văn bản) hoặc một mảng các chuỗi. Mảng được dùng để thay thế mẫu (template):`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`string`}),` — ví dụ: `,(0,c.jsx)(n.code,{children:`'welcome'`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`string[]`}),` — ví dụ: `,(0,c.jsx)(n.code,{children:`['welcome', 'Khách']`})]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`translatelist`,children:(0,c.jsx)(n.code,{children:`TranslateList`})}),`
`,(0,c.jsx)(n.p,{children:`Một bản ghi (record) với khóa là mã bản dịch và giá trị là các chuỗi đã dịch tương ứng.`}),`
`,(0,c.jsx)(n.h3,{id:`translatedatafile`,children:(0,c.jsx)(n.code,{children:`TranslateDataFile`})}),`
`,(0,c.jsxs)(n.p,{children:[`Ánh xạ các chuỗi ngôn ngữ/khu vực (locale) với các hàm tải tương ứng. Được dùng trong `,(0,c.jsx)(n.code,{children:`addSyncByFile`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.h3,{id:`làm-việc-với-mẫu-template`,children:`Làm việc với mẫu (Template)`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Trong cơ sở dữ liệu: "Xin chào, [0]! Bạn có {count} thông báo."
const text = await Translate.get('user.notifications', ['Sơn', { count: 5 }])
// Kết quả: "Xin chào, Sơn! Bạn có 5 thông báo."
`})}),`
`,(0,c.jsx)(n.h3,{id:`sử-dụng-đồng-bộ-trong-component`,children:`Sử dụng đồng bộ trong Component`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Trước tiên, tải tất cả những gì cần thiết (ví dụ: khi khởi tạo ứng dụng)
await Translate.add(['btn.save', 'btn.cancel'])

// Bên trong một component, sử dụng đồng bộ để tránh lạm dụng await
const label = Translate.getSync('btn.save')
`})}),`
`,(0,c.jsx)(n.h3,{id:`lấy-danh-sách-hàng-loạt`,children:`Lấy danh sách hàng loạt`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const labels = await Translate.getList([
  'home.title',
  ['home.welcome', 'Khách'], // thay thế mẫu ngay lập tức
  'home.footer'
])

console.log(labels['home.welcome']) // "Chào mừng, Khách!"
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};