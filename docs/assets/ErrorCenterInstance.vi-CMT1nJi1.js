import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/ErrorCenterInstance - Thực thể lỗi`}),`
`,(0,c.jsx)(n.h1,{id:`errorcenterinstance`,children:`ErrorCenterInstance`}),`
`,(0,c.jsx)(n.p,{children:`Một lớp để quản lý việc lưu trữ và xử lý lỗi trong một thực thể (instance) cụ thể. Nó cung cấp logic cốt lõi để duy trì một danh mục các nguyên nhân gây lỗi và điều phối các thông báo thông qua một trình quản lý xử lý.`}),`
`,(0,c.jsxs)(n.p,{children:[`Trong khi `,(0,c.jsx)(n.code,{children:`ErrorCenter`}),` cung cấp một lớp tĩnh toàn cục, `,(0,c.jsx)(n.code,{children:`ErrorCenterInstance`}),` có thể được sử dụng trực tiếp để theo dõi lỗi tách biệt hoặc các hệ thống quản lý lỗi tùy chỉnh.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu trữ tách biệt`}),` — Duy trì danh sách các nguyên nhân lỗi cục bộ riêng biệt với trạng thái toàn cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hợp nhất dữ liệu`}),` — Tự động bổ sung thông tin nhãn và thông báo đã đăng ký cho các lỗi được kích hoạt.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ủy quyền xử lý`}),` — Sử dụng một `,(0,c.jsx)(n.code,{children:`ErrorCenterHandler`}),` riêng để thực thi các hàm gọi lại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Nguyên nhân định nghĩa trước`}),` — Có thể được khởi tạo với một danh sách các nguyên nhân lỗi mặc định.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chainable API`}),` — Hỗ trợ cấu hình linh hoạt để thêm nguyên nhân và trình xử lý.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-kiểm-tra`,children:`Các phương thức kiểm tra`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`has(code: string, group?: string): boolean`}),` — Kiểm tra xem một nguyên nhân lỗi có tồn tại trong bộ lưu trữ không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(code: string, group?: string): ErrorCenterCauseItem | undefined`}),` — Truy xuất đối tượng nguyên nhân lỗi đã lưu trữ.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(cause: ErrorCenterCauseItem): this`}),` — Thêm một nguyên nhân lỗi duy nhất vào bộ lưu trữ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addList(causes: ErrorCenterCauseList): this`}),` — Thêm một danh sách các nguyên nhân lỗi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this`}),` — Đăng ký một trình xử lý cho nhóm cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addHandlerList(handlers: ErrorCenterHandlerList): this`}),` — Đăng ký một loạt các trình xử lý.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-hành-động`,children:`Các phương thức hành động`}),`
`,(0,c.jsx)(n.h3,{id:`on`,children:(0,c.jsx)(n.code,{children:`on`})}),`
`,(0,c.jsxs)(n.p,{children:[`Kích hoạt xử lý lỗi. Nó tìm kiếm dữ liệu đã đăng ký cho mã lỗi đầu vào, hợp nhất dữ liệu đó với nguyên nhân `,(0,c.jsx)(n.code,{children:`cause`}),`, và chuyển nó cho trình xử lý nội bộ.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cause: ErrorCenterCauseItem`}),` — Thông tin lỗi cần kích hoạt.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(n.h3,{id:`errorcentercauseitem`,children:(0,c.jsx)(n.code,{children:`ErrorCenterCauseItem`})}),`
`,(0,c.jsx)(n.p,{children:`Đối tượng chính được sử dụng để xác định nguyên nhân gây lỗi trong thực thể này.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`group?: ErrorCenterGroup`}),` — danh mục/nhóm mà lỗi thuộc về.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code: string`}),` — mã định danh duy nhất cho lỗi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`label?: string`}),` — tên lỗi dễ đọc cho người dùng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`message?: string`}),` — mô tả chi tiết về lỗi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`details?: any`}),` — đối tượng tùy chọn cho các dữ liệu bổ sung.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`hướng-dẫn-quản-lý-nguyên-nhân-lỗi-và-bộ-lắng-nghe`,children:`Hướng dẫn: Quản lý nguyên nhân lỗi và bộ lắng nghe`}),`
`,(0,c.jsxs)(n.p,{children:[`Sử dụng `,(0,c.jsx)(n.code,{children:`ErrorCenterInstance`}),` bao gồm ba bước chính: định nghĩa các nguyên nhân gây lỗi, thiết lập bộ lắng nghe (trình xử lý), và kích hoạt lỗi.`]}),`
`,(0,c.jsx)(n.h3,{id:`1-thêm-nguyên-nhân-lỗi`,children:`1. Thêm nguyên nhân lỗi`}),`
`,(0,c.jsx)(n.p,{children:`Các nguyên nhân gây lỗi hoạt động như một từ điển cho ứng dụng của bạn. Bằng cách đăng ký trước chúng, bạn đảm bảo rằng các nhãn và thông báo nhất quán được sử dụng trên toàn bộ nền tảng.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ErrorCenterInstance } from '@dxtmisha/functional-basic'

const myErrorCenter = new ErrorCenterInstance()

// Đăng ký một nguyên nhân lỗi duy nhất
myErrorCenter.add({
  group: 'auth',
  code: 'token_expired',
  label: 'Phiên hết hạn',
  message: 'Phiên đăng nhập của bạn đã hết hạn. Vui lòng đăng nhập lại.'
})

// Đăng ký nhiều nguyên nhân cùng lúc
myErrorCenter.addList([
  { group: 'api', code: '404', label: 'Không tìm thấy', message: 'Dữ liệu được yêu cầu không tồn tại.' },
  { group: 'api', code: '500', label: 'Lỗi máy chủ', message: 'Đã có lỗi xảy ra trên máy chủ.' }
])
`})}),`
`,(0,c.jsx)(n.h3,{id:`2-thêm-bộ-lắng-nghe`,children:`2. Thêm bộ lắng nghe`}),`
`,(0,c.jsxs)(n.p,{children:[`Bộ lắng nghe (trình xử lý) là các hàm callback thực thi khi một lỗi cụ thể xảy ra. Bạn gán các bộ lắng nghe cho một nhóm (`,(0,c.jsx)(n.code,{children:`group`}),`) cụ thể để chúng chỉ phản ứng với các lỗi liên quan.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Thêm bộ lắng nghe dành riêng cho nhóm "auth"
myErrorCenter.addHandler('auth', (cause) => {
  // Ví dụ: chuyển hướng đến trang đăng nhập hoặc hiển thị thông báo cảnh báo
  console.log(\`[LỖI XÁC THỰC] \${cause.label}: \${cause.message}\`)
})

// Thêm bộ lắng nghe cho nhóm "api"
myErrorCenter.addHandler('api', (cause) => {
  // Ví dụ: hiển thị thông báo dạng toast
  console.error(\`[LỖI API \${cause.code}] \${cause.message}\`)
})

// Thêm bộ lắng nghe dự phòng toàn cục (bắt các lỗi không có trình xử lý cụ thể)
myErrorCenter.addHandler(undefined, (cause) => {
  console.warn(\`[LỖI KHÔNG XÁC ĐỊNH]\`, cause)
})
`})}),`
`,(0,c.jsx)(n.h3,{id:`3-kích-hoạt-lỗi`,children:`3. Kích hoạt lỗi`}),`
`,(0,c.jsxs)(n.p,{children:[`Khi một lỗi xảy ra trong ứng dụng của bạn, bạn kích hoạt quá trình xử lý bằng cách sử dụng phương thức `,(0,c.jsx)(n.code,{children:`on`}),`. Bạn chỉ cần cung cấp mã (`,(0,c.jsx)(n.code,{children:`code`}),`) và nhóm (`,(0,c.jsx)(n.code,{children:`group`}),`). `,(0,c.jsx)(n.code,{children:`ErrorCenterInstance`}),` sẽ tự động hợp nhất yêu cầu này với nhãn (`,(0,c.jsx)(n.code,{children:`label`}),`) và thông báo (`,(0,c.jsx)(n.code,{children:`message`}),`) đã đăng ký trước đó rồi mới truyền đến các bộ lắng nghe.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Kích hoạt lỗi xác thực
// Các bộ lắng nghe cho "auth" sẽ nhận được toàn bộ đối tượng ErrorCenterCauseItem
myErrorCenter.on({
  group: 'auth',
  code: 'token_expired'
})

// Kích hoạt một lỗi chưa đăng ký (sẽ rơi vào bộ lắng nghe của nhóm undefined)
myErrorCenter.on({
  group: 'database',
  code: 'connection_lost',
  message: 'Mất kết nối với CSDL.' // Bạn cũng có thể truyền dữ liệu trực tiếp
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};