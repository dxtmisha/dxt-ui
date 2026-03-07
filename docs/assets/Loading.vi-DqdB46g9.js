import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as h}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/functional-basic/Classes/Loading - Tải toàn cục"}),`
`,n.jsx(i.h1,{id:"lớp-loading",children:"Lớp Loading"}),`
`,n.jsxs(i.p,{children:["Lớp tĩnh để quản lý trạng thái tải toàn cục. Sử dụng bộ đếm: tải đang hoạt động khi ít nhất một tiến trình đang hiển thị nó. Thông báo cho các listener qua sự kiện tùy chỉnh ",n.jsx(i.code,{children:"ui-loading"}),"."]}),`
`,n.jsx(i.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Bộ đếm lồng nhau"})," — nhiều lần gọi ",n.jsx(i.code,{children:"show()"})," song song được xử lý chính xác: tải chỉ ẩn sau số lần gọi ",n.jsx(i.code,{children:"hide()"})," tương ứng."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Sự kiện toàn cục"})," — khi trạng thái thay đổi, sự kiện ",n.jsx(i.code,{children:"ui-loading"})," được phát trên đối tượng ",n.jsx(i.code,{children:"window"}),"."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Đăng ký listener"})," — đăng ký theo dõi thay đổi từ bất kỳ component nào qua ",n.jsx(i.code,{children:"registrationEvent"}),"."]}),`
`]}),`
`,n.jsx(i.h2,{id:"quản-lý-trạng-thái",children:"Quản lý trạng thái"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"is(): boolean"})," — trả về ",n.jsx(i.code,{children:"true"})," nếu tải đang hoạt động (bộ đếm > 0)."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"show(): void"})," — tăng bộ đếm lên 1, thông báo cho các listener."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"hide(): void"})," — giảm bộ đếm đi 1. Bỏ qua nếu bộ đếm đã bằng 0."]}),`
`]}),`
`,n.jsx(i.h2,{id:"đăng-ký-sự-kiện",children:"Đăng ký sự kiện"}),`
`,n.jsx(i.h3,{id:"registrationevent",children:n.jsx(i.code,{children:"registrationEvent"})}),`
`,n.jsxs(i.p,{children:["Đăng ký listener cho các thay đổi trạng thái tải. Hoạt động thông qua sự kiện ",n.jsx(i.code,{children:"ui-loading"})," trên đối tượng ",n.jsx(i.code,{children:"window"}),"."]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Tham số:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"listener: EventListenerDetail<CustomEvent, { loading: boolean }>"})," — hàm xử lý nhận ",n.jsx(i.code,{children:"event.detail.loading: boolean"}),"."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"element?: ElementOrString<HTMLElement>"})," — phần tử DOM tùy chọn: listener tự động dừng khi phần tử bị xóa khỏi DOM."]}),`
`]}),`
`,n.jsx(i.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`import { Loading } from '@dxtmisha/functional-basic'

Loading.registrationEvent((event) => {
  console.log('Đang tải:', event.detail.loading) // true hoặc false
})

Loading.show()  // bộ đếm = 1
Loading.show()  // bộ đếm = 2
Loading.hide()  // bộ đếm = 1
Loading.hide()  // bộ đếm = 0 → sự kiện: { loading: false }
`})})]})}function a(e={}){const{wrapper:i}={...s(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(t,{...e})}):t(e)}export{a as default};
