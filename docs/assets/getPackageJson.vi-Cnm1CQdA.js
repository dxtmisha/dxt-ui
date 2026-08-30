import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Functions/getPackageJson - Lấy nội dung package.json`}),`
`,(0,c.jsx)(t.h1,{id:`getpackagejson`,children:(0,c.jsx)(t.code,{children:`getPackageJson`})}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm trả về nội dung của tệp `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path?: PropertiesFilePath`}),` — đường dẫn tùy chọn đến thư mục hoặc tệp `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`Record<string, any> | undefined`}),` — nội dung của tệp `,(0,c.jsx)(t.code,{children:`package.json`}),` hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),` nếu không thể đọc được tệp.`]}),`
`,(0,c.jsx)(t.h2,{id:`cơ-chế-hoạt-động`,children:`Cơ chế hoạt động`}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm sử dụng phương thức `,(0,c.jsx)(t.code,{children:`PropertiesFile.readFile`}),` để tải nội dung của tệp `,(0,c.jsx)(t.code,{children:`package.json`}),`. Nếu tham số `,(0,c.jsx)(t.code,{children:`path`}),` được cung cấp, nó sẽ đọc `,(0,c.jsx)(t.code,{children:`package.json`}),` từ vị trí chỉ định; nếu không, nó sẽ đọc `,(0,c.jsx)(t.code,{children:`package.json`}),` mặc định được cấu hình.`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getPackageJson } from '@dxtmisha/scripts'

const packageJson = getPackageJson()
if (packageJson) {
  console.log(\`Package Name: \${packageJson.name}\`)
}

const customPackageJson = getPackageJson(['packages', 'functional'])
if (customPackageJson) {
  console.log(\`Custom Package Name: \${customPackageJson.name}\`)
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};