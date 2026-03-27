import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Functions/getComponentPaths - Lấy đường dẫn thành phần`}),`
`,(0,c.jsx)(n.h1,{id:`getcomponentpaths`,children:(0,c.jsx)(n.code,{children:`getComponentPaths`})}),`
`,(0,c.jsx)(n.p,{children:`Hàm trả về các đường dẫn đến thành phần bằng cách kết hợp thư mục thành phần cơ sở với đường dẫn được chỉ định.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — đường dẫn thành phần.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`string[]`}),` — một mảng các đường dẫn.`]}),`
`,(0,c.jsx)(n.h2,{id:`cơ-chế-hoạt-động`,children:`Cơ chế hoạt động`}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm này được sử dụng để tạo đường dẫn đầy đủ đến một thành phần dựa trên cấu hình dự án toàn cục. Nó sử dụng hằng số `,(0,c.jsx)(n.code,{children:`UI_DIRS_COMPONENTS`}),` xác định thư mục gốc cho tất cả các thành phần.`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getComponentPaths } from '@dxtmisha/scripts'

getComponentPaths('button') // ['src', 'components', 'button']
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};