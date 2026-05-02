import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/ServerStorage - Cách ly dữ liệu trong SSR`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-serverstorage`,children:`Lớp ServerStorage`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ServerStorage`}),` là một cơ chế để quản lý `,(0,c.jsx)(n.strong,{children:`trạng thái toàn cục được cách ly`}),` trong các ứng dụng hỗ trợ SSR (Server-Side Rendering).`]}),`
`,(0,c.jsx)(n.p,{children:`Lớp này cho phép bạn làm việc với dữ liệu dễ dàng như với các biến tĩnh (static), nhưng đảm bảo rằng dữ liệu người dùng trên máy chủ không bị trộn lẫn giữa các yêu cầu song song.`}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cách ly yêu cầu`}),` — dữ liệu trên máy chủ được liên kết với ngữ cảnh của yêu cầu hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hydration`}),` — khả năng tự động chuyển trạng thái từ máy chủ sang máy khách thông qua JSON.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bảo mật`}),` — tự động thoát (escape) XSS trong quá trình truyền dữ liệu.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ServerStorage } from '@dxtmisha/functional-basic'

// Lưu dữ liệu với cờ hydration (sẽ có sẵn trên máy khách)
ServerStorage.set('theme', () => 'dark', true)

// Truy xuất dữ liệu
const theme = ServerStorage.get('theme') // 'dark'
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-truy-cập-dữ-liệu`,children:`Các phương thức truy cập dữ liệu`}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsx)(n.p,{children:`Truy xuất giá trị theo khóa. Nếu không tìm thấy, nó sẽ tạo giá trị mới bằng cách sử dụng factory giá trị mặc định.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`key: string`}),` — khóa lưu trữ duy nhất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: () => T`}),` — hàm trả về giá trị mặc định nếu không tìm thấy.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hydration: boolean`}),` — nếu là `,(0,c.jsx)(n.code,{children:`true`}),`, giá trị sẽ được bao gồm trong JSON cho máy khách (mặc định: `,(0,c.jsx)(n.code,{children:`false`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`T`})]}),`
`,(0,c.jsx)(n.h3,{id:`set`,children:(0,c.jsx)(n.code,{children:`set`})}),`
`,(0,c.jsx)(n.p,{children:`Lưu một giá trị vào kho lưu trữ.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`key: string`}),` — khóa lưu trữ duy nhất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: () => T`}),` — hàm trả về giá trị để lưu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hydration: boolean`}),` — nếu là `,(0,c.jsx)(n.code,{children:`true`}),`, giá trị sẽ được bao gồm trong JSON cho máy khách (mặc định: `,(0,c.jsx)(n.code,{children:`false`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`T`})]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-tiện-ích-và-vòng-đời`,children:`Các phương thức tiện ích và vòng đời`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(listener: () => Record<string, any>): typeof ServerStorage`}),` — Khởi tạo kho lưu trữ với bộ lắng nghe ngữ cảnh. Trên máy chủ, bộ lắng nghe này sẽ trả về một đối tượng duy nhất cho mỗi yêu cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`has(key: string): boolean`}),` — Kiếm tra sự tồn tại của một khóa trong ngữ cảnh hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`remove(key: string): void`}),` — Xóa một giá trị theo khóa khỏi kho lưu trữ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setErrorStatus(hide: boolean): void`}),` — Thiết lập việc ẩn lỗi thiếu ngữ cảnh trong bảng điều khiển hoặc trung tâm lỗi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset(): void`}),` — Đặt lại kho lưu trữ, xóa tất cả dữ liệu đã lưu và bộ lắng nghe. Hữu ích cho việc dọn dẹp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toString(): string`}),` — Tạo một thẻ HTML `,(0,c.jsx)(n.code,{children:`<script type="application/json">`}),` chứa tất cả dữ liệu được đánh dấu để hydration.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cách-ly-trong-ssr`,children:`Cách ly trong SSR`}),`
`,(0,c.jsxs)(n.p,{children:[`Trong các ứng dụng phía máy khách thông thường, trạng thái toàn cục thuộc về một người dùng duy nhất. Tuy nhiên, trong môi trường SSR, một quy trình Node.js xử lý nhiều yêu cầu đồng thời. Để ngăn chặn dữ liệu của người dùng này "rò rỉ" sang yêu cầu của người dùng khác (Ô nhiễm trạng thái), `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` phải được cách ly chính xác.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Để đạt được điều này, bạn phải khởi tạo `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` bằng phương thức `,(0,c.jsx)(n.code,{children:`init`}),`. Phương thức này chấp nhận một hàm lắng nghe trả về một đối tượng dữ liệu duy nhất cho ngữ cảnh yêu cầu hiện tại.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsx)(n.p,{children:`Quan trọng: Việc cách ly chính xác là cực kỳ quan trọng đối với bảo mật. Nếu không được cấu hình, dữ liệu từ người dùng này có thể được cung cấp cho người dùng khác.`}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`nodejs-asynclocalstorage`,children:`Node.js (AsyncLocalStorage)`}),`
`,(0,c.jsxs)(n.p,{children:[`Cách được khuyến nghị cho Node.js là sử dụng `,(0,c.jsx)(n.code,{children:`AsyncLocalStorage`}),` để lưu trữ ngữ cảnh trong suốt một yêu cầu không đồng bộ.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AsyncLocalStorage } from 'node:async_hooks'
import { ServerStorage } from '@dxtmisha/functional-basic'

const als = new AsyncLocalStorage<Record<string, any>>()

// Khởi tạo
ServerStorage.init(() => als.getStore() || {})

// Sử dụng trong máy chủ
http.createServer((req, res) => {
  als.run({}, () => {
    // Tất cả các lệnh gọi đến ServerStorage bên trong khối này sẽ được cách ly
    ServerStorage.set('requestId', () => req.id)
  })
})
`})}),`
`,(0,c.jsx)(n.h3,{id:`nuxt--nitro`,children:`Nuxt / Nitro`}),`
`,(0,c.jsxs)(n.p,{children:[`Trong Nuxt/Nitro, việc cách ly được quản lý thông qua ngữ cảnh sự kiện `,(0,c.jsx)(n.code,{children:`h3`}),` bằng cách sử dụng `,(0,c.jsx)(n.code,{children:`useEvent()`}),` bên trong một plugin máy chủ.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// server/plugins/server-storage.ts
import { ServerStorage } from '@dxtmisha/functional-basic'

export default defineNitroPlugin(() => {
  ServerStorage.init(() => {
    try {
      return useEvent().context
    } catch {
      return {}
    }
  })
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`hydration-chuyển-dữ-liệu-sang-máy-khách`,children:`Hydration (Chuyển dữ liệu sang máy khách)`}),`
`,(0,c.jsx)(n.p,{children:`Hydration là quá trình chuyển trạng thái ứng dụng được thiết lập trên máy chủ sang máy khách. Điều này cho phép trình duyệt tiếp tục công việc từ nơi máy chủ dừng lại, đảm bảo tính nhất quán và ngăn chặn việc tìm kiếm dữ liệu thừa hoặc hiện tượng "nhấp nháy" (flickering) trong quá trình tải trang.`}),`
`,(0,c.jsx)(n.h3,{id:`1-xác-định-dữ-liệu-để-hydration`,children:`1. Xác định dữ liệu để Hydration`}),`
`,(0,c.jsxs)(n.p,{children:[`Khi sử dụng `,(0,c.jsx)(n.code,{children:`set()`}),` hoặc `,(0,c.jsx)(n.code,{children:`get()`}),`, hãy truyền `,(0,c.jsx)(n.code,{children:`true`}),` làm tham số thứ ba (`,(0,c.jsx)(n.code,{children:`hydration`}),`). Chỉ những giá trị được đánh dấu theo cách này mới được chuyển sang máy khách.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// Thiết lập trên máy chủ
ServerStorage.set('userSettings', () => ({ fontSize: 16 }), true)
`})}),`
`,(0,c.jsx)(n.h3,{id:`2-chèn-trạng-thái-vào-html`,children:`2. Chèn trạng thái vào HTML`}),`
`,(0,c.jsxs)(n.p,{children:[`Trên máy chủ, bạn phải gọi `,(0,c.jsx)(n.code,{children:`ServerStorage.toString()`}),` và chèn kết quả của nó vào mẫu trang của bạn (thường ở cuối thẻ `,(0,c.jsx)(n.code,{children:`<body>`}),`, trước các tập lệnh ứng dụng của bạn).`]}),`
`,(0,c.jsx)(n.p,{children:`Phương thức này tạo ra một thẻ script đặc biệt:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-html`,children:`<script id="__ui:server:storage:id__" type="application/json">
  {"userSettings":{"fontSize":16}}
<\/script>
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};