import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as e}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function h(t){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/functional-basic/Classes/Translate - Quản lý Bản dịch và Văn bản"}),`
`,n.jsx(c.h1,{id:"lớp-translate",children:"Lớp Translate"}),`
`,n.jsx(c.p,{children:"Một lớp tiện ích tĩnh (static class) để quản lý bản dịch và văn bản đa ngôn ngữ. Lớp này cung cấp các công cụ mạnh mẽ để truy xuất, lưu trữ bộ nhớ đệm (cache) và hiển thị nội dung với hỗ trợ mẫu (template), tự động phát hiện ngôn ngữ và tải yêu cầu theo lô (batch) để tối ưu hóa hiệu suất."}),`
`,n.jsx(c.h2,{id:"tính-năng-chính",children:"Tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tải theo lô (Batch Loading)"})," — Tự động gom nhóm các yêu cầu dịch thuật và gửi đi trong một gói duy nhất sau 160ms kể từ khi đưa vào hàng đợi."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Mẫu văn bản linh hoạt"})," — Hỗ trợ thay thế tham số trong văn bản thông qua chỉ số (",n.jsx(c.code,{children:"[0]"}),") hoặc khóa định danh (",n.jsx(c.code,{children:"{key}"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Truy cập Đồng bộ và Bất đồng bộ"})," — Cung cấp các phương thức lấy văn bản tức thì từ cache (",n.jsx(c.code,{children:"getSync"}),") hoặc đảm bảo tải từ máy chủ (",n.jsx(c.code,{children:"get"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Bộ nhớ đệm thông minh"})," — Lưu trữ bản dịch theo phạm vi ngôn ngữ hiện tại và hỗ trợ cơ chế dự phòng (ngôn ngữ-quốc gia → ngôn ngữ → toàn cầu)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Phát triển cục bộ"})," — Chế độ ",n.jsx(c.code,{children:"addNormalOrSync"})," tự động chuyển đổi giữa dữ liệu giả (mock) và yêu cầu thực tế tùy theo môi trường."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsx(c.p,{children:"Lớp này là tĩnh và không yêu cầu khởi tạo đối tượng. Cấu hình chính bao gồm việc thiết lập URL của API."}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`import { Translate } from '@dxtmisha/functional-basic'

// Cấu hình URL API cho các yêu cầu
Translate.setUrl('/api/v1/translate')

// Tải trước các văn bản cần thiết
await Translate.add(['welcome', 'auth.login', 'errors.required'])
`})}),`
`,n.jsx(c.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsx(c.h3,{id:"truy-xuất-bản-dịch",children:"Truy xuất bản dịch"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"async get(name: string, replacement?: any): Promise<string>"})," — Lấy văn bản bất đồng bộ. Nếu không có trong cache và không phải môi trường localhost, hệ thống sẽ cố gắng tải từ máy chủ."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getSync(name: string, first?: boolean, replacement?: any): string"})," — Trả về văn bản từ cache. Nếu ",n.jsx(c.code,{children:"first"})," là ",n.jsx(c.code,{children:"true"}),", trả về một khoảng trắng ",n.jsx(c.code,{children:" "})," nếu thiếu văn bản; nếu không, trả về chính mã ",n.jsx(c.code,{children:"name"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"async getList(names: TranslateCode[]): Promise<TranslateList>"})," — Lấy một đối tượng chứa nhóm các bản dịch (bất đồng bộ)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getListSync(names: TranslateCode[], first?: boolean): TranslateList"})," — Lấy một đối tượng chứa nhóm các bản dịch từ cache (đồng bộ)."]}),`
`]}),`
`,n.jsx(c.h3,{id:"quản-lý-dữ-liệu",children:"Quản lý dữ liệu"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"async add(names: string | string[]): Promise<void>"})," — Thêm các mã vào hàng đợi tải. Các yêu cầu được gom nhóm để giảm tải cho mạng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"addSync(data: Record<string, string>): void"})," — Thêm trực tiếp các chuỗi đã dịch vào bộ nhớ đệm."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"async addNormalOrSync(data: Record<string, string>): Promise<void>"})," — Thêm dữ liệu thông minh: hoạt động như ",n.jsx(c.code,{children:"addSync"})," trên localhost, và như ",n.jsx(c.code,{children:"add"})," trong các môi trường khác."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"addSyncByLocation(data: Record<string, Record<string, string>>): void"})," — Thêm hàng loạt văn bản gắn liền với các ngôn ngữ/khu vực cụ thể."]}),`
`]}),`
`,n.jsx(c.h3,{id:"cấu-hình",children:"Cấu hình"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"setUrl(url: string): Translate"})," — Thiết lập đường dẫn API để tải bản dịch."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"setPropsName(name: string): Translate"})," — Thiết lập tên thuộc tính trong thân yêu cầu (mặc định là ",n.jsx(c.code,{children:"list"}),")."]}),`
`]}),`
`,n.jsx(c.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(c.h3,{id:"làm-việc-với-mẫu-template",children:"Làm việc với mẫu (Template)"}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`// Trong cơ sở dữ liệu: "Xin chào, [0]! Bạn có {count} thông báo."
const text = await Translate.get('user.notifications', ['Sơn', { count: 5 }])
// Kết quả: "Xin chào, Sơn! Bạn có 5 thông báo."
`})}),`
`,n.jsx(c.h3,{id:"sử-dụng-đồng-bộ-trong-component",children:"Sử dụng đồng bộ trong Component"}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`// Trước tiên, tải tất cả những gì cần thiết (ví dụ: khi khởi tạo ứng dụng)
await Translate.add(['btn.save', 'btn.cancel'])

// Bên trong một component, sử dụng đồng bộ để tránh lạm dụng await
const label = Translate.getSync('btn.save')
`})}),`
`,n.jsx(c.h3,{id:"lấy-danh-sách-hàng-loạt",children:"Lấy danh sách hàng loạt"}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`const labels = await Translate.getList([
  'home.title',
  ['home.welcome', 'Khách'], // thay thế mẫu ngay lập tức
  'home.footer'
])

console.log(labels['home.welcome']) // "Chào mừng, Khách!"
`})})]})}function g(t={}){const{wrapper:c}={...i(),...t.components};return c?n.jsx(c,{...t,children:n.jsx(h,{...t})}):h(t)}export{g as default};
