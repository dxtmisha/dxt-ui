import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/# Quản lý sự kiện`}),`
`,(0,c.jsx)(n.h1,{id:`quản-lý-sự-kiện`,children:`Quản lý sự kiện`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`EventItem`}),` là một wrapper nâng cao để quản lý trình nghe sự kiện trên các phần tử DOM hoặc đối tượng `,(0,c.jsx)(n.code,{children:`window`}),`. Nó đơn giản hóa toàn bộ vòng đời sự kiện, cung cấp khả năng tự động giám sát sự tồn tại của phần tử trong DOM và bao gồm các tối ưu hóa tích hợp cho các sự kiện tần suất cao.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { EventItem } from '@dxtmisha/functional-basic'

// 1. Khởi tạo
const event = new EventItem('.my-button', 'click', () => {
  console.log('Đã click vào nút!')
})

// 2. Quản lý vòng đời
event.start()  // Bắt đầu nghe
event.stop()   // Dừng nghe
event.toggle(true) // Chuyển đổi trạng thái
`})}),`
`,(0,c.jsx)(n.h2,{id:`giám-sát-phần-tử`,children:`Giám sát phần tử`}),`
`,(0,c.jsxs)(n.p,{children:[`Một trong những tính năng chính của `,(0,c.jsx)(n.code,{children:`EventItem`}),` là tự động hủy kích hoạt sự kiện nếu phần tử mục tiêu (hoặc phần tử điều khiển) bị xóa khỏi DOM. Điều này ngăn ngừa rò rỉ bộ nhớ và lỗi trong các giao diện động.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Sự kiện sẽ tự động dừng nếu phần tử .my-button biến mất khỏi DOM
const event = new EventItem('.my-button', 'scroll', handler)
event.start()
`})}),`
`,(0,c.jsx)(n.h2,{id:`tối-ưu-hóa-hiệu-suất`,children:`Tối ưu hóa hiệu suất`}),`
`,(0,c.jsx)(n.p,{children:`Lớp này bao gồm các cơ chế tối ưu hóa tích hợp cho các sự kiện nặng như thay đổi kích thước cửa sổ hoặc đồng bộ hóa cuộn.`}),`
`,(0,c.jsxs)(n.h3,{id:`kiểu-resize`,children:[`Kiểu `,(0,c.jsx)(n.code,{children:`resize`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Sử dụng `,(0,c.jsx)(n.code,{children:`ResizeObserver`}),` thay vì sự kiện `,(0,c.jsx)(n.code,{children:`resize`}),` tiêu chuẩn, cho phép bạn theo dõi sự thay đổi kích thước của một phần tử cụ thể, không chỉ toàn bộ cửa sổ.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const resizeEvent = new EventItem('.container', 'resize', (entry) => {
  console.log('Chiều rộng mới:', entry.contentRect.width)
})
`})}),`
`,(0,c.jsxs)(n.h3,{id:`kiểu-scroll-sync`,children:[`Kiểu `,(0,c.jsx)(n.code,{children:`scroll-sync`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Tối ưu hóa việc xử lý cuộn qua `,(0,c.jsx)(n.code,{children:`requestAnimationFrame`}),`, ngăn chặn các cuộc gọi handler dư thừa và giảm tải CPU.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const scrollEvent = new EventItem(window, 'scroll-sync', () => {
  // Thực thi mượt mà nhất có thể
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`kích-hoạt-sự-kiện-thủ-công`,children:`Kích hoạt sự kiện thủ công`}),`
`,(0,c.jsxs)(n.p,{children:[`Bạn có thể kích hoạt sự kiện trên phần tử mục tiêu một cách thủ công bằng phương thức `,(0,c.jsx)(n.code,{children:`dispatch`}),`. Điều này hữu ích để mô phỏng các hành động của người dùng bằng mã.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Mô phỏng một cú click
event.dispatch()

// Truyền thêm dữ liệu (detail)
const customEvent = new EventItem(window, 'my-event', (e, detail) => {
  console.log('Dữ liệu:', detail)
})
customEvent.dispatch({ id: 123 })
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};