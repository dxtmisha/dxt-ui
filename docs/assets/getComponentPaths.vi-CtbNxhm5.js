import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(h){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Functions/getComponentPaths - Lấy đường dẫn thành phần"}),`
`,n.jsx(t.h1,{id:"getcomponentpaths",children:n.jsx(t.code,{children:"getComponentPaths"})}),`
`,n.jsx(t.p,{children:"Hàm trả về các đường dẫn đến thành phần bằng cách kết hợp thư mục thành phần cơ sở với đường dẫn được chỉ định."}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"path: string"})," — đường dẫn thành phần."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"string[]"})," — một mảng các đường dẫn."]}),`
`,n.jsx(t.h2,{id:"cơ-chế-hoạt-động",children:"Cơ chế hoạt động"}),`
`,n.jsxs(t.p,{children:["Hàm này được sử dụng để tạo đường dẫn đầy đủ đến một thành phần dựa trên cấu hình dự án toàn cục. Nó sử dụng hằng số ",n.jsx(t.code,{children:"UI_DIRS_COMPONENTS"})," xác định thư mục gốc cho tất cả các thành phần."]}),`
`,n.jsx(t.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { getComponentPaths } from '@dxtmisha/scripts'

getComponentPaths('button') // ['src', 'components', 'button']
`})})]})}function l(h={}){const{wrapper:t}={...s(),...h.components};return t?n.jsx(t,{...h,children:n.jsx(c,{...h})}):c(h)}export{l as default};
