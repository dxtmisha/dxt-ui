import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function e(c){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/scripts/Functions/getNameDirByPaths - Lấy tên thư mục cuối cùng"}),`
`,n.jsx(t.h1,{id:"getnamedirbypaths",children:n.jsx(t.code,{children:"getNameDirByPaths"})}),`
`,n.jsx(t.p,{children:"Hàm trả về tên của thư mục cuối cùng từ mảng các đoạn đường dẫn được cung cấp."}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"paths: PropertiesFilePath"})," — một mảng các đoạn đường dẫn."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"string"})," — tên của thư mục cuối cùng."]}),`
`,n.jsx(t.h2,{id:"cơ-chế-hoạt-động",children:"Cơ chế hoạt động"}),`
`,n.jsxs(t.p,{children:["Hàm kết hợp các đoạn đường dẫn được cung cấp bằng cách sử dụng ",n.jsx(t.code,{children:"PropertiesFile.joinPath"}),", sau đó chia chúng lại thành các đoạn thư mục bằng cách sử dụng ",n.jsx(t.code,{children:"PropertiesFile.splitForDir"})," và trả về phần tử cuối cùng của mảng kết quả."]}),`
`,n.jsx(t.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { getNameDirByPaths } from '@dxtmisha/scripts'

getNameDirByPaths(['src', 'components', 'button']) // 'button'
`})})]})}function a(c={}){const{wrapper:t}={...s(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(e,{...c})}):e(c)}export{a as default};
