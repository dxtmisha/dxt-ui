import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Functions/getNameDirByPaths - Lấy tên thư mục cuối cùng`}),`
`,(0,c.jsx)(t.h1,{id:`getnamedirbypaths`,children:(0,c.jsx)(t.code,{children:`getNameDirByPaths`})}),`
`,(0,c.jsx)(t.p,{children:`Hàm trả về tên của thư mục cuối cùng từ mảng các đoạn đường dẫn được cung cấp.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`paths: PropertiesFilePath`}),` — một mảng các đoạn đường dẫn.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — tên của thư mục cuối cùng.`]}),`
`,(0,c.jsx)(t.h2,{id:`cơ-chế-hoạt-động`,children:`Cơ chế hoạt động`}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm kết hợp các đoạn đường dẫn được cung cấp bằng cách sử dụng `,(0,c.jsx)(t.code,{children:`PropertiesFile.joinPath`}),`, sau đó chia chúng lại thành các đoạn thư mục bằng cách sử dụng `,(0,c.jsx)(t.code,{children:`PropertiesFile.splitForDir`}),` và trả về phần tử cuối cùng của mảng kết quả.`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getNameDirByPaths } from '@dxtmisha/scripts'

getNameDirByPaths(['src', 'components', 'button']) // 'button'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};