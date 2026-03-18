import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(t){const c={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/vi/functional-basic/Functions/goScrollSmooth - Cuộn mượt đến phần tử"}),`
`,n.jsx(c.h1,{id:"goscrollsmooth",children:n.jsx(c.code,{children:"goScrollSmooth"})}),`
`,n.jsx(c.p,{children:"Cung cấp trải nghiệm cuộn mượt mà (smooth scrolling) đưa vùng nhìn của cửa sổ trình duyệt hoặc vùng chứa (container) đến vị trí của một phần tử được chỉ định."}),`
`,n.jsxs(c.p,{children:["Hàm trước tiên sẽ xác minh khả năng hỗ trợ phương thức ",n.jsx(c.code,{children:"scrollIntoView"})," mặc định của phần tử muốn nhắm tới. Nếu được hỗ trợ và không có tham số khoảng bù định vị ",n.jsx(c.code,{children:"shift"}),", hàm sử dụng phương thức native đó. Mặt khác, khi yêu cầu ",n.jsx(c.code,{children:"shift"})," (ví dụ, để trừ đi chiều cao của một thanh menu cố định (fixed header) bị đè lên element), hàm sẽ tự động đo lường độ dời bằng ",n.jsx(c.code,{children:"getBoundingClientRect"})," và điều khiển thanh cuộn bằng ",n.jsx(c.code,{children:"window.scrollTo"}),"."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"element: E"})," — Phần tử (",n.jsx(c.code,{children:"HTMLElement"}),") cần cuộn tới."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"options: ScrollIntoViewOptions"})," — (Tùy chọn) Các tham số định cấu hình chuyển tiếp cho ",n.jsx(c.code,{children:"scrollIntoView"})," (ví dụ: ",n.jsx(c.code,{children:"behavior"}),", ",n.jsx(c.code,{children:"block"}),", ",n.jsx(c.code,{children:"inline"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"shift: number"})," — (Tùy chọn) Giá trị điểm bù lề trên (theo pixel) giúp phần tử tránh bị che khuất bởi các thanh điều hướng được cố định. Mặc định là ",n.jsx(c.code,{children:"0"}),"."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"}),`
Hàm này không có giá trị trả về (`,n.jsx(c.code,{children:"void"}),")."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { goScrollSmooth } from '@dxtmisha/functional-basic'

const section = document.getElementById('contact-us')

// Tiến hành cuộn mượt mặc định tới phần tử
goScrollSmooth(section)

// Cuộn có bổ sung khoảng dãn vùng bù đắp 60px (trừ đi thanh header fixed ở trên)
goScrollSmooth(section, { behavior: 'smooth' }, 60)
`})})]})}function x(t={}){const{wrapper:c}={...e(),...t.components};return c?n.jsx(c,{...t,children:n.jsx(h,{...t})}):h(t)}export{x as default};
