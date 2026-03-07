import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-BaLriJNq.js";import{M as h}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function o(t){const c={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/functional-basic/Functions/goScrollTo - Cuộn vùng chứa đến phần tử"}),`
`,n.jsx(c.h1,{id:"goscrollto",children:n.jsx(c.code,{children:"goScrollTo"})}),`
`,n.jsxs(c.p,{children:["Thực thi hiệu ứng cuộn bên trong một phần tử vùng chứa (container) để đảm bảo rằng mục tiêu bên trong rơi vào vùng dễ nhìn. Hàm thực hiện trích xuất ",n.jsx(c.code,{children:"getBoundingClientRect"})," từ cả hai thành phần và kích hoạt phương thức ",n.jsx(c.code,{children:"scrollBy"})," để di chuyển khoảng bù trục toạ độ cho phù hợp."]}),`
`,n.jsxs(c.p,{children:["Khác với ",n.jsx(c.code,{children:"goScrollSmooth"})," (cuộn cửa sổ màn hình hoặc uỷ thác cho ",n.jsx(c.code,{children:"scrollIntoView"}),"), ",n.jsx(c.code,{children:"goScrollTo"})," chủ động canh chỉnh lề thao tác trong không gian đo lường tĩnh của hộp chứa rõ ràng được cấp vào."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"element: HTMLElement | undefined"})," — Phần tử vùng chứa đóng cuộn với con lăn."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"elementTo: HTMLElement | undefined"})," — Mục tiêu nằm phía trong (đích nhắm) cần quan sát được."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"behavior: ScrollBehavior"})," — (Tùy chọn) Chỉnh sửa loại chuỗi ảnh chuyển động, mặc định cho hiệu ứng mượt ",n.jsx(c.code,{children:"'smooth'"}),"."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"}),`
Tuỳ biến việc thay đổi thanh cuộn ngay trong trang hiện tại với giá trị đầu ra rỗng (`,n.jsx(c.code,{children:"void"}),")."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { goScrollTo } from '@dxtmisha/functional-basic'

const list = document.getElementById('item-list')
const targetItem = document.getElementById('item-42')

// Cuộn êm ái qua bảng danh sách cho đến item 42
goScrollTo(list, targetItem)
`})})]})}function m(t={}){const{wrapper:c}={...e(),...t.components};return c?n.jsx(c,{...t,children:n.jsx(o,{...t})}):o(t)}export{m as default};
