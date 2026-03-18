import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/functional-basic/Classes/BroadcastMessage - Truyền tin BroadcastChannel"}),`
`,n.jsx(i.h1,{id:"lớp-broadcastmessage",children:"Lớp BroadcastMessage"}),`
`,n.jsxs(i.p,{children:["Một lớp để xử lý việc truyền tin giữa các tab hoặc cửa sổ khác nhau bằng cách sử dụng API ",n.jsx(i.code,{children:"BroadcastChannel"}),". Nó cung cấp một giao diện đơn giản để gửi và nhận thông điệp với sự hỗ trợ của hàm callback, xử lý lỗi và khả năng nhận diện môi trường thực thi."]}),`
`,n.jsx(i.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Giao tiếp đa ngữ cảnh"})," — dễ dàng gửi thông điệp giữa các tab trình duyệt, cửa sổ hoặc iframe khác nhau trên cùng một origin."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Dựa trên Callback"})," — đăng ký các hàm callback để tự động xử lý các thông điệp đến và lỗi."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Nhận diện môi trường"})," — tự động kiểm tra môi trường DOM trước khi khởi tạo, giúp ngăn chặn lỗi trong các môi trường không phải trình duyệt."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Tiền tố tên kênh"})," — tự động thêm tiền tố duy nhất vào tên kênh để tránh xung đột với các ứng dụng khác."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"An toàn kiểu dữ liệu"})," — hỗ trợ Generic trong TypeScript để định nghĩa kiểu dữ liệu của thông điệp."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Truy cập trực tiếp"})," — cung cấp quyền truy cập vào thực thể ",n.jsx(i.code,{children:"BroadcastChannel"})," gốc khi cần thiết."]}),`
`]}),`
`,n.jsx(i.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(i.p,{children:["Để khởi tạo đối tượng, hãy gọi hàm khởi tạo ",n.jsx(i.code,{children:"BroadcastMessage(name, callback, callbackError)"}),"."]}),`
`,n.jsx(i.h3,{id:"generic-constraints",children:"Generic Constraints"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"Message = any"})," — kiểu dữ liệu của tải trọng thông điệp."]}),`
`]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Tham số:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"name: string"})," — tên duy nhất của kênh truyền tin."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"callback?: (event: MessageEvent<Message>) => void"})," — hàm callback được thực thi khi nhận được thông điệp."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"callbackError?: (event: MessageEvent<Message>) => void"})," — hàm callback được thực thi khi xảy ra lỗi thông điệp."]}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { BroadcastMessage } from '@dxtmisha/functional'

// 1. Khởi tạo với việc xử lý dữ liệu đến
const messenger = new BroadcastMessage(
  'my-channel',
  (event) => console.log('Đã nhận:', event.data),
  (error) => console.error('Lỗi:', error)
)

// 2. Gửi một thông điệp
messenger.post({ type: 'UPDATE', value: 100 })
`})}),`
`,n.jsx(i.h2,{id:"gửi-thông-điệp",children:"Gửi thông điệp"}),`
`,n.jsx(i.h3,{id:"post",children:n.jsx(i.code,{children:"post"})}),`
`,n.jsx(i.p,{children:"Gửi một thông điệp đến tất cả các trình lắng nghe trên cùng một kênh."}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Tham số:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"message: Message"})," — dữ liệu cần gửi."]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Trả về:"})," ",n.jsx(i.code,{children:"this"})," — để hỗ trợ gọi chuỗi phương thức (method chaining)."]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`messenger.post({ type: 'UPDATE', payload: { id: 123 } })
`})}),`
`,n.jsx(i.h2,{id:"cấu-hình-và-truy-cập",children:"Cấu hình và Truy cập"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getChannel(): BroadcastChannel | undefined"})," — Trả về thực thể ",n.jsx(i.code,{children:"BroadcastChannel"})," gốc (hoặc ",n.jsx(i.code,{children:"undefined"})," nếu ngoài môi trường DOM)."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"setCallback(callback: (event: MessageEvent<Message>) => void): this"})," — Cập nhật hoặc thiết lập hàm callback để nhận thông điệp."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"setCallbackError(callbackError: (event: MessageEvent<Message>) => void): this"})," — Cập nhật hoặc thiết lập hàm callback cho các lỗi thông điệp."]}),`
`]}),`
`,n.jsx(i.h2,{id:"các-ví-dụ-điển-hình",children:"Các ví dụ điển hình"}),`
`,n.jsx(i.h3,{id:"đồng-bộ-hóa-trạng-thái-giữa-các-tab",children:"Đồng bộ hóa trạng thái giữa các tab"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`import { BroadcastMessage } from '@dxtmisha/functional'

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
`,n.jsx(i.h3,{id:"hệ-thống-thông-báo-đơn-giản-với-xử-lý-lỗi",children:"Hệ thống thông báo đơn giản với xử lý lỗi"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`const notifications = new BroadcastMessage(
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
`})})]})}function g(e={}){const{wrapper:i}={...t(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(c,{...e})}):c(e)}export{g as default};
