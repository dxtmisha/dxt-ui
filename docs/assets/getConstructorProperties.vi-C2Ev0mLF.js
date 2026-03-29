import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Functions/getConstructorProperties - Lấy thuộc tính hàm dựng`}),`
`,(0,c.jsx)(n.h1,{id:`getconstructorproperties`,children:(0,c.jsx)(n.code,{children:`getConstructorProperties`})}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm trả về các thuộc tính của các hàm dựng được chỉ định bằng cách đọc các tệp `,(0,c.jsx)(n.code,{children:`properties.json`}),` của chúng.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`names: string[]`}),` — danh sách tên các hàm dựng.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`PropertyList`}),` — một đối tượng trong đó các khóa là tên hàm dựng và các giá trị là các thuộc tính của chúng.`]}),`
`,(0,c.jsx)(n.h2,{id:`cơ-chế-hoạt-động`,children:`Cơ chế hoạt động`}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm lặp qua các tên được cung cấp và xây dựng đường dẫn đến tệp `,(0,c.jsx)(n.code,{children:`properties.json`}),` cho mỗi hàm dựng. Nó sử dụng phương thức `,(0,c.jsx)(n.code,{children:`PropertiesFile.readFile`}),` để tải dữ liệu.`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getConstructorProperties } from '@dxtmisha/scripts'

const properties = getConstructorProperties(['Button', 'Input'])
// { Button: { ... }, Input: { ... } }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};