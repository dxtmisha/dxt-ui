import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-BaLriJNq.js";import{M as e}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(t){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/functional-basic/Classes/BroadcastMessage - Truyền tin BroadcastChannel"}),`
`,n.jsx(c.h1,{id:"lớp-broadcastmessage",children:"Lớp BroadcastMessage"}),`
`,n.jsxs(c.p,{children:["Một lớp để xử lý việc truyền tin giữa các tab hoặc cửa sổ khác nhau bằng cách sử dụng API ",n.jsx(c.code,{children:"BroadcastChannel"}),". Nó cung cấp một giao diện đơn giản để gửi và nhận thông điệp với sự hỗ trợ của hàm callback, xử lý lỗi và khả năng nhận diện môi trường thực thi."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Giao tiếp đa ngữ cảnh"})," — dễ dàng gửi thông điệp giữa các tab trình duyệt, cửa sổ hoặc iframe khác nhau trên cùng một origin."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Dựa trên Callback"})," — đăng ký các hàm callback để tự động xử lý các thông điệp đến và lỗi."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Nhận diện môi trường"})," — tự động kiểm tra môi trường DOM trước khi khởi tạo, giúp ngăn chặn lỗi trong các môi trường không phải trình duyệt."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tiền tố tên kênh"})," — tự động thêm tiền tố duy nhất vào tên kênh để tránh xung đột với các ứng dụng khác."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"An toàn kiểu dữ liệu"})," — hỗ trợ Generic trong TypeScript để định nghĩa kiểu dữ liệu của thông điệp."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Truy cập trực tiếp"})," — cung cấp quyền truy cập vào thực thể ",n.jsx(c.code,{children:"BroadcastChannel"})," gốc khi cần thiết."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Tạo một thực thể mới của ",n.jsx(c.code,{children:"BroadcastMessage"})," bằng cách cung cấp tên kênh và các hàm callback tùy chọn cho thông điệp và lỗi."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`import { BroadcastMessage } from '@dxtmisha/functional'

// Khởi tạo với các callback cho thông điệp và lỗi
const messenger = new BroadcastMessage(
  'my-channel', 
  (event) => console.log('Đã nhận:', event.data),
  (error) => console.error('Lỗi thông điệp:', error)
)
`})}),`
`,n.jsx(c.h2,{id:"gửi-thông-điệp",children:"Gửi thông điệp"}),`
`,n.jsx(c.h3,{id:"post",children:n.jsx(c.code,{children:"post"})}),`
`,n.jsx(c.p,{children:"Gửi một thông điệp đến tất cả các trình lắng nghe trên cùng một kênh."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"message: Message"})," — dữ liệu cần gửi."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"this"})," — để hỗ trợ gọi chuỗi phương thức (method chaining)."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`messenger.post({ type: 'UPDATE', payload: { id: 123 } })
`})}),`
`,n.jsx(c.h2,{id:"cấu-hình-và-truy-cập",children:"Cấu hình và Truy cập"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getChannel(): BroadcastChannel | undefined"})," — Trả về thực thể ",n.jsx(c.code,{children:"BroadcastChannel"})," gốc (hoặc ",n.jsx(c.code,{children:"undefined"})," nếu ngoài môi trường DOM)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"setCallback(callback: (event: MessageEvent<Message>) => void): this"})," — Cập nhật hoặc thiết lập hàm callback để nhận thông điệp."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"setCallbackError(callbackError: (event: MessageEvent<Message>) => void): this"})," — Cập nhật hoặc thiết lập hàm callback cho các lỗi thông điệp."]}),`
`]}),`
`,n.jsx(c.h2,{id:"các-ví-dụ-điển-hình",children:"Các ví dụ điển hình"}),`
`,n.jsx(c.h3,{id:"đồng-bộ-hóa-trạng-thái-giữa-các-tab",children:"Đồng bộ hóa trạng thái giữa các tab"}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`import { BroadcastMessage } from '@dxtmisha/functional'

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
`,n.jsx(c.h3,{id:"hệ-thống-thông-báo-đơn-giản-với-xử-lý-lỗi",children:"Hệ thống thông báo đơn giản với xử lý lỗi"}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`const notifications = new BroadcastMessage(
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
`})})]})}function g(t={}){const{wrapper:c}={...h(),...t.components};return c?n.jsx(c,{...t,children:n.jsx(i,{...t})}):i(t)}export{g as default};
