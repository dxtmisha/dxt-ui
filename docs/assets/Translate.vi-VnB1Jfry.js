import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/Translate - Quản lý Bản dịch và Văn bản`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-translate`,children:`Lớp Translate`}),`
`,(0,c.jsxs)(n.p,{children:[`Một lớp bao tĩnh (static wrapper) cho một thực thể mặc định của lớp `,(0,c.jsx)(n.code,{children:`TranslateInstance`}),`. Nó quản lý bản dịch và văn bản đa ngôn ngữ ở cấp độ toàn cục, cung cấp các công cụ để truy xuất, lưu trữ bộ nhớ đệm (cache) và hiển thị nội dung với hỗ trợ mẫu (template) cùng khả năng tự động phát hiện ngôn ngữ.`]}),`
`,(0,c.jsx)(n.h2,{id:`mối-liên-hệ-với-translateinstance`,children:`Mối liên hệ với TranslateInstance`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`Translate`}),` hoạt động như một giao diện toàn cục, được cấu hình sẵn cho `,(0,c.jsx)(n.code,{children:`TranslateInstance`}),`. Tất cả các phương thức tĩnh đều gọi đến các phương thức tương ứng trên một thực thể nội bộ (`,(0,c.jsx)(n.code,{children:`Translate.getItem()`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Mặc dù `,(0,c.jsx)(n.code,{children:`Translate`}),` phù hợp cho hầu hết các nhu cầu dịch thuật toàn ứng dụng, bạn có thể tạo các môi trường dịch thuật độc lập bằng cách sử dụng `,(0,c.jsx)(n.code,{children:`TranslateInstance`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tải theo lô (Batch Loading)`}),` — Tự động gom nhóm các yêu cầu dịch thuật và gửi đi trong một gói duy nhất sau 160ms kể từ khi đưa vào hàng đợi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Mẫu văn bản linh hoạt`}),` — Hỗ trợ thay thế tham số trong văn bản thông qua chỉ số (`,(0,c.jsx)(n.code,{children:`[0]`}),`) hoặc khóa định danh (`,(0,c.jsx)(n.code,{children:`{key}`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Truy cập Đồng bộ và Bất đồng bộ`}),` — Cung cấp các phương thức lấy văn bản tức thì từ cache (`,(0,c.jsx)(n.code,{children:`getSync`}),`) hoặc đảm bảo tải từ máy chủ (`,(0,c.jsx)(n.code,{children:`get`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bộ nhớ đệm thông minh`}),` — Lưu trữ bản dịch theo mã vùng hiện tại và hỗ trợ cơ chế dự phòng (Vị trí > Ngôn ngữ > Toàn cầu).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.p,{children:`Lớp này là tĩnh và không yêu cầu khởi tạo đối tượng. Cấu hình được áp dụng cho thực thể dịch thuật toàn cục.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Translate } from '@dxtmisha/functional-basic'

// Cấu hình URL API cho thực thể toàn cục
Translate.setUrl('/api/v1/translate')

// Tải trước các văn bản cần thiết
await Translate.add(['welcome', 'auth.login'])
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setConfig(config: TranslateConfig): Translate`}),` — Thiết lập cấu hình hoàn chỉnh cho thực thể dịch thuật.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setUrl(url: string): Translate`}),` — Thay đổi đường dẫn API để lấy bản dịch.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setPropsName(name: string): Translate`}),` — Thay đổi tên thuộc tính được sử dụng trong yêu cầu/phản hồi API.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setReadApi(value: boolean): Translate`}),` — Bật hoặc tắt việc lấy bản dịch từ API.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`truy-xuất-bản-dịch`,children:`Truy xuất bản dịch`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async get(name: string, replacement?: any): Promise<string>`}),` — Lấy văn bản bất đồng bộ. Nếu không có trong cache và không phải môi trường localhost, hệ thống sẽ cố gắng tải từ máy chủ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSync(name: string, first?: boolean, replacement?: any): string`}),` — Trả về văn bản từ cache. Nếu `,(0,c.jsx)(n.code,{children:`first`}),` là `,(0,c.jsx)(n.code,{children:`true`}),`, trả về một khoảng trắng `,(0,c.jsx)(n.code,{children:` `}),` nếu thiếu văn bản.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async getList<T>(names: T): Promise<TranslateList<T>>`}),` — Lấy một nhóm các bản dịch (bất đồng bộ).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getListSync<T>(names: T, first?: boolean): TranslateList<T>`}),` — Lấy một nhóm các bản dịch từ cache (đồng bộ).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`cập-nhật-theo-lô`,children:`Cập nhật theo lô`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async add(names: string | string[]): Promise<void>`}),` — Thêm nhiều mã vào hàng đợi để tải theo lô.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addSync(data: Record<string, string>): void`}),` — Thêm trực tiếp các bản dịch vào bộ nhớ đệm.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async addNormalOrSync(data: Record<string, string>): Promise<void>`}),` — Thêm bản dịch trực tiếp trên localhost, ngược lại sẽ đưa vào hàng đợi để tải.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addSyncByLocation(data: Record<string, Record<string, string>>): void`}),` — Thêm bản dịch cho các vị trí/ngôn ngữ cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addSyncByFile(data: TranslateDataFile): void`}),` — Thêm bản dịch từ định nghĩa tệp.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`static-và-thực-thể-instance`,children:`Static và Thực thể (Instance)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cách dùng`}),`: Truy cập toàn cục bằng `,(0,c.jsx)(n.code,{children:`Translate`}),` ở bất kỳ đâu trong ứng dụng hoặc sử dụng `,(0,c.jsx)(n.code,{children:`TranslateInstance`}),` cho các thực thể độc lập, theo từng khu vực cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Trạng thái`}),`: Trạng thái `,(0,c.jsx)(n.code,{children:`Translate`}),` chia sẻ chung cho toàn bộ ứng dụng, trong khi `,(0,c.jsx)(n.code,{children:`TranslateInstance`}),` cung cấp trạng thái cô lập cho các thành phần hoặc mô-đun cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khởi tạo`}),`: `,(0,c.jsx)(n.code,{children:`Translate`}),` không yêu cầu khởi tạo đối tượng (lớp bao tĩnh), trong khi `,(0,c.jsx)(n.code,{children:`TranslateInstance`}),` được tạo thông qua `,(0,c.jsx)(n.code,{children:`new TranslateInstance()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-thực-thể-độc-lập`,children:`Các thực thể độc lập`}),`
`,(0,c.jsxs)(n.p,{children:[`Nếu bạn cần quản lý một tập hợp các bản dịch riêng biệt (ví dụ: cho một ứng dụng con cụ thể hoặc một widget chuyên dụng), hãy sử dụng `,(0,c.jsx)(n.code,{children:`TranslateInstance`}),` thay vì lớp `,(0,c.jsx)(n.code,{children:`Translate`}),` toàn cục.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { TranslateInstance, TranslateFile } from '@dxtmisha/functional-basic'

// 1. Tạo một bộ tệp dịch chuyên dụng
const widgetFiles = new TranslateFile({
  'vi-VN': () => import('./locales/widget.vi-VN.json')
})

// 2. Khởi tạo một thực thể dịch thuật độc lập
const widgetTranslate = new TranslateInstance(
  '/api/widget/translate', 
  'list', 
  widgetFiles
)

// 3. Sử dụng độc lập
const label = await widgetTranslate.get('widget.welcome')
`})}),`
`,(0,c.jsx)(n.h2,{id:`kiểu-dữ-liệu-types`,children:`Kiểu dữ liệu (Types)`}),`
`,(0,c.jsx)(n.h3,{id:`translatecode`,children:(0,c.jsx)(n.code,{children:`TranslateCode`})}),`
`,(0,c.jsx)(n.p,{children:`Một chuỗi (mã văn bản) hoặc một mảng các chuỗi. Mảng được dùng để thay thế mẫu (template):`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`string`}),` — ví dụ: `,(0,c.jsx)(n.code,{children:`'welcome'`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`string[]`}),` — ví dụ: `,(0,c.jsx)(n.code,{children:`['welcome', 'Khách']`})]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`translatelist`,children:(0,c.jsx)(n.code,{children:`TranslateList`})}),`
`,(0,c.jsx)(n.p,{children:`Một bản ghi (record) với khóa là mã bản dịch và giá trị là các chuỗi đã dịch tương ứng.`}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.h3,{id:`làm-việc-với-mẫu-template`,children:`Làm việc với mẫu (Template)`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Trong cơ sở dữ liệu: "Xin chào, [0]! Bạn có {count} thông báo."
const text = await Translate.get('user.notifications', ['Sơn', { count: 5 }])
// Kết quả: "Xin chào, Sơn! Bạn có 5 thông báo."
`})}),`
`,(0,c.jsx)(n.h3,{id:`lấy-danh-sách-hàng-loạt`,children:`Lấy danh sách hàng loạt`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const labels = await Translate.getList([
  'home.title',
  ['home.welcome', 'Khách'], 
  'home.footer'
])
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};