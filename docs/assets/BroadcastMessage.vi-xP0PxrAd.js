import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/BroadcastMessage - Truyền tin BroadcastChannel`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-broadcastmessage`,children:`Lớp BroadcastMessage`}),`
`,(0,c.jsxs)(n.p,{children:[`Một lớp để xử lý việc truyền tin giữa các tab hoặc cửa sổ khác nhau bằng cách sử dụng API `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),`. Nó cung cấp một giao diện đơn giản để gửi và nhận thông điệp với sự hỗ trợ của hàm callback, xử lý lỗi và khả năng nhận diện môi trường thực thi.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giao tiếp đa ngữ cảnh`}),` — dễ dàng gửi thông điệp giữa các tab trình duyệt, cửa sổ hoặc iframe khác nhau trên cùng một origin.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dựa trên Callback`}),` — đăng ký các hàm callback để tự động xử lý các thông điệp đến và lỗi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Nhận diện môi trường`}),` — tự động kiểm tra môi trường DOM trước khi khởi tạo, giúp ngăn chặn lỗi trong các môi trường không phải trình duyệt.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tiền tố tên kênh`}),` — tự động thêm tiền tố duy nhất vào tên kênh để tránh xung đột với các ứng dụng khác.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`An toàn kiểu dữ liệu`}),` — hỗ trợ Generic trong TypeScript để định nghĩa kiểu dữ liệu của thông điệp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp ErrorCenter`}),` — báo cáo lỗi tập trung khi `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),` không khởi tạo được.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Truy cập trực tiếp`}),` — cung cấp quyền truy cập vào thực thể `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),` gốc khi cần thiết.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`BroadcastMessage(name, callback, callbackError, errorCenter)`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`generic-constraints`,children:`Generic Constraints`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Message = any`}),` — kiểu dữ liệu của tải trọng thông điệp.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — tên duy nhất của kênh truyền tin.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback?: (event: MessageEvent<Message>) => void`}),` — hàm callback được thực thi khi nhận được thông điệp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callbackError?: (event: MessageEvent<Message>) => void`}),` — hàm callback được thực thi khi xảy ra lỗi thông điệp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`errorCenter: ErrorCenterInstance`}),` — thực thể của trung tâm lỗi để kích hoạt các sự kiện (mặc định: `,(0,c.jsx)(n.code,{children:`ErrorCenter.getItem()`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { BroadcastMessage } from '@dxtmisha/functional'

// 1. Khởi tạo với việc xử lý dữ liệu đến
const messenger = new BroadcastMessage(
  'my-channel',
  (event) => console.log('Đã nhận:', event.data),
  (error) => console.error('Lỗi:', error)
)

// 2. Gửi một thông điệp
messenger.post({ type: 'UPDATE', value: 100 })
`})}),`
`,(0,c.jsx)(n.h2,{id:`gửi-thông-điệp`,children:`Gửi thông điệp`}),`
`,(0,c.jsx)(n.h3,{id:`post`,children:(0,c.jsx)(n.code,{children:`post`})}),`
`,(0,c.jsx)(n.p,{children:`Gửi một thông điệp đến tất cả các trình lắng nghe trên cùng một kênh.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`message: Message`}),` — dữ liệu cần gửi.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`this`}),` — để hỗ trợ gọi chuỗi phương thức (method chaining).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`messenger.post({ type: 'UPDATE', payload: { id: 123 } })
`})}),`
`,(0,c.jsx)(n.h2,{id:`cấu-hình-và-truy-cập`,children:`Cấu hình và Truy cập`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getChannel(): BroadcastChannel | undefined`}),` — Trả về thực thể `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),` gốc (hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),` nếu ngoài môi trường DOM).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCallback(callback: (event: MessageEvent<Message>) => void): this`}),` — Cập nhật hoặc thiết lập hàm callback để nhận thông điệp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCallbackError(callbackError: (event: MessageEvent<Message>) => void): this`}),` — Cập nhật hoặc thiết lập hàm callback cho các lỗi thông điệp.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-ví-dụ-điển-hình`,children:`Các ví dụ điển hình`}),`
`,(0,c.jsx)(n.h3,{id:`đồng-bộ-hóa-trạng-thái-giữa-các-tab`,children:`Đồng bộ hóa trạng thái giữa các tab`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { BroadcastMessage } from '@dxtmisha/functional'

// Trong Tab A và Tab B
const authChannel = new BroadcastMessage('auth-status', (event) => {
  if (event.data === 'LOGOUT') {
    authModule.clearSession()
    window.location.href = '/login'
  }
})

// Khi người dùng đăng xuất ở Tab A
function onLogout() {
  authChannel.post('LOGOUT')
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`hệ-thống-thông-báo-đơn-giản-với-xử-lý-lỗi`,children:`Hệ thống thông báo đơn giản với xử lý lỗi`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const notifications = new BroadcastMessage(
  'notifications',
  (event) => showToast(event.data.message),
  (error) => console.error('Không thể nhận thông báo:', error)
)

// Cập nhật trình xử lý lỗi sau này
notifications.setCallbackError((error) => {
  logToService(error)
})

// Kích hoạt thông báo từ bất kỳ đâu trong ứng dụng
notifications.post({ message: 'Đã nhận tin nhắn mới!' })
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};