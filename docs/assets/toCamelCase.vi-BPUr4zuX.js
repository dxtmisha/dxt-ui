import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(c){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/vi/functional-basic/Functions/toCamelCase - Chuyển đổi chuỗi sang camelCase"}),`
`,n.jsx(e.h1,{id:"tocamelcase",children:n.jsx(e.code,{children:"toCamelCase"})}),`
`,n.jsxs(e.p,{children:["Chuyển đổi một chuỗi văn bản sang định dạng ",n.jsx(e.code,{children:"camelCase"}),". Hàm loại bỏ các ký tự đặc biệt, thay thế khoảng trắng bằng dấu gạch ngang, chuyển đổi các chữ cái sau dấu gạch ngang thành chữ hoa và đảm bảo chữ cái đầu tiên của toàn bộ chuỗi là chữ thường."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: string"})," — Chuỗi gốc cần chuyển đổi."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"string"})," — Chuỗi định dạng ",n.jsx(e.code,{children:"camelCase"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { toCamelCase } from '@dxtmisha/functional-basic'

console.log(toCamelCase('Hello World')) // 'helloWorld'
console.log(toCamelCase('user-profile-data')) // 'userProfileData'
console.log(toCamelCase('Some_Special@String')) // 'someSpecialString'
`})})]})}function m(c={}){const{wrapper:e}={...s(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(o,{...c})}):o(c)}export{m as default};
