import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(c){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/scripts/Functions/getConstructorProperties - Lấy thuộc tính hàm dựng"}),`
`,n.jsx(t.h1,{id:"getconstructorproperties",children:n.jsx(t.code,{children:"getConstructorProperties"})}),`
`,n.jsxs(t.p,{children:["Hàm trả về các thuộc tính của các hàm dựng được chỉ định bằng cách đọc các tệp ",n.jsx(t.code,{children:"properties.json"})," của chúng."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"names: string[]"})," — danh sách tên các hàm dựng."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"PropertyList"})," — một đối tượng trong đó các khóa là tên hàm dựng và các giá trị là các thuộc tính của chúng."]}),`
`,n.jsx(t.h2,{id:"cơ-chế-hoạt-động",children:"Cơ chế hoạt động"}),`
`,n.jsxs(t.p,{children:["Hàm lặp qua các tên được cung cấp và xây dựng đường dẫn đến tệp ",n.jsx(t.code,{children:"properties.json"})," cho mỗi hàm dựng. Nó sử dụng phương thức ",n.jsx(t.code,{children:"PropertiesFile.readFile"})," để tải dữ liệu."]}),`
`,n.jsx(t.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { getConstructorProperties } from '@dxtmisha/scripts'

const properties = getConstructorProperties(['Button', 'Input'])
// { Button: { ... }, Input: { ... } }
`})})]})}function g(c={}){const{wrapper:t}={...e(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(r,{...c})}):r(c)}export{g as default};
