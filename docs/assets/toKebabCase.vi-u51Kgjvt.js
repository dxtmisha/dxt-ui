import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(c){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/vi/functional-basic/Functions/toKebabCase - Chuyển đổi chuỗi sang kebab-case"}),`
`,n.jsx(e.h1,{id:"tokebabcase",children:n.jsx(e.code,{children:"toKebabCase"})}),`
`,n.jsxs(e.p,{children:["Chuyển đổi một chuỗi văn bản sang định dạng ",n.jsx(e.code,{children:"kebab-case"}),". Hàm chuyển đổi tất cả các chữ cái thành chữ thường và thay thế các khoảng trắng, ký tự đặc biệt và các chuyển đổi kiểu chữ (CamelCase) bằng dấu gạch ngang."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: string"})," — Chuỗi gốc cần chuyển đổi."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"string"})," — Chuỗi định dạng ",n.jsx(e.code,{children:"kebab-case"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { toKebabCase } from '@dxtmisha/functional-basic'

console.log(toKebabCase('Hello World')) // 'hello-world'
console.log(toKebabCase('userProfileData')) // 'user-profile-data'
console.log(toKebabCase('Some_Special@String')) // 'some-special-string'
`})})]})}function u(c={}){const{wrapper:e}={...o(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(s,{...c})}):s(c)}export{u as default};
