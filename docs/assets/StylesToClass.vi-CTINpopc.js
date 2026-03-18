import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(t){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/scripts/Classes/StylesToClass - Trình tạo CSS Class"}),`
`,n.jsx(c.h1,{id:"lớp-stylestoclass",children:"Lớp StylesToClass"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"StylesToClass"})," được sử dụng để tạo các quy tắc CSS tiêu chuẩn (selector và nội dung của chúng) từ các thuộc tính thiết kế. Nó đảm bảo rằng các khối chỉ được tạo nếu chúng chứa các quy tắc lồng nhau."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tạo có chọn lọc"})," — Chỉ tạo đầu ra nếu hàm gọi ",n.jsx(c.code,{children:"content()"})," trả về một mảng không trống."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Phân giải Selector"})," — Sử dụng tên thuộc tính thiết kế làm CSS selector."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tự động bao bọc khối"})," — Bao bọc chính xác các thuộc tính bên trong dấu ngoặc nhọn CSS tiêu chuẩn ",n.jsx(c.code,{children:"{}"}),"."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Khởi tạo trình chuyển đổi ",n.jsx(c.code,{children:"StylesToClass"})," với thuộc tính bắt buộc và một hàm gọi nội dung cho các quy tắc style lồng nhau."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"property: PropertyItemsItem"})," — nhánh hiện tại của cây thuộc tính đang được xử lý."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"space: string"})," — chuỗi thụt lề (ví dụ: ",n.jsx(c.code,{children:'"  "'})," hoặc ",n.jsx(c.code,{children:'"\\t"'}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"content?: () => string[]"})," — một hàm có thể gọi trả về một mảng các chuỗi đại diện cho các style nội bộ."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"first?: boolean"})," — cho biết đây có phải là phần tử đầu tiên trong cấp độ hiện tại hay không (tùy chọn, mặc định: ",n.jsx(c.code,{children:"true"}),")."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { StylesToClass } from '@dxtmisha/scripts'

// Sử dụng trong logic chuyển đổi
const converter = new StylesToClass(property, '  ', contentCallable)
const result = converter.make()
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(c.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"make(): string[]"})," — Điểm bắt đầu chính. Điều phối việc chuyển đổi và thêm thụt lề cần thiết vào mỗi dòng."]}),`
`]})]})}function u(t={}){const{wrapper:c}={...s(),...t.components};return c?n.jsx(c,{...t,children:n.jsx(h,{...t})}):h(t)}export{u as default};
