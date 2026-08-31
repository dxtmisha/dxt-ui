import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Classes/Loading - Tải toàn cục`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-loading`,children:`Lớp Loading`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp tĩnh để quản lý trạng thái tải toàn cục (sử dụng `,(0,c.jsx)(t.code,{children:`LoadingInstance`}),`). Sử dụng bộ đếm: tải đang hoạt động khi ít nhất một tiến trình đang hiển thị nó. Thông báo cho các listener qua sự kiện tùy chỉnh `,(0,c.jsx)(t.code,{children:`ui-loading`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bộ đếm lồng nhau`}),` — nhiều lần gọi `,(0,c.jsx)(t.code,{children:`show()`}),` song song được xử lý chính xác: tải chỉ ẩn sau số lần gọi `,(0,c.jsx)(t.code,{children:`hide()`}),` tương ứng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sự kiện toàn cục`}),` — khi trạng thái thay đổi, sự kiện `,(0,c.jsx)(t.code,{children:`ui-loading`}),` được phát trên đối tượng `,(0,c.jsx)(t.code,{children:`window`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đăng ký listener`}),` — đăng ký theo dõi thay đổi từ bất kỳ component nào qua `,(0,c.jsx)(t.code,{children:`registrationEvent`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`quản-lý-trạng-thái`,children:`Quản lý trạng thái`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`is(): boolean`}),` — trả về `,(0,c.jsx)(t.code,{children:`true`}),` nếu tải đang hoạt động (bộ đếm > 0).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): number`}),` — trả về giá trị hiện tại của bộ đếm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`show(): void`}),` — tăng bộ đếm lên 1, thông báo cho các listener.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hide(): void`}),` — giảm bộ đếm đi 1. Bỏ qua nếu bộ đếm đã bằng 0.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`đăng-ký-sự-kiện`,children:`Đăng ký sự kiện`}),`
`,(0,c.jsx)(t.h3,{id:`registrationevent`,children:(0,c.jsx)(t.code,{children:`registrationEvent`})}),`
`,(0,c.jsxs)(t.p,{children:[`Đăng ký listener cho các thay đổi trạng thái tải. Hoạt động thông qua sự kiện `,(0,c.jsx)(t.code,{children:`ui-loading`}),` trên đối tượng `,(0,c.jsx)(t.code,{children:`window`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`listener: EventListenerDetail<CustomEvent, { loading: boolean }>`}),` — hàm xử lý nhận `,(0,c.jsx)(t.code,{children:`event.detail.loading: boolean`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element?: ElementOrString<HTMLElement>`}),` — phần tử DOM tùy chọn: listener tự động dừng khi phần tử bị xóa khỏi DOM.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`unregistrationevent`,children:(0,c.jsx)(t.code,{children:`unregistrationEvent`})}),`
`,(0,c.jsxs)(t.p,{children:[`Hủy đăng ký listener đã được thêm trước đó qua `,(0,c.jsx)(t.code,{children:`registrationEvent`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`listener: EventListenerDetail<CustomEvent, { loading: boolean }>`}),` — hàm xử lý đã sử dụng khi đăng ký.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element?: ElementOrString<HTMLElement>`}),` — phần tử DOM đã sử dụng khi đăng ký.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`loadinginstance`,children:`LoadingInstance`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`LoadingInstance`}),` có thể được sử dụng để tạo một thực thể (instance) riêng biệt để theo dõi quá trình tải.`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Loading } from '@dxtmisha/functional-basic'

Loading.registrationEvent((event) => {
  console.log('Đang tải:', event.detail.loading) // true hoặc false
})

Loading.show()  // bộ đếm = 1
Loading.show()  // bộ đếm = 2
Loading.hide()  // bộ đếm = 1
Loading.hide()  // bộ đếm = 0 → sự kiện: { loading: false }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};