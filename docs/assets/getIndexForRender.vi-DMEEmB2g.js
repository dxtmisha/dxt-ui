import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as h}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(d){const e={code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...d.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/functional/Functions/getIndexForRender - Tạo khóa cho Render"}),`
`,n.jsx(e.h1,{id:"getindexforrender",children:n.jsx(e.code,{children:"getIndexForRender"})}),`
`,n.jsxs(e.p,{children:["Một hàm tiện ích dùng để tạo một ",n.jsx(e.code,{children:"key"})," duy nhất cho thành phần. Key được hình thành theo phương thức ",n.jsx(e.strong,{children:"cộng dồn (additive)"}),": tất cả các phần được xác định (bao gồm cả tên thành phần) được nối với nhau bằng dấu chấm."]}),`
`,n.jsx(e.h3,{id:"tham-số",children:"Tham số:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string | any"})," — Tên hoặc thẻ của thành phần (phần cơ sở của key)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"props?: T"})," — Các thuộc tính của thành phần (dùng để trích xuất ",n.jsx(e.code,{children:"index"}),", ",n.jsx(e.code,{children:"class"})," và ",n.jsx(e.code,{children:"id"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index?: string"})," — Một chỉ số bên ngoài tùy chọn."]}),`
`]}),`
`,n.jsx(e.h3,{id:"trả-về",children:"Trả về:"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"string | undefined"})," — Khóa tổng hợp đã được tạo, hoặc ",n.jsx(e.code,{children:"undefined"})," nếu không thể tạo khóa."]}),`
`,n.jsx(e.h3,{id:"ví-dụ-tạo-key",children:"Ví dụ tạo key:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getIndexForRender } from '@dxtmisha/functional'

// 1. Chỉ có tên
getIndexForRender('li') 
// => '.li'

// 2. Tên + chỉ số bên ngoài
getIndexForRender('div', {}, 'row-1') 
// => '.div.row-1'

// 3. Tên + chỉ số từ props + lớp + id
getIndexForRender('button', { 
  index: 'primary', 
  class: 'btn-large', 
  id: 'submit-01' 
}) 
// => '.button.primary.btn-large.submit-01'

// 4. Đầy đủ các thành phần (đối số bên ngoài + mọi thứ từ props)
getIndexForRender('span', { 
  index: 'p-idx', 
  class: 'text-red', 
  id: 'id-99' 
}, 'arg-idx') 
// => '.span.arg-idx.p-idx.text-red.id-99'

// 5. Trường hợp trống
getIndexForRender(undefined)
// => undefined
`})}),`
`,n.jsx(e.h3,{id:"logic-lắp-ghép-key",children:"Logic lắp ghép key"}),`
`,n.jsx(e.p,{children:"Key được lắp ghép theo chuỗi:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:".name"})})," (nếu ",n.jsx(e.code,{children:"name"})," là một chuỗi)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"+ .index"})," (nếu đối số ",n.jsx(e.code,{children:"index"})," được truyền vào)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"+ .props.index"})," (nếu có trong thuộc tính và là một chuỗi)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"+ .className"})," (nếu có trong thuộc tính)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"+ .props.id"})," (nếu có trong thuộc tính)"]}),`
`]})]})}function p(d={}){const{wrapper:e}={...c(),...d.components};return e?n.jsx(e,{...d,children:n.jsx(i,{...d})}):i(d)}export{p as default};
