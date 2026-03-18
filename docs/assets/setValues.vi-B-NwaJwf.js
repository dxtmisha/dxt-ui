import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(c){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/functional-basic/Functions/setValues - Quản lý danh sách các giá trị đã chọn"}),`
`,n.jsx(e.h1,{id:"setvalues",children:n.jsx(e.code,{children:"setValues"})}),`
`,n.jsx(e.p,{children:"Xử lý việc cập nhật các giá trị đã chọn dựa trên chế độ lựa chọn (đơn hoặc đa). Cho phép thêm, xóa hoặc thay thế các giá trị với sự hỗ trợ của các ràng buộc về số lượng phần tử tối đa."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"selected: T | T[] | undefined"})," — Các giá trị hiện đang được chọn."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: any"})," — Giá trị mới cần xử lý."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options"})," — Một đối tượng chứa các thiết lập:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"multiple: boolean"})," — Chế độ đa lựa chọn (mặc định là ",n.jsx(e.code,{children:"false"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"maxlength: number"})," — Số lượng phần tử tối đa cho chế độ đa lựa chọn (mặc định là ",n.jsx(e.code,{children:"0"})," — không giới hạn)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"alwaysChange: boolean"})," — Cờ ép buộc thay thế giá trị (mặc định là ",n.jsx(e.code,{children:"true"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"notEmpty: boolean"})," — Ngăn không cho danh sách bị xóa sạch hoàn toàn (mặc định là ",n.jsx(e.code,{children:"false"}),")."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"T | T[] | undefined"})," — Trạng thái mới của các giá trị đã chọn."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { setValues } from '@dxtmisha/functional-basic'

// Lựa chọn đơn
console.log(setValues(1, 2, {})) // 2

// Đa lựa chọn (bật/tắt)
let list = [1, 2]
list = setValues(list, 2, { multiple: true }) // [1] (xóa giá trị đang tồn tại)
list = setValues(list, 3, { multiple: true }) // [1, 3] (thêm giá trị mới)
`})})]})}function x(c={}){const{wrapper:e}={...s(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(t,{...c})}):t(c)}export{x as default};
