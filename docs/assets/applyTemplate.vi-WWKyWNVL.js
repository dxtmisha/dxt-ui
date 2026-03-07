import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BaLriJNq.js";import{M as h}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function c(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/functional-basic/Functions/applyTemplate - Áp dụng mẫu vào văn bản"}),`
`,n.jsx(e.h1,{id:"applytemplate",children:n.jsx(e.code,{children:"applyTemplate"})}),`
`,n.jsx(e.p,{children:"Một tiện ích tạo văn bản động dựa trên các mẫu. Điều này hữu ích cho các tác vụ đa ngôn ngữ (i18n), tạo thông báo hệ thống hoặc chèn dữ liệu người dùng vào các hằng số chuỗi."}),`
`,n.jsx(e.p,{children:"Hàm này hỗ trợ:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Các điểm đánh dấu theo vị trí (",n.jsx(e.code,{children:"%d"}),", ",n.jsx(e.code,{children:"%e"}),", v.v.) để thay thế các giá trị từ một mảng theo thứ tự."]}),`
`,n.jsxs(e.li,{children:["Các điểm đánh dấu theo tên (",n.jsx(e.code,{children:"[key]"}),", ",n.jsx(e.code,{children:"{key}"}),") để thay thế các giá trị từ một đối tượng thông qua khóa."]}),`
`,n.jsxs(e.li,{children:["Thẻ theo cặp (",n.jsx(e.code,{children:"[key]nội dung[/key]"}),", ",n.jsx(e.code,{children:"{key}nội dung{/key}"}),") để bao bọc nội dung trong các thẻ HTML hoặc cấu trúc khác (từ ",n.jsx(e.code,{children:"[content]"})," bên trong giá trị truyền vào sẽ được thay thế bởi nội dung của thẻ)."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"text: string"})," — Văn bản gốc chứa các điểm đánh dấu mẫu."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"replacement: Record<string, string | number> | string[]"})," — Một đối tượng hoặc mảng chứa các giá trị để thay thế. Mặc định là ",n.jsx(e.code,{children:"{}"}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"string"})," — Văn bản với các giá trị đã được thay thế."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { applyTemplate } from '@dxtmisha/functional-basic'

// Đánh dấu theo vị trí
console.log(applyTemplate('Xin chào, %d %e!', ['John', 'Doe'])) // 'Xin chào, John Doe!'

// Đánh dấu theo tên
console.log(applyTemplate('Xin chào, [name]!', { name: 'John' })) // 'Xin chào, John!'
console.log(applyTemplate('Xin chào, {name}!', { name: 'John' })) // 'Xin chào, John!'

// Thẻ bao bọc với nội dung bị thay thế
console.log(applyTemplate('Nhấp vào [link]đây[/link]', { link: '<a href="#">[content]</a>' }))
console.log(applyTemplate('Nhấp vào {link}đây{/link}', { link: '<a href="#">{content}</a>' }))
// 'Nhấp vào <a href="#">đây</a>'
`})})]})}function p(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(c,{...t})}):c(t)}export{p as default};
