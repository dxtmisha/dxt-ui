import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Functions/getNameDirByPaths - Lấy tên thư mục cuối cùng`}),`
`,(0,c.jsx)(n.h1,{id:`getnamedirbypaths`,children:(0,c.jsx)(n.code,{children:`getNameDirByPaths`})}),`
`,(0,c.jsx)(n.p,{children:`Hàm trả về tên của thư mục cuối cùng từ mảng các đoạn đường dẫn được cung cấp.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`paths: PropertiesFilePath`}),` — một mảng các đoạn đường dẫn.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — tên của thư mục cuối cùng.`]}),`
`,(0,c.jsx)(n.h2,{id:`cơ-chế-hoạt-động`,children:`Cơ chế hoạt động`}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm kết hợp các đoạn đường dẫn được cung cấp bằng cách sử dụng `,(0,c.jsx)(n.code,{children:`PropertiesFile.joinPath`}),`, sau đó chia chúng lại thành các đoạn thư mục bằng cách sử dụng `,(0,c.jsx)(n.code,{children:`PropertiesFile.splitForDir`}),` và trả về phần tử cuối cùng của mảng kết quả.`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getNameDirByPaths } from '@dxtmisha/scripts'

getNameDirByPaths(['src', 'components', 'button']) // 'button'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};