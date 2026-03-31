import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/# Truyền tin giữa các tab`}),`
`,(0,c.jsx)(n.h1,{id:`truyền-tin-giữa-các-tab`,children:`Truyền tin giữa các tab`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`BroadcastMessage`}),` cung cấp một wrapper đơn giản cho API `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),` gốc, cho phép đồng bộ hóa dữ liệu và truyền tin nhắn giữa các tab hoặc cửa sổ trình duyệt khác nhau trong cùng một origin.`]}),`
`,(0,c.jsx)(n.h2,{id:`cách-sử-dụng-cơ-bản`,children:`Cách sử dụng cơ bản`}),`
`,(0,c.jsx)(n.p,{children:`Để bắt đầu giao tiếp, hãy tạo một instance của lớp bằng cách chỉ định tên kênh và một hàm callback để xử lý các tin nhắn đến.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { BroadcastMessage } from '@dxtmisha/functional-basic'

// 1. Khởi tạo kênh
const messenger = new BroadcastMessage('my-feature-channel', (event) => {
  console.log('Nhận được tin nhắn:', event.data)
})

// 2. Gửi tin nhắn đến các tab khác
messenger.post({ action: 'update', id: 123 })
`})}),`
`,(0,c.jsx)(n.p,{children:`Thư viện tự động thêm tiền tố (prefix) duy nhất vào tên kênh để đảm bảo rằng tin nhắn từ các phiên ứng dụng khác nhau không bị xung đột.`}),`
`,(0,c.jsx)(n.h2,{id:`xử-lý-tin-nhắn`,children:`Xử lý tin nhắn`}),`
`,(0,c.jsx)(n.p,{children:`Bạn có thể cập nhật hoặc thiết lập các callback sau khi khởi tạo bằng các phương thức sau:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCallback(callback)`}),` — thiết lập trình xử lý tin nhắn chính.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCallbackError(callback)`}),` — thiết lập trình xử lý cho các lỗi tin nhắn (ví dụ: vấn đề tuần tự hóa).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`messenger.setCallback((event) => {
  if (event.data.type === 'REFRESH') {
    window.location.reload()
  }
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`truy-cập-nâng-cao`,children:`Truy cập nâng cao`}),`
`,(0,c.jsxs)(n.p,{children:[`Nếu bạn cần truy cập trực tiếp vào instance `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),` gốc, hãy sử dụng phương thức `,(0,c.jsx)(n.code,{children:`getChannel()`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const nativeChannel = messenger.getChannel()

if (nativeChannel) {
  console.log('Tên kênh gốc hiện tại:', nativeChannel.name)
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};