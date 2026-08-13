import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Functions/getConstructorProperties - Lấy thuộc tính hàm dựng`}),`
`,(0,c.jsx)(t.h1,{id:`getconstructorproperties`,children:(0,c.jsx)(t.code,{children:`getConstructorProperties`})}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm trả về các thuộc tính của các hàm dựng được chỉ định bằng cách đọc các tệp `,(0,c.jsx)(t.code,{children:`properties.json`}),` của chúng.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`names: string[]`}),` — danh sách tên các hàm dựng.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`PropertyList`}),` — một đối tượng trong đó các khóa là tên hàm dựng và các giá trị là các thuộc tính của chúng.`]}),`
`,(0,c.jsx)(t.h2,{id:`cơ-chế-hoạt-động`,children:`Cơ chế hoạt động`}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm lặp qua các tên được cung cấp và xây dựng đường dẫn đến tệp `,(0,c.jsx)(t.code,{children:`properties.json`}),` cho mỗi hàm dựng. Nó sử dụng phương thức `,(0,c.jsx)(t.code,{children:`PropertiesFile.readFile`}),` để tải dữ liệu.`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getConstructorProperties } from '@dxtmisha/scripts'

const properties = getConstructorProperties(['Button', 'Input'])
// { Button: { ... }, Input: { ... } }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};