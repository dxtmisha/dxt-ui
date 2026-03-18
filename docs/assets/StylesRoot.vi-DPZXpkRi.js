import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(c){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/StylesRoot - Trình tạo biến Root"}),`
`,n.jsx(t.h1,{id:"lớp-stylesroot",children:"Lớp StylesRoot"}),`
`,n.jsxs(t.p,{children:["Lớp ",n.jsx(t.code,{children:"StylesRoot"})," chịu trách nhiệm tạo khối CSS ",n.jsx(t.code,{children:":root"})," toàn cục từ các token thiết kế. Nó chuyển đổi các token thành các biến CSS và giải quyết các biểu thức ",n.jsx(t.code,{children:"calc()"})," phức tạp một cách thông minh để đảm bảo tính tương thích của trình duyệt."]}),`
`,n.jsx(t.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Tạo khối Root"})," — Tạo cấu trúc ",n.jsx(t.code,{children:":root { ... }"})," tiêu chuẩn chứa tất cả các token thiết kế."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Chuyển đổi biến"})," — Sử dụng ",n.jsx(t.code,{children:"StylesToVar"})," để chuyển đổi các mục thuộc tính thành các biến CSS hợp lệ."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Giải quyết tính toán động"})," — Giải quyết đệ quy các biểu thức ",n.jsx(t.code,{children:"calc()"})," tham chiếu đến các biến khác, đảm bảo rằng các giá trị cuối cùng được tính toán trước nếu có thể."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Tích hợp SCSS"})," — Tự động bao gồm các chỉ thị SCSS ",n.jsx(t.code,{children:"@use"})," cần thiết cho các định nghĩa thuộc tính."]}),`
`]}),`
`,n.jsx(t.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(t.p,{children:["Để khởi tạo đối tượng, hãy gọi hàm khởi tạo ",n.jsx(t.code,{children:"StylesRoot(items)"}),"."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"items: PropertiesItems"})," — một đối tượng để làm việc với danh sách các thuộc tính thiết kế."]}),`
`]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { StylesRoot, PropertiesItems } from '@dxtmisha/scripts'

// 1. Khởi tạo PropertiesItems
const items = new PropertiesItems(designData)

// 2. Khởi tạo StylesRoot
const generator = new StylesRoot(items)
`})}),`
`,n.jsx(t.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(t.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"init(): string[]"})," — Điểm bắt đầu chính. Xử lý danh sách thuộc tính, giải quyết các tính toán và trả về một mảng các chuỗi đại diện cho khối ",n.jsx(t.code,{children:":root"})," hoàn chỉnh cùng với các import của nó."]}),`
`]})]})}function m(c={}){const{wrapper:t}={...i(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(h,{...c})}):h(c)}export{m as default};
