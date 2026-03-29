import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/styles/color/| functions/getPaletteItem - Chuỗi bảng màu`}),`
`,(0,c.jsx)(n.h1,{id:`getpaletteitem`,children:(0,c.jsx)(n.code,{children:`getPaletteItem`})}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm tạo một chuỗi biến CSS lồng nhau (sử dụng tham số fallback của hàm `,(0,c.jsx)(n.code,{children:`var()`}),`) để tìm kiếm màu sắc trên nhiều nút bảng màu khác nhau.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$palette: List | String`}),` — danh sách tên biến bảng màu hoặc một tên duy nhất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color | String`}),` — màu dự phòng nếu không có biến bảng màu nào được định nghĩa.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`String`}),` — một chuỗi `,(0,c.jsx)(n.code,{children:`var(--name1, var(--name2, ...))`}),` lồng nhau.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$chain: styles.getPaletteItem(('theme-color', 'sys-color'), #ff0000); 
// var(--theme-color, var(--sys-color, 255, 0, 0))
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};