import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/TranslateFile - Quản lý Tệp Bản dịch`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-translatefile`,children:`Lớp TranslateFile`}),`
`,(0,c.jsx)(n.p,{children:`Một lớp tiện ích tĩnh (static class) để quản lý dữ liệu bản dịch từ các tệp bên ngoài. Lớp này hỗ trợ tải chậm (lazy loading) các gói ngôn ngữ, tự động khớp mã vùng và lưu trữ bộ nhớ đệm nội bộ để tối ưu hóa hiệu suất và giảm bớt việc xử lý tệp thừa.`}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tải chậm (Lazy Loading)`}),` — Hỗ trợ tải các tệp bản dịch bất đồng bộ chỉ khi chúng thực sự cần thiết cho ngôn ngữ hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bộ nhớ đệm thông minh`}),` — Tự động lưu trữ nội dung của các tệp đã tải vào cache, ngăn chặn việc đọc tệp lặp lại hoặc các yêu cầu mạng dư thừa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ưu tiên Lokale`}),` — Lựa chọn tệp phù hợp nhất một cách thông minh dựa trên vị trí (Vị trí > Ngôn ngữ > Toàn cầu).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp liền mạch`}),` — Hoạt động song song với lớp `,(0,c.jsx)(n.code,{children:`Translate`}),` để cung cấp một hệ thống dịch thuật thống nhất.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.p,{children:`Lớp này là tĩnh và chủ yếu được cấu hình bằng cách thêm các trình tải tệp (file loaders) cho các ngôn ngữ khác nhau.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { TranslateFile } from '@dxtmisha/functional-basic'

// Đăng ký trình tải tệp (thường là async imports)
TranslateFile.add({
  'en-US': () => import('./locales/en-US.json'),
  'en': () => import('./locales/en.json'),
  'global': () => import('./locales/global.json')
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`truy-xuất-dữ-liệu`,children:`Truy xuất dữ liệu`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`async getList(): Promise<TranslateDataFileList | undefined>`}),` — Trả về danh sách các bản dịch cho vị trí hiện tại. Đầu tiên nó kiểm tra cache nội bộ, sau đó cố gắng tải từ các trình tải tệp đã đăng ký.`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`isFile(): boolean`}),` — Kiểm tra xem có trình tải tệp nào đã đăng ký phù hợp với vị trí hoặc ngôn ngữ hiện tại hay không.`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`add(data: TranslateDataFile): void`}),` — Thêm ánh xạ giữa các mã vùng và trình tải tệp bản dịch tương ứng (các hàm trả về Promise).`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`kiểu-dữ-liệu-types`,children:`Kiểu dữ liệu (Types)`}),`
`,(0,c.jsx)(n.h3,{id:`translatedatafile`,children:(0,c.jsx)(n.code,{children:`TranslateDataFile`})}),`
`,(0,c.jsx)(n.p,{children:`Một tập hợp các hàm tải bất đồng bộ được chỉ mục theo chuỗi ngôn ngữ/khu vực:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khóa`}),`: Mã locale (ví dụ: `,(0,c.jsx)(n.code,{children:`'en-US'`}),`, `,(0,c.jsx)(n.code,{children:`'ru'`}),`, `,(0,c.jsx)(n.code,{children:`'global'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giá trị`}),`: Hàm trả về một `,(0,c.jsx)(n.code,{children:`Promise`}),` của `,(0,c.jsx)(n.code,{children:`TranslateDataFileList`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`translatedatafilelist`,children:(0,c.jsx)(n.code,{children:`TranslateDataFileList`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một bản ghi key-value đơn giản của các bản dịch: `,(0,c.jsx)(n.code,{children:`Record<string, string>`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.h3,{id:`đăng-ký-tệp-với-dynamic-imports`,children:`Đăng ký Tệp với Dynamic Imports`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { TranslateFile, Translate } from '@dxtmisha/functional-basic'

TranslateFile.add({
  'en-US': () => import('./en-US.json'),
  'ru-RU': () => import('./ru-RU.json')
})

// Lớp Translate sẽ tự động sử dụng TranslateFile nếu có sẵn tệp
const title = await Translate.get('app.title')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};