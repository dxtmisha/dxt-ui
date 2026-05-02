import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/Loading - Tải toàn cục`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-loading`,children:`Lớp Loading`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp tĩnh để quản lý trạng thái tải toàn cục (sử dụng `,(0,c.jsx)(n.code,{children:`LoadingInstance`}),`). Sử dụng bộ đếm: tải đang hoạt động khi ít nhất một tiến trình đang hiển thị nó. Thông báo cho các listener qua sự kiện tùy chỉnh `,(0,c.jsx)(n.code,{children:`ui-loading`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bộ đếm lồng nhau`}),` — nhiều lần gọi `,(0,c.jsx)(n.code,{children:`show()`}),` song song được xử lý chính xác: tải chỉ ẩn sau số lần gọi `,(0,c.jsx)(n.code,{children:`hide()`}),` tương ứng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Sự kiện toàn cục`}),` — khi trạng thái thay đổi, sự kiện `,(0,c.jsx)(n.code,{children:`ui-loading`}),` được phát trên đối tượng `,(0,c.jsx)(n.code,{children:`window`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đăng ký listener`}),` — đăng ký theo dõi thay đổi từ bất kỳ component nào qua `,(0,c.jsx)(n.code,{children:`registrationEvent`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`quản-lý-trạng-thái`,children:`Quản lý trạng thái`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(): boolean`}),` — trả về `,(0,c.jsx)(n.code,{children:`true`}),` nếu tải đang hoạt động (bộ đếm > 0).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): number`}),` — trả về giá trị hiện tại của bộ đếm.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`show(): void`}),` — tăng bộ đếm lên 1, thông báo cho các listener.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hide(): void`}),` — giảm bộ đếm đi 1. Bỏ qua nếu bộ đếm đã bằng 0.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`đăng-ký-sự-kiện`,children:`Đăng ký sự kiện`}),`
`,(0,c.jsx)(n.h3,{id:`registrationevent`,children:(0,c.jsx)(n.code,{children:`registrationEvent`})}),`
`,(0,c.jsxs)(n.p,{children:[`Đăng ký listener cho các thay đổi trạng thái tải. Hoạt động thông qua sự kiện `,(0,c.jsx)(n.code,{children:`ui-loading`}),` trên đối tượng `,(0,c.jsx)(n.code,{children:`window`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listener: EventListenerDetail<CustomEvent, { loading: boolean }>`}),` — hàm xử lý nhận `,(0,c.jsx)(n.code,{children:`event.detail.loading: boolean`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element?: ElementOrString<HTMLElement>`}),` — phần tử DOM tùy chọn: listener tự động dừng khi phần tử bị xóa khỏi DOM.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`unregistrationevent`,children:(0,c.jsx)(n.code,{children:`unregistrationEvent`})}),`
`,(0,c.jsxs)(n.p,{children:[`Hủy đăng ký listener đã được thêm trước đó qua `,(0,c.jsx)(n.code,{children:`registrationEvent`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listener: EventListenerDetail<CustomEvent, { loading: boolean }>`}),` — hàm xử lý đã sử dụng khi đăng ký.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element?: ElementOrString<HTMLElement>`}),` — phần tử DOM đã sử dụng khi đăng ký.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`loadinginstance`,children:`LoadingInstance`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`LoadingInstance`}),` có thể được sử dụng để tạo một thực thể (instance) riêng biệt để theo dõi quá trình tải.`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Loading } from '@dxtmisha/functional-basic'

Loading.registrationEvent((event) => {
  console.log('Đang tải:', event.detail.loading) // true hoặc false
})

Loading.show()  // bộ đếm = 1
Loading.show()  // bộ đếm = 2
Loading.hide()  // bộ đếm = 1
Loading.hide()  // bộ đếm = 0 → sự kiện: { loading: false }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};