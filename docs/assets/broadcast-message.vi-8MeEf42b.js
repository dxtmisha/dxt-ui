import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/8. Truyền tin giữa các tab`}),`
`,(0,c.jsx)(t.h1,{id:`truyền-tin-giữa-các-tab`,children:`Truyền tin giữa các tab`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`BroadcastMessage`}),` cung cấp một wrapper đơn giản cho API `,(0,c.jsx)(t.code,{children:`BroadcastChannel`}),` gốc, cho phép đồng bộ hóa dữ liệu và truyền tin nhắn giữa các tab hoặc cửa sổ trình duyệt khác nhau trong cùng một origin.`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-sử-dụng-cơ-bản`,children:`Cách sử dụng cơ bản`}),`
`,(0,c.jsx)(t.p,{children:`Để bắt đầu giao tiếp, hãy tạo một instance của lớp bằng cách chỉ định tên kênh và một hàm callback để xử lý các tin nhắn đến.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { BroadcastMessage } from '@dxtmisha/functional-basic'

// 1. Khởi tạo kênh
const messenger = new BroadcastMessage('my-feature-channel', (event) => {
  console.log('Nhận được tin nhắn:', event.data)
})

// 2. Gửi tin nhắn đến các tab khác
messenger.post({ action: 'update', id: 123 })
`})}),`
`,(0,c.jsx)(t.p,{children:`Thư viện tự động thêm tiền tố (prefix) duy nhất vào tên kênh để đảm bảo rằng tin nhắn từ các phiên ứng dụng khác nhau không bị xung đột.`}),`
`,(0,c.jsx)(t.h2,{id:`xử-lý-tin-nhắn`,children:`Xử lý tin nhắn`}),`
`,(0,c.jsx)(t.p,{children:`Bạn có thể cập nhật hoặc thiết lập các callback sau khi khởi tạo bằng các phương thức sau:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setCallback(callback)`}),` — thiết lập trình xử lý tin nhắn chính.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setCallbackError(callback)`}),` — thiết lập trình xử lý cho các lỗi tin nhắn (ví dụ: vấn đề tuần tự hóa).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`messenger.setCallback((event) => {
  if (event.data.type === 'REFRESH') {
    window.location.reload()
  }
})
`})}),`
`,(0,c.jsx)(t.h2,{id:`truy-cập-nâng-cao`,children:`Truy cập nâng cao`}),`
`,(0,c.jsxs)(t.p,{children:[`Nếu bạn cần truy cập trực tiếp vào instance `,(0,c.jsx)(t.code,{children:`BroadcastChannel`}),` gốc, hãy sử dụng phương thức `,(0,c.jsx)(t.code,{children:`getChannel()`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const nativeChannel = messenger.getChannel()

if (nativeChannel) {
  console.log('Tên kênh gốc hiện tại:', nativeChannel.name)
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};