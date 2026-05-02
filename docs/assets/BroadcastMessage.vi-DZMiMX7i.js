import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/BroadcastMessage - Tin nhắn BroadcastChannel`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-broadcastmessage`,children:`Lớp BroadcastMessage`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp để xử lý tin nhắn giữa các ngữ cảnh trình duyệt khác nhau (tab, cửa sổ, iframe) bằng cách sử dụng API `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),`. Nó cung cấp một giao diện thuận tiện để gửi và nhận dữ liệu với việc quản lý vòng đời kênh tự động và xử lý lỗi.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Bao gồm tính năng đặt tên tiền tố tự động để ngăn chặn xung đột và tích hợp với `,(0,c.jsx)(n.code,{children:`ErrorCenter`}),` để theo dõi các lỗi khởi tạo.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giao tiếp đa ngữ cảnh`}),` — đồng bộ hóa dữ liệu đơn giản giữa tất cả các cửa sổ của cùng một nguồn (origin).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dựa trên Callback`}),` — tự động xử lý các tin nhắn đến và lỗi thông qua các hàm callback đã đăng ký.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`An toàn khi thực thi`}),` — kiểm tra môi trường DOM tích hợp giúp ngăn chặn lỗi trong quá trình Server-Side Rendering (SSR).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cô lập kênh`}),` — tự động thêm tiền tố duy nhất cho tên kênh thông qua `,(0,c.jsx)(n.code,{children:`DataStorage`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kiểu dữ liệu mạnh mẽ`}),` — hỗ trợ đầy đủ TypeScript generics để đảm bảo tính toàn vẹn của dữ liệu tin nhắn.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`BroadcastMessage(name, callback, callbackError, errorCenter)`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`ràng-buộc-generic-generic-constraints`,children:`Ràng buộc Generic (Generic Constraints)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Message = any`}),` — kiểu của tải trọng tin nhắn.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — tên kênh duy nhất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback?: (event: MessageEvent<Message>) => void`}),` — hàm callback được thực thi khi nhận được tin nhắn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callbackError?: (event: MessageEvent<Message>) => void`}),` — hàm callback được thực thi khi xảy ra lỗi tin nhắn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`errorCenter: ErrorCenterInstance`}),` — thực thể trung tâm lỗi (mặc định: `,(0,c.jsx)(n.code,{children:`ErrorCenter.getItem()`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { BroadcastMessage } from '@dxtmisha/functional-basic'

const messenger = new BroadcastMessage<string>(
  'my-channel',
  (event) => console.log('Nhận được:', event.data)
)
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`hành-động`,children:`Hành động`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`post(message: Message): this`}),` — Gửi tin nhắn đến tất cả những người đang lắng nghe trong kênh đã cho.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`destroy(): this`}),` — Đóng kênh và ngừng lắng nghe tin nhắn.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`cấu-hình-và-truy-cập`,children:`Cấu hình và Truy cập`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getChannel(): BroadcastChannel | undefined`}),` — Trả về thực thể `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),` cơ bản.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCallback(callback: Function): this`}),` — Cập nhật hàm xử lý tin nhắn đến.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCallbackError(callbackError: Function): this`}),` — Cập nhật hàm xử lý lỗi tin nhắn.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.h3,{id:`đồng-bộ-hóa-trạng-thái-giữa-các-tab`,children:`Đồng bộ hóa trạng thái giữa các Tab`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { BroadcastMessage } from '@dxtmisha/functional'

// Trong tất cả các tab của ứng dụng
const authChannel = new BroadcastMessage<string>('auth-status', (event) => {
  if (event.data === 'LOGOUT') {
    authModule.clearSession()
    window.location.reload()
  }
})

// Khi người dùng đăng xuất ở một trong các tab
function onLogout() {
  authChannel.post('LOGOUT')
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`cập-nhật-trình-xử-lý-dữ-liệu-tức-thì`,children:`Cập nhật trình xử lý dữ liệu tức thì`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const messenger = new BroadcastMessage('data-sync')

messenger.setCallback((event) => {
  console.log('Dữ liệu mới nhận được:', event.data)
})

messenger.post({ id: 1, status: 'active' })
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};