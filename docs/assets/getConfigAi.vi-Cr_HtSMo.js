import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/scripts/Functions/getConfigAi - Lấy cấu hình AI"}),`
`,n.jsx(t.h1,{id:"getconfigai",children:n.jsx(t.code,{children:"getConfigAi"})}),`
`,n.jsx(t.p,{children:"Hàm trả về cấu hình AI, bao gồm khóa API và mô hình."}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"[string, string]"})," — một bộ gồm khóa API và tên mô hình."]}),`
`,n.jsx(t.h2,{id:"cơ-chế-hoạt-động",children:"Cơ chế hoạt động"}),`
`,n.jsxs(t.p,{children:["Hàm truy xuất các giá trị cấu hình từ lớp ",n.jsx(t.code,{children:"PropertiesConfig"}),", lớp này quản lý các cài đặt cấp dự án."]}),`
`,n.jsx(t.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:"import { getConfigAi } from '@dxtmisha/scripts'\n\nconst [apiKey, model] = getConfigAi()\nconsole.log(`API Key: ${apiKey}, Model: ${model}`)\n"})})]})}function l(e={}){const{wrapper:t}={...o(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(i,{...e})}):i(e)}export{l as default};
