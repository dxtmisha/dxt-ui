import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as h}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function e(s){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/functional/Functions/getClassName - Lấy tên Class từ Props"}),`
`,n.jsx(t.h1,{id:"getclassname",children:n.jsx(t.code,{children:"getClassName"})}),`
`,n.jsxs(t.p,{children:["Một hàm tiện ích trích xuất thuộc tính ",n.jsx(t.code,{children:"class"})," từ một đối tượng thuộc tính cho trước. Nó đảm bảo giá trị trả về là một chuỗi, điều này hữu ích để thu được tên lớp một cách nhất quán khi render các thành phần hoặc phần tử."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"props?: T"})," — Đối tượng thuộc tính của thành phần, có thể chứa thuộc tính ",n.jsx(t.code,{children:"class"}),"."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"string | undefined"})," — Tên lớp dưới dạng chuỗi nếu nó tồn tại và là một chuỗi, nếu không thì trả về ",n.jsx(t.code,{children:"undefined"}),"."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { getClassName } from '@dxtmisha/functional'

// Trả về 'my-custom-class'
const className1 = getClassName({ class: 'my-custom-class', otherProp: 1 })

// Trả về undefined vì 'class' bị thiếu
const className2 = getClassName({ otherProp: 1 })

// Trả về undefined vì 'class' không phải là một chuỗi
const className3 = getClassName({ class: 123 })
`})})]})}function m(s={}){const{wrapper:t}={...c(),...s.components};return t?n.jsx(t,{...s,children:n.jsx(e,{...s})}):e(s)}export{m as default};
