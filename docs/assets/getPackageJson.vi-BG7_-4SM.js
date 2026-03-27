import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Functions/getPackageJson - Lấy nội dung package.json`}),`
`,(0,c.jsx)(n.h1,{id:`getpackagejson`,children:(0,c.jsx)(n.code,{children:`getPackageJson`})}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm trả về nội dung của tệp `,(0,c.jsx)(n.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`Record<string, any> | undefined`}),` — nội dung của tệp `,(0,c.jsx)(n.code,{children:`package.json`}),` hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),` nếu không thể đọc được tệp.`]}),`
`,(0,c.jsx)(n.h2,{id:`cơ-chế-hoạt-động`,children:`Cơ chế hoạt động`}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm sử dụng phương thức `,(0,c.jsx)(n.code,{children:`PropertiesFile.readFile`}),` để tải nội dung của tệp `,(0,c.jsx)(n.code,{children:`package.json`}),` được chỉ định trong cấu hình toàn cục.`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getPackageJson } from '@dxtmisha/scripts'

const packageJson = getPackageJson()
if (packageJson) {
  console.log(\`Package Name: \${packageJson.name}\`)
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};