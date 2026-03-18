import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(c){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...o(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/vi/scripts/Functions/getPackageJson - Lấy nội dung package.json"}),`
`,n.jsx(e.h1,{id:"getpackagejson",children:n.jsx(e.code,{children:"getPackageJson"})}),`
`,n.jsxs(e.p,{children:["Hàm trả về nội dung của tệp ",n.jsx(e.code,{children:"package.json"}),"."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"Record<string, any> | undefined"})," — nội dung của tệp ",n.jsx(e.code,{children:"package.json"})," hoặc ",n.jsx(e.code,{children:"undefined"})," nếu không thể đọc được tệp."]}),`
`,n.jsx(e.h2,{id:"cơ-chế-hoạt-động",children:"Cơ chế hoạt động"}),`
`,n.jsxs(e.p,{children:["Hàm sử dụng phương thức ",n.jsx(e.code,{children:"PropertiesFile.readFile"})," để tải nội dung của tệp ",n.jsx(e.code,{children:"package.json"})," được chỉ định trong cấu hình toàn cục."]}),`
`,n.jsx(e.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getPackageJson } from '@dxtmisha/scripts'

const packageJson = getPackageJson()
if (packageJson) {
  console.log(\`Package Name: \${packageJson.name}\`)
}
`})})]})}function p(c={}){const{wrapper:e}={...o(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(s,{...c})}):s(c)}export{p as default};
