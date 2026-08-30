import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Functions/getComponentPaths - Lấy đường dẫn thành phần`}),`
`,(0,c.jsx)(t.h1,{id:`getcomponentpaths`,children:(0,c.jsx)(t.code,{children:`getComponentPaths`})}),`
`,(0,c.jsx)(t.p,{children:`Hàm trả về các đường dẫn đến thành phần bằng cách kết hợp thư mục thành phần cơ sở với đường dẫn được chỉ định.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — đường dẫn thành phần.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string[]`}),` — một mảng các đường dẫn.`]}),`
`,(0,c.jsx)(t.h2,{id:`cơ-chế-hoạt-động`,children:`Cơ chế hoạt động`}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm này được sử dụng để tạo đường dẫn đầy đủ đến một thành phần dựa trên cấu hình dự án toàn cục. Nó sử dụng hằng số `,(0,c.jsx)(t.code,{children:`UI_DIRS_COMPONENTS`}),` xác định thư mục gốc cho tất cả các thành phần.`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getComponentPaths } from '@dxtmisha/scripts'

getComponentPaths('button') // ['src', 'components', 'button']
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};