import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(c){const e={code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/functional/Functions/render - Render component với Key"}),`
`,n.jsx(e.h1,{id:"render",children:n.jsx(e.code,{children:"render"})}),`
`,n.jsxs(e.p,{children:["Một bản bọc (wrapper) cho hàm ",n.jsx(e.code,{children:"h"})," (hyperscript) của Vue, cung cấp khả năng tự động tạo key cho các thành phần. Nó đảm bảo rằng các thành phần có key duy nhất để render hiệu quả và xử lý các chuyển đổi (transitions), đặc biệt là khi làm việc với danh sách hoặc các phần tử động."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string | any"})," — Tên hoặc thẻ của thành phần cần render."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"props?: T"})," — Các thuộc tính truyền vào thành phần."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"children?: RawChildren | RawSlots"})," — Các thành phần con hoặc slot của thành phần."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index?: string"})," — Một chỉ số hoặc định danh tùy chọn được sử dụng để tạo key."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"VNode"})," — Node ảo đã được render."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { render } from '@dxtmisha/functional'

// Render một div với key được tạo tự động
const vnode = render('div', { class: 'container' }, 'Chào thế giới')
// key => '.div.container'

// Render một thành phần với index cụ thể để tạo key
const item = render('my-component', { data: itemData }, null, 'item-1')
// key => '.my-component.item-1'
`})}),`
`,n.jsx(e.h3,{id:"cách-tạo-key",children:"Cách tạo Key"}),`
`,n.jsxs(e.p,{children:["Key (",n.jsx(e.code,{children:"key"}),") cho Vue component được hình thành theo phương thức ",n.jsx(e.strong,{children:"cộng dồn (additive)"}),". Nó luôn bắt đầu bằng một dấu chấm theo sau là tên thành phần (",n.jsx(e.code,{children:".name"}),"), sau đó nối thêm các giá trị sau bằng dấu chấm (nếu chúng tồn tại):"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:".name"})})," — nếu ",n.jsx(e.code,{children:"name"})," là một chuỗi."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:".index"})," — từ tham số thứ ba của hàm ",n.jsx(e.code,{children:"render"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:".props.index"})," — nếu có trong đối tượng thuộc tính và là một chuỗi."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:".className"})," — nếu class được chỉ định trong ",n.jsx(e.code,{children:"props"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:".props.id"})," — nếu ID được chỉ định trong ",n.jsx(e.code,{children:"props"}),"."]}),`
`]}),`
`,n.jsx(e.p,{children:"Điều này đảm bảo tính duy nhất của key ngay cả khi tên các thành phần giống nhau."})]})}function a(c={}){const{wrapper:e}={...t(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(h,{...c})}):h(c)}export{a as default};
